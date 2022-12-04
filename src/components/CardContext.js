import { useState } from "react";
import styled from "styled-components";
import flipSvg from "../assets/Vector.svg";

export function CardContextOne(props){

    const {index} = props;
    const {setOpen} = props;
    const {cardAnswer} = props;
    const {flipped} = props;
    const {responseValues} = props;
    
    let textColor = "black";
    let iconName = "play-outline";

    if (cardAnswer == 1) {
        textColor = "#2FBE34";
        iconName = "checkmark-circle";
    }else if (cardAnswer == 2) {
        textColor = "#FF922E";
        iconName = "help-circle";        
    }else if (cardAnswer == 3) {
        textColor = "#FF3030";
        iconName = "close-circle";
    }


    function openCard(){
        if (cardAnswer == 0) {
            setOpen(true);   
        }
    }

    return (
        <ContextOne flipped={flipped}>
            <ContextSpanContent context={1} answer={cardAnswer} colored={textColor}>Pergunta {index}</ContextSpanContent>
            <ContextIcon colored={textColor}>
                <ion-icon name={iconName} onClick={openCard}></ion-icon>
            </ContextIcon>
        </ContextOne>
    );
}

export function CardContextTwo(props){
    const {flipped, setFlipped} = props;
    const {cardInfo} = props;
    const {setOpen} = props;
    const {setCardAnswer} = props;
    const {responseValues} = props;
    const {cardCounter, setCardCounter} = props;
    
    function changeCardAnswerValue(e){
        cardInfo.response = e.value;
        setCardCounter(cardCounter + 1);
        setCardAnswer(e.value);
        setOpen(false);
    }

    return (
        <ContextTwo>
            <CardUpFace flipped={flipped}>
                <ContextSpanContent context={2} answer={0}>{cardInfo.question}</ContextSpanContent>
                <ContextTwoOptions>
                    <ContextIcon>
                        <img src={flipSvg} alt="flip card" onClick={() => setFlipped(true)}/>
                    </ContextIcon>
                </ContextTwoOptions>
            </CardUpFace>
            <CardDownFace flipped={flipped}>
                <ContextSpanContent context={2} answer={0}>{cardInfo.answer}</ContextSpanContent>
                <ContextTwoOptions>
                    <ContextTwoOptionsButton btnColor="#FF3030" value={responseValues.incorrectAnswer} onClick={(e) => changeCardAnswerValue(e.target)}>Não lembrei</ContextTwoOptionsButton>
                    <ContextTwoOptionsButton btnColor="#FF922E" value={responseValues.almostCorrect} onClick={(e) => changeCardAnswerValue(e.target)}>Quase não lembrei</ContextTwoOptionsButton>
                    <ContextTwoOptionsButton btnColor="#2FBE34" value={responseValues.correctZap} onClick={(e) => changeCardAnswerValue(e.target)}>Zap!</ContextTwoOptionsButton>
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
    transform: ${props => props.flipped? "rotateY(180deg)" : "rotateY(1800deg)"};
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
    text-decoration: ${props => props.answer == 0? "" : "line-through"};
    color: ${props => props.colored !== "black"? props.colored : "black"};
`;

const ContextIcon = styled.div`
    font-size: 20px;
    color: ${props => props.colored !== "black"? props.colored : "black"};
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