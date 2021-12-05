import React from "react";
import { Accordion } from "react-bootstrap";
import CategoryItems from "./CategoryItems";
import { Expenses } from "./expenses";

const Category = () => {
  const categories = [
    ...new Set(Expenses.transactions.map((item) => item.category)),
  ];
  // const filteredCategory=Expenses.transactions.filter((item)=>item.category===);
  console.log(categories);
  return (
    <div>
      {categories.map((item, index) => {
        return (
          <Accordion style={{ width: "28rem" }}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{item}</Accordion.Header>
              <Accordion.Body>
                <CategoryItems category={item} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Category;
