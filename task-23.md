Time Complexity
The algorithm uses two nested loops to check every unique pair.

For an array of size n, it performs approximately n * (n-1) / 2 iterations.

Therefore, time complexity = O(n²) (quadratic).

Space Complexity
Stores matching pairs in an array.

In the worst case, this can be up to O(n²) space if many pairs match.

Aside from output storage, uses minimal extra space.

Optimization
Idea
Use a hash set to track elements seen so far and check for complements in a single pass.
function findPairsOptimized(arr, targetSum) {
  const pairs = [];
  const seen = new Set();

  for (const num of arr) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
}
Optimized Complexity
Time complexity: O(n), as it iterates through the array only once.

Space complexity: O(n), due to the set storing seen numbers.
Summary
The original solution is simple but inefficient for large arrays due to its quadratic time.

The optimized solution leverages extra space to reduce runtime significantly.

This tradeoff is often worthwhile when performance is critical.