function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}

**
 * Fetches user data from the API for a given user ID.
 *
 * @param {number|string} userId - The ID of the user to fetch.
 * @returns {Promise<{name: string, email: string, lastLogin: Date} | null>} 
 *   A promise that resolves to an object containing the user's name, email, and last login date,
 *   or null if an error occurs.
 */
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
} 


I have added JSDoc-style documentation comments to your fetchUserData function. This documentation explains the function's purpose, its parameter, and the structure of the returned Promise, making it easier for others (and tools) to understand and use your code.
