import React from 'react'

const QuickQuestion = React.lazy(() => import('./layout/Reports/quick-question'))

const routes = [ 
     { path: '/reports/quick-question', name: 'QuickQuestion', exact: true, component: QuickQuestion }, 
]

export default routes