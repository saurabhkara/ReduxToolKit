import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import GlobalButton from "../components/GlobalButton";
import GlobalTextInput from "../components/GlobalTextInput";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const navigateSignIn = () => {
    navigation.goBack();
  };

  const onSingUp=()=>{
    console.log('Sign Up button')
  }
  return (
      <ScrollView style={styles.sign}>
        <KeyboardAvoidingView style={{marginTop: 300,}}>
        <GlobalTextInput text="Name" placeholder="Enter your Username" />
        <GlobalTextInput text="Email" placeholder="Enter your email Id" />
        <GlobalTextInput
          text="password"
          placeholder="Enter your password"
          isSecure={true}
        />
        <GlobalButton text="Sign Up"  onPress={onSingUp}/>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Existing user ?{" "}
          <Text style={{ color: "pink" }} onPress={navigateSignIn}>
            Sign In
          </Text>
        </Text>
    </KeyboardAvoidingView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  sign: {
    flex:1
  },
});
