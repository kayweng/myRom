import HomePage from './pages/home.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import MonsterListPage from './pages/monsters/monster-list.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/monster-list',
    component: MonsterListPage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
