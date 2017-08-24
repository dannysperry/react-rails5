import React from 'react'

import Banner from '../banner'

import settings from 'config/settings'

const Home = (props) => (
  <div className='Home'>
    <Banner
      big={true}
      title={settings.title}
      subtitle={settings.subtitle}>
    </Banner>
  </div>
)

export default Home