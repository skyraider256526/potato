import React, { useState, useEffect } from 'react';
import './App.scss';

import Loader from './loader';

function App() {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
      await fetch('http://node.uttarakhandtraveller.com/places/1', {
        // mode: 'cors',
        // crossDomain: true,
        // headers: {},
      })
        .then(resp => resp.json())
        .then(res => {
          setPlace(res.place);
          setIsLoading(false);
          console.log(res, isLoading);
          console.log(isLoading);
        })
        .catch(error => console.log(error));
    };
    fetchData();
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="place__container">
          <img src={place.image} alt={place.name} className="place__image" />
          <details className="place__details  ">
            <summary>
              <span className="place__location">
                Location:{place.location.slice(2)}
              </span>
              <span className="place__name">Name:{place.name}</span>
            </summary>
            {place.detail}
          </details>
          <a href={place.place_url} className="place__link">
            More details
          </a>
        </div>
      )}
    </>
  );
}

export default App;
