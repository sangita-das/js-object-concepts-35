const kibria = {
  id: 101,
  money: 5000,
  name: 'RJ Kibria',

  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log('here5555', this);
    return this.money;
  }
}

const heroBalam = {
  id: 102,
  money: 6000,
  name: 'Hero Balam'
}
const normalGolam = {
  id: 102,
  money: 8000,
  name: 'Normal Golam'
}
kibria.treatDey(100);

const heroTreatDAy = kibria.treatDey.bind(heroBalam);
heroTreatDAy(500);
heroTreatDAy(300);
heroTreatDAy(500);
kibria.treatDey(400);
const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(2000);