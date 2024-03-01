import React from "react";

import AppStack from "./src/navigations/AppStack";

import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  )
}

export default App;