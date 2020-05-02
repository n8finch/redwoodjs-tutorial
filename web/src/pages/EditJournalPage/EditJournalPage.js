import JournalsLayout from 'src/layouts/JournalsLayout'
import EditJournalCell from 'src/components/EditJournalCell'

const EditJournalPage = ({ id }) => {
  return (
    <JournalsLayout>
      <EditJournalCell id={id} />
    </JournalsLayout>
  )
}

export default EditJournalPage
