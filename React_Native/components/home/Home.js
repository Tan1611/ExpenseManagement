import { View, Text } from "react-native";
import GlobalStyle from "./../../global/GlobalStyle";
import { useEffect } from "react";
import { useState } from "react";
import axios, { endpoints } from "./../axios/APIConfig";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategory = async () => {
      const res = await axios.get(endpoints["list"]);
      // setCategories(res.data.results);
      console.log(res.data);
    };
    loadCategory();
  }, []);
  console.log(categories);

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.subject}>Hello</Text>
    </View>
  );
};
export default Home;
