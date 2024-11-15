import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import greetStyles from "../../stylesheet/greetStyle";
import shadowBoxStyle from "../../stylesheet/shadowBoxStyle";

export default function Greet({ name, postList }) {
  return (
    <View style={[greetStyles.greetView]}>
      <Text style={greetStyles.greetText}>Hello, {name}!</Text>
      <FlatList
        data={postList}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[greetStyles.postItem, shadowBoxStyle.buttonShadow]}>
            <Text style={greetStyles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
        ListEmptyComponent={<Text>No data found.</Text>}
        ListFooterComponent={
          <Text style={greetStyles.footerList}>End of list.</Text>
        }
      />
    </View>
  );
}
