import { CountryKit } from './index';

describe('CountryKit  ', () => {
  test('countries() should return all countries', () => {
    const result = CountryKit.getAllCountries();
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
    expect(Object.keys(result).length).toBeGreaterThan(0);
  });

  test('countryByCode() should return the correct country', () => {
    const country = CountryKit.getCountryByCode('us');
    expect(country).toBeDefined();
    expect(country?.code).toBe('US');
    expect(country?.name).toBe('United States');
  });

  test('countriesByCurrency() should return countries using given currency', () => {
    const usdCountries = CountryKit.getCountriesByCurrency('USD');
    expect(usdCountries.length).toBeGreaterThan(0);
    expect(usdCountries.some((c) => c.currency.some((curr) => curr.code === 'USD'))).toBe(true);
  });

  test('countriesByCurrency() should be case-insensitive', () => {
    const lower = CountryKit.getCountriesByCurrency('usd');
    const upper = CountryKit.getCountriesByCurrency('USD');
    expect(lower).toEqual(upper);
  });

  test('filterByContinent() should return countries in the given continent', () => {
    const asianCountries = CountryKit.getCountriesByContinent('Asia');
    expect(asianCountries.length).toBeGreaterThan(0);
    expect(asianCountries.every((c) => c.continent === 'Asia')).toBe(true);
  });

  test('filterByContinent() should be case-insensitive', () => {
    const lower = CountryKit.getCountriesByContinent('asia');
    const upper = CountryKit.getCountriesByContinent('ASIA');
    expect(lower).toEqual(upper);
  });

  test('filterByLanguages() should return countries speaking the given language', () => {
    const spanishCountries = CountryKit.getCountriesByLanguage('Spanish');
    expect(spanishCountries.length).toBeGreaterThan(0);
    expect(spanishCountries.some((c) => c.languages.includes('Spanish'))).toBe(true);
  });

  test('filterByLanguages() should be case-insensitive', () => {
    const lower = CountryKit.getCountriesByLanguage('spanish');
    const upper = CountryKit.getCountriesByLanguage('SPANISH');
    expect(lower).toEqual(upper);
  });
});
