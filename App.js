import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screens/SigninScreen/SignInScreen";
// import Amplify from "aws-amplify";
// import config from "./src/aws-exports";

// Amplify.configure(config);

export default function App() {
  return (
    <View style={styles.root}>
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
