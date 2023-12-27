import Head from 'next/head'

import styles from '../styles/Index.module.scss'

import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Technology from '../components/Technology'
import EandE from '../components/EandE'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useMantineColorScheme } from '@mantine/core'
export default function Index() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Vedanshu Joshi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Vedanshu Joshi" />
        <meta name="keywords" content="Vedanshu Joshi,vedanshu,joshi, vedanshu7" />
      </Head>
      <NavBar />
      <Home />
      <div
        style={{
          backgroundColor:
            colorScheme === 'dark'
              ? ''
              : ' var(--mantine-color-custom-background-0)',
        }}
      >
        <Projects />
        <Technology />
        <EandE />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
