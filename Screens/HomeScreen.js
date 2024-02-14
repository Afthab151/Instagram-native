import React, { useCallback, useEffect } from 'react'
import { StyleSheet, Image, View, Text, ScrollView, StatusBar, RefreshControl, PanResponder, PermissionsAndroid, Platform, TouchableOpacity, SafeAreaView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


function HomeScreen({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    // const requestCameraPermission = async () => {
    //     try {
    //       const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //         {
    //           title: 'Camera Permission',
    //           message: 'App needs access to your camera to open it.',
    //           buttonNeutral: 'Ask Me Later',
    //           buttonNegative: 'Cancel',
    //           buttonPositive: 'OK',
    //         }
    //       );
    //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         navigation.navigate('Camera'); // Change 'Camera' to your desired camera screen name
    //       } else {
    //         console.log('Camera permission denied');
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   };

    const requestCameraPermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const cameraGranted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,

                );

                const microphoneGranted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                );

                if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED && microphoneGranted === PermissionsAndroid.RESULTS.GRANTED) {
                    navigation.navigate('Camera');
                    console.log('Camera permission granted'); // Change 'Camera' to your desired camera screen name
                } else {
                    console.log('Camera permission denied');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    };



    const panResponder = React.useMemo(() => {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                if (gestureState.dx < -60) {
                    // Adjust the threshold as needed
                    navigation.navigate('Chat'); // Change 'Sample' to the desired screen name
                } else if (gestureState.dx > 60) {
                    // Swiping right (delta x is greater than 20)
                    requestCameraPermission();
                }
            },
        });
    }, [navigation]);

    const handleChat = () => {
        navigation.navigate('Chat')
    }

    return (

        <SafeAreaView style={styles.main}>

            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.top}>
                    <Image source={require('../Images/logo1.png')} style={styles.logo1} />
                    <Image source={require('../Images/icons8-love-24.png')} style={styles.logo2} />
                    <Image source={require('../Images/icons8-dot-30.png')} style={styles.dot} />
                    <TouchableOpacity onPress={handleChat}>

                    <Image source={require('../Images/icons8-messenger-50.png')} style={styles.logo3} />
                    </TouchableOpacity>
                </View>


                <View style={styles.story}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true} showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.story1}>
                        <LinearGradient style={styles.stories}
                                colors={['#000', '#000', '#000']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/pro2.png')} style={styles.pro1} />
                                <View style={styles.plus}>
                                    <Image source={require('../Images/icons8-plus-30.png')} style={styles.icon} />
                                </View>
                            </LinearGradient>
                            <Text style={styles.txt}>Your Story</Text>
                        </View>

                        <View style={styles.story2}>
                        <LinearGradient style={styles.stories}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/pro1.jpg')} style={styles.pro1} />
                            </LinearGradient>
                            <Text style={styles.txt}>Roisee</Text>
                        </View>
                        <View style={styles.story3}>
                        <LinearGradient style={styles.stories}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/pro3.jpg')} style={styles.pro1} />
                            </LinearGradient>
                            <Text style={styles.txt}>Emilia</Text>
                        </View>
                        <View style={styles.story4}>
                        <LinearGradient style={styles.stories}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/pro4.jpg')} style={styles.pro1} />
                            </LinearGradient>
                            <Text style={styles.txt}>Ruby</Text>
                        </View>
                        <View style={styles.story4}>
                        <LinearGradient style={styles.stories}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/pro5.jpg')} style={styles.pro1} />
                            </LinearGradient>
                            <Text style={styles.txt}>Milly</Text>
                        </View>
                        <View style={styles.story4}>
                        <LinearGradient style={styles.stories}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/pro6.jpg')} style={styles.pro1} />
                            </LinearGradient>
                            <Text style={styles.txt}>Emma</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.post} {...panResponder.panHandlers}>
                    <View style={styles.post_head}>
                        <View style={styles.img_name}>
                        <LinearGradient style={styles.pro_in}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/zen.jpg')} style={styles.pro_pic} />
                            </LinearGradient>
                            <Text style={styles.pro_name}>zendaya</Text>
                        </View>
                        <View>

                            <Image source={require('../Images/icons8-menu-24.png')} />
                        </View>
                    </View>
                    <View style={styles.post_img}>
                        <Image source={require('../Images/zen2.webp')} style={styles.in_img} />
                    </View>
                    <View style={styles.icons}>
                        <View style={styles.icon123}>
                            <Image source={require('../Images/icons8-love-24.png')} style={styles.icon1} />
                            <Image source={require('../Images/icons8-comments-24.png')} style={styles.icon1} />
                            <Image source={require('../Images/icons8-message-24.png')} style={styles.icon1} />

                        </View>
                        <View style={styles.share_icon}>
                            <Image source={require('../Images/icons8-bookmark-64.png')} style={styles.icon1} />
                        </View>
                    </View>
                    <View style={styles.comments}>
                        <View style={styles.like}>
                            <Text style={styles.comment_txt}>2,641,900 likes</Text>
                        </View>
                        <Text style={styles.comment_txt}>zendaya <Text style={styles.caption_txt}>💕PP Pink💕</Text></Text>
                        <Text style={styles.comment_txt2}>View all comments</Text>
                        <View style={styles.comment}>
                            <Image source={require('../Images/pro2.png')} style={styles.comm_img} />
                            <Text style={styles.comment_txt1}>Add a comment...</Text>
                        </View>
                        <Text style={styles.comment_txt1}>3 days ago</Text>
                    </View>

                </View>
                <View style={styles.post1}>
                    <View style={styles.post_head}>
                        <View style={styles.img_name}>
                        <LinearGradient style={styles.pro_in}
                                colors={['#f9ce34', '#ee2a7b', '#6228d7']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}>

                                <Image source={require('../Images/mahira2.webp')} style={styles.pro_pic} />
                            </LinearGradient>
                            <Text style={styles.pro_name}>mahirakhan</Text>
                        </View>
                        <View>

                            <Image source={require('../Images/icons8-menu-24.png')} />
                        </View>
                    </View>
                    <View style={styles.post_img1}>
                        <Image source={require('../Images/mahira1.webp')} style={styles.in_img1} />
                    </View>
                    <View style={styles.icons}>
                        <View style={styles.icon123}>
                            <Image source={require('../Images/icons8-love-24.png')} style={styles.icon1} />
                            <Image source={require('../Images/icons8-comments-24.png')} style={styles.icon1} />
                            <Image source={require('../Images/icons8-message-24.png')} style={styles.icon1} />

                        </View>
                        <View style={styles.share_icon}>
                            <Image source={require('../Images/icons8-bookmark-64.png')} style={styles.icon1} />
                        </View>
                    </View>
                    <View style={styles.comments}>
                        <View style={styles.like}>
                            <Text style={styles.comment_txt}>2,002,383 likes</Text>
                        </View>
                        <Text style={styles.comment_txt}>mahirakhan <Text style={styles.caption_txt}>Assalamualikum 2024</Text></Text>
                        <Text style={styles.comment_txt2}>View all comments</Text>
                        <View style={styles.comment}>
                            <Image source={require('../Images/pro2.png')} style={styles.comm_img} />
                            <Text style={styles.comment_txt1}>Add a comment...</Text>
                        </View>
                        <Text style={styles.comment_txt1}>2 days ago</Text>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <Image source={require('../Images/icons8-home-24(2).png')} style={styles.bottom_icons} />
                <Image source={require('../Images/icons8-search-24(1).png')} style={styles.bottom_icons} />
                <Image source={require('../Images/icons8-add-64.png')} style={styles.bottom_icons} />
                <Image source={require('../Images/instagram-reels-white-icon.png')} style={styles.bottom_icons} />
                <Image source={require('../Images/pro2.png')} style={styles.bottom_icons1} />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        margin: 0,
        padding: 0,
    },
    top: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: 'black',
        marginTop: 5,
        alignItems: 'center',
        position: 'relative'
    },
    dot: {
        position: 'absolute',
        width: 22,
        height: 21,
        right: 56,
        top: 9
    },
    logo1: {
        width: 135,
        height: 50,
        marginLeft: 10,
        marginRight: 173,
        resizeMode: 'contain'
    },
    logo2: {
        width: 30,
        height: 30,
        marginRight: 24
    },
    logo3: {
        width: 30,
        height: 30
    },
    story: {
        height: 118,
        flexDirection: 'row'
    },
    stories: {
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    pro1: {
        width: 85,
        height: 85,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',

    },
    story1: {
        position: 'relative',

    },
    plus: {
        position: 'absolute',
        backgroundColor: '#0095F6',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        top: 56,
        left: 60
    },
    icon: {
        width: 16,
        height: 16
    },
    txt: {
        color: '#FFFF',
        fontSize: 16,
        marginTop: 3
    },
    story1: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    story2: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    story3: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    story4: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 8,
    },
    post: {
        borderTopColor: '#5b5c5b',
        // backgroundColor: 'yellow',
        borderTopWidth: 0.2,
        height: 600,
        marginTop: 10,
        flexDirection: 'column'
    },
    post1: {
        height: 780,
        marginTop: 10,
        flexDirection: 'column',
        marginTop: 40
    },
    post_head: {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,

    },
    pro_in: {
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pro_pic: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'black',
    },
    pro_name: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 17,
        marginLeft: 12,
        fontWeight: 'bold'
    },
    img_name: {
        width: 370,
        flexDirection: 'row',
        alignItems: 'center',

    },
    in_img: {
        width: 412,
        height: 400,
        resizeMode: 'cover',

    },
    in_img1: {
        width: '100%',
        height: 500,
        resizeMode: 'cover'
    },
    post_img: {
        height: 400,

    },
    post_img1: {
        height: 500,

    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    icon123: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 142
    },
    icon1: {
        width: 30,
        height: 30
    },
    comment_txt: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 17,
        marginLeft: 12,
    },
    caption_txt: {

    },
    comment_txt1: {
        color: 'grey',
        fontSize: 14,
        marginLeft: 12,
    },
    comment_txt2: {
        color: 'grey',
        fontSize: 16,
        marginLeft: 12,
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    comm_img: {
        width: 25,
        height: 25,
        resizeMode: 'cover',
        borderRadius: 50,
        marginTop: 3,
        marginBottom: 3
    },
    bottom_icons1: {
        width: 35,
        height: 35,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    bottom: {
        flexDirection: 'row',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottom_icons: {
        width: 35,
        height: 35
    }
})
export default HomeScreen
