import { Dispatch } from "react";
import { ProductType } from "../../../../constants/productType";

export type VideoTask = {
  name: string;
  description: string;
  type: string;
  length: string;
  aspectRatio: string;
  //product: ProductType;
  product: string;
  useCase: string;
  language: string;
  ageRange: string;
};

export const initialTaskState: VideoTask = {
  name: "",
  description: "",
  type: "",
  length: "",
  aspectRatio: "",
  product: "",
  useCase: "",
  language: "",
  ageRange: "",
};

export enum ActionType {
  PUSH_TASK_PARAMETERS = "push_task_parameters",
  PUSH_STORYBOARD = "push_storyboard",
  PUSH_CREATOR_CRITERIA = "push_creator_criteria",
  PUSH_REWARD = "push_reward",
}

export type Action =
  | {
      type: ActionType.PUSH_TASK_PARAMETERS;
      payload: {
        name: string;
        description: string;
        type: string;
        length: string;
        aspectRatio: string;
        //product: ProductType;
        product: string;
        useCase: string;
        language: string;
      };
    }
  | { type: ActionType.PUSH_STORYBOARD }
  | { type: ActionType.PUSH_CREATOR_CRITERIA }
  | { type: ActionType.PUSH_REWARD };
