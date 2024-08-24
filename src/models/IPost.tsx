enum Category {
  Psychology = "Psychology",
  Social = "Social",
  Science = "Science",
  Fitness = "Fitness",
  Religion = "Religion",
  Others = "Others"
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