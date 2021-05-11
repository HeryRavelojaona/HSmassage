import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Tarifs from '../components/Tarifs'

export default function Home() {
  return (
    <>
      <Head>
        <title>HS massage bien être</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Header/>
      <About/>
      <Tarifs/>
    </>
    
  )
}
