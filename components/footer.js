import styled from 'styled-components'

const FooterStyles = styled.div`
    width: 100%;
    background: white;
    opacity: 0.8;
    padding: 1rem;
        .innerFooter {
            width: 100%;
            max-width: var(--max);
            margin: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            h3 {
                margin: 1rem;
                color: black;
            }
            .left {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .right {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
        } 
`

export default function Footer() {
  return (
    <FooterStyles>
         <div className='innerFooter'>
            <div className='left'>
            <h3>Carole Concha Bell</h3>
            </div>
            <div className='right'>
            
            </div>
        </div>
    </FooterStyles>
  )
}
