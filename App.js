// import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
// import Table from './Table'

import React from "react"
import ToDoList from "./ToDoList"
function App() {
  
  return(
    <div className="todo-list">
      <ToDoList 
        list1 = "Get tutorials on Reactjs" 
        list2 = "Attempt exercises on React"
        list3 = "Apply react to series of project"
        list4 = "upload code to github" />
      <ToDoList 
        list1 = "Reading on python lib" 
        list2 = "Read journals on how to download data from cloud using python script"
        list3 = "Write a python Script"
        list4 = "upload code to github"  />
      <ToDoList 
        list1 = "Project on Health monitoring System" 
        list2 = "Attempt exercises on React"
        list3 = "Apply react to series of project"
        list4 = "upload code to github" />
    </div>
    

  )
}

// function App() {
//   let count = 0;
//   const [countBy, setCountBy] = useState("Increment");


//   function increment() {
//     setCountBy("Increment By");


//     // let countEl = document.getElementById("count-el");
//     // count = count + 1;
//     // countEl.innerText = count;
//   }
//   function incrementByTwo() {
//     let countEl = document.getElementById("count-el");
//     count = count + 2;
//     countEl.innerText = count;
//   }
//   function incrementByFive() {
//     let countEl = document.getElementById("count-el");
//     count = count + 5;
//     countEl.innerText = count;
//   }
//   function decrement() {

//     let countEl = document.getElementById("count-el");
//     count = count - 1;
//     countEl.innerText = count;
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* /* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a> */}
//         <h1>COUNTER</h1>
//         <btn class="btn" onClick={() => increment()}>{countBy}</btn>
//         <div>
//           <btn class="interval" onClick={() => incrementByTwo()}>+2</btn>
//           <btn class="interval" onClick={() => incrementByFive()}>+5</btn>
//         </div>

//         <h2 id="count-el">0</h2>
//         <btn class="btn" onClick={() => decrement()}>DECREMENT</btn>
//         {/* <div>
//           <btn class="interval" onClick={() => decrementByTwo()}>-2</btn>
//           <btn class="interval" onClick={() => drcrementByFive()}>-5</btn>
//         </div> */}



//       </header>
//     </div>
//   );
// }
// import React, {Component} from 'react';
// import Table from './Table'
// class App extends Component {
//   render() {
//     const characters = [
//       {name:'Clement', job:'Programmer',},
//       { name:'Charlie', job:'Janitor',},
//       { name:'Mac', job:'Bouncer', },
//       { name:'Dee', job:'Aspiring Actress', },
//     ]

//     return(
//       <div className = "container">
//         <Table> characterData = {characters} </Table>
//       </div>
//     )
//   }

// }



// class App extends Component {
//   removeCharacter = (index) => {
//     const {characters} = this.state

//     this.setState({
//       characters: characters.filter((character, i) => {
//         return i !== index
//       })
//     })
//   }

//   state = {
//     characters : [
//       {name:'Clement', job:'Programmer',},
//       { name:'Charlie', job:'Janitor',},
//       { name:'Mac', job:'Bouncer', },
//       { name:'Dee', job:'Aspiring Actress', },
//     ],
//   }


//   render() {
//     const { characters } = this.state
//     return (
//       <div className= "container">
//         <Table characterData={characters} removeCharacter={this.removeCharacter} />
//       </div>
//     )
//   }
// }

export default App;
