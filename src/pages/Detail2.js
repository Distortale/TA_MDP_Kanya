import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";

import "./Detail2.css";
import CardDetail from "../components/CardDetail";

const Detail = () => {
    const [books, setBooks] = useState([]);

    useEffect (() => {
        const fetchBooks = async () => {
            const res = await axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=KFvtzEOG5gyvdiTyzOJ1QqswfdYM96NR")
            
            setBooks(res.data.results.books);
            console.log(res.data.results.books);
        };

        fetchBooks();
    },  []);

    return (
        <>
        <div>
        <h1 id="title">Book's Synopsis</h1>
            {books.map((book, rank) => (
                <Fragment key={book.rank}>
                <CardDetail
                    ranking={book.rank}
                    judul={book.title}
                    sinopsis={book.description}
                /> 
                    {books.length === rank + 1 && <div style={{ marginBottom: 80 }} />}
                </Fragment>
            ))}
        </div>
        </>
    );
};

export default Detail;