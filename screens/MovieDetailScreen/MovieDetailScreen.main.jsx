import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
          <Image 
            style={styles.movieimage}
            source={{uri: item.posterurl}}
          />

          <Text style={styles.h1}>{item.title}</Text>
          <Text style={styles.h2}>{"Released " + item.year}</Text>
          <Text style={styles.h2}>{item.genres.join(', ')}</Text>
          <Text style={styles.h3}>{item.actors.join(', ')}</Text>   
          <Text style={styles.h4}>{item.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
