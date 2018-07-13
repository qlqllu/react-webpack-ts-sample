import com1 from './component-1';
export function showCom1(){
  return 'widget: ' + com1;
}

export function showCom2(){
  return import(/* webpackChunkName: "remote-widget-com2" */ './component-2.js').then(com2 => {
    return 'widget: ' + com2.default;
  });
}