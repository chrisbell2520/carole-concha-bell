import Container from '../components/Container'
import Stories from '../components/Stories'
import HeroPost from '../components/HeroPost'
import Layout from '../components/Layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function BlogPage({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>

        <Head>
          <title>Carole Concha Bell</title>
        </Head>
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
