import React from 'react';
import LogIn from './src/screens/LogIn'
import SignUp from './src/screens/SignUp'
import PubsList from './src/screens/PubsList'
import PubProfile from './src/screens/PubProfile'
import MyProfile from './src/screens/MyProfile'
import UserProfile from './src/screens/UserProfile'
import Header from './src/components/Header'
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation'

const AuthStack = createSwitchNavigator(
  {
    LogIn,
    SignUp 
  },
  {
    initialRouteName: 'LogIn'
  }
)

const AppStack = createStackNavigator(
  {
    PubsList: {
      screen: PubsList,
      navigationOptions:({navigation})=>{
        return{
          headerTitle: () => <Header title='Pubs' nav={navigation}/>
        }
        
      }
    },
    PubProfile: {
      screen: PubProfile,
      navigationOptions:({navigation})=>{
        return{
          headerTitle: () => <Header title='Pub Profile' nav={navigation}/>
        }
      }
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions:({navigation})=>{
        return{
          headerTitle: () => <Header title='My Profile' nav={navigation} hideSettings />
        }
      }
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions:({navigation})=>{
        return{
          headerTitle: () => <Header title='User Profile' nav={navigation}/>
        }
      }
    }     
  },
  {
    initialRouteName: 'PubsList'
  }
)

const AppNavigator = createSwitchNavigator(
  {
    AuthStack,
    AppStack 
  },
  {
    initialRouteName: 'AuthStack'
  }
)

const AppContainer = createAppContainer(AppNavigator)

const App = () => <AppContainer/>

export default App