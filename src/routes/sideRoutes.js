const routes = [
  {
    path: '/',
    exact: true,
    icon: 'home',
    sideBar: 'Home',
    component: 'Home'
  },
  {
    path: '/about',
    icon: 'user',
    sideBar: 'About',
    component: 'About'
  },
  {
    path: '/topics',
    sideBar: 'Topics',
    icon: 'star',
    component: 'Topics'
  }
];

export default routes;
