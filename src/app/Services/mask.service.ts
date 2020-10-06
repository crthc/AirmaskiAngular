import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MaskService {
  private mask: Mask[] = [
    {
      name: 'Quartz Grey',
      price: 33,
      img: './assets/images/QuartzGrey.jpg',
      entrance: 'slide-in-top-fast',
      description:
        'The Airmaski 2.0 introduces a whole new level of protection, breathability, and design. By combining cutting-edge filter technology with timeless Scandinavian design, the Airmaski 2.0 offers an outstanding performance and comfort to combat harmful particles in the air. Reusable, washable and available in 4 sizes.',
    },
    {
      name: 'Pearl Pink',
      price: 33,
      img: './assets/images/PearlPink.jpg',
      entrance: 'slide-in-top-reg',
      description:
        'The Airmaski 2.0 introduces a whole new level of protection, breathability, and design. By combining cutting-edge filter technology with timeless Scandinavian design, the Airmaski 2.0 offers an outstanding performance and comfort to combat harmful particles in the air. Reusable, washable and available in 4 sizes.',
    },
    {
      name: 'Onyx Black',
      price: 33,
      img: './assets/images/OnyxBlack.jpg',
      entrance: 'slide-in-top-slow',
      description:
        'The Airmaski 2.0 introduces a whole new level of protection, breathability, and design. By combining cutting-edge filter technology with timeless Scandinavian design, the Airmaski 2.0 offers an outstanding performance and comfort to combat harmful particles in the air. Reusable, washable and available in 4 sizes.',
    },
  ];

  constructor() {}

  getMask(): Mask[] {
    return this.mask;
  }

  getMaski(idx: string) {
    return this.mask[idx];
  }
}

export interface Mask {
  name: string;
  price: number;
  img: string;
  entrance: string;
  description: string;
}
