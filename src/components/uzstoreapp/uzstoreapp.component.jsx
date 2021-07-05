import React from 'react'
import {Carousel} from 'react-bootstrap'

import './uzstoreapp.styles.scss';


export default function UzstoreApp() {
 





  return (
    <div className='uzstoreapp__container shadow__container' id='uzstoreapp'>
     <div className="uzstoreapp__header">
  <Carousel fade  autoPlay={true} interval={1000}>
  <Carousel.Item style={{width:300, height:300}}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fposter%2Fphoto_2021-06-28_19-16-11.jpg?alt=media&token=3bbc9671-25c9-4de2-92c1-57de7be1436d"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{width:300, height:300}}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fposter%2Fphoto_2021-06-28_19-16-12%20(2).jpg?alt=media&token=4f0f8b1a-6e10-4305-a998-9d90a4184770"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item  style={{width:300, height:300}}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fposter%2Fphoto_2021-06-28_19-16-07.jpg?alt=media&token=08b58c72-70b3-4493-9d8c-4a19c39aa2e1"
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item  style={{width:300, height:300}}>
    <img
      className="d-block w-100"
      src="https://firebasestorage.googleapis.com/v0/b/uzstore.appspot.com/o/images%2Fposter%2Fphoto_2021-06-28_19-16-10%20(2).jpg?alt=media&token=082fbcfe-1454-4f8e-a6d0-53555c542c15"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
         </div>
      
     <div className="uzstoreapp__info">
        <h2 className='uzstoreapp__header'><span className='uzstoreapp__header-underlay'>UZSTOREAPP</span></h2>
         <p className="uzstoreapp__text">
             The application was built to control the e-commerce website of <a href="https://uzstore.firebaseapp.com" style={{color:'var(--main-color)'}}>UZSTORE</a>.
             The app was built in  <strong>React Native</strong>  using <strong>Firebase</strong>, <strong>React native navigations</strong>  etc.

         </p>
     </div>

    </div>

  )
}
