import audiophile from '../assets/images/client-audiophile.svg'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'
import './Footer.css'

const Footer = ()=>{
    return (
        <>
            <div className='footer'>
                <img src={databiz} alt="" />
                <img src={audiophile} alt="" />
                <img src={meet} alt="" />
                <img src={maker} alt="" />
                
            </div>
            <img src="" alt="" />
        </>
    )
}

export default Footer