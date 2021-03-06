import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const StartMeeting = ({ name, setName, setRoomId, roomId, joinRoom }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Start a Meeting</Text>
      </View>
      <View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter name"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor="#767476"
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter room id"
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
            placeholderTextColor="#767476"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.startMeetingButtons}
            onPress={() => joinRoom()}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    color: "white",
    fontSize: 19,
    fontWeight: "800",
    textAlign: "center",
    flex: 1,
    marginRight: 10,
  },
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "white",
    fontSize: 18,
  },
  startMeetingButtons: {
    width: 350,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    height: 50,
    borderRadius: 15,
  },
});
