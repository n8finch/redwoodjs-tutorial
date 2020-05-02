import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BookForm from 'src/components/BookForm'

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      id
    }
  }
`

const NewBook = () => {
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK_MUTATION, {
    onCompleted: () => {
      navigate(routes.books())
    },
  })

  const onSave = (input) => {
    createBook({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Book</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <BookForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBook
