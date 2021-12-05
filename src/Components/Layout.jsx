import React from "react";
import "./Layout.css";
import { Card } from "react-bootstrap";
import Category from "./Category";
import { Expenses } from "./expenses";
import AddItem from "./AddItem";

const Layout = () => {
  let previousAmount = Number(Expenses.balance.map((item) => item.amount));
  let balance =
    previousAmount +
    Expenses.transactions
      .filter((item) => item.type === "credit")
      .reduce((a, b) => {
        return a + b.amount;
      }, 0);
  console.log("Balance: ", balance);

  let savings = Expenses.transactions
    .filter((item) => item.type === "saving")
    .reduce((a, b) => {
      return a + b.amount;
    }, 0);
  console.log("Savings: ", savings);

  let spent = Expenses.transactions
    .filter((item) => item.type === "debit")
    .reduce((a, b) => {
      return a + b.amount;
    }, 0);
  console.log("Spent: ", spent);

  let remaining = balance - spent - savings;
  console.log("Remaining: ", remaining);

  //   Expenses.transactions.push({a:1,b:"2",category:"Awesome",d:"4"})

  return (
    <div>
      <div className="topdiv">
        <Card bg="primary" text="white" style={{ width: "15rem"}}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>BALANCE</Card.Title>
            <Card.Text>
              <h1>
                &#x20B9;&nbsp;
                {balance}
              </h1>
              <small>(Previous amount: <b>&#x20B9;&nbsp;{previousAmount}</b>)</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="success" text="white" style={{ width: "15rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>REMAINING</Card.Title>
            <Card.Text>
              <h1>&#x20B9; {remaining}</h1>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="warning" text="white" style={{ width: "15rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>SAVINGS</Card.Title>
            <Card.Text>
              <h1>
                &#x20B9;&nbsp;
                {savings}
              </h1>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="danger" text="white" style={{ width: "15rem" }}>
          {/* <Card.Header>Header</Card.Header> */}
          <Card.Body>
            <Card.Title>SPENT</Card.Title>
            <Card.Text>
              <h1>
                &#x20B9;&nbsp;
                {spent}
              </h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="bottomdiv">
        <Card>
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            <Card.Text style={{ display: "flex" }}>
              <Category />
              <AddItem />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Layout;
