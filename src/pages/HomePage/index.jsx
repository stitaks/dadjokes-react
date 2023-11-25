import { useState, useEffect } from 'react';
import './style.css';
import { Jokes } from '../../Components/Jokes';

export const HomePage = () => {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.result);
    };

    fetchJokes();
  }, []);


  return (
    <div className="container">
      {jokes.map((joke) => {
        return (<Jokes 
          key={joke.name}
          userAvatar = {joke.avatar}
          userName = {joke.name}
          text = {joke.text}
          likes = {joke.likes}
          dislikes = {joke.dislikes}
          />)
        
  })}
    </div>
  );
};
