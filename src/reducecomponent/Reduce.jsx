import React from 'react'

function Reduce() {
    const number = [3, 56, 2, 48, 5];

    // map
    var double = (x) => x * 2;

//    reduce
  const doubledNumbers = number.reduce((acc, curr) => {
    acc.push(curr * 2);
    return acc;
  }, []);

//   filter
  const filteredNumbers = number.filter(num => num < 10);
  
//   square
  const square = x => x * x;
  const squareNumber = number.map(square);

  return (
    <div>
        <ul>
            {number.map((num) => (
                <li key={num}>{num}</li>
            ))}
        </ul>
    </div>
    // <div>Number: {number.map(double).join(',')}</div>

    // reduce
    // <div>Number: {(doubledNumbers).join(',')}</div>

    // <div>Number: {(filteredNumbers).join(',')}</div>

    // <div>Number: {(squareNumber).join(',')}</div>
  )
}

export default Reduce;