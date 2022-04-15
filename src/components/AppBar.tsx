import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import Tab from "./Tab";

const style = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

const AppBar = () => {
  return (
    <View style={style.container}>
      <Link to="/signup">
        <Tab text="Signup" />
      </Link>
      <Link to="/signin">
        <Tab text="Signin" />
      </Link>
    </View>
  );
};

export default AppBar;
