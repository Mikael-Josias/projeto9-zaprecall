import styled from "styled-components";

export function CardContextOne(){
    return (
        <ContextOne>
            <ContextSpanContent context={1}>Pergunta 1</ContextSpanContent>
            <ContextIcon>
                <ion-icon name="play-outline"></ion-icon>
            </ContextIcon>
        </ContextOne>
    );
}

export function CardContextTwo(){
    return (
        <ContextTwo>
            <ContextSpanContent context={2}>JSX é uma sintaxe para escrever HTML dentro do JS</ContextSpanContent>
            <ContextTwoOptions>
                <button>A</button>
                <button>B</button>
                <button>C</button>
            </ContextTwoOptions>
        </ContextTwo>
    );
}

const ContextOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    height: 100%;
    width: 100%;

`;

const ContextTwo = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 10px;
    height: 100%;
    width: 100%;
`;

const ContextSpanContent = styled.span`
    font-family: 'Recursive', sans-serif;
    font-weight: ${props => props.context === 1? "700" : "400"};
`;

const ContextIcon = styled.div`
    font-size: 20px;
    cursor: pointer;
`;

const ContextTwoOptions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    height: 40px;
    width: 100%;
`;