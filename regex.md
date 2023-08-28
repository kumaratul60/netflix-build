## Email

^ - The beginning of the string.
( - Start of a capturing group.
[a-zA-Z0-9._%-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, underscores, percent signs, and hyphens.
@ - Matches the “@” symbol.
[a-zA-Z0-9.-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase), numbers, periods, and hyphens.
\. - Matches a literal period character.
[a-zA-Z]{2,} - Matches two or more letters (both uppercase and lowercase).
) - End of the capturing group.
$ - The end of the string.

## Password

^ - The password string will start this way
(?=._[a-z]) - The string must contain at least 1 lowercase alphabetical character
(?=._[A-Z]) - The string must contain at least 1 uppercase alphabetical character
(?=._[0-9]) - The string must contain at least 1 numeric character
(?=._[!@#$%^&*]) The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
(?=.{8,}) - The string must be eight characters or longer

---

- /a\sb/: This pattern matches "a" followed by a whitespace character and then "b".
- /abc/g: This pattern searches for all occurrences of "abc" in the string.
- /Hello/i: This pattern matches "Hello", "hello", "HeLLo", and so on, regardless of case.

- \s: This is a special character in regex that represents any whitespace character. It includes spaces, tabs, newlines, and other whitespace characters. For example, the regex pattern \s+ would match one or more whitespace characters.

- g: The g modifier stands for "global" and is used in regex to perform a global search for a pattern within a given string. When you use the g modifier, the regex engine will find all occurrences of the pattern in the string, rather than just stopping at the first match.

- i: The i modifier stands for "case-insensitive." When you use the i modifier, the regex pattern will match characters regardless of their case. For example, the pattern /abc/i would match "abc", "Abc", "aBc", and so on.

## some regex constructs:

## Anchors:

^: Matches the start of a line or string.
$: Matches the end of a line or string.
\b: Matches a word boundary.

## Character Classes:

[...]: Matches any single character within the specified set.
[^...]: Matches any single character not within the specified set.
\d: Matches a digit (equivalent to [0-9]).
\w: Matches a word character (alphanumeric or underscore).
\s: Matches a whitespace character (space, tab, newline, etc.).
\D, \W, \S: Negations of \d, \w, and \s respectively.

## Quantifiers:

\*: Matches the preceding element zero or more times.
+: Matches the preceding element one or more times.
?: Matches the preceding element zero or one time.
{n}: Matches the preceding element exactly n times.
{n,}: Matches the preceding element at least n times.
{n,m}: Matches the preceding element at least n times but not more than m times.

## Grouping and Capturing:

( ... ): Groups patterns together and captures the matched text.
(?: ... ): Groups patterns without capturing the matched text.
Alternation:

|: Represents an OR operation, matching one of the alternatives.
Quantifier Modifiers:

?: Makes a preceding quantifier non-greedy, matching as few characters as possible.
\*?, +?, {n,}?, {n,m}?: Non-greedy versions of the corresponding quantifiers.

## Backreferences:

\1, \2, ...: Matches the same text as previously matched by a capturing group.

## Lookaheads and Lookbehinds:

(?= ...): Positive lookahead assertion.
(?! ...): Negative lookahead assertion.
(?<= ...): Positive lookbehind assertion.
(?<! ...): Negative lookbehind assertion.

## Modifiers:

g: Global search (matches all occurrences).
i: Case-insensitive search.
m: Multiline mode, where ^ and $ match the start/end of each line.

## Examples

```javascript

Matching Email Addresses:
Pattern: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
Example: user@example.com

Matching URL Addresses:
Pattern: ^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$
Example: https://www.example.com

Matching Dates in MM/DD/YYYY Format:
Pattern: ^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$
Example: 08/28/2023

Matching Phone Numbers (US Format):
Pattern: ^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$
Example: (123) 456-7890

Matching Hex Color Codes:
Pattern: ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
Example: #1a2b3c

Matching Alphanumeric Strings:
Pattern: ^[A-Za-z0-9]+$
Example: abc123

Matching Social Security Numbers (SSN):
Pattern: ^\d{3}-\d{2}-\d{4}$
Example: 123-45-6789

Matching IP Addresses:
Pattern: ^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$
Example: 192.168.0.1

Matching Credit Card Numbers (Basic):
Pattern: ^\d{16}$
Example: 1234567890123456

Matching HTML Tags:
Pattern: <([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)
Example: <p>This is a paragraph.</p>

```
