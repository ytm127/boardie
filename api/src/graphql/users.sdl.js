export const schema = gql`
  type User {
    id: Int!
    username: String
    hashedPassword: String!
    salt: String!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    username: String
    hashedPassword: String!
    salt: String!
  }

  input UpdateUserInput {
    username: String
    hashedPassword: String
    salt: String
  }
`
