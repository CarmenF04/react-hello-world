import { render, screen } from '@testing-library/react'; //Deze functies worden gebruikt om React-componenten te renderen en interactie mee te hebben tijdens het testen.
import App from './App'; //Hier importeer je de App-component die je wilt testen. Het veronderstelt dat er een bestand genaamd "App.js" in dezelfde directory als dit testbestand aanwezig is.

test('renders learn react link', () => { //Dit definieert een testgeval met een beschrijving ('renders learn react link') en een functie die de eigenlijke test uitvoert.
  render(<App />); //Hier render je de App-component. Dit betekent dat de App-component wordt geladen zoals het in de testomgeving zou worden weergegeven.
  const linkElement = screen.getByText(/learn react/i); //Hier zoek je naar een element in de gerenderde App-component dat de tekst "learn react" bevat, ongeacht de lettergrootte. Het resultaat wordt opgeslagen in de variabele linkElement.
  expect(linkElement).toBeInTheDocument(); //Hier gebruik je de expect-functie om te controleren of linkElement (het element met de tekst "learn react") in de DOM aanwezig is. Als dat zo is, zal de test slagen. Anders zal de test mislukken.
});