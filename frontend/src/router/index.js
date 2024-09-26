import Login from "../components/Auth/Login";

const { default: Home } = require("../components/Home");

const routers = [
    {
        path: '/', component: Home, Layout: true
    },
    {
        path: '/login', component: Login, Layout: false
    }
]

export default routers;