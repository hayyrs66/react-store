import React from 'react'
import style from './style';
import {
  Hero,
  Header,
  Brand, 
  HotCategory, 
  Products, 
  BrandBanner, 
  SliderProducts, 
  Newsletter, 
  Footer
} from './components';

const App = () => {
  return (
    <>
      <div className={style.contenedorAncho}>
        <Header />
        <Hero />
      </div>

      <div className={style.flexCentrado}>
        <div className={style.contenedorAncho}>
          <Brand />
          <HotCategory />
          <Products />
          <BrandBanner />
          <SliderProducts />
          <Newsletter /> 
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
