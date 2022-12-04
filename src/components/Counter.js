import { useState } from "react";
import styled from "styled-components";

export default function Counter(props){
    const {cards} = props;
    const {cardCounter} = props;


    return (
        <CounterContainer>
            <span>{`${cardCounter}/${cards.length} CONCLUÍDOS`}</span>
        </CounterContainer>
    );
}

const CounterContainer = styled.footer`
    text-align: center;
    background-color: white;
    padding: 25px 0;
    width: 100%;

    position: sticky;
    bottom: 0;

    span{
        font-family: 'Recursive', sans-serif;
    }
`;