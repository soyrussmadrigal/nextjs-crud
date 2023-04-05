"use client";
import { useContext } from 'react';
import { TaskContext } from "../../context/TaskContext";

function page() {
  const values = useContext(TaskContext);
  console.log(values);
  return <div>About Page</div>;
}

export default page;
