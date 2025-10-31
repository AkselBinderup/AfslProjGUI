import './Hero.css'
import HeroImage from '../../assets/suitman.jpg'

export const Hero = () => {
  return (
    <>
        <div className='HeroDiv'>
            <div className='HeroText Left'>
                <h1 className='HeroTitle UpperCase'>Autumn deals</h1>
                <p className='HeroSubtitle UpperCase'>Save up to 70%</p>
            </div>
            <img src={HeroImage}/>
        </div>

    </>
  )
}
