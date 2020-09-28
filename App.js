import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";

const rootReducer = combineReducers({
	meals: mealsReducers,
});
const store = createStore(rootReducer);

enableScreens();
const fetchFonts = () => {
	return Font.loadAsync({
		GEB: require("./assets/fonts/GEB.otf"),
		GL: require("./assets/fonts/GL.otf"),

		AB: require("./assets/fonts/AB.ttf"),
		PR: require("./assets/fonts/PR.ttf"),
	});
};
import MealsNavigator from "./navigations/MealsNavigation";
import mealsReducers from "./store/reducers/meals";
import { Provider } from "react-redux";
export default function App() {
	const [fontLoaded, setFont] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading startAsync={fetchFonts} onFinish={() => setFont(true)} />
		);
	}

	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
