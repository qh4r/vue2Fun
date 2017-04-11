import Garage from './garage/Garage.vue';
import CarDetails from './garage/CarDetails.vue';
import CarEdit from './garage/CarEdit.vue';
import Home from './Home.vue';
import Test from './TestComponent.vue';
export const routes = [
    // {path: '/', component: Home},
    {
        path: '/',
        components: {
            default: Home,
            'test-top': Test
        },
        name: 'home'
    },
    {
        path: '/cars',
        components: {
            default: Garage,
            'test-bottom': Test
        }, children: [
        {path: '/cars/:id', component: CarDetails, name: "user_details"},
        {path: '/cars/:id/edit', component: CarEdit, name: "edit_user"}
    ]
    },
    // {path: '/home', redirect: {name: 'home'}},
    {path: '*', redirect: {name: 'home'}}   // lapie wszystko co nie pasuje do istniejacych, ale musi byc na koncu (bo nie pusci dalej) - standard
];