import React from 'react'
import NavComponent from '../components/singlepager/navcomponent'
import BannerComponent from '../components/singlepager/bannerComponent'
import StatsComponent from '../components/singlepager/statsComponent'
import FeaturesComponent from '../components/singlepager/featuresComponent'
import PeopleComponent from '../components/singlepager/peopleComponent'

export default function IntroPage() {
  return (
    <div class="bg-white">
      <NavComponent />
      {/* Banner component */}
      <BannerComponent/>
      <hr/>
      {/*Team Component*/}
      <PeopleComponent/>
      <hr/>
      {/*Work component */}
      <FeaturesComponent/>
      <hr/>
      {/*Stats Component*/}
      <StatsComponent/>
      
    </div>
  )
}
