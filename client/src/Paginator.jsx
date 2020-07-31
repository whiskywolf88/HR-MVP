import React from "react";
import { Pagination } from "react-bootstrap";

const Paginator = (props) => {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item>{7}</Pagination.Item>
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default Paginator;
