import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function PreviewScreen({ route, navigation }) {
    const { capturedImageUri } = route.params;

    const handleBack = () => {
        navigation.navigate('Camera')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.img}>
                <TouchableOpacity onPress={handleBack}>
                    <Image source={require('../Images/icons8-left-arrow-50(3).png')} style={styles.icon} />
                </TouchableOpacity>
                <Image source={{ uri: `file://${capturedImageUri.path}` }} style={styles.previewImage} />
            </View>
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    previewImage: {
        height: '90%',
        resizeMode: 'contain',
    },
    icon: {
        width: 35,
        height: 35
    },
    img: {
        marginTop: 50
    }
});

export default PreviewScreen;
