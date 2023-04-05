"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [
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
  ];
  return (
    <TaskContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
