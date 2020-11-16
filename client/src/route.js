import React from 'react'

const QuickQuestion = React.lazy(() => import('./layout/Reports/quick-question'))
const SpamTest = React.lazy(() => import('./layout/Spam-test'))

const routes = [ 
     { path: '/reports/quick-question', name: 'QuickQuestion', exact: true, component: QuickQuestion }, 
     { path: '/spam-test', name: 'SpamTest', exact: true, component: SpamTest }, 

]

export default routes