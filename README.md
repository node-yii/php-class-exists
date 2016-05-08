# php-class-exists
Clone of PHP's function "class_exists"

## Installation

``` bash
$ npm install --save php-class-exists
```

## Example Usage

``` js
"use strict";
var class_exists = require('php-class-exists');

class MyClass
{
   // ...
}

if(class_exists("MyClass"))
{
  console.log("Exists");
}
else
{
  console.log("Does not exist");
}
```

## Test

```shell
npm test
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)
