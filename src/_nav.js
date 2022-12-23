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
        to: '/categories',
      },
      {
        component: CNavItem,
        name: 'Questions',
        to: '/questions',
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
        to: '/userManagement',
      },
      // {
      //   component: CNavItem,
      //   name: 'Wallets',
      //   to: '/wallet',
      // },
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
  // {
  //   component: CNavItem,
  //   name: 'Push notifications',
  //   to: '/pushNotification',
  // },
]

export default _nav
