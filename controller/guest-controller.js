import { writeToFile } from "../utils/file-helper.js";

const submitForm = async (request, response) => {
  try {
    const { name, email, phoneNumber } = request.body;

    if (!name) {
      throw new Error("Name should be provided");
    }

    if (!email) {
      throw new Error("Email should be provided");
    }

    if (!phoneNumber) {
      throw new Error("Phone number should be provided");
    }

    const userInfo = `${name},${email},${phoneNumber}`;

    await writeToFile("guestbook.txt", userInfo);

    response
      .status(201)
      .json({ status: "success", message: "User added successfully" });
  } catch (e) {
    response
      .status(500)
      .json({ status: "fail", message: `An error occurred\n ${error}` });
  }
};

export { submitForm };
