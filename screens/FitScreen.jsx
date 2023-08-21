import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../Context.jsx";

const FitScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];
  const {  completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes} = useContext(FitnessItems)

    console.log(completed, "completed");
  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>
  
        <Pressable
            onPress={() => {
                navigation.navigate(index + 1 >= excersise.length ? "Home" : "Rest");
                setWorkout(workout + 1);
                setMinutes(minutes + 2.5);
                setCalories(calories + 6.3);
                setCompleted([...completed, current.name])
                setTimeout(() => {
                  setIndex(index + 1);
                }, 2000);
              }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
        disabled={index === 0}
         onPress={() => (index === 0 ? navigation.navigate("Home") : setIndex(index - 1))}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Prev
          </Text>
        </Pressable>

          <Pressable
         onPress={() => (index + 1 >= excersise.length  ? navigation.navigate("Home") : setIndex(index + 1))}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
