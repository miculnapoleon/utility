import Head from 'next/head'
import { connect } from 'react-redux'
import styles from '../styles/Home.module.css'
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
