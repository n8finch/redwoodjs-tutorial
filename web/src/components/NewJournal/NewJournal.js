import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import JournalForm from 'src/components/JournalForm'

const CREATE_JOURNAL_MUTATION = gql`
  mutation CreateJournalMutation($input: CreateJournalInput!) {
    createJournal(input: $input) {
      id
    }
  }
`

const NewJournal = () => {
  const [createJournal, { loading, error }] = useMutation(CREATE_JOURNAL_MUTATION, {
    onCompleted: () => {
      navigate(routes.journals())
    },
  })

  const onSave = (input) => {
    createJournal({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Journal</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <JournalForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewJournal
