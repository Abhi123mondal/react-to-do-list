import Expenses from "./components/Expenses/Expenses";
import React,{useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";


let DUMMY_EXPENSE =[
 {
  id:'e1',
  title:'school Fee',
  amount:340,
  date:new Date(2021,5,12)
 },
 {
  id:'e2',
  title:'Books',
  amount:249,
  date:new Date(2021,2,14)

 },
 {
  id:'e5',
  title:'Electric Bill',
  amount:3000,
  date:new Date(2021,2,10)
 },
 {
  id:'e6',
  title:'Water Bill',
  amount:200,
  date:new Date(2022,4,26)
 },
];
const App=()=>{
  /*objects*/
  const [expenses,setExpenses]=useState(DUMMY_EXPENSE);



const addExpenseHandler=(expense)=>{
  const updateExpense= [expense,...expenses];
  setExpenses(updateExpense);
}
  return(
    <div>    
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item={expenses}/>
    </div>
  );
}
export default App;