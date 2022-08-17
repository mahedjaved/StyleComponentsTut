import styled from "styled-components";

// Create a tiitle component taht renders <h1> tag
export const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

//  A watrapper component that will render a <section> tag with styling infolved
export const Wrapper = styled.section`
    padding: 4em;
    background; papayawhip;
`;

// a button conditioned SComp renderer
export const Button = styled.button`
	background: ${(props) => (props.backg ? "white" : "palevioletred")};
	color: ${(props) => (props.color ? "white" : "palevioletred")};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;
