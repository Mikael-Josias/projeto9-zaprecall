import styled from "styled-components";
import Card from "./Card";

export default function CardContainer(){
    return (
        <StyledCardContainer>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </StyledCardContainer>
    );
}

const StyledCardContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    width: 100%;

    & :nth-child(n+1){
        margin-bottom: 10px;
    }
`;