import BooksLayout from 'src/layouts/BooksLayout'
import EditBookCell from 'src/components/EditBookCell'

const EditBookPage = ({ id }) => {
  return (
    <BooksLayout>
      <EditBookCell id={id} />
    </BooksLayout>
  )
}

export default EditBookPage
