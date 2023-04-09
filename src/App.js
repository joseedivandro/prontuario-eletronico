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
          <Container>
            <p>Login do Usuário</p>
            <button>Entrar com o Sabiá</button>
            <button>Criar conta no Sabiá</button>
            <h4>Saiba mais sobre o Sabiá</h4>
          </Container>
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
color: #1E71A3;
font-size: 30px;
display: flex;
align-items: center;
justify-content: center;
background-color:#EFF4F7;
width:30vw;
`

const Container = styled.div`

flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
width: 300px;
height: 300px;


button{
  margin-top: 40px;
  height: 30px;
  width: 200px;
}
h4{
  margin-top: 20px;
  font-size: 15px;
}
`