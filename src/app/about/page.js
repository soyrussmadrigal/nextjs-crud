"use client";
import { useTasks } from "../../context/TaskContext";

function page() {
  const { tasks } = useTasks();
  console.log(tasks);
  return <div>About Page</div>;
}

export default page;
