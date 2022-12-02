import styled from "styled-components";

import {CardContextOne, CardContextTwo} from "./CardContext";

export default function Card(props){
    const {index} = props;
    const {cardInfo} = props;
    console.log(cardInfo);
    return (
        <StyledCard>
            {!cardInfo.open? <CardContextOne index={index}/> : <CardContextTwo/>}
        </StyledCard>
    );
}

const StyledCard = styled.li`
    background-color: white;
    border-radius: 5px;
    margin: 0 auto 25px auto;
    min-height: 65px;
    min-width: 300px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;