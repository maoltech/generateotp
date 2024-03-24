# Token Generator

Token Generator is a simple JavaScript utility for generating random tokens of various types.

## Installation

You can install Token Generator via npm:

```bash
npm install maoltech-generate-otp
```

## Usage
Import tokenGenerator from the package and use the generateToken method to generate tokens

```bash
import { tokenGenerator } from 'maoltech-generate-otp';

// Generate a numeric token of length 8
const numericToken = tokenGenerator.generateToken(8, 'numeric');
console.log(numericToken); // Output: 12345678

// Generate an alphanumeric token of length 12
const alphanumericToken = tokenGenerator.generateToken(12, 'alphanumeric');
console.log(alphanumericToken); // Output: abCDEfGHiJk1

// Generate an alphabetic token of length 10
const alphabeticToken = tokenGenerator.generateToken(10, 'alphabetic');
console.log(alphabeticToken); // Output: AbCdEfGhIj
```


## API

### generateToken(length: number, type: string): string
Generates a random token of the specified length and type.

length: The length of the token to be generated.
type: The type of characters to be included in the token. Possible values are 'numeric', 'alphanumeric', and 'alphabetic'.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Github Repository
https://github.com/maoltech/maoltech-generate-otp