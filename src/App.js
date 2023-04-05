import ImageSlider from "./ImageSlider";
import styled from "styled-components";
import ResetStyled from "./ResetStyled";
import carrosel1 from "./img/carrosel1.png";
import carrosel2 from "./img/carrosel2.png";
import carrosel3 from "./img/carrosel3.png";
import carrosel4 from "./img/carrosel4.png";



const App = () => {
  const slides = [
    { url: carrosel1, title: "beach" },
    { url: carrosel2, title: "boat" },
    { url: carrosel3, title: "forest" },
    { url: carrosel4, title: "city" },

  ];

  return (
    
      <ContainerStyles>
        <ResetStyled/>
        <ImageSlider slides={slides} />
        <Login>
          <p>aaaaaaaa</p>
        </Login>
      
      </ContainerStyles>
     
  );
};

export default App;

const ContainerStyles = styled.div`
  display:flex;
  width: 100%;
  height: 100%;

`

const Login = styled.div`

background-color: red;
width:30vw;
`