export interface Project {
    id: string;
    title: string;
    smallDes:string;
    description: string;
    longDescription?: string;
    video?: string;
    image?: string;
    liveLink?: string;
    githubLink?: string;
    tags: string[];
    date?: string;
    tweetUrl?: string;
  }