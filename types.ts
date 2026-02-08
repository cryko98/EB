
export interface User {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface Post {
  id: number;
  userId: number;
  timestamp: string;
  text: string;
  imageUrl?: string;
  likes: number;
  comments: number;
}
