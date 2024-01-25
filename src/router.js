import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from './views/portfolio.vue';
import About from './views/about.vue';
import Doodleboard from './views/doodleboard.vue';
import Posters from './views/posters.vue';
import LogosAndIcons from './views/logos.vue';
import TelegramStickers from './views/telegram-stickers.vue';
import DigitalIllustrations from './views/digital-illustrations.vue';
import Shopee from './views/shopee.vue';
import Disney from './views/disney.vue';
import UIChallenge from './views/ui-challenge.vue';
import Hop from './views/hop.vue';
import Yearbook from './views/yearbook.vue';
import CNN from './views/cnn.vue';
import Samsung from './views/samsung.vue';

const routes = [
    {
        path: '/',
        name: 'portfolio',
        component: Portfolio,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: {title: 'about'}
    },
    {
        path: '/doodleboard',
        name: 'doodleboard',
        component: Doodleboard,
        meta: {title: 'doodleboard'}
    },
    {
        path: '/portfolio/posters',
        name: 'posters',
        component: Posters,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/logos-and-icons',
        name: 'logos-and-icons',
        component: LogosAndIcons,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/telegram-stickers',
        name: 'telegram-stickers',
        component: TelegramStickers,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/digital-illustrations',
        name: 'digital-illustrations',
        component: DigitalIllustrations,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/shopee',
        name: 'shopee',
        component: Shopee,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/disney',
        name: 'disney',
        component: Disney,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/30-days-of-ui-challenge',
        name: 'ui-challenge',
        component: UIChallenge,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/hop-app',
        name: 'hop',
        component: Hop,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/yearbook',
        name: 'yearbook',
        component: Yearbook,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/cnn',
        name: 'cnn',
        component: CNN,
        meta: {title: 'arissa\'s portfolio'}
    },
    {
        path: '/portfolio/samsung-casetify',
        name: 'samsung',
        component: Samsung,
        meta: {title: 'arissa\'s portfolio'}
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});


  
export default router;