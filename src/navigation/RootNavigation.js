import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import SettingDetails from '../screens/SettingDetails';

const Stack = createStackNavigator();

const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  }

const RootNavigation = () => {
    return(
        <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="Root" component={BottomTabs} />
            <Stack.Screen name="SettingDetails" component={SettingDetails} />
        </Stack.Navigator>
    )
}

export default RootNavigation;