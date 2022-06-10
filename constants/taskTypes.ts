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
  deadlineString: string;
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
  ageRange: [18, 45],
  ageMin: 18,
  ageMax: 45,
  ethnicGroup: ["", "", ""],
  bodyType: ["", ""],
  height: ["", ""],
  countries: ["", "", ""],
  cashReward: 80, // Set to the minimum recommended
  giveawayReward: 0,
  totalReward: 0,
  deadline: setDeadline(new Date(), 21),
  deadlineString: setDeadline(new Date(), 21).toISOString().slice(0, 10),
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
  ageRange: [18, 45],
  ageMin: 18,
  ageMax: 45,
  ethnicGroup: ["", "", ""],
  bodyType: ["", ""],
  height: ["", ""],
  countries: ["", "", ""],
  cashReward: 25, // Set to the minimum recommended
  giveawayReward: 0,
  totalReward: 0,
  deadline: setDeadline(new Date(), 21),
  deadlineString: setDeadline(new Date(), 21).toISOString().slice(0, 10),
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

function setDeadline(date: Date, daysAhead?: number) {
  //date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  const daysShift: number = daysAhead ? daysAhead : 0;
  date.setDate(date.getDate() + daysShift);
  return date;
}
