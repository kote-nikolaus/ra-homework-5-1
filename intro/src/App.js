import Card from './components/Card'
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <Card>
      <img src="..." class="card-img"></img>
      <div class='card-text'>
        <h2 class="card-title">Card title</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </Card>

    <Card>
      <div class='card-text'>
        <h2 class="card-title">Card title</h2>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </Card>
    </React.Fragment>
  );
}

export default App;
