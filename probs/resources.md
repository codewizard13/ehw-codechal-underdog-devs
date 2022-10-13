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

---

#### GIT

- https://stackoverflow.com/questions/12987907/git-how-to-commit-a-manually-deleted-file
- https://careerkarma.com/blog/git-nothing-added-to-commit-but-untracked-files-present/
- https://devconnected.com/how-to-git-add-all-files/


