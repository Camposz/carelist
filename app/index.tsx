import { Text, View } from 'react-native';

export default function Page() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <View>
                <Text className="text-primary-500">Hello World</Text>
                <Text>This is the first page of your app.</Text>
            </View>
        </View>
    );
}
