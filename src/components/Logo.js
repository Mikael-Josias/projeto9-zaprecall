import styled from "styled-components";
import zapLogo from "../assets/image.svg";


export default function Logo(){
    return (
        <Header>
            <img src={zapLogo} />
            <Title>ZapRecall</Title>
        </Header>
    );
}

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    width: 100%;
`;

const Title = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: 400;
    color: white;
    margin-left: 20px;
`;