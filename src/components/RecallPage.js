import styled from "styled-components";

import CardContainer from "./CardContainer";
import Logo from "./Logo";

export default function RecallPage(){
    return (
        <ZapRecallContainer>
            <Logo/>
            <CardContainer/>
        </ZapRecallContainer>
    );
}

const ZapRecallContainer = styled.div`
    margin: auto;
    min-height: 100vh;
    width: 375px;
`;