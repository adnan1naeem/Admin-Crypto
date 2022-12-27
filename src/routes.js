import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Quiz Management
const QuizCategories = React.lazy(() => import('./views/quizManagement/Categories/quizCategories'))
const EditCategories = React.lazy(() => import('./views/quizManagement/Categories/editCategories'))
const CreateCategories = React.lazy(() => import('./views/quizManagement/Categories/createCategories'))
const Questions = React.lazy(() => import('./views/quizManagement/Questions/questions'))
const EditQuestions = React.lazy(() => import('./views/quizManagement/Questions/editQuestions'))
const CreateQuestions = React.lazy(() => import('./views/quizManagement/Questions/createQuestions'))
const QuizSettings = React.lazy(() => import("./views/quizManagement/quizSettings/quizSettings"))
const CreateQuizSettings = React.lazy(() => import("./views/quizManagement/quizSettings/createQuizSettings"))
const EditQuizSetting = React.lazy(() => import("./views/quizManagement/quizSettings/editQuizSetting"))

// User Management
const Users = React.lazy(() => import('./views/userManagement/users'))
const UserDetail = React.lazy(() => import('./views/userManagement/userDetail/userDetails'))

// Air Drop
const Rewards = React.lazy(() => import('./views/airDrops/rewards/rewards'))
const CreateReward = React.lazy(() => import("./views/airDrops/rewards/createReward"))
const EditReward = React.lazy(() => import("./views/airDrops/rewards/editReward"))
const Tokens = React.lazy(() => import("./views/airDrops/tokens/tokens"))
const EditToken = React.lazy(() => import("./views/airDrops/tokens/editToken"))
const CreateToken = React.lazy(() => import("./views/airDrops/tokens/createToken"))
const Wallet = React.lazy(() => import("./views/userManagement/Wallet/wallets"))
const CreateWallet = React.lazy(() => import("./views/userManagement/Wallet/createWallet"))
const EditWallet = React.lazy(() => import("./views/userManagement/Wallet/editWallet"))

const routes = [

  // Dashboard
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Quiz Management
  { path: '/Categories', name: 'Categories', element: QuizCategories },
  { path: '/editCategory', name: 'Edit Categories', element: EditCategories },
  { path: '/createCategories', name: "Create Categories", element: CreateCategories },
  { path: '/questions', name: 'Questions', element: Questions },
  { path: '/editQuestions', name: "Edit Questions", element: EditQuestions },
  { path: '/createQuestion', name: "Create Question", element: CreateQuestions },
  { path: '/quizSettings', name: "Quiz Settings", element: QuizSettings },
  { path: "/createQuizSettings", name: "Create Quiz Settings", element: CreateQuizSettings },
  { path: "/editQuizSetting", name: "Edit Quiz Setting", element: EditQuizSetting },

  //User Management
  { path: "/users", name: "Users", element: Users },
  { path: '/userDetail', name: "User Detail", element: UserDetail },

  //Air Drops
  { path: '/rewards', name: "Rewards", element: Rewards },
  { path: '/createReward', name: "Create Reward", element: CreateReward },
  { path: '/editReward', name: "Edit Reward", element: EditReward },
  { path: '/tokens', name: "Tokens", element: Tokens },
  { path: '/editToken', name: 'Edit Token', element: EditToken },
  { path: '/createToken', name: "Create Token", element: CreateToken },
  { path: "/wallet", name: "Wallet", element: Wallet },
  { path: "/createWallet", name: "Create Wallet", element: CreateWallet },
  { path: "/editWallet", name: "Edit Wallet", element: EditWallet },
]

export default routes
