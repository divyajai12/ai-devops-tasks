
# IPv4 Address Validation Regex

## Regular Expression

```
^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$
```

## Explanation
- `^` and `$` — Anchor the pattern to the start and end of the string, ensuring the entire string is an IPv4 address.
- `(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])` — Matches a single octet (number between dots):
  - `25[0-5]` matches 250–255
  - `2[0-4][0-9]` matches 200–249
  - `1[0-9]{2}` matches 100–199
  - `[1-9]?[0-9]` matches 0–99 (no leading zeros except for 0 itself)
- `(\.(...)){3}` — The above octet pattern, preceded by a dot, repeated three times for the remaining octets.

## Test Examples

### Valid IPv4 Addresses
- `192.168.1.1` → **Valid**
- `0.0.0.0` → **Valid**
- `255.255.255.255` → **Valid**
- `10.0.50.25` → **Valid**

### Invalid IPv4 Addresses
- `256.100.50.25` → **Invalid** (256 is out of range)
- `192.168.1` → **Invalid** (only three octets)
- `192.168.1.1.1` → **Invalid** (five octets)
- `abc.def.gha.bcd` → **Invalid** (not numbers)
- `123.456.78.90` → **Invalid** (456 is out of range)

Description of the Solution:
The function getCompletedTaskTitles processes an array of task objects, each containing an id, title, and status. It performs three main operations:
The IPv4 regex, a detailed explanation, and test examples (both valid and invalid) have been saved in task-17.md. This provides a clear reference for validating IPv4 addresses using regular expressions, along with practical examples and a breakdown of how the regex works.