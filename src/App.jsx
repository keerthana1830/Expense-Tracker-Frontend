import TransactionList from "./components/TransactionList";
import NewTxnForm from "./components/NewTxnForm";
import { useEffect, useState } from "react";
import IncExpContainer from "./components/IncExpContainer";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://expense-tracker-gk43.onrender.com/api/expenses"
      );
      setTransactions(response.data);
    };
    fetchdata();
  }, []);

  const addToList = async (title, amount) => {
    const response = await axios.post(
      "https://expense-tracker-gk43.onrender.com/api/expenses",
      {
        title,
        amount,
      }
    );
    setTransactions([...transactions, { title: title, amount: amount }]);
  };

  const removeFromList = async (id) => {
    await axios.delete(
      `https://expense-tracker-gk43.onrender.com/api/expenses/${id}`
    );
    const newTransaction = transactions.filter((txn) => txn.id !== id);
    setTransactions(newTransaction);
  };

  return (
    <div className="container">
      <div>Expense Tracker</div>
      <IncExpContainer transactions={transactions} />
      <TransactionList
        transactions={transactions}
        removeFromList={removeFromList}
      />
      <NewTxnForm addToList={addToList} />
    </div>
  );
};
export default App;
