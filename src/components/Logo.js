import styled from "styled-components";
import zapLogo from "../assets/image.svg";


export default function Logo(){
    return (
        <LogoHeader>
            <img src={zapLogo} />
            <LogoTitle>ZapRecall</LogoTitle>
        </LogoHeader>
    );
}

const LogoHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 40px;
    width: 100%;
`;

const LogoTitle = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
    color: white;

    margin-left: 20px;
`;