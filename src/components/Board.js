import React from 'react';
import Square from './Square';
import  './Board.css';
function create() {
    let array = Array(16);
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++) {
            if (i + j !== 6) {
                array[4 * i + j] = 4*i+j+1;//Math.floor(Math.random() * 15+1);
            } else array[4 * i + j] = null;
        }
    }
    return array;
}
function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
class Board extends React.Component {
 constructor() {
     super();


     this.state = {
        // Val:create(),
        randomVal: shuffle(create()),
        step: 0,
        rowNull: 3,
        colNull: 3,
     };
   }
    handleClick(i) {
      /*TODO
      *  смена элемнов нажатое на пустоту*/

      const rowClick = Math.floor(i/4);//получаем строку пятнашки на которую нажали
      const colClick = i-4*rowClick;// столбик
      const squares = this.state.randomVal.slice();//сосдаем копию массима рандомВал
        if (rowClick === this.state.rowNull){//если нажатая пятнашка и пустая в одной строке
            let temp =this.state.colNull - colClick; // находим растояние между нажатой пятнашкой и пумым местом(:мной ХЫ)
            if(temp>0){//растояние положительно если пустая пятнашка с права от нажатой
                for(let k = 0; k<temp;k++){//сдиг вех пянпшек на одну вправо начиная с нажатой
                    squares[4*this.state.rowNull+this.state.colNull]=squares[4*this.state.rowNull+this.state.colNull-1];//сдвигаем пятнашку
                    this.state.colNull= this.state.colNull-1;//изменяем координату постого места
                }
                squares[4*this.state.rowNull+this.state.colNull]=null;
            }
            else if(temp < 0){//если пустое место слева то ррасстояние отрицательное
                for(let k = temp; k<0;k++){//тот же сдвиг но влево
                    squares[4*this.state.rowNull+this.state.colNull]=squares[4*this.state.rowNull+this.state.colNull+1];
                    this.state.colNull= this.state.colNull+1;
                }
                squares[4*this.state.rowNull+this.state.colNull]=null;
            }
            this.state.step+=1;
        }
        else  if (colClick === this.state.colNull) {//если нажатая пятнашка и пустая в одном стлбюце
            let temp = this.state.rowNull - rowClick; // находим растояние между нажатой пятнашкой и пумым местом(:мной ХЫ)
            if (temp > 0) {//растояние положительно если пустая пятнашка ниже  нажатой
                for (let k = 0; k < temp; k++) {//сдиг вех пянпшек на одну вниз
                    squares[4 * this.state.rowNull + this.state.colNull] = squares[4 * (this.state.rowNull - 1) + this.state.colNull];//сдвигаем пятнашку
                    this.state.rowNull = this.state.rowNull - 1;//изменяем координату постого места

                }
                squares[4 * this.state.rowNull + this.state.colNull] = null;
            } else if (temp < 0) {//если пустое место выше то расстояние отрицательное
                for (let k = temp; k < 0; k++) {//тот же сдвиг но влево
                    squares[4 * this.state.rowNull + this.state.colNull] = squares[4 * (this.state.rowNull + 1) + this.state.colNull];
                    this.state.rowNull = this.state.rowNull + 1;
                }
                squares[4 * this.state.rowNull + this.state.colNull] = null;
            }
            this.state.step+=1;
        }
     this.setState({randomVal: squares});

     console.log(this.colNull, colClick, this.state.randomVal);

    }


    renderSquare(i){
         if(this.state.randomVal [i]=== null){
             this.state.rowNull = Math.floor(i/4);// запоминаем положжение пустой кнопки
             this.state.colNull = i-4*this.state.rowNull;
         }
         return <Square value={this.state.randomVal [i]}
                       onClick = {()=>this.handleClick(i)}/>;
    }
    renderBoard(n){
        var rows  = [];
        for (let i = 0; i<n;i++){
            let temp=[];
            for (let j = 0; j<n;j++){
                    temp.push(<td key={j} id={n*i+j+1}>{this.renderSquare(n*i+j)}</td>);
            }
            rows.push(<tr className="board-row" key={i}>{temp}</tr>);
        }
        return rows;
    }

    render() {
     if (this.state.randomVal=== create()){
         alert("Игра занончилась на "+ this.state.step + "шаге" );
     }
        return (
           <table className="table table-dark">
               <thead>
               <th>Шаги</th>
               <td>{this.state.step}</td>
               </thead>
               <tbody>
               {this.renderBoard(4)}
              </tbody>

           </table>


        );
    }
}

export default Board;

