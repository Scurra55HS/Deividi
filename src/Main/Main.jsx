import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button, LeftImage, MainSection, RightText } from '../Styles/Main';


const Main = () => {
    return (
      <MainSection>
        <LeftImage>
          <img src="https://via.placeholder.com/600x400" alt="Imagem ilustrativa" />
        </LeftImage>
  d
        <RightText>
          <h2>Seja bem-vindo o ao Agent Log<br />sua central de atendimentos!</h2>
          <Button>
            Atendimentos
            <FaArrowUp size={18} />
          </Button>
        </RightText>
      </MainSection>
    );
  };
  
  export default Main;