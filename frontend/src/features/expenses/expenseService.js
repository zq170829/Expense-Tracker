import axios from "axios";

const API_URL = "/api/expenses/";

//create a new expense
const createExpense = async(expenseData, token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(API_URL, expenseData, config);
    return response.data
}

//get all expenses
const getExpenses = async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(API_URL, config);
    return response.data
}

//get single expense item
// const getExpenseSingle = async(expenseId, token) => {
//     const config = {
//         headers:{
//             Authorization: `Bearer ${token}`,
//         }
//     }
//     const response = await axios.get(API_URL + expenseId, config);
//     return response.data
// }

//delete single expense item
// const deleteExpense = async(expenseId, token) => {
//     const config = {
//         headers:{
//             Authorization: `Bearer ${token}`,
//         }
//     }
//     const response = await axios.delete(API_URL + expenseId, config);
//     return response.data
// }

const expenseService = {
    createExpense,
    getExpenses,
    // getExpenseSingle,
    // deleteExpense
};

export default expenseService;