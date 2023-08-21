import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from "../Context";

const WorkOutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {  completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes} = useContext(FitnessItems)
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 40 }}
      >
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />
        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", color: "white", top: 10, left: 10 }}
          name="arrow-back-outline"
          size={24}
          color="black"
        />
        {route.params.excersises.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            >
              <Image
                style={{ width: 90, height: 90 }}
                source={{ uri: item.image }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold", width:170 }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  x{item.sets}
                </Text>
              </View>
              {completed.includes(item.name) ? (
                <AntDesign style={{marginLeft:40}} name="checkcircle" size={24} color="green" />
              ): (null)}
            </Pressable>
          );
        })}
      </ScrollView>

      <Pressable
      onPress={()=>navigation.navigate("Fit", {
        excersises:route.params.excersises
      })}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          borderRadius: 6,
          width: 120,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Start
        </Text>
      </Pressable>
    </>
  );
};

export default WorkOutScreen;

const styles = StyleSheet.create({});
