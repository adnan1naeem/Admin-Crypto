import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"))
const Tokens = React.lazy(() => import("./views/base/jumbotrons/Jumbotrons"))
const Reward = React.lazy(() => import('./views/base/list-groups/ListGroups'))

const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/quiz', name: 'Base', element: Cards, exact: true },
  { path: '/categories', name: 'Categories', element: Accordion },
  { path: '/questions', name: 'Questions', element: Breadcrumbs },
  { path: '/userManagement', name: 'User Management', element: Cards },
  { path: '/pushNotification', name: 'Push Notification', element: Carousels },
  { path: '/wallet', name: "Wallet", element: Collapses },
  { path: '/tokens', name: "Tokens", element: Tokens },
  { path: '/rewards', name: "Rewards", element: Reward },
]

export default routes
