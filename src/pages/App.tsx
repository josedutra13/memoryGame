import CardCustom from 'components/Card';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { CardType, createBoard } from 'utils/cards';
import {ModalStyle} from 'pages/AppStyle';
// import web from 'assets/imgs/Web.png';

function App() {
  const timeout = 1000;
  const [cards, setCards] = useState<CardType[]>(createBoard().sort(() => 0.5 - Math.random()));
  const [firstCard, setfirstClickedCard] = useState<undefined | CardType>(undefined);
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [lockBoard, setLockBoard] = useState(false);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      setGameWon(true);
    }
  },
    [cards.length, matchedPairs]
  )

  function refreshPage() {
    window.location.reload();
  }


  const handleCardClick = (currentClickedCard: CardType) => {

    if(lockBoard) {
      return
    };
    
    //Virar cartas
    setCards(cards.map(
      card =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
    ));

    //Salvar a primeira carta
    if (!firstCard) {
      setfirstClickedCard({ ...currentClickedCard! })
      return;
    }
    
    setLockBoard(true)
    //Verificar se as cartas são iguais
    if (firstCard.frontImage === currentClickedCard.frontImage) {
      setMatchedPairs(match => match + 1);
      setCards(cards.map(
        card =>
          card.frontImage === currentClickedCard.frontImage || card.frontImage === firstCard.frontImage
            ? { ...card, flipped: true, clickable: false }
            : card
      ))
      setfirstClickedCard(undefined);
      setLockBoard(false);
      return;
    }
    
    
    //Caso sejam diferentes
    setTimeout(() => {
      
      setCards(cards.map(
        card =>
          card.id === firstCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
      ))
      setLockBoard(false)
    }, timeout);

    setfirstClickedCard(undefined);
  }



  return (
    <React.Fragment>
      <h1>jogo da memoria</h1>
      <Container>

       
          <Modal show={gameWon} centered>
          <ModalStyle>
            <Modal.Header>
              <Modal.Title>Memoria em dia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Parabéns, você terminou esse jogo da memória. reembarelhe e jogue novamente!!
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={refreshPage}>
                Jogar Novamente
              </Button>
            </Modal.Footer>
          </ModalStyle>
          </Modal>
        

        <Row >
          {cards.map(card => (
            <Col key={card.id}>
              <CardCustom card={card} callback={handleCardClick} />
            </Col>))}
        </Row>
      </Container>

    </React.Fragment>
  );
}

export default App;
