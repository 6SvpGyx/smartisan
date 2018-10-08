import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Tfooter from '@/components/footer'//脚部导航栏
import Index from '@/view/index/index'  //首页页面
import Type from '@/view/type/type'     //分类页面
import Car from '@/view/car/car'        //购物车页面
import My from '@/view/my/my'           //个人中心页面
import Search from '@/components/search'//搜索页面
import Navitem from '@/view/index/nav/navItem/navItem'//导航栏子页面
import Notfind from '@/components/notFind'//404页面
import Bannerphone from '@/components/bannerItem/bannerPhone'//轮播手机页面
import Bannergroup from '@/components/bannerItem/bannerGroup'//轮播团购页面
import Login from '@/view/car/login/login'
import Register from '@/view/car/register/register'
import ChangeAdress from '@/view/my/changeAdress/changeAdress'

export default new Router({
  mode:'history',
  routes: [
    {
    	path:'/',
    	name:'Index',
    	components:{
    		default:Index,
    		footer:Tfooter
    	}
    },
    {
    	path:'/type',
    	name:'Type',
    	components:{
    		default:Type,
    		footer:Tfooter
    	}
    },
    {
    	path:'/car',
    	name:'Car',
    	components:{
    		default:Car,
    		footer:Tfooter
    	}
    },
    {
    	path:'/my',
    	name:'My',
    	components:{
    		default:My,
    		footer:Tfooter
    	}
    },
    {
        path:'/sousou',
        name:'SearchItem',
        component:Search
    },
    {
        path:'/category/:id',
        name:'Navitem',
        components:{
            footer:Tfooter,
            default:Navitem
        }
    },
    {
        path:'/item/:ids',
        name:'Bannerphone',
        component:Bannerphone
    },
    {
        path:'/group-shopping',
        name:'Bannergroup',
        component:Bannergroup
    },
    {
        path:'/index/floor/:num',
        name:'HotShop',
        components:{
            footer:Tfooter,
            default:Navitem
        }
    },
    {
        path:'/sousou/:sousuoId',
        name:'Sousuo',
        components:{
            footer:Tfooter,
            default:Navitem
        }
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/register',
        name:'Register',
        component:Register
    },
    {
        path:'/changeAdress',
        name:'ChangeAdress',
        component:ChangeAdress
    },
    {
        path:'*',
        component:Notfind
    }

  ]
})
