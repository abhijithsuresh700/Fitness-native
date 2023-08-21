
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import fitness from "../data/fitness.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const FitnessCards = () => {
    const FitnessData = fitness;
    const navigation = useNavigation();

    return (
        <View>
            {FitnessData.map((item) => (
                <Pressable
                    key={item.id} // Add the key prop with the unique ID
                    style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
                    onPress={() => navigation.navigate("Workout", {
                        image: item.image,
                        excersises: item.excersises,
                        id: item.id,
                    })}
                >
                    <Image
                        style={{ width: "95%", height: 120, borderRadius: 7 }}
                        source={{ uri: item.image }}
                    />
                    <Text
                        style={{ position: "absolute", color: "white", fontSize: 16, fontWeight: "bold", left: 20, top: 20 }}
                    >
                        {item.name}
                    </Text>
                    <MaterialCommunityIcons
                        style={{ position: "absolute", color: "white", bottom: 15, left: 20 }}
                        name="lightning-bolt"
                        size={24}
                        color="black"
                    />
                </Pressable>
            ))}
        </View>
    );
};

export default FitnessCards;

const styles = StyleSheet.create({});
