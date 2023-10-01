import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Webpack"
        imageUrl="./images/dog.jpg"
        description="Webpack is een populaire JavaScript-modulebundelaar die helpt bij het optimaliseren en bundelen van de assets van je project voor efficiënt laden in webtoepassingen."
      />

      <Card
        title="Babel"
        imageUrl="./images/cat.jpg"
        description="Babel is een JavaScript-compiler waarmee je moderne JavaScript-code kunt schrijven en converteren naar oudere versies, om zo compatibiliteit met verschillende webbrowsers te waarborgen."
      />

      <Card
        title="NPM"
        imageUrl="./images/rabbit.jpg"
        description="NPM (Node Package Manager) is een pakketbeheerder voor JavaScript waarmee ontwikkelaars eenvoudig herbruikbare codepakketten kunnen beheren en delen."
      />

      <Card
        title="JSX"
        imageUrl="./images/hamster.jpg"
        description="JSX is een syntaxisuitbreiding voor JavaScript, vaak gebruikt met React, waarmee de structuur van gebruikersinterfaces op een meer declaratieve en leesbare manier kan worden beschreven."
      />
    </div>
  );
}

export default App;