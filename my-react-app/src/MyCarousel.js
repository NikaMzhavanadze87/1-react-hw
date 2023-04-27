import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MyCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.desktopItems || 3,
      slidesToSlide: props.desktopItems || 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: props.tabletItems || 2,
      slidesToSlide: props.tabletItems || 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: props.mobileItems || 1,
      slidesToSlide: props.mobileItems || 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={props.swipeable || true}
      draggable={props.draggable || true}
      showDots={props.showDots || true}
      infinite={props.infinite || true}
      autoPlay={props.autoPlay || true}
      autoPlaySpeed={props.autoPlaySpeed || 2000}
      keyBoardControl={props.keyBoardControl || true}
      customTransition={props.customTransition || 'all .5'}
      transitionDuration={props.transitionDuration || 500}
      containerClass={props.containerClass || 'carousel-container'}
      removeArrowOnDeviceType={props.removeArrowOnDeviceType || ['tablet', 'mobile']}
      dotListClass={props.dotListClass || 'custom-dot-list-style'}
      itemClass={props.itemClass || 'carousel-item-padding-40-px'}
    >
      {props.items.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
