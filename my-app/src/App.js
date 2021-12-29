import './App.css';
import {Container} from "./components/styles/Container.styled"
import {Card} from "./components/styles/Card.styled"
import {Title} from "./components/styles/Title.styled"
import {Paragraph} from "./components/styles/Paragraph.styled"
function App() {
  return (
    <Container>
      <Card>
        <Title>HEllO WORLD</Title>
        <Paragraph>This is a paragrapgh</Paragraph>
      </Card>
    </Container>
  );
}

export default App;
