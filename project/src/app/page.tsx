import styles from "./page.module.css";
import { getAllBooks } from "./lib/actions";
import { Book } from "./lib/components/Book";

export default async function Home() {
  const books = await getAllBooks()
  console.log('Books:', books)


  return (
    <main className={styles.main}>
      <h1>Book List</h1>
      <div className={styles.bookList}>
        {
          books.map(book =><Book key={book.id} book={book}/>)
        }
      </div>
    </main>
  )
}
