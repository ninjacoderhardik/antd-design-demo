import React from 'react'
import { Home } from '../../pages/home/Home'
import Intro from '../../pages/intro/Intro'
import { Services } from '../../pages/services/Services'
const Allfile = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Intro name="Fetured works"/>
    </div>
  )
}
export default Allfile
