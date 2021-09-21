import { connect } from 'react-redux'
import React from 'react';
import Flight from '../components/flight/Flight'

const Home = () => {
  return (
    <>
      <Flight />
    </>
  )
}

export default connect()(Home)
