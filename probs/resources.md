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
- **Negated character set [^xyz]:**https://blog.bitsrc.io/a-beginners-guide-to-regular-expressions-regex-in-javascript-9c58feb27eb4

#### GIT

- https://stackoverflow.com/questions/12987907/git-how-to-commit-a-manually-deleted-file
- https://careerkarma.com/blog/git-nothing-added-to-commit-but-untracked-files-present/
- https://devconnected.com/how-to-git-add-all-files/


