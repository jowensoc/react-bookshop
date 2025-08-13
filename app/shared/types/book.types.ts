import { type AuthorType } from "./author.types"

export type BookType = {
    bookid: number,
    title?: string,
    genre?: string,
    author?: [AuthorType],
    bookthumbnail?: string
}