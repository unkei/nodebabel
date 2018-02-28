import request from 'request-promise-native';

request('http://www.yahoo.co.jp')
.then((body) => {
  console.log(body);
});

console.log('hello world!');

