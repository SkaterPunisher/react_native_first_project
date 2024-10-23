import TabIcon from '@/components/TabIcon/TabIcon';
import { mainTabs } from '@/constants/tabs';
import { Tabs } from 'expo-router';
import { ImageSourcePropType } from 'react-native';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          },
        }}
      >
        {mainTabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={tab.icon as ImageSourcePropType}
                  color={color}
                  name={tab.title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
