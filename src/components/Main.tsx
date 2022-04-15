import React from "react";
import { View, StyleSheet } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";
import auth from "@react-native-firebase/auth";
import AppBar from "./AppBar";
import Signin from "./Signin";
import Signup from "./Signup";
import UserPage from "./UserPage";

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const currentUser = auth().currentUser;

  return (
    <View style={style.container}>
      <AppBar />
      {currentUser ? (
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Navigate to="/signup" replace />} />
        </Routes>
      ) : (
        <UserPage />
      )}
    </View>
  );
};

export default Main;
