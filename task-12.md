def find_duplicates(list_of_items):
    duplicates = []
    for i in range(len(list_of_items)):
        for j in range(i+1, len(list_of_items)):
            if list_of_items[i] == list_of_items[j] and list_of_items[i] not in duplicates:
                duplicates.append(list_of_items[i])
    return duplicates
You’ve provided a Python function that finds duplicate items in a list. Here’s what it does:
It iterates through each pair of items in the list.
If two items are equal and the item is not already in the duplicates list, it adds the item to duplicates.
It returns the list of duplicate items (each duplicate appears only once in the result).
Example usage:
print(find_duplicates([1, 2, 3, 2, 4, 5, 1, 6]))
# Output: [1, 2]
Apply to sum.test.js
Note:
This function works, but it is not very efficient for large lists because it uses nested loops (O(n²) time complexity).
If you want a more efficient version, let me know!

Yes, this code can be optimized! The current implementation has a time complexity of O(n²) due to the nested loops. You can achieve the same result in O(n) time by using sets to track seen items and duplicates.
Here’s a more efficient version:
def find_duplicates(list_of_items):
    seen = set()
    duplicates = set()
    for item in list_of_items:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)
How it works:
seen keeps track of items you’ve already encountered.
duplicates stores items that appear more than once.
Each item is checked only once, making this approach much faster for large lists.
Example usage:
print(find_duplicates([1, 2, 3, 2, 4, 5, 1, 6]))
# Output: [1, 2]