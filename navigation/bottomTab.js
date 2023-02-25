import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Curiosity from "../screens/createCuriosity";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={BottomTab} />
        <Tab.Screen name="CuriosityScreen" component={Curiosity} />
      </Tab.Navigator>
    );
  }
}
