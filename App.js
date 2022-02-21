import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.a}>
      <Text  style={styles. contentB}>110919030汪怡廷</Text>
      <Text  style={styles. contentB}>終於做完了好想哭</Text>
      <Image source = {{uri:'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'}}
   style = {{ width: 250, height: 250}}
   />
      </View>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3AC9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  a:{
    width: '100%',
    paddingBottom:50,
  },
  
  contentB: {
    width: '100%',
    fontSize: 30,
    textAlign: 'left',
    color: "#865754"
  },
  
});
