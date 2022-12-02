import { useState } from "react";
import styled from "styled-components";

import {CardContextOne, CardContextTwo} from "./CardContext";

export default function Card(props){

    const [open, setOpen] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const {index} = props;
    const {cardInfo} = props;
    
    return (
        <StyledCard open={open} flipped={flipped}>
            {!open? <CardContextOne index={index} cardInfo={cardInfo} setOpen={setOpen}/> : <CardContextTwo index={index} cardInfo={cardInfo} flipped={flipped} setFlipped={setFlipped}/>}
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