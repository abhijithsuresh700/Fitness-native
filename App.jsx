import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigatorr from "./StackNavigatorr";
import { FitnessContext } from "./Context";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <HomeScreen />
    //   {/* <StatusBar style="auto" /> */}
    // </View>
    <FitnessContext>
    <StackNavigatorr/>
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
