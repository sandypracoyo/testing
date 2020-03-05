class Item {
  constructor() {}
  list() {
    return [
      {
        id: 1,
        name: "Kecap",
        sale_start_at: new Date("2018-10-01"),
        sale_end_at: new Date("2018-10-10")
      },
      {
        id: 2,
        name: "Sambal",
        sale_start_at: new Date("2018-10-15"),
        sale_end_at: new Date("2018-10-30")
      },
      {
        id: 3,
        name: "Merica",
        sale_start_at: new Date("2018-08-01"),
        sale_end_at: new Date("2018-08-31")
      },
      {
        id: 4,
        name: "Detergen",
        sale_start_at: new Date("2019-02-10"),
        sale_end_at: new Date("2019-10-10")
      },
      {
        id: 5,
        name: "Sapu",
        sale_start_at: new Date("2017-09-01"),
        sale_end_at: new Date("2030-07-15")
      }
    ];
  }
  findById(s) {
    this.good = this.list().find(x => x.id === s);
    return this;
  }
  isOnSale() {
      return new Date() >= new Date(this.good.sale_start_at) && new Date() <= new Date(this.good.sale_end_at)
  }
}

module.exports = Item;
