import {Card} from 'components/Card';
import {Inputs} from 'components/Input';
import {TaskStatus} from 'components/TaskStatus';
import {getAllTasks} from 'management-app/slices/GetTask';
import {useAppDispatch} from 'management-app/store';
import {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import {images} from 'theme/images';
import {SkeletonLoader} from 'components/SkeletonLoader';
import {useTaskCounts} from 'hooks/useTaskCounts';
import {useTaskActions} from 'hooks/useTaskActions';
import {useMemoized} from 'hooks/useMemoized';

const MainScreen = () => {
  const dispatch = useAppDispatch();

  // ========================================================================
  // Status
  const [focus, setFocus] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<string>('InCompleted');
  const [openedItemId, setOpenedItemId] = useState<string | null>(null);

  const handleToggleMore = (id: string) => {
    setOpenedItemId(prevId => (prevId === id ? null : id));
  };

  // ========================================================================
  // Custom Hooks
  const {memoizedTasks, CompletedTasks, InCompletedTasks} = useMemoized();
  const {incompletedCount, completedCount} = useTaskCounts(memoizedTasks);
  const {
    value,
    handleTextChange,
    handleAddTask,
    onChangeTaskStatus,
    onDeleteTask,
  } = useTaskActions(memoizedTasks, setFocus, setOpenedItemId);

  // ========================================================================
  // On initial mount: show loading for 2 seconds, then fetch tasks from Redux store.
  // fetchTasks is memoized using useCallback to avoid unnecessary re-renders.
  // useEffect runs fetchTasks once when the component mounts.
  // memoizedTasks is logged for debugging purposes.

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const fetchTasks = useCallback(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  useEffect(() => {
    fetchTasks();
    console.log(memoizedTasks);
  }, [fetchTasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Inputs
        value={value}
        keyboardType="default"
        foucs={focus}
        onChangeText={handleTextChange}
        setFocus={setFocus}
        onClick={handleAddTask}
        icon={images.PlusImg}
      />
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <TaskStatus
            status={status}
            setStatus={setStatus}
            num_Completed={completedCount}
            num_InCompleted={incompletedCount}
          />

          <FlatList
            data={status === 'Completed' ? CompletedTasks : InCompletedTasks}
            keyExtractor={index => index.id}
            renderItem={({item}) => (
              <Card
                item={item}
                openMore={openedItemId === item.id}
                onOpenMore={() => handleToggleMore(item.id)}
                handleDeleteTask={() => onDeleteTask(item)}
                handleChangeTaskStatus={() => onChangeTaskStatus(item)}
              />
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
