import { boardGames } from './boardGames'

describe('boardGames', () => {
  scenario('returns all boardGames', async (scenario) => {
    const result = await boardGames()

    expect(result.length).toEqual(Object.keys(scenario.boardGame).length)
  })
})
