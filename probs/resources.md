## RESOURCES:

### B

- https://sabe.io/blog/javascript-filter-array-multiple-conditions
- https://bobbyhadz.com/blog/javascript-filter-array-multiple-conditions
- https://afrotech.com/the-cosby-show-actor-joseph-c-phillips-becomes-professor-at-hbcu?item=5

### C

- https://javascript.info/regexp-character-classes

Dot as literally any character with “s” flag
By default, a dot doesn’t match the newline character \n.

For instance, the regexp A.B matches A, and then B with any character between them, except a newline \n:

```javascript
alert( "A\nB".match(/A.B/) ); // null (no match)
```

There are many situations when we’d like a dot to mean literally “any character”, newline included.

That’s what flag s does. If a regexp has it, then a dot . matches literally any character:

```javascript
alert( "A\nB".match(/A.B/s) ); // A\nB (match!)
```

- **Named capture groups:** https://www.javascripttutorial.net/javascript-string-match/
- **Negated character set [^xyz]:** https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4
- https://stackoverflow.com/questions/8240765/is-there-a-regex-to-match-a-string-that-contains-a-but-does-not-contain-b

You use look ahead assertions to check if a string contains a word or not.

If you want to assure that the string contains "Android" at some place you can do it like this:

```javascript
^(?=.*Android).*
```

You can also combine them, to ensure that it contains "Android" at some place AND "Mobile" at some place:

```javascript
^(?=.*Android)(?=.*Mobile).*
```

If you want to ensure that a certain word is NOT in the string, use the negative look ahead:

```javascript
^(?=.*Android)(?!.*Mobile).*
```

This would require the word "Android" to be in the string and the word "Mobile" is not allowed in the string. The .* part matches then the complete string/row when the assertions at the beginning are true.

- https://regexr.com/2v9bp
- **Negative lookahead:** https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch05s04.html

**Problem**
You want to use a regular expression to match any complete word _except_ cat. Catwoman, vindicate, and other words that merely contain the letters “cat” should be matched—just not cat.

**Solution**
A **negative lookahead** can help you _<u>rule out specific words</u>_, and is key to this next regex:

```javascript
\b(?!cat\b)\w+
```

- https://regex101.com/
- https://stackoverflow.com/questions/5925738/which-regular-expression-operator-means-dont-match-this-character
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

### H

Some regular expression resources to get challenge inspirations from:

- Regex crossword https://regexcrossword.com/
- Regex golf http://regex.alf.nu/
- The Case for Regular Expressions https://technet.microsoft.com/en-us/magazine/ee835717.aspx
- Regular Expressions http://www.regular-expressions.info/
- The Many Uses of Regex http://www.rexegg.com/regex-uses.html
- Regular Expression Examples https://en.wikipedia.org/wiki/Regular_expression#Examples

### J

- https://stackoverflow.com/questions/19861286/words-with-vowels-in-alphabetical-order

You can simply use a regular expression in your method :

**GOTCHA: This doesn't work**

```java
public static boolean containsVowels(String word) {
    return Pattern.matches(".*a.*e.*i.*o.*u.*y.*", word);
}
```


- https://www.geeksforgeeks.org/check-whether-the-vowels-in-a-string-are-in-alphabetical-order-or-not/

- https://www.tutorialspoint.com/check-whether-the-vowels-in-a-string-are-in-alphabetical-order-or-not-in-python#

To solve this, we will follow these steps −

```
character := character whose ASCII is 64
for i in range 0 to size of s - 1, do
  if s[i] is any one of ('A','E','I','O','U','a','e','i','o','u'), then
   if s[i] < character, then
   return False
  otherwise,
    character := s[i]
return True
```

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
- https://www.dcode.fr/random-selection
- https://stackoverflow.com/questions/64503733/how-can-i-extract-vowels-in-a-javascript-string

### K

- https://www.samanthaming.com/tidbits/81-how-to-check-if-array-includes-a-value/
- https://stackoverflow.com/questions/39966125/using-indexof-to-filter-an-array
- **Function expressions:** https://www.javascripttutorial.net/es6/javascript-arrow-function/

### L

- https://stackoverflow.com/questions/33763768/loop-through-array-of-values-with-arrow-function

In short:

```javascript
someValues.forEach((element) => {
    console.log(element);
});
```

If you care about index, then second parameter can be passed to receive the index of current element:

```javascript
someValues.forEach((element, index) => {
    console.log(`Current index: ${index}`);
    console.log(element);
});
```

### M

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
- https://www.codermen.com/find-longest-shortest-and-random-string-in-array-in-javascript/
- https://stackoverflow.com/questions/40864915/find-the-shortest-string-in-array
- https://www.browserling.com/tools/shortest-line
- https://randomwordgenerator.com/

### N

- https://scrabble.merriam.com/words-without-vowels
- https://regex101.com/r/mT0qF3/1
- https://codereview.stackexchange.com/questions/163085/function-to-find-the-shortest-word-in-an-array-where-not-every-element-is-a-str

Probably the shortest way to do this is to use array.filter to only get the strings, array.sort to sort them by length, and get the first item of the resulting array.

```javascript
function findShortestWordAmongMixedElements(arr){
  return arr.filter(e => typeof e === 'string').sort((a, b) => a.length - b.length)[0];
}
```

### O

- **Coding Challenge #40.1: Word Counter in JavaScript:** https://www.youtube.com/watch?v=unm0BLor8aE
- https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
- https://javascript.plainenglish.io/how-to-sort-an-object-by-key-or-property-name-in-javascript-a8c07b179901
- https://stackoverflow.com/questions/1069666/sorting-object-property-by-values/37607084#37607084
- **Object keys, values, and entries methods:** https://www.youtube.com/watch?v=VmicKaGcs5g
- https://stackoverflow.com/questions/34901593/how-to-filter-an-array-from-all-elements-of-another-array
- https://masteringjs.io/tutorials/fundamentals/filter-key
- https://www.youtube.com/watch?v=rRgD1yVwIvE&t=1879s
- https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
- https://errorsandanswers.com/javascript-equivalent-of-phps-in_array/

### P

- https://czechtheworld.com/best-palindromes/
- https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/

Check for Palindromes With Built-In Functions
For this solution, we will use several methods:

1. The toLowerCase() method to return the calling string value converted to lowercase.
2. The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
3. The split() method splits a String object into an array of strings by separating the string into sub strings.
4. The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
5. The join() method joins all elements of an array into a string

- https://javascript.info/map-set
- https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays


How about a one-liner in JS ES10 / ES2019 ?

Making use of `Object.entries()` and `Object.fromEntries()`:

```javascript
let newObj = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * v]));
```

The same thing written as a function:

```javascript
function objMap(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}

// To square each value you can call it like this:
let mappedObj = objMap(obj, (x) => x * x);
```

- https://dev.to/nehasoni__/power-of-console-table-in-javascript-18n0


---

#### GIT

- https://stackoverflow.com/questions/12987907/git-how-to-commit-a-manually-deleted-file
- https://careerkarma.com/blog/git-nothing-added-to-commit-but-untracked-files-present/
- https://devconnected.com/how-to-git-add-all-files/


