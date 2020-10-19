/**
 * @class Service
 *
 * Manages the data of the application.
 */

const users = [
  {
    name: "",
    email: "",
    address: "",
    phone: "",
  },
];

class UserService {
  constructor() {
    this.users = users;
  }
  bindUserChanged(callback) {
    this.onChangedUserTable = callback;
  }

  _commit(users) {
    this.onUserChanged(users);
    localStorage.setItem("users", JSON.stringify(user));
  }

  addUser(user) {
    this.users.push(new User(user));
    this._store(this.users);
  }
  editUser(user) {}
  deleteUser(user) {}
}