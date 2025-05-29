const regex = /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;

console.log(regex.test('192.168.1.1'));      // true
console.log(regex.test('0.0.0.0'));          // true
console.log(regex.test('255.255.255.255'));  // true
console.log(regex.test('256.100.50.25'));    // false
console.log(regex.test('192.168.1'));        // false
console.log(regex.test('192.168.1.1.1'));    // false
console.log(regex.test('abc.def.gha.bcd'));  // false
console.log(regex.test('123.456.78.90'));    // false
^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$
^ and $ — Anchor the pattern to the start and end of the string, ensuring the entire string is an IPv4 address.
(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9]) — Matches a single octet (number between dots):
25[0-5] matches 250–255
2[0-4][0-9] matches 200–249
1[0-9]{2} matches 100–199
[1-9]?[0-9] matches 0–99 (no leading zeros except for 0 itself)
(\.(...)){3} — The above octet pattern, preceded by a dot, repeated three times for the remaining octets.
Testing the Regex
Valid IPv4 Addresses
192.168.1.1 → Valid
0.0.0.0 → Valid
255.255.255.255 → Valid
10.0.50.25 → Valid
Invalid IPv4 Addresses
256.100.50.25 → Invalid (256 is out of range)
192.168.1 → Invalid (only three octets)
192.168.1.1.1 → Invalid (five octets)
192.168.01.1 → Valid (but may be considered invalid if leading zeros are not allowed)
abc.def.gha.bcd → Invalid (not numbers)
123.456.78.90 → Invalid (456 is out of range)