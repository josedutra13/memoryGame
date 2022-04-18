import styled from 'styled-components';

type Props = {
  flipped: boolean;
};

export const StyleCard = styled.div<
Props>`
 width: 160px;
 height: 160px;
 margin: 10px;
 perspective: 700px;


  .memory-card {
    position: relative;
    width: 160px;
    height: 160px;
    margin: 5px;
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }

  .memory-card:active {
      transform: scale(0.97);
      transition: transform .2s;
    }
  }

  #front,
  #back {
    width: 160px;
    height: 160px;  
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: transform 0.5s;
    transform-style: preserve-3d;
    backface-visibility: hidden; 
  }


  #back {
    background: #2B0E11;
    border: 2px solid #EE9430;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px #B63C00;
    border-radius: 12px;
    transform: ${props => props.flipped ? "rotateY(180deg)" : "rotateY(0)" };
  }
  
  #front {
    background: #15181F;
    border-radius: 12px;
    transform: ${props => props.flipped ? "rotateY(360deg)" : "rotateY(180deg)" };
  }

`