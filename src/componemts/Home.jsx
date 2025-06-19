import React from 'react'
import Grid from './Grid'
import { delhiListings, goaListings, jaipurListings, mumbaiListings, puneListings } from '../assets/constant'

const Home = () => {
  return (
    <div className='home  flex flex-col font-inter md:mx-16  mt-8 '>
      <div>
        <p className='font-bold mx-8 md:mx-0 text-xl'>Popular homes in Pune</p>
        <Grid city={puneListings} />
      </div>

      <div>
        <p className='font-bold text-xl mx-8 md:mx-0'>Available next month in South Goa</p>
        <Grid city={goaListings} />
      </div>

      <div>
        <p className='font-bold text-xl mx-8 md:mx-0'>Villas in jaipur</p>
        <Grid city={jaipurListings} />
      </div>

      <div>
        <p className='font-bold text-xl mx-8 md:mx-0'>Check in delhi</p>
        <Grid city={delhiListings} />
      </div>

      <div>
        <p className='font-bold text-xl mx-8 md:mx-0'>Flats in mumbai</p>
        <Grid city={mumbaiListings} />
      </div>




    </div>
  )
}

export default Home
