import styled from 'styled-components'
import ImageComp from './ImageComp'
import Link from 'next/link'

const IntroStyles = styled.div`
    height: 100vh;
    padding-top: 2rem;
    display: grid;
    align-items: center;
    color: white;
  .introInner {
    width: 80vw;
    padding: 4rem;
    h1 {
      font-size: 4rem;
    }
    button {
      color: white;
      border: 1px solid white;
    }
  }
  .backer {
    position: absolute;
    top: 0;
    left:0;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    z-index: -5;
    }
`

export default function Intro() {
  return (
    <IntroStyles>
      <div className='backer'>
        <ImageComp url='/aptCore/patrick-fore-0gkw_9fy0eQ-unsplash_dhhb0s' objectFit='cover' layout='fill'/>
      </div>
      <div className='introInner'>
        <h1>Carole Concha Bell</h1>
        <h2>Journalist</h2>
        <h2>Author</h2>
        <h2>Freelance PR</h2>
        <Link href='/portfolio'>
          <button>Portfolio</button>
        </Link>
        <Link href='/contact'>
          <button>Get in touch</button>
        </Link>
      </div>
    </IntroStyles>
  )
}
