export type HeroT = {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ServicesT = {
  id?: number;
  name: string;
  description: string;
  image_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type OurWorkT = {
  id?: number;
  name: string;
  subtitle: string;
  description: string;
  image_url: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
};

export type HeroResponseT = {
  hero: HeroT;
  services: Array<ServicesT>;
  our_work: Array<OurWorkT>;
};
