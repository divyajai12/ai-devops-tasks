
Description of the Solution:
The function getCompletedTaskTitles processes an array of task objects, each containing an id, title, and status. It performs three main operations:
Filtering: Selects only the tasks whose status is "completed".
Sorting: Orders the filtered tasks by their id in ascending order.
Mapping: Extracts and returns an array containing only the title of each sorted, completed task.
This approach ensures you get a list of titles for all completed tasks, sorted by their IDs.
const tasks = [
  { id: 5, title: "Review code", status: "completed" },
  { id: 2, title: "Write tests", status: "in progress" },
  { id: 1, title: "Setup project", status: "completed" },
  { id: 3, title: "Deploy app", status: "completed" }
];

const completedTitles = getCompletedTaskTitles(tasks);
console.log(completedTitles);
// Output: ["Setup project", "Deploy app", "Review code"]
In this example, only tasks with status "completed" are included, sorted by their id, and only their titles are returned in the result.