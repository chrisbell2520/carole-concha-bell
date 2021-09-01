import ImageCompDB from './ImageCompDB'

export default function Avatar({ name, picture }) {
  console.log(picture)
  return (
    <div>
      {/* <div style={{ width: '100%', overflow: 'hidden'}}>
        <ImageCompDB url={imageBuilder(picture).url()} objectFit='cover' layout='intrinsic' width='800' height='400' />
      </div> */}
      <div>{name}</div>
    </div>
  )
}
