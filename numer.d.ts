// fix for a weird TypeScript error that occurs if there's no exports.
export type _void = void;

interface Number {
  seconds(): number;
  minutes(): number;
  hours(): number;
  days(): number;
  weeks(): number;
  years(): number;
}