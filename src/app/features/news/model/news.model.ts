export interface NewsItem {
  id: number;
  detailsTitle?: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  imageUrl: string;
  active?: boolean;
}


