import { useState } from "react"

const NewTxnForm = (props) => {

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)

    const addTransaction = (e) => {
        e.preventDefault() //to prevent page reloading as the button reloads the page
        if(title=='' || amount=='')
            {   alert("Please fill both the fields")
                return }
        props.addToList(title,amount) 
        setTitle(" ")
        setAmount(0)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleAmountChange = (e) => {
        setAmount(parseInt(e.target.value))
    }

    return (
        <>
        <h4>Add new transaction</h4>
        <hr/>
        <form>
            <div className = "form-group">
                <label htmlFor = "title">Title </label>
                <input type = "text" id = "title" value={title} onChange={handleTitleChange}/>
            </div>
            <div className = "form-group">
                <label htmlFor = "amount">Amount </label>
                <input type = "number" id = "amount" value={amount} onChange={handleAmountChange}/>
            </div>
            <button onClick={addTransaction}>Add Transaction</button>
        </form>
        </>
        
    )
}

export default NewTxnForm; 