import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const style = StyleSheet.create({
  tab: {
    fontSize: theme.fontSizes.tab,
  },
});

interface PropsType {
  text: string;
}
const Tab = ({ text }: PropsType) => {
  return <Text style={style.tab}>{text}</Text>;
};

export default Tab;
