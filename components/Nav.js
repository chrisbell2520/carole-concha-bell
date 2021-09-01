import styled from 'styled-components'
import Link from 'next/link'

const NavStyles = styled.div`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.8);
        .innerNav {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: var(--max);
            margin: auto;
                    .navButtons {
                        display: grid;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        max-width: 600px;
                        height: 100%;
                        grid-template-columns: repeat(4, 1fr);
                        p {
                            text-align: center;
                            font-size: 1.2rem;
                            cursor: pointer;
                            margin: 0;
                        }
                    }
            } 
`

export default function Nav() {
  return (
    <NavStyles>
        <div className='innerNav'>
 
            <div className='navButtons'>
                <Link href='/'>
                <p>Home</p>
                </Link>
                <Link href='/blog'>
                <p>Blog</p>
                </Link>
                <Link href='/portfolio'>
                <p>Portfolio</p>
                </Link>
                <Link href='/contact'>
                <p>Contact</p>
                </Link>
            </div>
        </div>
    </NavStyles>
  )
}
