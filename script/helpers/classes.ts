import { ICar, ILuxuryCar, ISportsCar } from 'helpers/interfaces';

export abstract class Car implements ICar {
  constructor(
    public model: string,
    public year: number,
    public color: string,
    public engineType: string
  ) {}

  getFullDescription(): void {
    console.log(
      `Model: ${this.model}\nYear: ${this.year}\nColor: ${this.color}\nEngine Type: ${this.engineType}`
    );
  }
}

export class LuxuryCar extends Car implements ILuxuryCar {
  constructor(
    public model: string,
    public year: number,
    public color: string,
    public engineType: string,
    public brand: string,
    public features: string[]
  ) {
    super(model, year, color, engineType);
  }

  getFullDescription(): void {
    super.getFullDescription();
    console.log(`Brand: ${this.brand}\nFeatures: ${this.features.join(', ')}`);
  }
}

export class SportsCar extends Car implements ISportsCar {
  constructor(
    public model: string,
    public year: number,
    public color: string,
    public engineType: string,
    public topSpeed: number,
    public acceleration: number
  ) {
    super(model, year, color, engineType);
  }

  getFullDescription(): void {
    super.getFullDescription();
    console.log(`Top Speed: ${this.topSpeed} mph\nAcceleration: ${this.acceleration} seconds`);
  }
}