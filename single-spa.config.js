
import { registerApplication, start } from 'single-spa';


function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}


registerApplication('navBar',
 () => import('./src/navBar/navBar.app.js').then(mod => mod.navBar),
 () => true);
registerApplication('home',
  () => import('./src/home/home.app.js'),
  (location) => ["", "/"].includes(location.pathname)
  || location.pathname.startsWith('/home'));
registerApplication('vue', () => import('./src/vue/main'), pathPrefix('/vue'));
registerApplication('react', () => import('./src/react/react.app'), pathPrefix('/react'));


start();
