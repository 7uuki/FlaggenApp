import { Tabs } from "expo-router";
import {useThemeColor} from "@/hooks/useThemeColor";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
    return(
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: useThemeColor('fontSecondary'),
            headerTintColor: useThemeColor('fontSecondary'),
            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: useThemeColor('primary'),
            },
            tabBarStyle: {
                backgroundColor: useThemeColor('primary')
            },
        }}
    >
        <Tabs.Screen name="index" options={{
            title: 'Home',
            tabBarIcon: ({focused,color}) =>
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        }} />
        <Tabs.Screen name="about" options={{
            title: 'About',
            tabBarIcon: ({focused,color}) =>
                <Ionicons name={focused ? "information-circle" : 'information-circle-outline'} color={color} size={24} />
        }} />
        <Tabs.Screen name="+not-found" options={{  }} />
    </Tabs>
    );
}
