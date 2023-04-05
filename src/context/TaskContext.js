import { createContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const tasks = [];
  return <TaskContext.Provider value={tasks}>

    {children}

  </TaskContext.Provider>;
};
