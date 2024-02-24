import { useState } from "react";
import { useRef  } from "react";
function Square({number,onSquareClick}) {
  return ( 
    <button className="space" onClick={onSquareClick}>
      <div class='x'>{number}</div>
    </button>
  );
}
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [player1Text, setPlayer1Text] = useState('');
  const [player2Text, setPlayer2Text] = useState('');
  const handleKeyDownp1 = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(player1Text);
    }
  }
  const handleKeyDownp2 = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(player2Text);
    }
  }
  let p1text,p2text;
  p1text=player1Text;
  p2text=player2Text;
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (squares[i]) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = p1text;
    } else {
      nextSquares[i] = p2text;
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); 
  }
  function onResetClick(){
      setSquares(Array(9).fill(null));
      setPlayer1Text('');
      setPlayer2Text('');
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? p1text : p2text);
  }
  
  return (
    <>
      <div class='flex'>
        <div class='p1'></div>
        <h1 class='header'>Tic Tac Toe</h1>
        <div class='p2'></div>
      </div>
      <div class='flex'>
        <div class="inputWithIcon">
            <input
            type="text"
            id="message"
            name="message"
            maxLength="3"
            placeholder="Enter Player 1 Text"
            value={player1Text}
            onChange={event => setPlayer1Text(event.target.value)}
            onKeyDown={handleKeyDownp1}
            />
        </div>
        <div class="inputWithIcon">
            <input
            type="text"
            id="message"
            name="message"
            maxLength="3"
            placeholder="Enter Player 2 Text"
            value={player2Text}
            onChange={event => setPlayer2Text(event.target.value)}
            onKeyDown={handleKeyDownp2}
          />
        </div>
      </div>
      <div class='flex'>
        <div class='p1'></div>
        <h5 class='status'>{status}</h5>
        <div class='p2'></div>
      </div>
      <div className="grid">
        <Square number={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square number={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square number={squares[2]} onSquareClick={()=>handleClick(2)}/>
        <Square number={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Square number={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Square number={squares[5]} onSquareClick={()=>handleClick(5)}/>
        <Square number={squares[6]} onSquareClick={()=>handleClick(6)}/>
        <Square number={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Square number={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
      <div class='wrapper'>
        <button class='reset' onClick={onResetClick}>Reset</button>
      </div>
    </>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}