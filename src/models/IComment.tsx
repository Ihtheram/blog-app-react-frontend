export interface IComment {
    id: number;
    postId: number;
    commenterId: number;
    description: string;
    parentCommentId: number;
    createdAt: Date;
    updatedAt: Date;
}