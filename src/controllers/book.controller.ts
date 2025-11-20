import { Request, Response } from "express";

import { z } from 'zod';

export const BookSchema = z.object({
    id: z.string().min(1, { message: "Book ID is required" }),
    title: z.string().min(1, { message: "Book title is required" }),
    date: z.string().optional()
});

export type Book = z.infer<typeof BookSchema>; // typeScript type from zod schema

// DTD - Data Transfer Object
export const CreateBookDTO = BookSchema.omit({ date: true }); // what client sends to server
export type CreateBookDTOType = z.infer<typeof CreateBookDTO>;

// export type Book = {
//     id: string;
//     title: string;
//     date?: string; // optional
// }

export const books: Book[] = [
    { id: 'B-1', title: '1984' },
    { id: 'B-2', title: 'To kill a Mockingbird', date: '2015-12-10' }
];

export class BookController {
    createBook = (req: Request, res: Response) => {
        const validation = CreateBookDTO.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ errors: validation.error });
        }
        const { id, title } = validation.data;

        // const { id, title } = req.body; // destructuring
        // // const id = req.body.id;
        // if (id) {
        //     return res.status(400).json({ message: "Book ID is required" });
        // }
        // if (title) {
        //     return res.status(400).json({ message: "Book title is required" });
        // }

        const checkBook = books.find(book => book.id === id);
        if (checkBook) {
            return res.status(409).json({ message: "Book with this ID already exists" });
        }
        const newBook: Book = { id, title };
        // same as { id: id, title: title }, if key and variable names are same
        books.push(newBook);
        return res.status(201).json(newBook);

    }
    getBooks = (req: Request, res: Response) => {
        const return_book: Book[] = books;
        res.status(200).json(return_book);
    }
}