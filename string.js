// Here’s a list of commonly used string methods in JavaScript:

// charAt(index) – Returns the character at a specified index.

var str = "JavaScript";
console.log(str.charAt(0)); // Output: J

// charCodeAt(index) – Returns the Unicode value of the character at a specified index.

var str = "JavaScript";
console.log(str.charCodeAt(0)); // Output: 74

// concat() – Combines two or more strings into a new string.

var str1 = "Hello";
var str2 = "World";
console.log(str1.concat(" ", str2)); // Output: Hello World

// indexOf(searchValue) – Returns the first occurrence of a specified value.

var str = "JavaScript";
console.log(str.indexOf("Script")); // Output: 4

// lastIndexOf(searchValue) – Returns the last occurrence of a specified value.

var str = "JavaScript";
console.log(str.lastIndexOf("a")); // Output: 3

// slice(start, end) – Extracts a part of a string and returns it as a new string.

var str = "JavaScript";
console.log(str.slice(0, 4)); // Output: Java

// substring(start, end) – Extracts characters between two indices.

var str = "JavaScript";
console.log(str.substring(0, 4)); // Output: Java

// substr(start, length) – Extracts a substring starting from a specified index and a specified length.

var str = "JavaScript";
console.log(str.substr(0, 4)); // Output: Java

// toLowerCase() – Converts a string to lowercase.

var str = "JavaScript";
console.log(str.toLowerCase()); // Output: javascript

// toUpperCase() – Converts a string to uppercase.

var str = "JavaScript";
console.log(str.toUpperCase()); // Output: JAVASCRIPT

// trim() – Removes whitespace from both ends of a string.

var str = "  Hello World  ";
console.log(str.trim()); // Output: Hello World

// trimStart() – Removes whitespace from the beginning of a string.

var str = "  Hello";
console.log(str.trimStart()); // Output: Hello

// trimEnd() – Removes whitespace from the end of a string.

var str = "Hello  ";
console.log(str.trimEnd()); // Output: Hello

// split(separator) – Splits a string into an array of substrings.

var str = "JavaScript is fun!";
console.log(str.split(" ")); // Output: [ 'JavaScript', 'is', 'fun!' ]

// replace(searchValue, newValue) – Replaces a specified value with a new value.

var str = "JavaScript is fun!";
console.log(str.replace("fun", "awesome")); // Output: JavaScript is awesome!

// includes(searchValue) – Checks if a string contains a specified value.

var str = "JavaScript";
console.log(str.includes("Script")); // Output: true

// repeat(count) – Creates a new string with a specified number of copies of the original string.

var str = "Hi! ";
console.log(str.repeat(3)); // Output: Hi! Hi! Hi!

// padStart(targetLength, padString) – Pads the current string from the start with a specified string until it reaches the specified length.

var str = "5";
console.log(str.padStart(3, "0")); // Output: 005

// padEnd(targetLength, padString) – Pads the current string from the end with a specified string until it reaches the specified length.

var str = "5";
console.log(str.padEnd(3, "0")); // Output: 500

// normalize(form) – Returns the Unicode Normalization Form of the string.

var str = "café";
console.log(str.normalize()); // Output: café

// startsWith(searchString) – Checks if a string begins with a specified substring.

var str = "JavaScript";
console.log(str.startsWith("Java")); // Output: true

// endsWith(searchString) – Checks if a string ends with a specified substring.

var str = "JavaScript";
console.log(str.endsWith("Script")); // Output: true

// codePointAt(index) – Returns the Unicode code point at a specified index.

var str = "JavaScript";
console.log(str.codePointAt(0)); // Output: 74

// localeCompare() – Compares two strings in the current locale.

var str1 = "apple";
var str2 = "banana";
console.log(str1.localeCompare(str2)); // Output: -1

// fromCharCode() – Creates a string from a sequence of Unicode values.

var str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str); // Output: Hello

// raw() – Creates a string from a template literal that preserves whitespace and escapes characters.

var name = "World";
console.log(String.raw`Hello\n${name}`); // Output: Hello\nWorld

// search() – Searches for a substring and returns the index of the first match.

var str = "Hello World";
console.log(str.search("World")); // Output: 6

// match() – Searches a string for a match against a regular expression and returns an array of matches.

var str = "The quick brown fox";
console.log(str.match(/o/g)); // Output: [ 'o', 'o' ]
