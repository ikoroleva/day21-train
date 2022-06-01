import logo from './logo.svg';
import './App.css';
import { CarriageRow } from './CarriageRow/CarriageRow'
import { Seat } from './Seat/Seat'
import { useState } from "react";


function App() {

  const numOfSeats = 40;
  const seatsInRow = 4;



  const getRandom = () => {

    return Math.random() > .5 ?
      "occupied" :
      "free";

  }




  const seatsArray = new Array(numOfSeats).fill(null).map((value, i) => {
    return <Seat key={i} number={i + 1} status={getRandom()} />
  });

  const rowsArray = [];

  for (let i = 0; i < seatsArray.length; i += seatsInRow) {
    const slicedArray = seatsArray.slice(i, i + seatsInRow);
    rowsArray.push(slicedArray);
  }

  return (
    <div className="App">
      <div className="train-carriage">
        {
          rowsArray.map((rows, i) => (
            <CarriageRow key={i} seatsNums={rows} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
