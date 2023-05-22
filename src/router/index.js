//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {show: true}
        },
        {
            path: '/search',
            component: Search,
            meta: {show: true}
        },
        {
            path: '/login',
            component: Login,
            meta: {show: false}
        },
        {
            path: '/register',
            component: Register,
            meta: {show: false}
        },
        // 重定向，项目跑起来时，立马重定向到首页
        {
            path: '*',
            component: Home
        }
    ]
})