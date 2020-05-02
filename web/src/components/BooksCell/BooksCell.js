import { Link, routes } from '@redwoodjs/router'

import Books from 'src/components/Books'

export const QUERY = gql`
  query BOOKS {
    books {
      id
      title
      rating
      review
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No books yet. '}
      <Link
        to={routes.newBook()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ books }) => {
  return <Books books={books} />
}
