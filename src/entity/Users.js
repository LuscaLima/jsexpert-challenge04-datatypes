import User from "./User.js";

const kUsers = Symbol("kUsers");

class Users {
  constructor() {
    this[kUsers] = new Set();
  }

  add(userRaw) {
    const user = new User(userRaw);
    this[kUsers].add(user);
  }

  hasUsers() {
    return !!this[kUsers].size;
  }

  [Symbol.iterator]() {
    return {
      items: [...this[kUsers]],
      next() {
        return {
          value: this.items.shift(),
          done: !this.items.length,
        };
      },
    };
  }
}

export default Users;
