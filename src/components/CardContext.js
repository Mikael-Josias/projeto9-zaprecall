import { useState } from "react";
import styled from "styled-components";
import flipSvg from "../assets/Vector.svg";

export function CardContextOne(props){

    const {index} = props;
    const {cardInfo} = props;
    const {setOpen} = props;

    function openCard(){
        setOpen(true);
    }

    return (
        <ContextOne>
            <ContextSpanContent context={1}>Pergunta {index}</ContextSpanContent>
            <ContextIcon>
                <ion-icon name="play-outline" onClick={openCard}></ion-icon>
            </ContextIcon>
        </ContextOne>
    );
}

export function CardContextTwo(props){
    const {flipped, setFlipped} = props;
    const {index} = props;
    const {cardInfo} = props;

    return (
        <ContextTwo>
            <CardUpFace flipped={flipped}>
                <ContextSpanContent context={2}>{cardInfo.question}</ContextSpanContent>
                <ContextTwoOptions>
                    <ContextIcon>
                        <img src={flipSvg} alt="flip card" onClick={() => setFlipped(true)}/>
                    </ContextIcon>
                </ContextTwoOptions>
            </CardUpFace>
            <CardDownFace flipped={flipped}>
                <ContextSpanContent context={2}>{cardInfo.answer}</ContextSpanContent>
                <ContextTwoOptions>
                    <ContextTwoOptionsButton btnColor="#FF3030">Não lembrei</ContextTwoOptionsButton>
                    <ContextTwoOptionsButton btnColor="#FF922E">Quase não lembrei</ContextTwoOptionsButton>
                    <ContextTwoOptionsButton btnColor="#2FBE34">Zap!</ContextTwoOptionsButton>
                </ContextTwoOptions>
            </CardDownFace>
        </ContextTwo>
    );
}

const ContextOne = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 20px 10px;
    height: 100%;
    width: 100%;
`;

const ContextTwo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 10px;
    height: 100%;
    width: 100%;
`;

const CardUpFace = styled.div`
    display: ${props => props.flipped? "none": ""};
    height: 100%;
    width: 100%;

    div{
        justify-content: flex-end;
        padding-right: 5px;
    }
`;

const CardDownFace = styled.div`
    display: ${props => props.flipped? "": "none"};
    transform: rotateY(180deg);
    height: 100%;
    width: 100%;
`;

const ContextSpanContent = styled.span`
    font-family: 'Recursive', sans-serif;
    font-size: ${props => props.context === 1? "16px" : "18px"};
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

    margin-top: 20px;
    height: 40px;
    width: 100%;
`;

const ContextTwoOptionsButton = styled.button`
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: white;

    background-color: ${props => props.btnColor};

    border: none;
    border-radius: 5px;

    height: 100%;
    width: calc(33% - 7px);

    cursor: pointer;
`;