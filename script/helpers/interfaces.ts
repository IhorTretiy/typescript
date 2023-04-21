export interface ICar {
  model: string;
  year: number;
  color: string;
  engineType: string;
  getFullDescription: () => void;
}

export interface ILuxuryCar extends ICar {
  brand: string;
  features: string[];
}

export interface ISportsCar extends ICar {
  topSpeed: number;
  acceleration: number;
}