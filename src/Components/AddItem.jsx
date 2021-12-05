import React, { useState } from "react";
import {
  Card,
  Button,
  InputGroup,
  FormControl,
  ButtonGroup,
} from "react-bootstrap";
import { Expenses } from "./expenses";

const AddItem = () => {
  const [typev, setTypev] = useState("");

  const addEntry = () => {
    Expenses.transactions.push({amount:2350,type:"credit",category:"Income",note:"Auto rent"})
    console.log("Hello")
  };
// console.log(document.getElementsByName("entryCategory"))
  return (
    <div>
      <Card bg="light" style={{ width: "28rem", marginLeft: "2rem" }}>
        <Card.Body>
          <Card.Title>Add Entry</Card.Title>
          <Card.Text>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
              <FormControl
                placeholder="Type category"
                aria-label="category"
                aria-describedby="basic-addon1"
                name="entryCategory"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Amount</InputGroup.Text>
              <FormControl
                placeholder="Type amount"
                aria-label="amount"
                aria-describedby="basic-addon1"
                name="entryAmount"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Type of Entry</InputGroup.Text>
              <Button variant="success" onClick={()=>{setTypev("credit")}}>Credit</Button>
              <Button variant="danger" onClick={()=>{setTypev("debit")}}>Debit</Button>
              <Button variant="warning" onClick={()=>{setTypev("saving")}}>Savings</Button>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Note</InputGroup.Text>
              <FormControl
                placeholder="Add note"
                aria-label="amount"
                aria-describedby="basic-addon1"
                name="entryNote"
              />
            </InputGroup>
          </Card.Text>
          <Button variant="primary" onClick={addEntry}>
            Add Entry
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddItem;
