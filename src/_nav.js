import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
  },

  {
    component: CNavGroup,
    name: 'Quiz Managment',
    to: '/quiz',
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/quiz/Create-Category',
      },
      {
        component: CNavItem,
        name: 'Questions',
        to: '/quiz/create-edit/question',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'User Managment',
    to: '/userManagement',
  },
  {
    component: CNavItem,
    name: 'LeaderBoard and Air drops',
    to: '/',
  },
  {
    component: CNavItem,
    name: 'Push notifications',
    to: '/pushNotification',
  },
]

export default _nav
