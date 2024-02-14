import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, SectionList, Pressable, PanResponder, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'



function Chat({ navigation }) {
  const [isSwiping, setIsSwiping] = React.useState(false);

  const handlePress = () => {
    if (!isSwiping) {
      // Handle press event if needed
    }
  };

  const panResponder = React.useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (e, gestureState) => {
        return (gestureState.dx) > 5; // Allow slight horizontal movement before becoming active
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dx > 60) {
          // Swiping right (delta x is greater than 20)
          setIsSwiping(true);
          navigation.navigate('Insta')
        }
      },
      onPanResponderRelease: () => {
        setIsSwiping(false);
      },
      onPanResponderTerminate: () => {
        setIsSwiping(false);
      },
    });
  }, [navigation]);

  const handlBackPress = () => {
    navigation.navigate('Insta')
  }

  return (

    <SafeAreaView style={styles.main} {...panResponder.panHandlers}>
      <View style={styles.head}>
        <TouchableOpacity onPress={handlBackPress}>

        <Image source={require('../Images/icons8-left-50.png')} style={styles.head_icon} />
        </TouchableOpacity>
        <View style={styles.name_icon1}>
          <Text style={styles.pro_name}>tommy_vercetti</Text>
          <Image source={require('../Images/icons8-arrow-down-48.png')} style={styles.head_icon1} />
        </View>
        <View style={styles.icon12}>
          <Image source={require('../Images/icons8-video-64.png')} style={styles.head_icon2} />
          <Image source={require('../Images/icons8-edit-24(4).png')} style={styles.head_icon} />
        </View>
      </View>
      <ScrollView>

        <View style={styles.txt_area}>
          <View style={styles.img_txt}>
            <Image source={require('../Images/icons8-search-48.png')} style={styles.search_icon} />
            <Text style={{ fontSize: 18, color: '#7E7E7E' }}>Search</Text>
          </View>
        </View>
        <View style={styles.chat_suggestions}>
          <View style={styles.chat_sugg1}>
            <Image source={require('../Images/pro2.png')} style={styles.chat_sugg_img} />
            <Text style={styles.chat_pro_name1}>Your note</Text>
          </View>
          <View style={styles.chat_sugg1}>
            <Image source={require('../Images/chat1.jpg')} style={styles.chat_sugg_img} />
            <Text style={styles.chat_pro_name}>jeen_maria</Text>
          </View>
          <View style={styles.chat_sugg1}>
            <Image source={require('../Images/chat2.jpg')} style={styles.chat_sugg_img} />
            <Text style={styles.chat_pro_name}>jennaortega</Text>
          </View>
          <View style={styles.chat_sugg1}>
            <Image source={require('../Images/chat3.jpg')} style={styles.chat_sugg_img} />
            <Text style={styles.chat_pro_name}>mimikeene3</Text>
          </View>
        </View>
        <View style={styles.messages}>
          <View style={styles.mess_req}>
            <Text style={styles.input_txt}>Messages</Text>
            <Text style={styles.input_txt1}>Requests</Text>
          </View>
          <View style={styles.chat_view}>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp1.jpg')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>Aliyah</Text>
                <Text style={styles.chat_txt1}>Hey, how are you ?</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp2.jpg')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>Sam_Sulek</Text>
                <Text style={styles.chat_txt1}>What' sup ?</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp7.webp')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>henry_cavill</Text>
                <Text style={styles.chat_txt1}>How you doing ?</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp4.jpg')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>elizabetholesn</Text>
                <Text style={styles.chat_txt1}>Heyy 💕!</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp5.jpg')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>c_bum</Text>
                <Text style={styles.chat_txt1}>Send on Sunday</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp6.jpg')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>chrishemsworth</Text>
                <Text style={styles.chat_txt1}>Hello</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp3.webp')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>ana_d_armas</Text>
                <Text style={styles.chat_txt1}>💖</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
            <Pressable style={({ pressed }) => [
              styles.chat_list,
              {
                backgroundColor: pressed ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
              },
            ]}
              onPress={handlePress} >
              <Image source={require('../Images/chatp8.jpg')} style={styles.chat_pro_img} />
              <View style={styles.inside_chat_list}>
                <Text style={styles.chat_txt}>neymarjr</Text>
                <Text style={styles.chat_txt1}>🤙</Text>
              </View>
              <Image source={require('../Images/icons8-camera-48.png')} />
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black'
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 53,
    paddingHorizontal: 5
    // backgroundColor: 'red'
  },
  head_icon: {
    width: 36,
    height: 36
  },
  head_icon1: {
    width: 14,
    height: 14,
    marginTop: 5,
    marginLeft: 5
  },
  head_icon2: {
    width: 36,
    height: 36,
    marginRight: 25
  },
  pro_name: {
    color: '#FFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 35
  },
  name_icon1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 218,
    marginRight: 40
  },
  icon12: {
    flexDirection: 'row',
  },
  search_icon: {
    width: 23,
    height: 20,
    marginHorizontal: 12
  },
  txt_area: {
    backgroundColor: '#262626',
    height: 40,
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 10
  },
  img_txt: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  chat_pro_name1: {
    color: '#7E7E7E',
    marginTop: 3,
    fontSize: 15,
    letterSpacing: 0.4
  },
  chat_pro_name: {
    color: '#FFF',
    marginTop: 3,
    fontSize: 15,
    letterSpacing: 0.4
  },
  chat_sugg_img: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  chat_suggestions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    paddingHorizontal: 10
  },
  chat_sugg1: {
    alignItems: 'center',
  },
  messages: {
    paddingHorizontal: 10,
    marginTop: 14
  },
  mess_req: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input_txt: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#FFF'
  },
  input_txt1: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#188CE1'
  },

  chat_list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,

    // backgroundColor: 'yellow'
  },

  chat_pro_img: {
    width: 63,
    height: 63,
    borderRadius: 50,
    resizeMode: 'cover'
  },
  inside_chat_list: {
    width: 245,
    // backgroundColor: 'green'
  },
  chat_view: {
    marginTop: 15,
  },
  chat_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  },
  chat_txt1: {
    color: '#7E7E7E',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default Chat
