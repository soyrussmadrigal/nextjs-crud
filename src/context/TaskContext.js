"use client";
import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const tasks = [];
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
