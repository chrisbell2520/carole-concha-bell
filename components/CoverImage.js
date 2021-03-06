import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      src={imageBuilder(imageObject).url()}
    />
  )
    console.log(url)
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
