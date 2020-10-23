import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }
  }, []);

  function signIn(email, password) {
    console.log("Bora fingir que logou");
    const data = {
      nome: "Apelido",
      email: email,
    };

    setUser(data);
    storageUser(data);
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser({});
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
