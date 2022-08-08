import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1, 3)
  return (
    <>
      <Layout>
        <Head>
          <title>Annie Apple's Product Portfolio</title>
        </Head>
        <Container>
          <Intro />
        </Container>
        <div className="bg-sky-50 pt-16 pb-16">
          <Container>
            {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            </Container>
          </div>
          <Container>
            <div className="md:mt-16">
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
          </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
