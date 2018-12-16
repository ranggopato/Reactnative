import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      placeWk: []
    };
  }

  butin() {
    var nArray = this.state.placeWk.slice();
    nArray.push(this.state.placeName);
    this.setState({
      placeWk: nArray
    });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder="Temukan tempat impianmu"
            onChangeText={place =>
              this.setState({
                placeName: place
              })
            }
            value={this.state.placeName}
            style={styles.textinput}
          />{" "}
          <Button title="add" style={styles.button} onPress={this.butin} />{" "}
        </View>{" "}
        <View style={styles.list}>
          {this.state.placeWk.map(placeName => {
            return <Text>{placeName} </Text>;
          })}
        </View>{" "}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  list: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textinput: {
    color: "green",
    fontSize: 16,
    width: "70%"
  },
  button: {
    color: "green",
    fontSize: 16,
    width: "30%"
  }
});
