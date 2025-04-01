// import { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';
// // import { useEffect } from 'react';


// function App() {
//   const [jokes, setJokes] = useState([]);

//   useEffect(() => {
//     axios('/api/jokes ')
//     .then((response) => {
//       setJokes(response.data)
//     }) 
//       .catch((error) => {
//         console.log(error);
        
//       })
//   });

//   return (
//     <>
//       <h1>Chai aur Full Stack</h1>
//       <p>JOKES: {jokes.length}</p>

//       {
//         jokes.map(joke => (
//         <div key={joke.id}>
//           <h3>{joke.title}</h3>
//           <p>{joke.content}</p>
//         </div>
//       )
//       )}
//     </>
//   );
// }

// export default App;

// ?!342342352435345454524543234534rdfgjkdsjdcdsgj

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setJokes(Array.isArray(data) ? data : []))
      .catch(err => {
        console.error('Error fetching jokes:', err);
        setError('Failed to load jokes. Please try again later.');
      });
  }, []);

  return (
    <>
      <h1>Chai aur Full Stack</h1>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>Jokes: {jokes.length}</p>}
      {jokes.map(joke => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;




