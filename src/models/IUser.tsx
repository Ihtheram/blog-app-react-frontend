enum Role {
    "Writer",
    "Admin",
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    institute: string;
    address: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}