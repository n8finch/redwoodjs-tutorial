import Book from 'src/components/Book'

export const QUERY = gql`
  query FIND_BOOK_BY_ID($id: String!) {
    book: book(id: $id) {
      id
      title
      rating
      review
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Book not found</div>

export const Success = ({ book }) => {
  return <Book book={book} />
}
