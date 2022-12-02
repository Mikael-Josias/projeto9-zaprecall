import styled from "styled-components";

import cards from "../cards";

import Card from "./Card";

export default function CardContainer(){
    return (
        <Main>
            <ul>
                {cards.map((c, i) => <Card index={i + 1} key={i + 1} cardInfo={c}/>)}
            </ul>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;