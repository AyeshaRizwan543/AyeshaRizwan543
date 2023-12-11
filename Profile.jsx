import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile() {
  const [story, setStory] = useState('');

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={{ height: 35, width: 100, backgroundColor: "#c30010", marginLeft: 20, marginTop: '16%', borderRadius: 12 }}>
          <Text style={{ color: '#fff', marginLeft: 23, marginTop: 5 }}>Logout</Text>
        </TouchableOpacity>
        <View><Text style={styles.text1}>قصہ سناؤ</Text></View>
      </View>
      <View style={styles.container}>
        <Image source={require('../assets/images/profile.png')} style={styles.imageprofile} />
      </View>
      <View>
        <Text style={{ fontSize: 20, marginLeft: 140, marginTop: 13, fontWeight: 'bold' }}>Ayesha Amjad</Text>
      </View>
      <TouchableOpacity style={{ height: 40, width: 170, backgroundColor: '#3F939B', marginLeft: 120, marginTop: 10, borderRadius: 12 }}>
        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 28, marginTop: 7 }}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'Arial-BoldMT', borderBottomWidth: 2 }}>Created </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Saved </Text>
      </View>
      <View style={styles.container2}>
        <Icon name='search' size={20} color="#a9a9a9" style={{ marginLeft: 12, elevation: 5 }} />
        <TextInput
          placeholder='Search your story'
          value={story}
          onChangeText={(text) => setStory(text)}
          style={{ color: '#000', marginLeft: 10 }}
        />
        <TouchableOpacity>
          <Image source={require('..//assets/images/arrows.png')} style={{ height: 25, width: 25, marginLeft: 60 }} />
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity><Text style={{marginLeft:'75%', fontWeight:'bold'}}> See more</Text></TouchableOpacity>
      </View>
      <View style={styles.container_row}>
        <TouchableOpacity style={styles.container3}>
          <Image source={require('../assets/images/book1.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.container4}>
          <Image source={require('../assets/images/book2.png')} style={styles.image} />
        </TouchableOpacity>
       </View>
       <View style={styles.navbar}>
        <View  style={styles.icons}>
          <TouchableOpacity>
            <Icon name="home" size={30} color="#3F939B" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="plus" size={30} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="user" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  text1: {
    marginTop: '20%',
    marginRight: '12%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#000',
    marginLeft: '40%',
    marginTop: '8%',
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 200,
    marginLeft: 12,
    marginTop: '9%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageprofile: {
    width: 100,
    height: 100,
    marginLeft: 12,
    marginTop: '9%',
    borderRadius: 5,
    overflow: 'hidden',
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 210,
    backgroundColor: '#CFCCCC',
    marginTop: 24,
    marginLeft: 55,
    borderRadius: 12,
  },
  container_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '10%',
  },

  navbar: {
  height:60,
  width:350,
  backgroundColor:'#fff',
  marginLeft:'7%',
  marginTop:'9%',
  borderColor: '#585858' ,
  borderWidth:1.5,
  elevation: 3

  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:11
  }
});