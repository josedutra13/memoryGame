import { CardType } from 'utils/cards';
import { StyleCard } from 'components/Card.styles';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
}


const CardCustom: React.FC<Props> = ({ card, callback }) => {
  
  const handleClick = () => {
    if (card.clickable) callback(card)
  }

  return (
    <StyleCard flipped={card.flipped}>
      <div onClick={handleClick} className='memory-card'>
        <div id='front'><img src={card.frontImage} alt="front" /></div>
        <div id='back' ><img src={card.backImage} alt="back" /></div>
      </div>
    </StyleCard>
  )
}

export default CardCustom;


