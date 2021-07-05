export const schema = gql`
  type BoardGame {
    id: Int!
    name: String
  }

  type Query {
    boardGames: [BoardGame!]!
  }

  input CreateBoardGameInput {
    name: String
  }

  input UpdateBoardGameInput {
    name: String
  }
`
