import React from 'react';
import './App.css';

function App() {
  const copyToClipboard = () => {
    const connectionString = "connect 87.92.30.161:27015";
    navigator.clipboard.writeText(connectionString);
    alert('Connection details copied to clipboard!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>KlonkkuSauna</h1>
        <h3>Kansakunnan paskin publa jo vuodesta nakki ja muusi</h3>
      </header>
      <body>
      <div className='content-div'>
          <div className='content-inner-div'>
            <strong>87.92.30.161:27015</strong>
            <button className="connect-button" onClick={copyToClipboard}>
              Kopio liittymistiedot leikepöydälle
            </button>
          </div>
          <iframe 
            src="https://discord.com/widget?id=1179855166128795768&theme=dark" 
            width="350" 
            height="500" 
            allowTransparency="true" 
            frameBorder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Widget">
          </iframe>
        </div>
      </body>
    </div>
  );
}

export default App;