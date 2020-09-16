import React, { useState } from 'react';
import { View, StyleSheet ,Text, Switch} from 'react-native';

const TajweedRulingsToggle = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 15 }}>Tajweed rulings:</Text>
            <View style={{ alignItems: 'flex-start', paddingLeft: 10 }}>
                <Switch
                    trackColor={{ false: "grey", true: "#23395D" }}
                    thumbColor={isEnabled ? "white" : "white"}
                    ios_backgroundColor="white"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default TajweedRulingsToggle;