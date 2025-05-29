
Conversion Process from JSON to CSV
Identify the columns (fields):
From the JSON, choose the keys that will become the CSV headers. In your case:
id, name, email, and roles.

Extract values for each record:
For each object in the users array, extract the corresponding values.

Handle complex data types:
Some fields, like roles, are arrays — not simple strings or numbers. CSV supports plain text cells, so we need to convert arrays into a string format that fits in one cell.

Format rows as comma-separated strings:
Join the values for each record with commas, ensuring proper quoting if a value contains commas or special characters.

Output the CSV file:
Write the header row first, then each record row, separated by newlines.

Challenges & How to Handle Them
1. Representing Arrays in CSV (like roles)
CSV cells are plain text, so arrays must be serialized to strings.

Common approach: join array elements with a delimiter (often a comma or semicolon).

Since CSV also uses commas as separators, if your array values contain commas, wrap the entire cell in double quotes.

Example:
Roles ["admin", "user"] → "admin,user"

2. Handling Commas and Special Characters
If any field value contains a comma, newline, or quote, enclose it in double quotes.

To include a literal double quote in a value, escape it by doubling the quotes ("").

3. Nested or Complex Structures
JSON can contain nested objects or arrays within arrays. Flattening these into CSV is tricky and may require custom logic or multiple CSV files.

4. Data Types
CSV stores everything as text; numbers and booleans are converted to strings, which may affect downstream processing.

Summary for Your Example
Your roles field is an array of strings.

To fit it into one CSV cell, join the array items with commas.

Since the joined string contains commas, wrap it in double quotes in the CSV.

This way, the CSV remains valid and parsable by spreadsheet programs or CSV parsers