const TransactionCard = (props) => {
    const colorClass = props.amount >= 0 ? 'positive' : 'negative'
    const deletetxn = () => {
        props.removeFromList(props.index)
    }
    return(
        <div className = "transaction-card-container">
            <div className={`transaction-card ${colorClass}`}>
                <span>{props.title}</span>
                <span>${props.amount}</span>
            </div>  
            <div className="btn-container">
                <button onClick={deletetxn}>Delete</button>    
            </div>      
        </div>
        
    )
}

export default TransactionCard;
