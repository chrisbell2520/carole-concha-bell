import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import Link from 'next/link'
import {imageBuilder} from '../lib/sanity'
import styled from 'styled-components'
import ImageCompDB from './ImageCompDB'

const PostPreviewStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    overflow: hidden;
`

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <PostPreviewStyles>
      <div style={{ width: '100%', overflow: 'hidden'}}>
        <ImageCompDB url={imageBuilder(coverImage).url()} objectFit='cover' layout='intrinsic' width='800' height='400' />
      </div>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <div>
        <Date dateString={date} />
      </div>
      <p>{excerpt}</p>
      <Avatar name={author?.name} picture={author?.picture} />
    </PostPreviewStyles>
  )
}
