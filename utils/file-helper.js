import fs from "fs/promises";

async function readFileData(filePath) {
  try {
    let data = await fs.readFile(filePath);
    return data.toString().trim();
  } catch {
    await fs.writeToFile(filePath, "");
    let newData = await fs.readFile(filePath);
    newData.toString().trim();
  }
}

async function writeToFile(filePath, data) {
  try {
    await fs.appendFile(filePath, data + "\n");
    console.log("Data added successfully");
  } catch (error) {
    throw new Error(
      "An error occurred while writing to file\n" + error.message
    );
  }
}

export { readFileData, writeToFile };
