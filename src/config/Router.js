import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Result from '../screens/Result/Result';

export const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Home/>,
        title:'Home',
        isPrivate:true,
        isLink:true,
    },
    {
        path: '/result',
        component: () => <Result/>,
        title:'Result',
        isPrivate: true,
    },
    {
        path:'/login',
        component: () => <Login/>,
        title:'Login',
        isPrivate: false,
    },
];