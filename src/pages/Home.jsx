import Header from '../static/Header'
import Text from '../components/Text/text'
import Hero_img from '../components/HeroImage/Hero-img'
import './Home.css'
// import Footer from '../static/Footer'

const Home = ()=>{
    return (
        <>
        <Header />
        <div className='bodySection'>
        <Text />
        <Hero_img />
        </div>
        {/* <Footer /> */}
        
        </>
    )
}

export default Home