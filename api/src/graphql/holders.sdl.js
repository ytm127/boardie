export const schema = gql`
  type Holder {
    id: Int!
    name: String
  }

  type Query {
    holders: [Holder!]!
  }

  input CreateHolderInput {
    name: String
  }

  input UpdateHolderInput {
    name: String
  }
`
