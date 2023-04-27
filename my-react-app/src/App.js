import React from 'react';
import MyCarousel from './MyCarousel';

function App() {
  const imageUrls = [
    'https://images.pexels.com/photos/209644/pexels-photo-209644.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <div>
      <MyCarousel items={imageUrls} />
    </div>
  );
}

export default App;
