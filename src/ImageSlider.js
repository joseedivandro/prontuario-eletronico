import { useState } from "react";
import styled from "styled-components";


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slidesWithSelection = slides.map((slide, index) => ({
    ...slide,
    selected: index === currentIndex,
  }));

  const SlideWithBackground = styled(Slide)`
    background-image: url(${slides[currentIndex].url});
  `;

  return (
    <Slider>
      <div>
        <LeftArrow onClick={goToPrevious}>❰</LeftArrow>
        <RightArrow onClick={goToNext}>❱</RightArrow>
      </div>
      <SlideWithBackground>
        <DotsContainer>
          {slidesWithSelection.map((slide, slideIndex) => (
            <Dot
              key={slideIndex}
              selected={slideIndex === currentIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              
            </Dot>
          ))}
        </DotsContainer>
      </SlideWithBackground>
    </Slider>
  );
};

export default ImageSlider;

const Slide = styled.div`
  min-width: 70vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  font-size: 45px;
  color: #fff;
  z-index: 1;
  cursor: pointer;
`;

const Slider = styled.div`
  position: relative;
  height: 100%;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 35%;
`;

const Dot = styled.div`
  width: 15px;
  height:15px;
  display: flex;
  padding: -10px 3px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  margin-left: 7px;
  background-color: ${(props) => (props.selected ? "white" : "transparent")};
  border: 1px solid white;
  border-radius:25px;
`;
