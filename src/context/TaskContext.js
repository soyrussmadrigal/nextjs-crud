"use client";
import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "my first task",
      description: "some description",
    },
    {
      id: 2,
      title: "my second task",
      description: "some description 2",
    },
    {
      id: 3,
      title: "my third task",
      description: "some description 3",
    },
  ]);

  const createTask = (title, description) =>
    setTasks([
      ...tasks,
      {
        title,
        description,
        id: 10,
      },
    ]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
