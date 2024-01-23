import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import * as Haptics from "expo-haptics";
import { fakeContactData } from "./__mocks__/expo-contacts";

const App = () => {
  const [showContacts, setShowContacts] = useState(false);

  const handleOpenContacts = async () => {
    await Haptics.selectionAsync();
    setShowContacts(true);
  };

  return (
    <View>
      <Text>Hybrid App Development Week Assignment 2</Text>

      <Button title="Open Contacts" onPress={handleOpenContacts} />

      {showContacts && (
        <View>
          <Text>Contacts list:</Text>
          <FlatList
            data={fakeContactData}
            keyExtractor={(contact) => contact.id.toString()}
            renderItem={({ item: contact }) => (
              <Text>{contact.name}</Text>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default App;