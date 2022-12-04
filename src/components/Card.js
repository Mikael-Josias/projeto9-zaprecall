import { useState } from "react";
import styled from "styled-components";

import {CardContextOne, CardContextTwo} from "./CardContext";

export default function Card(props){

    const responseValues = {
        notResponded: 0,
        correctZap: 1,
        almostCorrect: 2,
        incorrectAnswer: 3
    };

    const [open, setOpen] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [cardAnswer, setCardAnswer] = useState(responseValues.notResponded);
    
    const {index} = props;
    const {cardInfo} = props;
    const {cardCounter, setCardCounter} = props;

    return (
        <StyledCard open={open} flipped={flipped}>
            {!open? <CardContextOne index={index} flipped={flipped} setOpen={setOpen} cardAnswer={cardAnswer} responseValues={responseValues}/> : <CardContextTwo cardInfo={cardInfo} flipped={flipped} setOpen={setOpen} setFlipped={setFlipped} setCardAnswer={setCardAnswer} responseValues={responseValues} cardCounter={cardCounter} setCardCounter={setCardCounter}/>}
        </StyledCard>
    );
}

const StyledCard = styled.li`
    background-color: white;
    border-radius: 5px;
    margin: 0 auto 25px auto;
    min-height: 65px;
    max-height: ${props => !props.open? "65px" : "1000px"};
    width: 300px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transition: 5s;
    transition: transform 0.4s ease-out;
    transform-style: preserve-3d;
    transform: ${props => props.flipped? "rotateY(180deg)" : "rotateY(0deg)"};
`;