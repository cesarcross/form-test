import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// components
import Form from '../src/components/Form/Form'
import SignIn from '../src/components/SignIn/SignIn'
// images
import horizontalLine from '../public/horizontal-line.png'
import wolfIcon from '../public/wolf-icon.png'
// utils
import {LOCATION, PIPELINE, PLEASE_FILL_FORM, VIEW_JOB_DESCRIPTION} from '../utils/constants'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create App</title>
        <meta name="description" content="Job opportunity pipeline" />
      </Head>

      <main className={styles.main}>
        <Image
        src={wolfIcon}
        alt='wolf icon'
        />

        <div className={styles.title}>
          <h1>
            GraphStax
          </h1>
        </div>

        <Image src={horizontalLine} alt='horizontal line'/>

        <div className={styles.subtitle}>
          <p>
            {PIPELINE}
          </p>
        </div>

        <div className={styles.companytitle}>
          <p>
            Workwolf
          </p>
          <p>
            {LOCATION}
          </p>
        </div>

        <Link href={'/jobDescription'}>
          <div className={styles.viewjobcontainer}>
            <a>{VIEW_JOB_DESCRIPTION}</a>
          </div>
          </Link>

        <div className={styles.fillformtext}>
          <p>
            {PLEASE_FILL_FORM}
          </p>
        </div>

        <Form/>

        <SignIn/>

      </main>
    </div>
  )
}
