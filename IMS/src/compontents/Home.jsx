import React from 'react'
import LineChart from './LineChart'
import PolarChart from './Polarchart'
import Tile from './Tile'
function Home() {
  return  <>
<div className='container'>
  <Tile/>
  <div className='container'>
  <LineChart/>
 
  </div>
  <div className='container'>
  <PolarChart/>
  </div>
  {/* <LineChart/>
  <PolarChart/> */}
  </div>
  </>

}

export default Home