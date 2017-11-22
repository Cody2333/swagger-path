# Swagger-Path[![Build Status](https://www.travis-ci.org/Cody2333/swagger-path.svg?branch=master)](https://www.travis-ci.org/Cody2333/swagger-path)

designed to convert swagger path to uri path.

**eg. /user/{id} -> /user/:id**

## Usage

`npm install swagger-path`

## Example

```
const swagger2path = require('swagger-path');

const path = swagger2path('/users/{id}'); // '/users/:id'

```

## License
Licensed under [MIT-License](LICENSE)