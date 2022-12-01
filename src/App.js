import styled from "styled-components";
import "./styles/fonts.css";
import Logo from "./components/Logo";
import GlobalStyle from "./styles/GlobalStyle";
import CardContainer from "./components/CardContainer";

export default function App() {
  return (
    <StyledApp>
      <GlobalStyle/>
      <AppContainer>
        <Logo/>
        <CardContainer/>
      </AppContainer>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  background-color: #FB6B6B;

  height: 100vh;
  width: 100%;
`;

const AppContainer = styled.div`
  margin: auto;
  height: 100%;
  width: 375px;
`;