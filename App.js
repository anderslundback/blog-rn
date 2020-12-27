import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';


const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen
}, {
  initalRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}