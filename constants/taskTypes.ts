export type VideoTaskParameters = {
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

export type VideoBriefing = {
  //scenes: Scene[];
  scenes: string[];
  dos: string;
  donts: string;
  otherInfo: string;
};

export type PhotoTaskParameters = {
  name: string;
  description: string;
  type: string;
  aspectRatio: string;
  //product: ProductType;
  product: string;
  useCase: string;
};

export type PhotoBriefing = {
  //shots: Shot[];
  shots: string[];
  dos: string;
  donts: string;
  otherInfo: string;
};

export type CreatorCriteria = {
  numberOfCreators: number;
  //ageRange: string;
  ageRange: [number, number];
  gender: string[];
  ageMin: number;
  ageMax: number;
  ethnicGroup: string[];
  bodyType: string[];
  height: string[];
  countries: string[];
};

export type CreatorReward = {
  cashReward: number;
  giveawayReward: number;
  totalReward: number;
};

export type Deadline = {
  deadline: Date;
};

export type VideoTask = VideoTaskParameters &
  VideoBriefing &
  CreatorCriteria &
  CreatorReward &
  Deadline;

export type PhotoTask = PhotoTaskParameters &
  PhotoBriefing &
  CreatorCriteria &
  CreatorReward &
  Deadline;

export const initialVideoTaskState: VideoTask = {
  name: "",
  description: "",
  type: "",
  length: "",
  aspectRatio: "",
  product: "",
  useCase: "",
  language: "",
  scenes: ["", "", ""],
  dos: "",
  donts: "",
  otherInfo: "",
  numberOfCreators: 1,
  gender: ["", ""],
  ageRange: [18, 65],
  ageMin: 18,
  ageMax: 65,
  ethnicGroup: ["", "", ""],
  bodyType: ["", ""],
  height: ["", ""],
  countries: ["", "", ""],
  cashReward: 0,
  giveawayReward: 0,
  totalReward: 0,
  deadline: new Date(),
};

export const initialPhotoTaskState: PhotoTask = {
  name: "",
  description: "",
  type: "",
  aspectRatio: "",
  product: "",
  useCase: "",
  shots: ["", "", ""],
  dos: "",
  donts: "",
  otherInfo: "",
  numberOfCreators: 1,
  gender: ["", ""],
  ageRange: [18, 65],
  ageMin: 18,
  ageMax: 65,
  ethnicGroup: ["", "", ""],
  bodyType: ["", ""],
  height: ["", ""],
  countries: ["", "", ""],
  cashReward: 0,
  giveawayReward: 0,
  totalReward: 0,
  deadline: new Date(),
};

export enum ActionType {
  PUSH_VIDEO_TASK_PARAMETERS = "push_video_task_parameters",
  PUSH_PHOTO_TASK_PARAMETERS = "push_photo_task_parameters",
  PUSH_VIDEO_BRIEFING = "push_video_briefing",
  PUSH_PHOTO_BRIEFING = "push_photo_briefing",
  PUSH_CREATOR_CRITERIA = "push_creator_criteria",
  PUSH_REWARD = "push_reward",
  PUSH_DEADLINE = "push_deadline",
}

export type Action =
  | {
      type: ActionType.PUSH_VIDEO_TASK_PARAMETERS;
      payload: VideoTaskParameters;
    }
  | {
      type: ActionType.PUSH_PHOTO_TASK_PARAMETERS;
      payload: PhotoTaskParameters;
    }
  | { type: ActionType.PUSH_VIDEO_BRIEFING; payload: VideoBriefing }
  | { type: ActionType.PUSH_PHOTO_BRIEFING; payload: PhotoBriefing }
  | { type: ActionType.PUSH_CREATOR_CRITERIA; payload: CreatorCriteria }
  | { type: ActionType.PUSH_REWARD; payload: CreatorReward }
  | { type: ActionType.PUSH_DEADLINE; payload: Deadline };
