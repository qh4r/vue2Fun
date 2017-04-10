import Garage from './garage/Garage.vue';
import CarDetails from './garage/CarDetails.vue';
import CarEdit from './garage/CarEdit.vue';
import Home from './Home.vue';
export const routes = [
    {path: '/', component: Home},
    {path: '/cars', component: Garage},
    {path: '/cars/:id', component: CarDetails},
    {path: '/cars/:id/edit', component: CarEdit}
];