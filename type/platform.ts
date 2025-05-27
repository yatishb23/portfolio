export interface QuestionStatsProps {
  platforms?: PlatformData[];
}

export interface QuestionStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

export interface PlatformData {
  platform: string;
  username: string;
  totalQuestionStats?: {
    totalQuestionCounts?: number;
    easyQuestionCounts?: number;
    mediumQuestionCounts?: number;
    hardQuestionCounts?: number;
  };
  rating?: number;
  rank?: number;
  userStats: {
    currentRating: number;
    maxRating: number;
    handle: any;
  };
}
