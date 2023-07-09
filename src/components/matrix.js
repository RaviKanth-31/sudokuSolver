import { useState } from 'react';
import './matrix.css'
const Matrix = ()=>{
    const [matrix, setMatrix] = useState(Array(9).fill().map(()=>Array(9).fill('')));
    const [userMat, setUserMat] = useState(Array(9).fill().map(()=>Array(9).fill(0)))
    const [error, setError] = useState('');
    const [hasSolved, setHasSolved] = useState(false);
    const resetGame = ()=>{
        const newMat = Array(9).fill().map(()=>Array(9).fill(''));
        setMatrix(newMat);
        const newUserMat = Array(9).fill().map(()=>Array(9).fill(''));
        setUserMat(newUserMat);
        setHasSolved(false);
    }
    const handleCellClick = (rowIndex, colIndex, k)=>{
        const intValue = parseInt(k, 10);
        if(k!=''){
            if(Number.isNaN(intValue) || !Number.isInteger(intValue)){
                setError("Enter valid input")
            }
            else if(intValue<1){
                setError(“Enter a value greater than 0”);
            }
            else if(intValue>9){
                setError("Enter a value less than 9");
            }
            else{
                setError('');
                const newMatrix = [...matrix];
                newMatrix[rowIndex][colIndex] = intValue;
                setMatrix(newMatrix);
                const newUserMat = [...userMat];
                newUserMat[rowIndex][colIndex] = 1;
                setUserMat(newUserMat);
            }
        }else{
            const newMatrix = [...matrix];
            newMatrix[rowIndex][colIndex] = '';
            setMatrix(newMatrix);
            const newUserMat = [...userMat];
            newUserMat[rowIndex][colIndex] = 1;
            setUserMat(newUserMat);
        }
        
    }
    const solveMat = () => {
        if (!error && solveMatrix(matrix, setMatrix)) setHasSolved(true);
        console.log('Hs');
        console.log(matrix);
      };
      
      const solveMatrix = (matrix, setMatrix) => {
        console.log(matrix[0][0]);
        for (var i = 0; i < 9; i++) {
          for (var j = 0; j < 9; j++) {
            if (matrix[i][j] === '') {
              for (var c = 1; c <= 9; c++) {
                if (isValid(i, j, c)) {
                  const newMatrix = [...matrix];
                  newMatrix[i][j] = c;
                  setMatrix(newMatrix);
                  if (solveMatrix(newMatrix, setMatrix)) return true;
                  else {
                    newMatrix[i][j] = '';
                    setMatrix(newMatrix);
                  }
                }
              }
              return false;
            }
          }
        }
        return true;
      };
      
      const isValid = (row, col, c) => {
        for (var i = 0; i < 9; i++) {
          //col
          if (matrix[row][i] === c) return false;
          if (matrix[i][col] === c) return false;
          if (matrix[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + Math.floor(i % 3)] === c)
            return false;
        }
        return true;
      };      
    return (
        <div>
        
        {!hasSolved && 
        <div className='matrix'>
            {matrix.map((row, rowIndex) => (
            <div key={rowIndex}>
            {row.map((cell, colIndex) => (
                <input
                type="text"
                inputMode="numeric"
                pattern="[1-9]*"
                key={colIndex}
                value={cell}
                onChange={(event) => handleCellClick(rowIndex, colIndex, event.target.value)}
                className='matrix-cell'
                />
            ))}
            </div>
        ))}
        {error && <p className="error">{error}</p>}
        <button className='custom-button' onClick={() => solveMat()}>Solve</button>
        </div>
        }
        {hasSolved && 
        <div className='matrix'>
            {matrix.map((row, rowIndex) => (
            <div key={rowIndex}>
            {row.map((cell, colIndex) => (
                <input
                className='matrix-cell'
                readOnly
                style={{color:userMat[rowIndex][colIndex]==1?"black":"blue"}}
                value={cell}
                />
            ))}
            </div>
        ))}
        <button onClick={()=> resetGame()} className='custom-button'>Reset</button>
        </div>
       }
        </div>
    );
}
export default Matrix;
