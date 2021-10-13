import './App.css';
import Header from "./components/Header";
import BalanceCards from "./components/BalanceCards";
import ExpensesTable from "./components/ExpensesTable";
import ExpensesForm from "./components/ExpensesForm";
import {Alert, Button, Container} from "@mui/material";
import React from "react";





function App() {
  return (
    <>
      <Header />
       <Container maxWidth="lg">
           <h1>Ваш лист пуст</h1>
           <BalanceCards />
           <ExpensesForm />
           <ExpensesTable />
       </Container>
      {/*<Button variant="text">Click me!</Button>*/}
      {/*<Alert severity="success">This is a success alert — check it out!</Alert>*/}



    </>
  );
}

export default App;
