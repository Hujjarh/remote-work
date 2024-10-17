import images from '../../assets/images/image-hero-desktop.png'
import mobileImage from '../../assets/images/image-hero-mobile.png'
import './heroimage.css'
const Hero_img = ()=>{
    return (
        <div>
            <img id='desktopImage' src={images} alt="desktop image"  width={'350px'}/>
            <img src={mobileImage} alt="mobile image" width={'200px'}  id='mobileImage'/>
        </div>
    )
}

export default Hero_img