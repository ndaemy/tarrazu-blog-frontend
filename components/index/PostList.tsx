import { gql, useQuery } from '@apollo/client'
import { dateFormatDots } from '../../utils/date'

export const ALL_POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      date
      excerpt
      category {
        name
      }
      coverImage {
        formats
        alternativeText
      }
    }
  }
`

export default function PostList() {
  const { data, loading, error } = useQuery(ALL_POSTS_QUERY)

  if (error) return <h1>Error loading posts.</h1>
  if (loading) return <h2>Loading</h2>

  const { posts } = data

  return (
    <>
      {posts.map(post => (
        <div key={post.id} className='mb-8'>
          <img
            src={post.coverImage.formats.large.url}
            alt={post.coverImage.alternativeText}
            className='mb-2'
          />
          <p className='text-xl text-teal-600 font-bold mb-2'>{post.title}</p>
          <p className='mb-4 text-gray-700'>{post.excerpt}</p>
          {/* 추후에 category가 array로 변경된다면, map으로 바꿔야 함 */}
          <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-500 mr-2 mb-2'>
            {post.category.name}
          </p>
          <p className='text-sm text-gray-700'>{dateFormatDots(post.date)}</p>
        </div>
      ))}
    </>
  )
}
