module.exports = function(content, map, meta) {
  console.log('======================');
  console.log(content);
  console.log('======================');
  return require('http://localhost:3000/widget.js');
};