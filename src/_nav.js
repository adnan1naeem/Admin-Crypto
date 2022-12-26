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
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/Categories',
      },
      {
        component: CNavItem,
        name: 'Questions',
        to: '/questions',
      },
      {
        component: CNavItem,
        name: 'Quiz Questions',
        to: '/quizSettings',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'User Managment',
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/users',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Air drops',
    items: [
      {
        component: CNavItem,
        name: 'Rewards',
        to: '/rewards',
      },
      {
        component: CNavItem,
        name: 'Tokens',
        to: '/tokens',
      },
    ],
  },
]

export default _nav
