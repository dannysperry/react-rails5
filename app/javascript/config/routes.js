import Home from 'modules/home'
import Contact from 'modules/contact'

// add additional pages here
import Other from 'modules/menu'

// make sure the Home route is always the first element in the routes array
const routes = [
  { path: '/',
    component: Home,
    key: 'Home'
  },
  { path: '/contact',
    component: Contact,
    key: 'Contact'
  },
  { path: '/other',
    component: Other,
    key: 'Other'
  }
]

export default routes

const navRoutes = routes.reduce((prev, curr) => {
  return [...prev, ...(curr.key !== 'Home' ? [curr] : []),]
}, [])

export { navRoutes }
