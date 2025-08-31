export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: Date;
  category: string;
  imageUrl: string;
  active?: boolean;
}


