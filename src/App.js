import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import ItemsList from './Components/Items/ItemsList';


const App = () => {
  const [getItems, setGetItems] = useState(null);

  useEffect(() =>{
    fetch('http://localhost:4000/items')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setGetItems(data);
    })
  }, []);


  return (
    <React.Fragment>
      <Header />
      <ItemsList getItems={getItems} />
    </React.Fragment>
  );
}

export default App;
