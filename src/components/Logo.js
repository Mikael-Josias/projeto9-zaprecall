import styled from "styled-components";
import zapLogo from "../assets/image.svg";

export default function Logo(){
    return (
        <header>
            <img src={zapLogo} />
            <h1>ZapRecall</h1>
        </header>
    );
}