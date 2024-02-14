import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, PanResponder } from 'react-native';
import { Camera, useCameraDevice, useCameraFormat } from 'react-native-vision-camera';



function CameraScreen({ navigation }) {
  const camera = useRef(null);
  const device = useCameraDevice('back', {
    physicalDevices: ['ultra-wide-angle-camera', 'wide-angle-camera', 'telephoto-camera'],
  });
  

  const format = useCameraFormat(device, [{ videoResolution: 'max' }, { photoResolution: 'max' }]);

  const [capturedImageUri, setCapturedImageUri] = useState(null);


  const handleCapture = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto({
          quality: 0.8,
          flash: 'off',
          enableShutterSound: false,
        });

        setCapturedImageUri(photo);

        console.log('Captured Photo:', photo);
      } catch (error) {
        console.error('Error capturing photo:', error);
      }
    }
  };

  const handleSmallPreviewPress = () => {
    navigation.navigate('Preview', { capturedImageUri })
  };

  const panResponder = React.useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dx < -60) {
          // Adjust the threshold as needed
          navigation.navigate('Insta'); // Change 'Sample' to the desired screen name
        }
      }
    })
  })

  const handleRotate = async () => {
    try {
      const currentCamera = await Camera.getCameraState();
      const nextCamera = currentCamera.isFront ? 'back' : 'front';
  
      await Camera.switchToCamera({ camera: nextCamera });
    } catch (error) {
      console.error('Error switching camera:', error);
    }
  };

  if (!device) {
    return (
      <SafeAreaView style={styles.main}>
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.main} {...panResponder.panHandlers}>
      <View>
        <Camera
          isActive={true}
          ref={camera}
          style={styles.camera}
          device={device}
          photo={true}
          format={format}
        />
        {/* <SmallPreview capturedImageUri={capturedImageUri} onPress={handleSmallPreviewPress} /> */}
        <TouchableOpacity onPress={handleSmallPreviewPress} style={styles.smallPreviewContainer}>
          {capturedImageUri && (
            <Image source={{ uri: `file://${capturedImageUri.path}` }} style={styles.smallPreviewImage} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCapture}>
          <View style={styles.photoButton}>
            <View style={styles.circle}></View>
            <View style={styles.ring}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRotate}>

          <Image source={require('../Images/icons8-rotate-50.png')} style={styles.rotate_icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  camera: {
    height: '90%',
    marginBottom: 13,
  },
  previewImage: {
    resizeMode: 'cover',
  },
  photoButton: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    position: 'absolute',
  },
  circle: {
    position: 'absolute',
    top: '12%',
    left: '12%',
    bottom: '12%',
    right: '12%',
    borderRadius: 100,
    backgroundColor: '#ffffff',
    opacity: 0,
  },
  ring: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: '#ffffff',
    opacity: 0.8,
  },
  smallPreviewContainer: {
    position: 'absolute',
    top: 730,
    left: 16,
  },
  smallPreviewImage: {
    width: 55,
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'cover'
  },
  rotate_icon: {
    position: 'absolute',
    left: 325,
    top: 28,
    width: 55
  }

});

export default CameraScreen;
