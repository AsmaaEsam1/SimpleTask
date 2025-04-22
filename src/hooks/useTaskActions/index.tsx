import {createTask} from 'management-app/slices/CreateTask';
import {useAppDispatch} from 'management-app/store';
import {Dispatch, SetStateAction, useState} from 'react';

export const useTaskActions = (
  tasks: taskProps[],
  setFocus: Dispatch<SetStateAction<boolean>>,
  setOpenedItemId: Dispatch<SetStateAction<string | null>>,
) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  // Update input value as the user types
  const handleTextChange = (text: string) => {
    setValue(text);
  };

  // Add a new task with default status 'InCompleted'
  const handleAddTask = () => {
    const item = {
      id: new Date().getTime(),
      title: value,
      status: 'InCompleted',
    };
    let updatetasks = [...tasks, item];

    setFocus(false);
    dispatch(
      createTask({
        tasks: updatetasks,
      }),
    );
  };

  // Change task status to 'Completed' and close the opened item
  const onChangeTaskStatus = (item: taskProps) => {
    setOpenedItemId('');
    const updatedTasks = tasks.map(task => {
      if (task.id === item.id) {
        return {
          ...task,
          status: 'Completed',
        };
      }
      return task;
    });

    dispatch(createTask({tasks: updatedTasks}));
  };

  // Delete task by finding its index and removing it from the list
  const onDeleteTask = (item: taskProps) => {
    const index = tasks.findIndex(i => i.id == item.id);
    const newData = [...tasks];
    newData.splice(index, 1);
    dispatch(createTask({tasks: newData}));
  };

  return {
    value,
    handleTextChange,
    handleAddTask,
    onChangeTaskStatus,
    onDeleteTask,
  };
};
