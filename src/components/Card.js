import styled from "styled-components";

export default function Card(){
    return (
        <>
            <StyledCard>
                <span>Pergunta 1</span>
                <ion-icon name="play-outline"></ion-icon>
            </StyledCard>
        </>
    );
}

const StyledCard = styled.div`
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
    font-weight: 700;

    background-color: white;
    border-radius: 5px;

    padding: 20px 20px 20px 10px;
    margin: 0 auto;
    width: 300px;
`;