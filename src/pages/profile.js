
/* This is the "Profile" page of my web application that allows user to see the profile with the profile picture, biography and uploaded photos */


import React, { useState } from 'react';

import "./profile.css";

const Profile = () => {
  const [enlargedImgSrc, setEnlargedImgSrc] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [extraPhotos, setExtraPhotos] = useState([]);

  const handleImgClick = (src, index, extraPhotos) => {
    setEnlargedImgSrc(src);
    setSelectedItemIndex(index);
    setExtraPhotos(extraPhotos);
  };
  

  const handleModalClose = () => {
    setEnlargedImgSrc('');
    setSelectedItemIndex(-1);
    setExtraPhotos([]);
  };

  

  

  

  const items = [        {            src: 'https://secure.img1-cg.wfcdn.com/im/09668013/resize-h800-w800%5Ecompr-r85/6437/64373371/Bulter+Upholstered+Armchair.jpg',            description: 'Livingroom Chair',            price: '$50',            extraPhotos: [                'https://secure.img1-cg.wfcdn.com/im/79462382/resize-h800-w800%5Ecompr-r85/6437/64373350/Bulter+Upholstered+Armchair.jpg',                'https://www.example.com/image3.jpg',                'https://www.example.com/image4.jpg'            ]
    },
    
    


    {
      src: 'https://skiinglab.com/wp-content/uploads/2021/02/buying-used-skis.jpg?ezimgfmt=ng%3Awebp%2Fngcb7%2Frs%3Adevice%2Frscb7-1',
      description: 'Skis',
      price: '$100 each pair',
      extraPhotos: [
        'https://cdn.shopify.com/s/files/1/0223/3233/products/dynastar-speed-team-kids-race-skis-with-look-kid-4-bindings-used_1000x1000.jpg?v=1675888244',
        'https://cdn.shopify.com/s/files/1/0223/3233/products/blizzard-worldcup-gs-race-kids-race-skis-with-marker-bindings-used_1000x1000.jpg?v=1641420549',
      ]
    },
    {
      src: 'https://secure.img1-fg.wfcdn.com/im/95002389/resize-h800-w800%5Ecompr-r85/1255/125553045/48%27%27+Faux+Foliage+Grass+in+Cement+Pot.jpg',
      description: 'Plant',
      price: '$10',
      extraPhotos: [
        'https://secure.img1-fg.wfcdn.com/im/34473083/resize-h800-w800%5Ecompr-r85/1255/125517575/48%27%27+Faux+Foliage+Grass+in+Cement+Pot.jpg',
      ]
    },

    
  ];

  const filteredItems = items.filter(item =>
    item.description.toLowerCase().includes(searchQuery)
  );


  return (

    
    <div className="profile-wrapper">
      <div className="profile-container"></div>
      <header>
      
        <div className="profile-container">
          <p>Lana Zbasnik</p>
          <p>She/Her/Hers</p>
          <p>Student-Athlete</p>
          <p>Alpine skiing</p>
          <p>Sr. / Business Information Systems</p>
          <a href="mailto:lz0613@westminstercollege.edu">
            lz0613@westminstercollege.edu </a>
        </div>
        
      </header>
      <br></br>
        <br></br>
      {/* Render enlarged image at the beginning of the page */}
      {enlargedImgSrc && (
        <div className="enlarged-img-modal" onClick={handleModalClose}>
          <img src={enlargedImgSrc} alt="Enlarged Item" />
          <div className="extra-photos">
            {extraPhotos.map((photo, index) => (
              <img src={photo} key={index} alt={`Extra Photo ${index}`} />
            ))}
          </div>
        </div>
      )}
      <div className="grid-container">
        {filteredItems.map((item, index) => (
          <div className="item" key={index} onClick={() => handleImgClick(item.src, index, item.extraPhotos)}>
            <img src={item.src} alt={`Item ${index}`} />
            <div className="item-details">
              <h3>Description: {item.description}</h3>
              <p>Price: {item.price}</p>
            
            </div>
          </div>
        ))}
       
        <div className="profile-picture">
          <img
            src="https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/westminstergriffins.com/images/2022/3/8/Zbaskin_AllTeamsDay2_34.jpg"
            alt="Profile Picture"
          />
        </div>
       
      </div>
      </div>
   
  );
  
  };
  export default Profile;
  