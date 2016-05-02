declare module "numer" {
  export {};
}

interface Number {
  seconds(): number;
  minutes(): number;
  hours(): number;
  days(): number;
  weeks(): number;
  years(): number;
}