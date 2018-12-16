import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      places: []
    }
  }
  
  butin = () => {
    let nArray = this.state.places.slice();
    nArray.push(this.state.placeName);
    this.setState({ places: nArray });
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
          />
          <Button title="add" style={styles.button} onPress={this.butin} />
        </View>
        <View style={styles.list}>
        {this.state.places.map((place)=>{return <Text>{place}</Text>})}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
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
