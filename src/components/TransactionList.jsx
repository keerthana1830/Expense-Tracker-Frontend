import TransactionCard from './TransactionCard';

const TransactionList = (props) => {
    return (
        <>
        <h4>Transaction List</h4>
        <hr/>
        {props.transactions.map((transactions,index) =>(
        <TransactionCard 
        key = {index}
        index={index}
        title = {transactions.title}
        amount = {transactions.amount} 
        removeFromList = {props.removeFromList}/>
        ))}
        </>
)
}

export default TransactionList;
