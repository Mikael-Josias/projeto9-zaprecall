import styled from "styled-components";
import "./styles/fonts.css";
import Logo from "./components/Logo";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <StyledApp>
      <GlobalStyle/>
      <AppContainer>
        <Logo/>
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
  width: 375px;
`;