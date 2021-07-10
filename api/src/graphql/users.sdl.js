export const schema = gql`
  type User {
    id: Int!
    name: String
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    name: String
  }

  input UpdateUserInput {
    name: String
  }
`
