import styled from 'styled-components'
import ImageComp from './ImageComp'
import Stories from './Stories'
import Link from 'next/link'

const IntroStyles = styled.div`
    min-height: 100vh;
    padding-top: 2rem;
    display: grid;
    align-items: flex-start;
    color: white;
  .introInner {
    padding: 4rem;
    h1 {
      font-size: 4rem;
    }
    button {
      color: white;
      border: 1px solid white;
    }
    .posts {
      width: 100%;
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

export default function IntroPortfolio(props) {
  const posts = props.posts
  return (
    <IntroStyles>
      <div className='backer'>
        <ImageComp url='/carole/marialaura-gionfriddo-XJqCp_LJbwU-unsplash_k7onb5' objectFit='cover' layout='fill'/>
      </div>
      <div className='introInner'>
        <h1>Portfolio</h1>
          <button>Journalism</button>
          <button>PR</button>
          <button>All</button>
       <div className='posts'>
        <Stories posts={posts}/>
        </div>
      </div>
    </IntroStyles>
  )
}
