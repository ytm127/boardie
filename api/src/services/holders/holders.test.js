import { holders } from './holders'

describe('holders', () => {
  scenario('returns all holders', async (scenario) => {
    const result = await holders()

    expect(result.length).toEqual(Object.keys(scenario.holder).length)
  })
})
