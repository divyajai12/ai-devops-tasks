/**
 * Returns the titles of completed tasks, sorted by id ascending.
 * @param {Array<{id: number, title: string, status: string}>} tasks - The array of task objects.
 * @returns {string[]} Array of titles of completed tasks, sorted by id.
 */
function getCompletedTaskTitles(tasks) {
  return tasks
    .filter(task => task.status === "completed")
    .sort((a, b) => a.id - b.id)
    .map(task => task.title);
}