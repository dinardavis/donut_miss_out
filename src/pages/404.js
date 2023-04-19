import * as React from 'react'
import Layout from '../components/Layout'

export default function PageNotFount() {
  return (
    <Layout>
       <main className='error-page'>
        <h1>404</h1>
        <h3>page not <br></br><span>found</span></h3>
       </main>
    </Layout>
  )
}