const path = require('path');

const filename = 'https://replit.com/@icecrao2/NodeStudy#_path.js?variety=jaewoong';

console.log(path.basename(filename));
console.log(path.basename(filename, '.js'));


console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

console.log(path.dirname(filename));

console.log(path.extname(filename));

const format1 = path.format({
  dir: '/ignored',
  base: 'file.txt'
});

const format2 = path.format({
  dir: 'ignored',
  base: 'file.txt'
});

console.log(format1);
console.log(format2);

console.log(`${format1} : ${path.isAbsolute(format1)}`);
console.log(`${format2} : ${path.isAbsolute(format2)}`);

console.log(path.join('/','foo', 'bar', 'min'));