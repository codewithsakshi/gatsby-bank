const db = {
  users: [],
  accounts: [],
  printUsers() {
    console.log(JSON.stringify(this.users));
  },
  printAccount() {
    console.log(JSON.stringify(this.users));
  },
  addUser(user) {
    this.users.push(user);
    localStorage.setItem(
      "bankData",
      JSON.stringify({
        users: this.users,
        accounts: this.accounts
      })
    );
  },

  addAccount(account) {
    this.accounts.push(account);
    localStorage.setItem(
      "bankData",
      JSON.stringify({
        users: this.users,
        accounts: this.accounts
      })
    );
  }
};

export default db;
