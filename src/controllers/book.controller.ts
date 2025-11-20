import { Request, Response } from "express";

export type Book = {
    id: string;
    title: string;
    date?: string; // optional
}

export const books: Book[] = [
    { id: 'B-1', title: '1984' },
    { id: 'B-2', title: 'To kill a Mockingbird', date: '2015-12-10' }
];

export class BookController {
    getBooks = (req: Request, res: Response) => {
        const books = [
            { id: 'B-1', title: '1984' },
            { id: 'B-2', title: 'To kill a Mockingbird', date: '2015-12-10' }
        ];
        res.status(200).json(books);
    }
}