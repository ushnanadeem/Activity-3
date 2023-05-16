import { StyleSheet, Text, View } from "react-native";

export default function AppHeader({props}) {
    return(
        <View>
            <Text style={styles.header}>
                Baham (باہم)
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    }
});
