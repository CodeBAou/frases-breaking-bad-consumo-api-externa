import React,{useSate} from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [fraseBB, setfraseBB] = useState({});

  const GetFrase = async () => {

    //async await espera que la peticion fetch se complete y asi evitar utilizar then 2 veces
    const peticion= await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const res= peticion.json();

    res.then(resultado => 
      setfraseBB({
        author:resultado[0].author,
        quote:resultado[0].quote
      })
    );

  }

  return (
    <div className="App">
      <header className="App-header">

          <div className="titulo_content">

            <div className="BrBasup_content"><sup className="supStyle">35</sup><span className="destacar">Br</span></div>
            <span className="frase">eaking</span>
            <br/>
            <div className="BrBasup_content ajuste_frase2"><sup className="supStyle">56</sup><span className="destacar ajuste">Ba</span></div>
            <span className="frase">d</span>

          </div>

      </header>

      <div className="api_content">
            <div className="frase_content">
                <span className="author">  {fraseBB.author} <br/></span>
                <span className="quote">  {fraseBB.quote}</span>
            </div>
            <p className="api">Consulta Api : https://breaking-bad-quotes.herokuapp.com/v1/quotes</p>
            <button className="btn" onClick={GetFrase}>Frase</button>
      </div>

    </div>
  );
}

export default App;
