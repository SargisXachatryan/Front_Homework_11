"use client"
import React from 'react'
import { IBook } from '../types'
import Link from 'next/link'


interface Props {
    book: IBook
}

export const Book = ({ book }: Props) => {
    return <div className="column is-one-quarter" key={book.id}>
        <Link href={`/books/${book.id}`}>
            <div className="box">
                <figure className="image is-4by5">
                    <img src={book.photo} alt={book.title} />
                </figure>
                <div className="content">
                    <h4 className="title is-5">{book.title}</h4>
                    <p className="subtitle is-6">{book.author}</p>
                    <p className="price">${book.price}</p>
                </div>
            </div>
        </Link>
    </div>
}
