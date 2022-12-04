import styled from "styled-components";

import Card from "./Card";

export default function CardContainer(props){
    const {cards} = props;
    const {cardCounter, setCardCounter} = props;

    return (
        <Main>
            <ul>
                {cards.map((c, i) => <Card index={i + 1} key={i + 1} cardInfo={c} cardCounter={cardCounter} setCardCounter={setCardCounter}/>)}
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