import { createContext, useReducer } from "react";
import { photoReducer } from "./reducers";
import { initialPhotoTaskState } from "../../../../constants/taskTypes";

type NewPhotoTaskContextProviderProps = {
  children: React.ReactNode;
};

export const NewPhotoTaskContext = createContext({
  photoTask: initialPhotoTaskState,
  dispatch: (value: any) => {},
});

export const NewPhotoTaskContextProvider = ({
  children,
}: NewPhotoTaskContextProviderProps) => {
  const [photoTask, dispatch] = useReducer(photoReducer, initialPhotoTaskState);

  return (
    <NewPhotoTaskContext.Provider value={{ photoTask, dispatch }}>
      {children}
    </NewPhotoTaskContext.Provider>
  );
};
