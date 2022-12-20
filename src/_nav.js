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
        to: '/',
        // to: '/quiz/Create-Category',
      },
      {
        component: CNavItem,
        name: 'Create-Edit/Question',
        to: '/',
        // to: '/quiz/create-edit/question',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'User Managment',
    to: '/',
  },
  {
    component: CNavItem,
    name: 'LeaderBoard and Air drops',
    to: '/',
  },
  {
    component: CNavItem,
    name: 'Push notifications',
    to: '/',
  },
  {
    component: CNavItem,
    name: 'Flash Learn',
    to: '/',
  },
]

export default _nav
