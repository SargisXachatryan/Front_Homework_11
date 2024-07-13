import { getBookById } from "@/app/lib/actions";
import { notFound } from "next/navigation";

interface IProps {
  params: { id: string }
}

export default async function Page(props: IProps) {
  const book = await getBookById(props.params.id)

  if (!book) {
    notFound()
  }

  return (
    <main className="container">
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            <figure className="image is-4by5">
              <img src={book.photo} alt={book.title} />
            </figure>
          </div>
        </div>
      </section>
    </main>
  )
}
