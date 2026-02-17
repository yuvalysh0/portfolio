export interface GitHubStats {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  contributions: number;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
  updatedAt: string;
}

export interface LanguageStats {
  [key: string]: number;
}
