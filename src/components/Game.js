import React from 'react';
import Board from './Board';
// import './Game.css';
class Game extends React.Component {
    constructor() {
        super();


    }


    render() {
        return (
            <div className="game">
                {/*<button className="btn btn-primary">Game</button>*/}
                <div className="game-info">
                    <h3>Дзен - Пянташки от УТБ-41</h3>
                    <div>
                        Мы можте передвигать одну или несколько пятнашек на пустое место, нажав на нее
                    </div>
                    <ol>{/* TODO */}</ol>
                </div>
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

//смена иест
// function swap(arr,i1,j1,i2,j2){
//     var t = arr[i1][j1];
//     arr[i1][j1] = arr[i2][j2];
//     arr[i2][j2] = t;
// }
// function step(arr,i1,j1,i2,j2) {
//     var sortArr = arr;
//     for(let i = 0; i &lt; 2012; ++i) // На мой взгляд 2012 это достаточно много =)
//         // Случайным образом выбираем число от 0 до 3
//         switch(Math.round(3*Math.random())){
//             /*
//              * 0 соответсвует верхней соседней костяшке, 1 - правой  и т.д.
//              * обратим внимание что обмен местами, например,
//              * с верхней костяшкой возможен, если "пустое место"
//              * не ноходится у верхней границы игрового поля. Аналогично и для
//              * других соседних костяшек. При обмене изменяем переменные ei и ej.
//              */
//             case 0: if(ei != 0) swap(sortArr,ei,ej,--ei,ej); break;
//             case 1: if(ej != 3) swap(sortArr,ei,ej,ei, ++ej); break;
//             case 2: if(ei != 3) swap(sortArr,ei,ej,++ei,ej); break;
//             case 3: if(ej != 0) swap(sortArr,ei,ej,ei,--ej);
//         }
//
// }
export default Game;