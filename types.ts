export interface DayContent {
  id: number;
  title: string;
  subTitle: string;
  coreIdea: string;
  scriptureRef: string;
  scriptureText: string;
  churchPrayer: string;
  fathersQuote: string;
  saintOfTheDay: {
    name: string;
    lesson: string;
  };
  meditation: string;
  activity: string; // "كن خفيف"
  challenge: string; // "مهمتك اليوم"
  evaluationQuestion: string;
}

export interface WeekContent {
  id: number;
  title: string;
  description: string;
  theme: string;
  introText: string;
  days: DayContent[];
}

export interface AppData {
  title: string;
  subtitle: string;
  intro: string[];
  rules: string[];
  weeks: WeekContent[];
}