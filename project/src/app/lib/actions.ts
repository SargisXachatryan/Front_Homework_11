import { readFile } from "fs/promises"
import { IBook } from "./types"


export const getAllBooks = async (): Promise<IBook[]> => {
    const data = await readFile("books.json","utf-8")
    if (data) {
        return JSON.parse(data)
    }
    return []
}


export const getBookById = async (id: string): Promise<IBook | undefined> => {
    const data = await readFile("books.json", "utf-8")
    if (data) {
        const books: IBook[] = JSON.parse(data)
        return books.find(book => book.id === id)
    }
    return undefined
}
