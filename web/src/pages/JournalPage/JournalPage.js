import JournalsLayout from 'src/layouts/JournalsLayout'
import JournalCell from 'src/components/JournalCell'

const JournalPage = ({ id }) => {
  return (
    <JournalsLayout>
      <JournalCell id={id} />
    </JournalsLayout>
  )
}

export default JournalPage
