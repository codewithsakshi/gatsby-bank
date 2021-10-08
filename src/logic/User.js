import { getRandomNumber } from "./utils";

// What is "this" keyword referring to
const USER_ID_DIGITS = 6;

class User {
  constructor(fName, lName, email, phoneNo, address) {
    // Validation
    if (!fName || !lName || !email || !phoneNo) {
      throw new Error(`Invalid data`);
    }
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.phoneNo = phoneNo;
    this.address = address;
    this.userId = getRandomNumber(USER_ID_DIGITS);
  }
}

// module.export = User

export default User;
