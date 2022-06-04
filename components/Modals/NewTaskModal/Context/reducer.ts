import { Action, ActionType, VideoTask } from "./types";

export const reducer = (taskState: VideoTask, action: Action) => {
  switch (action.type) {
    case ActionType.PUSH_TASK_PARAMETERS: {
      return {
        ...taskState,
        name: action.payload.name,
        description: action.payload.description,
        type: action.payload.type,
        length: action.payload.length,
        aspectRatio: action.payload.aspectRatio,
        product: action.payload.product,
        useCase: action.payload.useCase,
        language: action.payload.language,
      };
    }

    default: {
      throw new Error(`Unhandled action type - ${JSON.stringify(action)}`);
    }
  }
};
