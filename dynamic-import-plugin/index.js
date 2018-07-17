class DynamicImportPlugin{
  constructor(options){
    // handle options
  }
  apply(compiler){
    compiler.hooks.make.tap('DynamicImportPlugin', compiler => {
      console.log('===========DynamicImportPlugin============');
      //console.log(compiler);
    });
  }
}

module.exports = DynamicImportPlugin;