import { Link, routes } from '@redwoodjs/router'

import Journals from 'src/components/Journals'

export const QUERY = gql`
  query JOURNALS {
    journals {
      id
      body
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
      {'No journals yet. '}
      <Link
        to={routes.newJournal()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ journals }) => {
  return <Journals journals={journals} />
}
