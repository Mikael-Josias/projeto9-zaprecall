import { useState } from "react";
import styled from "styled-components";
import cards from "../cards";

import CardContainer from "./CardContainer";
import Counter from "./Counter";
import Logo from "./Logo";

export default function RecallPage(){

    const [cardCounter, setCardCounter] = useState(0);

    return (
        <>
            <ZapRecallContainer>
                <Logo/>
                <CardContainer cards={cards} cardCounter={cardCounter} setCardCounter={setCardCounter}/>
            </ZapRecallContainer>
            <Counter cards={cards} cardCounter={cardCounter}/>
        </>
    );
}

const ZapRecallContainer = styled.div`
    margin: auto;
    min-height: 100vh;
    width: 375px;
`;