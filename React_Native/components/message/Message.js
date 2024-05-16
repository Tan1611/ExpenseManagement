import { View, Text } from "react-native";
import GlobalStyle from "./../../global/GlobalStyle";

const Message = () => {
  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.subject}>Hello</Text>
    </View>
  );
};
export default Message;
