import styled from "styled-components";
import { useState } from "react";

import "./styles/fonts.css";
import GlobalStyle from "./styles/GlobalStyle";

import RecallPage from "./components/RecallPage";
import HomePage from "./components/HomePage";

export default function App() {

	const [statusPage, setStatusage] = useState(true);

	return (
    	<Container>
			<GlobalStyle/>
			{statusPage? <RecallPage/> : <HomePage/>}
	    </Container>
	);
}

const Container = styled.div`
	background-color: #FB6B6B;
	min-height: 100vh;
	width: 100%;
`;