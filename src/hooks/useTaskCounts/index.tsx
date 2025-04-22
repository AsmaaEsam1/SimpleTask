import {useMemo} from 'react';

// Custom hook to calculate the count of completed and incompleted tasks
export const useTaskCounts = (tasks: taskProps[]) => {
  // Memoize the count of tasks with status 'InCompleted'
  const incompletedCount = useMemo(() => {
    return tasks
      .filter(task => task.status === 'InCompleted')
      .length.toString(); // Convert number to string for UI use
  }, [tasks]);

  // Memoize the count of tasks with status 'Completed'
  const completedCount = useMemo(() => {
    return tasks.filter(task => task.status === 'Completed').length.toString(); // Convert number to string for UI use
  }, [tasks]);

  // Return both counts
  return {
    incompletedCount,
    completedCount,
  };
};
