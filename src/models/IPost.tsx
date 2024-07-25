enum Category {
  "Psychology",
  "Social",
  "Science",
  "Fitness",
  "Religion",
  "Others"
}

export interface IPost {
  id: number;
  userId: number;
  category: Category;
  description: string;
  approval: Boolean;
  createdAt: Date;
  updatedAt: Date;
}