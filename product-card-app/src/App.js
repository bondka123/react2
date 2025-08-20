// src/App.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

// Change ton prénom ici
const firstName = "Sophie"; // Laisse vide pour tester le cas sans prénom

function App() {
  return (
    <Container className="my-5 d-flex flex-column align-items-center">
      <Card style={{ width: '22rem' }} className="shadow-lg border-primary">
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        <h5>Hello, {firstName ? firstName : "there"}!</h5>
        {firstName && (
          <img
            src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
            alt="Welcome"
            style={{ width: '150px', marginTop: '10px' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
