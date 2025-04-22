import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Navigation} from 'app_navigation';
import store from 'management-app/store';
import {LogBox} from 'react-native';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
