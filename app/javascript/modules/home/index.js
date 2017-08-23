import React from 'react'

import Banner from '../banner'
import ContactFooter from '../contact/ContactFooter'

const Home = (props) => (
  <div className='Home'>
    <Banner
      big={true}
      title="Grower's Outlet"
      subtitle="We pride ourselves on providing quality choices by being selective with our vendors." />
    <ContactFooter />
  </div>
)

export default Home