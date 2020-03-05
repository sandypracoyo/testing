class User {
  constructor() {}
  static list() {
    return [
      { id: 1, username: "mul14", name: "Mulia" },
      { id: 2, username: "durjaka", name: "Arifandi" },
      { id: 3, username: "johndoe", name: "John Doe" },
      { id: 4, username: "norisa", name: "Norisa" },
      { id: 5, username: "sagara", name: "Sasuke Sagara" }
    ];
  }
  static findByUsername(s) {
    return this.list().find(x => x.username.toLowerCase() === s.toLowerCase())
  }
}

module.exports = User;
