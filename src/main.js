import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';

import CursoListaComponent from './components/pages/CursoListaComponent.vue';
import CursoDetalleComponent from './components/pages/CursoDetalleComponent.vue';
import CursoSaveComponent from './components/pages/CursoSaveComponent.vue';
import AboutComponent from './components/pages/AboutComponent.vue';
import ContactoComponent from './components/pages/ContactoComponent.vue';


Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//Configuracion de router
Vue.use(VueRouter);

Vue.use(Vuelidate);


//declaramos todas nuestras rutas de navegacion
const routes = [
    { path: '/', name: 'curso-lista', component: CursoListaComponent },
    { path: '/curso/detalle/:id', name: 'curso-detalle', component: CursoDetalleComponent },
    { path: '/curso/save/:id', name: 'curso-save', component: CursoSaveComponent },
    { path: '/about', name: 'about', component: AboutComponent },
    { path: '/contactenos', name: 'contactenos', component: ContactoComponent },
    { path: '*', name: 'error404', redirect: '/' } //url no valida, se coloca el final

];

const router = new VueRouter({ routes, mode: 'history' });


new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
