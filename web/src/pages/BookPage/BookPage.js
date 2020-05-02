import BooksLayout from 'src/layouts/BooksLayout'
import BookCell from 'src/components/BookCell'

const BookPage = ({ id }) => {
  return (
    <BooksLayout>
      <BookCell id={id} />
    </BooksLayout>
  )
}

export default BookPage
