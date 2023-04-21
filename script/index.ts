import { ICar, ILuxuryCar, ISportsCar } from 'helpers/interfaces';
import { LuxuryCar, SportsCar } from 'helpers/classes';

const car1: ICar = {
  model: 'Civic',
  year: 2022,
  color: 'Black',
  engineType: 'Gasoline',
  getFullDescription: function () {
    console.log(
      `Model: ${this.model}\nYear: ${this.year}\nColor: ${this.color}\nEngine Type: ${this.engineType}`
    );
  },
};

const car2: ILuxuryCar = new LuxuryCar(
  'S-Class',
  2023,
  'White',
  'Hybrid',
  'Mercedes',
  ['Heated seats', 'Massaging seats', 'Panoramic sunroof']
);

const car3: ISportsCar = new SportsCar(
  '911 Turbo S',
  2022,
  'Red',
  'Gasoline',
  205,
  2.6
);

console.log('Car 1:');
car1.getFullDescription();

console.log('\nCar 2:');
car2.getFullDescription();

console.log('\nCar 3:');
car3.getFullDescription();