import Container from '../components/Container'
import Enquiry from '../components/Enquiry'
import Layout from '../components/Layout'
import Head from 'next/head'


export default function ContactPage() {

  return (
    <>
      <Layout>
        <Head>
          <title>Santiago Heritage</title>
        </Head>

        <Container>
        <h2>Get in touch.</h2>
        <Enquiry />

        </Container>
      </Layout>
    </>
  )
}

