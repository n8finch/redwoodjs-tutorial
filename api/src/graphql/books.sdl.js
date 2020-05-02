export const schema = gql`
  type Book {
    id: String!
    title: String!
    rating: String!
    review: String!
    createdAt: DateTime!
  }

  type Query {
    books: [Book!]!
    book(id: String!): Book!
  }

  input CreateBookInput {
    title: String!
    rating: String!
    review: String!
  }

  input UpdateBookInput {
    title: String
    rating: String
    review: String
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book!
    updateBook(id: String!, input: UpdateBookInput!): Book!
    deleteBook(id: String!): Book!
  }
`
