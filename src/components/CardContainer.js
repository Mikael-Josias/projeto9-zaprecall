import styled from "styled-components";

import cards from "../cards";

import Card from "./Card";

export default function CardContainer(){

    return (
        <Main>
            <ul>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
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