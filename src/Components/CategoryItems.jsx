import React from "react";
import { Expenses } from "./expenses";
import { Alert, Stack } from "react-bootstrap";

const CategoryItems = ({ category }) => {
  const filteredItems = Expenses.transactions.filter(
    (item) => item.category === category
  );
  console.log(filteredItems);
  return (
    <div>
      {filteredItems.map((elem) => {
        return (
          <div>
            {elem.type === "credit" ? (
              <Alert variant="success">
              <Stack direction="horizontal" gap={2}>
                <div>{elem.note}</div>
                <div className="ms-auto"><b>{elem.amount}</b></div>
              </Stack>
            </Alert>
            ) : elem.type === "debit" ? (
                <Alert variant="danger">
                <Stack direction="horizontal" gap={2}>
                  <div>{elem.note}</div>
                  <div className="ms-auto"><b>{elem.amount}</b></div>
                </Stack>
              </Alert>
            ) : (
                <Alert variant="warning">
                <Stack direction="horizontal" gap={2}>
                  <div>{elem.note}</div>
                  <div className="ms-auto"><b>{elem.amount}</b></div>
                </Stack>
              </Alert>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItems;
