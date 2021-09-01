import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import {imageBuilder} from '../lib/sanity'
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div>
        <Avatar name={author?.name} picture={author?.picture} />
      </div>
      <div>
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div>
        <div>
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div
        >
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
