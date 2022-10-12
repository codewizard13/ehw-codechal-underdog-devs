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

#### GIT

- https://stackoverflow.com/questions/12987907/git-how-to-commit-a-manually-deleted-file
- https://careerkarma.com/blog/git-nothing-added-to-commit-but-untracked-files-present/
- https://devconnected.com/how-to-git-add-all-files/

