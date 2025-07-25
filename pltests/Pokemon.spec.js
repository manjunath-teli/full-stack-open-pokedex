import { test, expect, describe } from '@playwright/test';


describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
     await page.goto('http://localhost:8080/pokemon/ivysaur')
    await expect(page.getByText('Ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})