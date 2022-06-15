// Parameters for all select inputs in the new task form

import {
  Cube,
  FastForward,
  People,
  PersonFeedback,
  Play,
  SplitHorizontal,
  WeatherMoon,
  WeatherSunny,
  Location,
} from "@styled-icons/fluentui-system-filled";

// TASK PARAMETERS

export const contentTypeOptions = [
  {
    value: "video",
    label: "Video",
    description:
      "Commission video content in any format and for any platform. Use the content in whichever way you want",
  },
  {
    value: "photo",
    label: "Photo",
    description:
      "Commission photo content in any format and for any platform. Use the content in whichever way you want.",
  },
];

export const videoSubtypeOptions = [
  { value: "unboxing", label: "Unboxing" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "demo", label: "Demo" },
  { value: "howTo", label: "How-to" },
  { value: "testimonial", label: "Testimonial" },
];

export const photoSubtypeOptions = [
  { value: "lifestyle", label: "Liefestyle" },
  { value: "flatLay", label: "Flat-lay" },
];

export const videoLengthOptions = [
  { value: "15", label: "15 seconds" },
  { value: "30", label: "30 seconds" },
  { value: "60", label: "60 seconds" },
];

export const contentAspectRatioOptions = [
  { value: "9:16", label: "9:16" },
  { value: "3:4", label: "3:4" },
  { value: "4:5", label: "4:5" },
  { value: "1:1", label: "1:1" },
  { value: "5:4", label: "5:4" },
  { value: "4:3", label: "4:3" },
  { value: "16:9", label: "16:9" },
];

export const contentUseCaseOptions = [
  { value: "adCreative", label: "Ad creative" },
  { value: "socialMedia", label: "Social media" },
  { value: "blogOnline", label: "Blog / online" },
  { value: "socialMedia", label: "Social media" },
  { value: "emailMarketing", label: "Email marketing" },
  { value: "other", label: "Other" },
];

export const videoLanguageOptions = [
  { value: "english", label: "English" },
  { value: "german", label: "German" },
  { value: "spanish", label: "Spanish" },
  { value: "italian", label: "Italian" },
  { value: "french", label: "French" },
];

// TEMP => should be an async when opening the form

export const contentProductOptions = [
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
  { value: "product4", label: "Product 4" },
];

// CREATOR CRITERIA

export const genderOptions = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "non-binary", label: "Non-binary" },
];

export const ethnicGroupOptions = [
  { value: "arabic", label: "Arabic" },
  { value: "asian", label: "Asian" },
  { value: "black", label: "Black" },
  { value: "caucasian", label: "Caucasian" },
  { value: "latino", label: "Latino" },
  { value: "indian", label: "Indian" },
  { value: "multiracial", label: "Multiracial" },
];

export const bodyTypeOptions = [
  { value: "thin", label: "Thin" },
  { value: "muscular", label: "Muscular" },
  { value: "average", label: "Averave" },
  { value: "curvy", label: "Curvy" },
  { value: "plus-size", label: "Plus size" },
];

export const heightOptions = [
  { value: "petite", label: "Petite" },
  { value: "average", label: "Average" },
  { value: "tall", label: "Tall" },
];

export const countryOptions = [
  { value: "de", label: "Germany" },
  { value: "at", label: "Austria" },
  { value: "ch", label: "Switzerland" },
  { value: "uk", label: "United Kingdom" },
  { value: "se", label: "Sweden" },
  { value: "dk", label: "Denmark" },
  { value: "nl", label: "Netherlands" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
];

// VIDEO SCENE PARAMETERS

export const sceneTypeOptions = [
  { value: "intro", label: "Intro", color: "#FBBF24" },
  { value: "benefit", label: "Benefit", color: "#2DD4BF" },
  { value: "educate", label: "Educate", color: "#F472B6" },
  { value: "reference", label: "Reference", color: "#FB7185" },
  { value: "solution", label: "Solution", color: "#4ADE80" },
  { value: "impression", label: "Impression", color: "#38BDF8" },
  { value: "promo", label: "Promo code", color: "#FB923C" },
  { value: "cta", label: "Call to action", color: "#C084FC" },
];

export const sceneFocusOptions = [
  { value: "creator", label: "Creator", icon: People },
  { value: "product", label: "Product", icon: Cube },
  {
    value: "creatorAndProduct",
    label: "Creator & Product",
    icon: SplitHorizontal,
  },
  { value: "splitScreen", label: "Split screen", icon: PersonFeedback },
];

export const lightingOptions = [
  { value: "day", label: "Day", icon: WeatherSunny },
  { value: "night", label: "Night", icon: WeatherMoon },
];

export const locationOptions = [
  { value: "indoor", label: "Indoor", icon: Location },
  { value: "outdoor", label: "Outdoor", icon: Location },
];

export const playbackSpeedOptions = [
  { value: "1x", label: "1x", icon: Play },
  { value: "2x", label: "2x", icon: FastForward },
  { value: "3x", label: "3x", icon: FastForward },
  { value: "5x", label: "5x", icon: FastForward },
];
