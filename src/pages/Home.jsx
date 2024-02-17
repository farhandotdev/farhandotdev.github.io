import React from 'react'
import Hero from "../components/hero/Hero"
import TopSkill from '../components/topSkill/TopSkill'
import WorkType from "../components/workType/WorkType"
import LatestProject from '../components/latestProject/LatestProject'

const Home = () => {
  return (
    <div>
        <Hero/>
        <TopSkill/>
        <WorkType/>
        <LatestProject/>
    </div>
  )
}

export default Home