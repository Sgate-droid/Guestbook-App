import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';


const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const guestbookPath = path.join(__dirname, '../guestbook.txt')


// render the Form.ejs in view
router.get('/', (req, res) => {
    res.render('form');
});

// to submit form in view
router.post('/submit-form', (req, res) => {
  const { name, email, number, message } = req.body;
  const guestEntry = `Name: ${name}, Email: ${email}, Number: ${number}, Message: ${message}\n`;

  fs.appendFile(guestbookPath, guestEntry, (err) => {
    if (err) {
        return res.status(500).send('Failed to save guest');
    }
    res.send('Thank you for signing the guestbook!');
  });
});

// for the submitted list
router.get('/guests', (req, res) => {
  fs.readFile(guestbookPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Failed to read guestbook');
    }
    res.send(`<pre>${data}</pre>`);
  });
});

export default router;