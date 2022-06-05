import { Action, ActionType, VideoTask, PhotoTask } from "./types";

export const videoReducer = (taskState: VideoTask, action: Action) => {
  switch (action.type) {
    case ActionType.PUSH_VIDEO_TASK_PARAMETERS: {
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

export const photoReducer = (taskState: PhotoTask, action: Action) => {
  switch (action.type) {
    case ActionType.PUSH_PHOTO_TASK_PARAMETERS: {
      return {
        ...taskState,
        name: action.payload.name,
        description: action.payload.description,
        type: action.payload.type,
        aspectRatio: action.payload.aspectRatio,
        product: action.payload.product,
        useCase: action.payload.useCase,
      };
    }

    default: {
      throw new Error(`Unhandled action type - ${JSON.stringify(action)}`);
    }
  }
};
