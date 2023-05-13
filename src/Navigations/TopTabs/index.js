import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity } from 'react-native';
import Check_Ins from '../../Screens/Check_Ins';
import Submit from '../../Screens/Submit';
import { ApolloProvider } from '@apollo/client';
import client from '../../API//GraphQL';


const Tab = createMaterialTopTabNavigator();

function TopTabs() {
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Tab.Navigator
                    tabBar={props => <MyTabBar {...props} />}

                >
                    <Tab.Screen name="Submit" component={Submit}/>
                    <Tab.Screen name="Check-ins" component={Check_Ins} />
                </Tab.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}
export default TopTabs;

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });
                if (isFocused) {
                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: '3%', borderBottomWidth: 1, borderBottomColor: 'black' }}
                        >
                            <Animated.Text style={{ fontSize: 16, color: '#000', }}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );

                } else {
                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            onFocus={{ opacity }}
                            style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: '3%' }}
                        >
                            <Animated.Text style={{ fontSize: 16, color: '#000', }}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );

                }

            })}
        </View>
    );
}