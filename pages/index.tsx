import Layout from '../components/Layout'
import PostList, { ALL_POSTS_QUERY } from '../components/index/PostList'
import { initializeApollo } from '../lib/apolloClient'

export default function Home(props) {
  return (
    <Layout>
      <div className='hero'>
        <h1 className='title'>Tarrazu Blog</h1>
      </div>
      <PostList />
    </Layout>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
