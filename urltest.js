

const myURL = 
new URL('http://user:pass@sub.example.com:8080/p/a/t/h?query=string&user=jaewoong');
console.log(myURL);



console.log(myURL.searchParams.get('user'));
console.log(myURL.searchParams.has('user'));
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());
myURL.searchParams.append('user', 'admin');
console.log(myURL.searchParams.getAll('user'));
myURL.searchParams.set('user', 'fe')
console.log(myURL.searchParams.getAll('user'));
myURL.searchParams.delete('user');
myURL.searchParams.append('user', 'abc')
console.log(myURL.searchParams.toString());
