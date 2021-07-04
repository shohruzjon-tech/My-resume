import React from 'react'


import './address.styles.scss';



const  AddressComponent=()=> {



    return (
        <div className="address">
            <h2 className='adddress__title'><span  className='adddress__title-container'>Info</span></h2>
            <ul className="address__List">
                <li><span className='address__detail'>Address</span>:  Warsaw, Poland</li>
                <li><span className='address__detail'>Phone</span>:   +48602117560</li>
                <li><span className='address__detail'>Email </span>:  abdivakilov1981@gmail.com </li>
                <li><span className='address__detail'>Skype</span>:   live:.cid.7e2a6c9e285cd5fa</li>
            </ul>
        </div>
    )
}







export default AddressComponent;