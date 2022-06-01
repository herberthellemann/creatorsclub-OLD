import React, { useState, createContext, useContext } from "react";

type taskContextType = {
  contentType: string;
  taskName: string;
  taskDescription: string;
  videoSubtype: string;
  videoLength: string;
  contentAspectRatio: string;
  contentProduct: string;
  contentUseCase: string;
  videoLanguage: string;
  scenes: Scene[];
};

type Scene = {
  name: string;
  type: string;
  mentions: string;
  object: string;
  imageUrl: string;
};

const initialValues: taskContextType = {
  contentType: "",
  taskName: "",
  taskDescription: "",
  videoSubtype: "",
  videoLength: "",
  contentAspectRatio: "",
  contentProduct: "",
  contentUseCase: "",
  videoLanguage: "",
  scenes: [],
};

export type NewTaskContextType = {
  taskData: taskContextType;
  setData: ({}) => void;
};

type Props = {
  children: React.ReactNode;
};

// Set an empty object as default state
export const NewTaskFormContext = createContext({});

const NewTaskFormProvider = ({ children }: Props) => {
  const [taskData, setData] = useState({});

  const setNewTaskFormData = (newData: {}) => {
    setData((prevData) => ({
      ...prevData,
      ...newData,
    }));
    console.log(taskData);
  };

  return (
    <NewTaskFormContext.Provider value={{ taskData, setData }}>
      {children}
    </NewTaskFormContext.Provider>
  );
};

export default NewTaskFormProvider;

export const useNewTaskFormData = () => useContext(NewTaskFormContext);
