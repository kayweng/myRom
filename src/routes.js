import HomePage from './pages/home.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import MonsterListPage from './pages/monsters/monster-list.vue';
import MonsterInfoPage from './pages/monsters/monster-info.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    name: 'monster-list',
    path: '/monster-list',
    component: MonsterListPage,
  },
  {
    name: 'monster-info',
    path: '/monster-info/:param',
    component: MonsterInfoPage,
  },
  {
    name: 'panel-left',
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
