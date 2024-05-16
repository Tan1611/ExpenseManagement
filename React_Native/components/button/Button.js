import React from "react";
import { Button } from "react-native-elements";

const RaisedButton = (props) => <Button raised {...props} />;

// Your App
const App = () => {
  return <RaisedButton title="Yea" />;
};
