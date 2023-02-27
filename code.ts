const jan = {
  legs: 2,
  walk: () => console.log(this.legs),
  walk2: function () {
    console.log(this.legs);
  },
};

jan.walk();
