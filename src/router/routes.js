
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        name: 'Conference'
      },
      {
        path: 'cfp',
        component: () => import('pages/CFP.vue'),
        name: 'CFP'
      },
      {
        path: 'speakers',
        component: () => import('pages/Speakers.vue'),
        name: 'Speakers'
      },
      {
        path: 'agenda',
        component: () => import('pages/Agenda.vue'),
        name: 'Agenda'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
