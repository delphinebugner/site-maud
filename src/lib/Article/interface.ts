export interface RawArticle {
  title: string;
  subtitle?: string;
  date: string;
  id: string;
}

export interface Article {
  title: string;
  subtitle?: string;
  date: string;
  id: string;
  body: string;
}
