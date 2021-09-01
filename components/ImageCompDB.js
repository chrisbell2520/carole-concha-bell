import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'


export default function ImageComp({ url, objectFit, layout, height, width }) {
  if (layout == 'fill') {
    return (
    <Image 
            src={url}
            placeholder='blur'        
            layout='fill'
            objectFit={objectFit}
            >
        </Image>
  )}
  if (layout != 'fill') {
    return (
    <Image 
            src={url}
            placeholder='blur'        
            layout='intrinsic'
            objectFit={objectFit}
            height={height}
            width={width}
            >
        </Image>
    )
  }
}
