import styled from 'styled-components'
import ImageComp from './ImageComp'
import Link from 'next/link'

const HeroStyles = styled.div`
    position: relative;
    height: 110vh;
    padding-top: 2rem;
    display: grid;
    justify-content: center;
    color: var(--grey);
  .introInner {
    width: 70vw;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .hero {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      align-items: center;
          .portrait {
              border-radius: 50%;
              height: 300px;
              width: 300px;
              overflow: hidden;
          }
        }
    h1 {
      font-size: 4rem;
    }
    p {
      padding: 0 2rem;
      font-size: 1.2rem;
      text-align: justify;
    }

  }
  .backer {
    position: absolute;
    top: 0;
    left:0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100vw;
    max-width: 100%;
    z-index: -5;
    }
`

export default function Hero() {
  return (
    <HeroStyles>
      <div className='backer'>
        <ImageComp url='/carole/kelly-sikkema-O5XJoxrYbQo-unsplash_invvhu' objectFit='cover' layout='fill'/>
      </div>
      <div className='introInner'>
        <h1>About Carole</h1>

        <div className='hero'>
        <div className='portrait'><ImageComp url='/carole/image0_zxgwtc' objectFit='contain' layout='intrinsic' width='300' height='300'/></div>
        <p>I write long form articles, enjoy conducting interviews and spend much of my free time managing social media platforms. 
          <br/> <br/>I'm on a short sabbatical before launching myself 
          into my PhD at Kings College London, Where I'll be researching fiction and post dictatorship identity.</p>
          </div>
        <Link href='/portfolio'>
          <button>Portfolio</button>
        </Link>
        <Link href='/contact'>
          <button>Get in touch</button>
        </Link>
      </div>
    </HeroStyles>
  )
}
