import { createContext, useReducer } from "react";
import { videoReducer } from "./reducers";
import { initialVideoTaskState } from "./types";

type NewVideoTaskContextProviderProps = {
  children: React.ReactNode;
};

export const NewVideoTaskContext = createContext({
  videoTask: initialVideoTaskState,
  dispatch: (value: any) => {},
});

export const NewVideoTaskContextProvider = ({
  children,
}: NewVideoTaskContextProviderProps) => {
  const [videoTask, dispatch] = useReducer(videoReducer, initialVideoTaskState);

  return (
    <NewVideoTaskContext.Provider value={{ videoTask, dispatch }}>
      {children}
    </NewVideoTaskContext.Provider>
  );
};
