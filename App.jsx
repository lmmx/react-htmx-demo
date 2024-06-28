import React, { useEffect, useRef } from 'react';
import htmx from 'htmx.org';

function HTMXComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    // Initialize HTMX on the component
    htmx.process(divRef.current);

    // Cleanup function
    return () => {
      htmx.trigger(divRef.current, 'htmx:beforeCleanup');
      htmx.remove(divRef.current);
    };
  }, []);

  return (
    <div ref={divref}>
      <button 
        hx-get="https://api.chucknorris.io/jokes/random"
        hx-target="#joke-result"
        hx-trigger="click"
        hx-indicator="#loading"
      >
        Get Chuck Norris Joke
      </button>
      <div id="joke-result"></div>
      <div id="loading" class="htmx-indicator">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React App with HTMX Integration</h1>
      <HTMXComponent />
    </div>
  );
}

export default App;
