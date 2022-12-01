import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <StyledApp>
      <GlobalStyle/>
      <AppContainer>
        
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