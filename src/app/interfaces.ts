export interface IRoot {
  totalArticles: number;
  articles: IArticle[];
}

export interface IArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: ISource;
}

export interface ISource {
  name: string;
  url: string;
}
