import countries, { CountryType, Country } from './countries';

export class CountryKit {
  /**
   * Get all countries.
   * @returns countries
   * @memberof CountryKit
   */
  public static getAllCountries(): Record<string, Country> {
    return countries;
  }

  /**
   * Get countries within a specific continent.
   * @param continent - The continent name
   * @returns Array of countries in the continent
   * @memberof CountryKit
   */
  public static getCountriesByContinent(continent: string): Country[] {
    return Object.values(countries).filter((country) => country.continent?.toLowerCase() === continent.toLowerCase());
  }

  /**
   * Get countries using a specific currency.
   * @param currencyCode - ISO 4217 currency code
   * @returns Array of countries using the currency
   * @memberof CountryKit
   */
  public static getCountriesByCurrency(currencyCode: string): Country[] {
    return Object.values(countries).filter((country) =>
      country.currency.some((currency) => currency.code.toLowerCase() === currencyCode.toLowerCase())
    );
  }

  /**
   * Get countries using a specific language.
   * @param language
   * @returns Array of countries using the language
   * @memberof CountryKit
   */
  public static getCountriesByLanguage(language: string): Country[] {
    return Object.values(countries).filter((country) =>
      country.languages.some((lang) => lang.toLowerCase() === language.toLowerCase())
    );
  }

  /**
   * Find a country by its ISO code.
   * @param code - The country code (ISO 3166-1 alpha-2)
   * @returns Country object or undefined
   * @memberof CountryKit
   */
  public static getCountryByCode(code: CountryType): Country | undefined {
    return countries[code];
  }
}
