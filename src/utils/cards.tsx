import blackMagicW  from 'assets/imgs/cardsImgs/blackMagicW.png';
import  blackmagic from 'assets/imgs/cardsImgs/blackmagic.png';
import enigma  from 'assets/imgs/cardsImgs/enigma.png';
import obelisc from 'assets/imgs/cardsImgs/obelisc.png';
import karibo from 'assets/imgs/cardsImgs/karibo.png';
import dragonRa from 'assets/imgs/cardsImgs/dragonRa.png';
import blueEyesDragon from 'assets/imgs/cardsImgs/blueEyesDragon.png';
import skyDragon from 'assets/imgs/cardsImgs/skyDragon.png';
import redEye from 'assets/imgs/cardsImgs/redEye.png';

import interrogation from 'assets/imgs/cardsImgs/interrogation.png';


export type CardType = {
    id: string;
    backImage: string;
    frontImage: string;
    clickable: boolean;
    flipped: boolean;
};


const cards=[
    blackMagicW,
    blackmagic,
    enigma,
    obelisc,
    karibo,
    dragonRa,
    blueEyesDragon,
    skyDragon,
    redEye
];

export const createBoard = (): CardType[] =>
 [...cards, ...cards].map((card,i) =>({
   id: `card${i}`,
   backImage: interrogation,
   frontImage: card,
   flipped: false,
   clickable: true,
}));
