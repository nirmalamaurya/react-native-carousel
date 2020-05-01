import {createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import Dashboard from './src/screens/Dashboard';

const navigator = createStackNavigator(
{
Dashboard : Dashboard
},
{
  initialRouteName:'Dashboard',
  defaultNavigationOptions:{
    title:'Home'
  }
}
);

export default createAppContainer(navigator);