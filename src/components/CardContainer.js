import styled from "styled-components";
import Card from "./Card";
import {CardContextOne, CardContextTwo} from "./CardContext";

export default function CardContainer(){
    return (
        <StyledCardContainer>
            <Card>
                <CardContextOne/>
            </Card>
            <Card>
                <CardContextTwo/>
            </Card>
            <Card>
                <CardContextOne/>
            </Card>
            <Card>
                <CardContextOne/>
            </Card>
            <Card>
                <CardContextOne/>
            </Card>
            <Card>
                <CardContextOne/>
            </Card>
            <Card>
                <CardContextOne/>
            </Card>
            <Card>
                <CardContextOne/>
            </Card>
        </StyledCardContainer>
    );
}

const StyledCardContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    overflow: scroll;
`;