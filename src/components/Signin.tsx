import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";

const PhoneForm = ({ onSubmit }: { onSubmit: (phone: string) => void }) => {
  const [phone, setPhone] = useState("");

  return (
    <View>
      <TextInput
        placeholder="9XXXXXXXXX"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <Pressable
        onPress={() => {
          onSubmit(phone);
        }}
      >
        <Text>Get OTP</Text>
      </Pressable>
    </View>
  );
};

const OTPForm = ({ onSubmit }: { onSubmit: (otp: string) => void }) => {
  const [otp, setOtp] = useState("");

  return (
    <View>
      <TextInput value={otp} onChangeText={(text) => setOtp(text)} />
      <Pressable onPress={() => onSubmit(otp)}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

const Signin = () => {
  const [otpPage, setOtpPage] = useState<Boolean>(false);

  const onPhoneSubmit = (phone: string) => {
    setOtpPage(true);
  };

  const onOTPSubmit = (otp: string) => {};

  if (!otpPage) {
    return <PhoneForm onSubmit={onPhoneSubmit} />;
  }

  return <OTPForm onSubmit={onOTPSubmit} />;
};

export default Signin;
