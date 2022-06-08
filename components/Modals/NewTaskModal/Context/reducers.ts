import {
  Action,
  ActionType,
  VideoTask,
  PhotoTask,
} from "../../../../constants/taskTypes";

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
    case ActionType.PUSH_VIDEO_BRIEFING: {
      return {
        ...taskState,
        scenes: action.payload.scenes,
        dos: action.payload.dos,
        donts: action.payload.donts,
        otherInfo: action.payload.otherInfo,
      };
    }
    case ActionType.PUSH_CREATOR_CRITERIA: {
      return {
        ...taskState,
        numberOfCreators: action.payload.numberOfCreators,
        ageRange: action.payload.ageRange,
        gender: action.payload.gender,
        ageMin: action.payload.ageMin,
        ageMax: action.payload.ageMax,
        ethnicGroup: action.payload.ethnicGroup,
        bodyType: action.payload.bodyType,
        height: action.payload.height,
        countries: action.payload.countries,
      };
    }
    case ActionType.PUSH_REWARD: {
      return {
        ...taskState,
        cashReward: action.payload.cashReward,
        giveawayReward: action.payload.giveawayReward,
        totalReward: action.payload.totalReward,
      };
    }
    case ActionType.PUSH_DEADLINE: {
      return {
        ...taskState,
        deadline: action.payload.deadline,
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
    case ActionType.PUSH_PHOTO_BRIEFING: {
      return {
        ...taskState,
        shots: action.payload.shots,
        dos: action.payload.dos,
        donts: action.payload.donts,
        otherInfo: action.payload.otherInfo,
      };
    }
    case ActionType.PUSH_CREATOR_CRITERIA: {
      return {
        ...taskState,
        numberOfCreators: action.payload.numberOfCreators,
        gender: action.payload.gender,
        ageRange: action.payload.ageRange,
        ageMin: action.payload.ageMin,
        ageMax: action.payload.ageMax,
        ethnicGroup: action.payload.ethnicGroup,
        bodyType: action.payload.bodyType,
        height: action.payload.height,
        countries: action.payload.countries,
      };
    }
    case ActionType.PUSH_REWARD: {
      return {
        ...taskState,
        cashReward: action.payload.cashReward,
        giveawayReward: action.payload.giveawayReward,
        totalReward: action.payload.totalReward,
      };
    }
    case ActionType.PUSH_DEADLINE: {
      return {
        ...taskState,
        deadline: action.payload.deadline,
      };
    }

    default: {
      throw new Error(`Unhandled action type - ${JSON.stringify(action)}`);
    }
  }
};
