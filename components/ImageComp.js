import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'


export default function ImageComp({ url, objectFit, layout, height, width }) {

  const source = buildUrl(url, {
    cloud: {
      cloudName: 'apt-digital'
    },
  })
  const blurSource = buildUrl(url, {
    cloud: {
      cloudName: 'apt-digital'
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1
    }
  })
  if (layout == 'fill') {
    return (
    <Image 
            src={source}
            placeholder='blur'        
            layout='fill'
            objectFit={objectFit}
            >
        </Image>
  )}
  if (layout != 'fill') {
    return (
    <Image 
            src={source}
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
