# Country Kit - Comprehensive Country Data

A comprehensive package for working with country data. Includes ISO codes, names in multiple languages, capitals, currencies, continents and more.

## Installation

```bash
npm install @andreasnicolaou/country-kit
```

## Usage

### Importing the Library

```typescript
import { CountryKit } from '@andreasnicolaou/country-kit';
```

### Get all Countries

```typescript
const countries = CountryKit.getAllCountries();
console.log(countries); // Logs all countries
```

### Get countries by Continent

```typescript
const countries = CountryKit.getCountriesByContinent('Asia');
console.log(countries); // Logs all countries with continent 'Asia'
```

### Get countries by Currency

```typescript
const countries = CountryKit.getCountriesByCurrency('USD');
console.log(countries); // Logs all countries with currency 'USD'
```

### Get countries by Language

```typescript
const countries = CountryKit.getCountriesByLanguage('Spanish');
console.log(countries); // Logs all countries with language 'Spanish'
```

### Get country by Code

```typescript
const country = CountryKit.getCountryByCode('us');
console.log(country); // Logs US country data
```

## Country Object Structure

| Property        | Type                                                                                                                                                                                                                                                                                                       | Description                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `code`          | `string \| null`                                                                                                                                                                                                                                                                                           | The two-letter ISO 3166-1 country code.                          |
| `code3`         | `string \| null`                                                                                                                                                                                                                                                                                           | The three-letter ISO 3166-1 country code.                        |
| `numeric_code`  | `string \| null`                                                                                                                                                                                                                                                                                           | The numeric ISO 3166-1 country code.                             |
| `name`          | `string \| null`                                                                                                                                                                                                                                                                                           | The common name of the country.                                  |
| `official_name` | `string \| null`                                                                                                                                                                                                                                                                                           | The official name of the country.                                |
| `native_name`   | `string \| null`                                                                                                                                                                                                                                                                                           | The native name of the country.                                  |
| `translations`  | `Record<'ara' \| 'bre' \| 'ces'\| 'chn'\| 'cym'\| 'deu'\| 'esp'\| 'est'\| 'fin'\| 'fra'\| 'grc'\| 'hrv'\| 'hun'\| 'idn'\| 'ind'\| 'ita'\| 'jpn'\| 'kor'\| 'nld'\| 'per'\| 'pol'\| 'por'\| 'prt'\| 'rus'\| 'sau'\| 'slk'\| 'spa'\| 'srp'\| 'swe'\| 'tha'\| 'tur'\| 'urd'\| 'usa'\| 'vnm'\| 'zho' , string>` | A record of country names translated into various languages.     |
| `capital`       | `string \| null`                                                                                                                                                                                                                                                                                           | The capital city of the country.                                 |
| `continent`     | `string \| null`                                                                                                                                                                                                                                                                                           | The continent where the country is located.                      |
| `subregion`     | `string \| null`                                                                                                                                                                                                                                                                                           | The subregion where the country is located.                      |
| `tld`           | `string[]`                                                                                                                                                                                                                                                                                                 | An array of top-level domains associated with the country.       |
| `flag`          | `string \| null`                                                                                                                                                                                                                                                                                           | The URL of the country’s flag.                                   |
| `emoji`         | `string \| null`                                                                                                                                                                                                                                                                                           | The emoji representation of the country's flag.                  |
| `currency`      | `{ code: string; name: string; symbol: string }[]`                                                                                                                                                                                                                                                         | An array of currency objects with code, name, and symbol.        |
| `languages`     | `string[]`                                                                                                                                                                                                                                                                                                 | An array of official languages spoken in the country.            |
| `timezones`     | `string[]`                                                                                                                                                                                                                                                                                                 | An array of timezones used in the country.                       |
| `phone_code`    | `string \| null`                                                                                                                                                                                                                                                                                           | The international dialing code of the country.                   |
| `latlng`        | `number[] \| null`                                                                                                                                                                                                                                                                                         | The latitude and longitude coordinates of the country.           |
| `population`    | `number \| null`                                                                                                                                                                                                                                                                                           | The estimated population of the country.                         |
| `area`          | `number \| null`                                                                                                                                                                                                                                                                                           | The total land area of the country in square kilometers.         |
| `drives_on`     | `'left' \| 'right' \| null`                                                                                                                                                                                                                                                                                | The side of the road vehicles drive on in the country.           |
| `demonym`       | `string \| null`                                                                                                                                                                                                                                                                                           | The demonym used for people from the country.                    |
| `world_share`   | `string \| null`                                                                                                                                                                                                                                                                                           | The percentage of the world’s population living in this country. |

## Data Sources

Country data have been generated using the following sources:

- **[REST Countries API](https://restcountries.com/v3.1/all)** - Providing detailed country information, including ISO codes, names, capitals, currencies, and languages.
- **[Worldometer](https://www.worldometers.info/world-population/population-by-country/)** - Providing population, area, and demographic statistics.

## Contributing

Contributions are welcome! If you encounter issues or have ideas to enhance the library, feel free to submit an issue or pull request.
