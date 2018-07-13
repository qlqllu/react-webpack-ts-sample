const acorn = require('acorn');

const code = 'var a=2';
const ast = acorn.parse(code,{
  sourceType: 'module'
});

console.log('======AST======');
console.log(ast);
console.log('======AST======');