import { getImage } from "../../base/11-async-await"


describe('Pruebas de async and await', () => {

  test('should return the url of image', async () => {
    const url = await getImage();

    expect(typeof url).toBe('string');
    expect(url.includes('https://')).toBe(true);
  })
  
})