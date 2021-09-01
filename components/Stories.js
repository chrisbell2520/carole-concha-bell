import PostPreview from './PostPreview'
import styled from 'styled-components'

const StoriesStyles = styled.section`
    display: flex;
    border: 3px solid blue;
    flex-direction: column;
    align-items: center;
      .innerStories {
        display: grid;
        width: 100%;
        justify-content: space-between;
        grid-template-columns: repeat(3, 1fr);
      }
    
`

export default function Stories({ posts }) {
  return (
    <StoriesStyles>
      <h2>
        Portfolio
      </h2>
      <div className='innerStories'>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </StoriesStyles>
  )
}
