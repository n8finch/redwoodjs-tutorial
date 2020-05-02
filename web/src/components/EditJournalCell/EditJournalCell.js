import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import JournalForm from 'src/components/JournalForm'

export const QUERY = gql`
  query FIND_JOURNAL_BY_ID($id: String!) {
    journal: journal(id: $id) {
      id
      body
      createdAt
    }
  }
`
const UPDATE_JOURNAL_MUTATION = gql`
  mutation UpdateJournalMutation($id: String!, $input: UpdateJournalInput!) {
    updateJournal(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ journal }) => {
  const [updateJournal, { loading, error }] = useMutation(UPDATE_JOURNAL_MUTATION, {
    onCompleted: () => {
      navigate(routes.journals())
    },
  })

  const onSave = (input, id) => {
    updateJournal({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Journal {journal.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <JournalForm journal={journal} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
