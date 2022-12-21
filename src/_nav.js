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
        name: 'Create Category',
        to: '/quiz/Create-Category',
      },
      {
        component: CNavItem,
        name: 'Create-Edit/Question',
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
  {
    component: CNavItem,
    name: 'Flash Learn',
    to: '/',
  },
]

export default _nav
