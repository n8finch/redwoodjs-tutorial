import Journal from 'src/components/Journal'

export const QUERY = gql`
  query FIND_JOURNAL_BY_ID($id: String!) {
    journal: journal(id: $id) {
      id
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Journal not found</div>

export const Success = ({ journal }) => {
  return <Journal journal={journal} />
}
