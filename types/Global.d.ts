interface WebpackGlobal {
  replaceDynamicSrc: (src: string) => string;
  setSDN: () => string;
}

interface Global extends WebpackGlobal {}
declare var global: Global;