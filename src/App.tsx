import './App.css';
import React from 'react';
import { useState } from 'react';
import { logAllPeopleInTreeWithQueue } from './utils/treelogging';
import { createStarkTree } from './utils/starkDesc';
import { isDescendant } from './utils/treelogging';

 function App(): JSX.Element {

  const [answer, setAnswer] = useState<undefined | boolean>(undefined)
  const [ancestor, setAncestor] = useState<string>()
  const [descendant, setDescendant] = useState<string>()

  const handleGO= () => {
    if (descendant !== undefined && ancestor !== undefined) {
     setAnswer(isDescendant(descendant, ancestor, createStarkTree())) 
    }  
  }

const handleDescendant= (name: string) => {
  setDescendant(name)
}
const handleAncestor= (name: string) => {
  setAncestor(name)
}
 console.log({answer})
  return (
    <div className="App">
      <h1> Alli Didier and Grace were here</h1>
      <button onClick= {handleGO}>  GO! </button>
      <select  onChange={(e) => handleDescendant(e.target.value)}> 
      <option value="" disabled selected>Descendant</option>
        {logAllPeopleInTreeWithQueue(createStarkTree()).map((name, index)  => {
          return (<option value= {name}  key={index}> {name}  </option>)
        })}
      </select>
      <select onChange= {(e) => handleAncestor(e.target.value)}> 
      <option value="" disabled selected>Ancestor</option>
        {logAllPeopleInTreeWithQueue(createStarkTree()).map((name, index)  => {
          return (<option value ={name}  key={index}> {name}  </option>)
        })}
      </select>
      {answer === true && <p> yes {descendant} is a descendant of {ancestor}</p>} 
      {answer === false && <p> no {descendant} is not a descendant of {ancestor} </p>} 
    </div>
  );
}

export default App;
