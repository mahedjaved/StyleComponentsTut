// import logo from "./logo.svg";
import "./App.css";
import { Title, Wrapper, Button } from "./Components/Example";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Wrapper>
					<Title>Hello World !</Title>
					<Button backg={true} color={false}>
						WhiteButton
					</Button>
					<Button backg={false} color={true}>
						PaleWhiteButton
					</Button>
				</Wrapper>
			</header>
		</div>
	);
}

export default App;
