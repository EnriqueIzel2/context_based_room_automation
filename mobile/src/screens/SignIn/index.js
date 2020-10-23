import React, { useState, useContext, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";
import { Background } from "../../components/Background";
import {
  Container,
  Logo,
  InputContainer,
  Input,
  SubmitButton,
  SubmitText,
} from "./styles";

const SignIn = () => {
  const input2 = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container>
        <Logo
          resizeMode="contain"
          source={require("../../img/logo-uea-verde.jpg")}
        />

        <InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            keyboardType="email-address"
            blurOnSubmit={false}
            onSubmitEditing={() => input2.current.focus()}
          />
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            secureTextEntry={true}
            ref={input2}
          />
        </InputContainer>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignIn;
