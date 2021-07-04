import React from 'react'


import './location.styles.scss';



const   LocationComponent= () => {

    return (
        <div className='location__container'>
            <h2 className='location__title-container'><span className='location__title'>Location</span></h2>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.3842726801977!2d21.041554215943254!3d52.16370647032456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719329816e7888d%3A0x697e28fa2cfd8b8e!2sSGGW%20Dendriton%20Student%20House!5e0!3m2!1sen!2spl!4v1625425839296!5m2!1sen!2spl" width="100%" height="450" style={{border:'none'}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}




export default LocationComponent;