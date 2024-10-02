import React from 'react';
// import contacts from '../Contact';

function Card({ name, imgURL, phone, email }) {
   
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgURL} alt='' />
      <p>{phone}</p>
      <p>{email}</p>
      {/* 'https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg' */}
    </div>
  )
}

export default Card