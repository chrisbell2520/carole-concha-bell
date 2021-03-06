import Container from '../components/Container'
import Stories from '../components/Stories'
import HeroPost from '../components/HeroPost'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function IndexPage({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>

        <Head>
          <title>Carole Concha Bell</title>
        </Head>
        <Intro /> 
        <Hero/> 
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
