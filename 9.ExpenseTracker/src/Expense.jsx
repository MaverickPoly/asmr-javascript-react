import {useEffect, useState} from "react";

function Expense() {
    const [type, setType] = useState("Income");
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [expenses, setExpenses] = useState([
        {type: "Income", title: "Income", amount: 25000},
        {type: "Expense", title: "Rent", amount: 18000},
        {type: "Expense", title: "Food", amount: 10000},
    ]);

    const [updatedInc, setUpdatedInc] = useState(0);
    const [updatedExp, setUpdatedExp] = useState(0);
    const [updatedBal, setUpdatedBal] = useState(0);

    useEffect(() => {
        updateSummary();
    }, [expenses]);

    function updateSummary() {
        let totalIncome = expenses.reduce((t, e) => {
            if (e.type === "Income") t += e.amount;
            return t;
        }, 0);
        let totalExpense = expenses.reduce((ex, e) => {
            if (e.type === "Expense") ex += e.amount;
            return ex;
        }, 0);
        setUpdatedInc(totalIncome);
        setUpdatedExp(totalExpense);
        setUpdatedBal(totalIncome - totalExpense);
    }

    const addItem = () => {
        if (type === "" || amount === 0 || title === "") {
            return alert("Invalid input!");
        }
        if (amount <= 0) {
            return alert("Incorrect amount! Cannot be negative!");
        }

        const newExpenses = [...expenses, {type: type, title: title, amount: amount}];
        setExpenses(newExpenses);
        setTitle("");
        setAmount(0);
    }

    const clearExpenses = () => {
        setExpenses([]);
    }
    const del = (el) => {
        const newExpenses = expenses.filter((e) => e.title !== el.title);
        setExpenses(newExpenses);
    }

    return <>
        <div>
            <h1 style={{"color": "blue"}}>Maverick Poly</h1>
            <h3>Expense Tracker ASMR</h3>
        </div>
        <div className="summary">
            <div>
                <h1>
                    &#10004; Balance: <br />
                    <span id="updatedBalance">{updatedBal}</span>
                </h1>
            </div>
            <br />
            <div className="total">
                <div>
                    Total Income:
                    <div>
                        <h2 style={{"color": "green"}} id="updatedIncome">
                            {updatedInc}
                        </h2>
                    </div>
                </div>
                <hr />
                <div>
                    Total Expenses:
                    <div>
                        <h2 style={{"color": "red"}} id="updatedExpense">
                            {updatedExp}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="root">
            <div id="items">
                <h2>Expenses</h2>
                <table id="table">
                    <tr className="titles">
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Delete</th>
                    </tr>
                    {expenses.map((expense, index) => {
                        return <tr className="zoom" key={index}>
                            <th>{index}</th>
                            <th>{expense.title}</th>
                            <th>{expense.amount}</th>
                            <th style={{"color": expense.type === "Expense" ? "red" : "green", fontSize: "30"}}>
                                {expense.type === "Expense" ? '↘' : "↗"}
                            </th>
                            <th onClick={() => del(expense)}>✕</th>
                        </tr>
                    })}
                </table>
            </div>
            <hr className="hr"/>
            <div id="new">
                <h2>Add new</h2>
                <div className="inputs">
                    <div className="inputItem">
                        <p style={{"width": "9rem"}}>Entry type</p>
                        <select id="itemType" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="Expense">Expense</option>
                            <option value="Income">Income</option>
                        </select>
                    </div>
                    <div className="inputItem">
                        <p style={{"width": "9rem"}}>Name:</p>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name..."
                            value={title} onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="inputItem">
                        <p style={{"width": "9rem"}}>Amount:</p>
                        <input
                            id="amount"
                            name="mod"
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(parseInt(e.target.value))}
                        />
                    </div>
                </div>
                <button onClick={addItem}>
                    Add Expense
                </button>
            </div>
        </div>
    </>
}

export default Expense;