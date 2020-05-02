import { db } from 'src/lib/db'

export const journals = () => {
  return db.journal.findMany()
}

export const journal = ({ id }) => {
  return db.journal.findOne({
    where: { id },
  })
}

export const createJournal = ({ input }) => {
  return db.journal.create({
    data: input,
  })
}

export const updateJournal = ({ id, input }) => {
  return db.journal.update({
    data: input,
    where: { id },
  })
}

export const deleteJournal = ({ id }) => {
  return db.journal.delete({
    where: { id },
  })
}
