import Garage from './garage/Garage.vue';
import CarDetails from './garage/CarDetails.vue';
import CarEdit from './garage/CarEdit.vue';
import Home from './Home.vue';
export const routes = [
    {path: '/', component: Home},
    {
        path: '/cars', component: Garage, children: [
        {path: '/cars/:id', component: CarDetails, name: "user_details"},
        {path: '/cars/:id/edit', component: CarEdit, name: "edit_user"}
    ]
    },
];