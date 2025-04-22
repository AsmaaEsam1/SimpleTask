import {useTypedSelector} from 'management-app/store';
import {useMemo} from 'react';

// Custom hook to memoize and separate task data by status
export const useMemoized = () => {
  // Access tasks from Redux state
  const {tasks} = useTypedSelector(state => state.Tasks);

  // Memoize all tasks (useful if tasks are used frequently in the component)
  const memoizedTasks = useMemo(() => {
    return tasks;
  }, [tasks]);

  // Filter and memoize tasks with status 'InCompleted'
  const InCompletedTasks = useMemo(() => {
    return tasks.filter(task => task.status === 'InCompleted');
  }, [tasks]);

  // Filter and memoize tasks with status 'Completed'
  const CompletedTasks = useMemo(() => {
    return tasks.filter(task => task.status === 'Completed');
  }, [tasks]);

  // Expose the memoized results for use in components
  return {
    memoizedTasks,
    InCompletedTasks,
    CompletedTasks,
  };
};
