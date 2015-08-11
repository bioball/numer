# Numer

Number to datetime helpers. This adds a series of methods onto numbers to turn datetime intervals into millisecond values.

NOTE: This adds methods onto `Number#prototype`.

### Example

```js
(3).minutes();
// => 180000
(3).days();
// => 259200000
```

### Installation

Install this package through npm.

```bash
npm install numer
```

Then, either include the source for this project in a script tag, or you may also use this as a CommonJS module and `require` it into your project. It only needs to be required once, and the module does not export anything.

### Approximate values

Months and years are just approximations. A month is considered 30 days, and a year is considered 365 days.