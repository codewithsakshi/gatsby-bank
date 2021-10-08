import User from './User'



class Account {
  constructor(user){
    if(!user instanceof User) {
      throw new Error("Invalid user. Plase pass correct user to create account");
    }

  }
}