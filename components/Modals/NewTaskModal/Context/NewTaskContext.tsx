import { createContext, Dispatch, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { ActionType, VideoTask, initialTaskState } from "./types";

export type NewTaskContextType = {
  task: VideoTask;
  dispatch: Dispatch<ActionType>;
};

export type NewTaskContextProviderProps = {
  children: React.ReactNode;
};

export const NewTaskContext = createContext({
  task: initialTaskState,
  dispatch: (value: any) => {},
});

export const NewTaskContextProvider = ({
  children,
}: NewTaskContextProviderProps) => {
  const [task, dispatch] = useReducer(reducer, initialTaskState);

  return (
    <NewTaskContext.Provider value={{ task, dispatch }}>
      {children}
    </NewTaskContext.Provider>
  );
};
