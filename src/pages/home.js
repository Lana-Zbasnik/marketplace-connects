/* This is the "Home" page of my web application that allowes user to see the photos of the images and search for them */



import React, { useState } from 'react';
import './home.css';

const Marketplace = () => {
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handlePrevItemClick = () => {
    setSelectedItemIndex(selectedItemIndex - 1);
  };

  const handleNextItemClick = () => {
    const nextIndex = selectedItemIndex + 1;
    if (nextIndex < extraPhotos.length) {
      setEnlargedImgSrc(extraPhotos[nextIndex]);
      setSelectedItemIndex(nextIndex);
    }
  };

  const items = [        {            src: 'https://secure.img1-cg.wfcdn.com/im/09668013/resize-h800-w800%5Ecompr-r85/6437/64373371/Bulter+Upholstered+Armchair.jpg',            description: 'Livingroom Chair',            price: '$50',            extraPhotos: [                'https://secure.img1-cg.wfcdn.com/im/79462382/resize-h800-w800%5Ecompr-r85/6437/64373350/Bulter+Upholstered+Armchair.jpg',                'https://www.example.com/image3.jpg',                'https://www.example.com/image4.jpg'            ]
    },
    
    


    {
      src: 'https://secure.img1-cg.wfcdn.com/im/00354201/resize-h800-w800%5Ecompr-r85/1305/130522269/Hanni+49.625%27%27+Desk.jpg',
      description: 'Livingroom Desk',
      price: '$30',
      extraPhotos: [
        'https://secure.img1-cg.wfcdn.com/im/54745442/resize-h800-w800%5Ecompr-r85/1305/130522220/Hanni+49.625%27%27+Desk.jpg',
        'https://secure.img1-cg.wfcdn.com/im/49604961/resize-h800-w800%5Ecompr-r85/1305/130522283/Hanni+49.625%27%27+Desk.jpg',
      ]
    },
    {
      src: 'https://secure.img1-cg.wfcdn.com/im/31829627/resize-h800-w800%5Ecompr-r85/2137/213717467/63%22+Floor+Lamp.jpg',
      description: 'Livingroom Lamp',
      price: '$10',
      extraPhotos: [
        'https://secure.img1-cg.wfcdn.com/im/25060364/resize-h800-w800%5Ecompr-r85/2312/231224939/63%22+Floor+Lamp.jpg',
      ]
    },
    {
      src: 'https://secure.img1-fg.wfcdn.com/im/92403047/resize-h445%5Ecompr-r85/2313/231320363/Assad+Full+70.5%27%27+Wide+Tufted+Back+Convertible+Sofa.jpg',
      description: 'Couch',
      price: '$100',
      extraPhotos: [
        'https://secure.img1-fg.wfcdn.com/im/26455786/resize-h445%5Ecompr-r85/2313/231320366/Assad+Full+70.5%27%27+Wide+Tufted+Back+Convertible+Sofa.jpg',
      ]
    },
    {
      src: 'https://secure.img1-fg.wfcdn.com/im/61979376/resize-h800-w800%5Ecompr-r85/1368/136893522/Casella+Flatweave+Jute%2FSisal+Beige+Rug.jpg',
      description: 'Rug',
      price: '$20',
      extraPhotos: [
        'https://secure.img1-fg.wfcdn.com/im/15193739/resize-h800-w800%5Ecompr-r85/1128/112815936/Casella+Flatweave+Jute%2FSisal+Beige+Rug.jpg',
      ]
    },
    {
      src: 'https://secure.img1-fg.wfcdn.com/im/06295641/resize-h800-w800%5Ecompr-r85/2162/216200924/People+Skiing+-+Wrapped+Canvas+Graphic+Art.jpg',
      description: 'Poster',
      price: '$5',
      extraPhotos: [
        'https://secure.img1-fg.wfcdn.com/im/68716125/resize-h800-w800%5Ecompr-r85/1809/180988411/People+Skiing+-+Wrapped+Canvas+Graphic+Art.jpg',
      ]
    },
    {
      src: 'https://skiinglab.com/wp-content/uploads/2021/02/buying-used-skis.jpg?ezimgfmt=ng%3Awebp%2Fngcb7%2Frs%3Adevice%2Frscb7-1',
      description: 'Skis',
      price: '$100',
      extraPhotos: [
        'https://cdn.shopify.com/s/files/1/0223/3233/products/dynastar-speed-team-kids-race-skis-with-look-kid-4-bindings-used_1000x1000.jpg?v=1675888244',
        'https://cdn.shopify.com/s/files/1/0223/3233/products/blizzard-worldcup-gs-race-kids-race-skis-with-marker-bindings-used_1000x1000.jpg?v=1641420549',
      ]
    },
    {
      src: 'https://secure.img1-fg.wfcdn.com/im/43623507/resize-h800-w800%5Ecompr-r85/7682/76821114/Hydrangea+Floral+Arrangement+in+Vase.jpg',
      description: 'Fake flowers',
      price: '$7',
      extraPhotos: [
        'https://secure.img1-fg.wfcdn.com/im/17291050/resize-h800-w800%5Ecompr-r85/7682/76821111/Hydrangea+Floral+Arrangement+in+Vase.jpg',
        'https://secure.img1-fg.wfcdn.com/im/83081869/resize-h800-w800%5Ecompr-r85/7682/76821103/Hydrangea+Floral+Arrangement+in+Vase.jpg',
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
    {
      src: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71b+qUJbedL._AC_SX679_.jpg',
      description: 'golf',
      price: '$100',
      extraPhotos: [
        'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71b+qUJbedL._AC_SX679_.jpg',
      ]
    },
  ];


  const filteredItems = items.filter(item =>
    item.description.toLowerCase().includes(searchQuery)
  );


  return (
    <div className="container">
      <header>
        <h1>Marketplace</h1>
        <input type="text" placeholder="Search for items" onChange={handleSearch} />
      </header>
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
              <a href="mailto:example@example.com">Connect</a>
            </div>
            
          </div>
      ))}
    </div>
    
  </div>
);
        }
export default Marketplace;