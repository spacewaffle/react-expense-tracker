import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext)

  const handleForm = (e) => {
    e.preventDefault();
    addTransaction({
      id: Math.floor(Math.random()*1000000), 
      text,
      amount: parseInt(amount)
    });
    setText('')
    setAmount(0)
  }

  return (
    <>
    <h3>Add new transaction</h3>
      <form id="form" onSubmit={(e) => handleForm(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            placeholder="Enter text..." 
            value={ text }
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
            type="number" 
            placeholder="Enter amount..."
            value={ amount }
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
