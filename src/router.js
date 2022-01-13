import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from './views/portfolio.vue';
import About from './views/about.vue';
import Doodleboard from './views/doodleboard.vue';
import Posters from './views/posters.vue';
import Paintings from './views/paintings.vue';
import LogosAndIcons from './views/logos.vue';
import TelegramStickers from './views/telegram-stickers.vue';
import DigitalIllustrations from './views/digital-illustrations.vue';
import Shopee from './views/shopee.vue';
import Disney from './views/disney.vue';
import UIChallenge from './views/ui-challenge.vue';

const routes = [
    {
        path: '/',
        name: 'portfolio',
        component: Portfolio
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/doodleboard',
        name: 'doodleboard',
        component: Doodleboard
    },
    {
        path: '/portfolio/posters',
        name: 'posters',
        component: Posters
    },
    {
        path: '/portfolio/paintings',
        name: 'paintings',
        component: Paintings
    },
    {
        path: '/portfolio/logos-and-icons',
        name: 'logos-and-icons',
        component: LogosAndIcons
    },
    {
        path: '/portfolio/telegram-stickers',
        name: 'telegram-stickers',
        component: TelegramStickers
    },
    {
        path: '/portfolio/digital-illustrations',
        name: 'digital-illustrations',
        component: DigitalIllustrations
    },
    {
        path: '/portfolio/shopee',
        name: 'shopee',
        component: Shopee
    },
    {
        path: '/portfolio/disney',
        name: 'disney',
        component: Disney
    },
    {
        path: '/portfolio/30-days-of-ui-challenge',
        name: 'ui-challenge',
        component: UIChallenge
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
export default router;