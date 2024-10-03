import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes. */

const JokeList = (numOfJokes = 5) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function getJokes() {
      let jokesArr = [...jokes];
      let seenJokes = new Set();
      try {
        while (jokesArr.length < numOfJokes) {
          let res = await axios.get('https://icanhazdadjoke.com', {
            headers: { Accept: 'application/json' }
          });
          let { ...joke } = res.data;
          if (!seenJokes.has(joke.id)) {
            seenJokes.add(joke.id)
            jokesArr.push({ ...joke, votes: 0 })
          }
          else {
            console.error('Duplicate found!')
          }
          setJokes(jokesArr);
          setIsLoading(false);


        }
      } catch (e) {
        console.error(e)
      }
    }
    if (jokes.length === 0) getJokes();
  }, [jokes, numOfJokes]);

  const generateNewJokes = () => {
    setJokes([]);
    setIsLoading(true);
  }

  const vote = (id, delta) => {
    setJokes(jokes => jokes.map(joke => (joke.id === id ? { ...joke, votes: joke.votes + delta } : joke)));
  }

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    )
  }

  let sortedJokes = ([...jokes].sort((a, b) => b.votes - a.votes));

  return (
    <div className="JokeList">
      <button
        className="JokeList-getmore"
        onClick={generateNewJokes}
      >
        Get New Jokes
      </button>

      {sortedJokes.map(j => (
        <Joke
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          vote={vote}
        />
      ))}
    </div>
  );
}

export default JokeList;
