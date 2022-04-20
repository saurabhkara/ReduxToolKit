import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import GlobalTextInput from "../components/GlobalTextInput";
import GlobalButton from "../components/GlobalButton";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const onLogin = () => {
    console.log("On Login Function");
  };

  function navigateSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
          <GlobalTextInput text="Email" placeholder="Enter Your email Id " />
          <GlobalTextInput
            text="Password"
            placeholder="Enter Your password "
            isSecure={true}
          />
          <GlobalButton text="Login" onPress={onLogin} />
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            New user ?{" "}
            <Text style={{ color: "pink" }} onPress={navigateSignUp}>
              Sign up
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,

    marginVertical: 300,
    // justifyContent:'center',
    // alignItems:'center'
  },
});
