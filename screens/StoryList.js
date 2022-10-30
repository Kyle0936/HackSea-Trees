import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  Dimensions,
  Pressable,
  UIManager,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";

const ExpandableComponent = ({ item, onClickFunction }) => {
  //Custom Component for the Expandable List
  const [modalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState("You spent 3 hours with Tree X with such a good weather.");

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground style={styles.modalimage} source={item.modalname} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
        style={styles.header}
      >
        <Image style={styles.img} resizeMode="contain" source={item.filename} />
      </TouchableOpacity>
    </View>
  );
};

const StoryList = () => {
  const [listDataSource, setListDataSource] = useState(CONTENT);

  return (
    <View style={styles.container}>
      <ScrollView>
        {listDataSource.map((item, key) => (
          <ExpandableComponent
            key={item.title}
            onClickFunction={() => {
              updateLayout(key);
            }}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  button: {
    borderRadius: 20,
    margin: 10,
    padding: 10,
    elevation: 2
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  img: {
    width: 400,
    height: 200,
  },
  modalimage: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width,
  },
});

export default StoryList;

const CONTENT = [
  {
    isExpanded: false,
    title: "Item 1",
    filename: require("../imgs/card/card1.png"),
    modalname: require("../imgs/sun.jpg"),
  },
  {
    isExpanded: false,
    title: "Item 2",
    filename: require("../imgs/card/card2.png"),
    modalname: require("../imgs/night.jpg"),
  },
  {
    isExpanded: false,
    title: "Item 3",
    filename: require("../imgs/card/card3.png"),
    modalname: require("../imgs/night.jpg"),
  },
  {
    isExpanded: false,
    title: "Item 4",
    filename: require("../imgs/card/card1.png"),
    modalname: require("../imgs/sun.jpg"),
  },
];
