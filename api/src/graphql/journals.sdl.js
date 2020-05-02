export const schema = gql`
  type Journal {
    id: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    journals: [Journal!]!
    journal(id: String!): Journal!
  }

  input CreateJournalInput {
    body: String!
  }

  input UpdateJournalInput {
    body: String
  }

  type Mutation {
    createJournal(input: CreateJournalInput!): Journal!
    updateJournal(id: String!, input: UpdateJournalInput!): Journal!
    deleteJournal(id: String!): Journal!
  }
`
