import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}></View>
      <View style={styles.main}>
        <View style={styles.sidebar}></View>
        <View style={styles.center}>
          <View style={styles.redBox}></View>
        </View>
        <View style={styles.content}>
          <View style={styles.greenBox}></View>
          <View style={styles.blueBox}></View>
          <View style={styles.greenBox}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: 'blue',
    height: 50,
     width: 100,
  },
  center: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height:'100%',
    position: 'relative',
  },
  container: {
    flex: 1,
    display: 'flex',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '50%',
  },
  greenBox: {
    width: 100,
    height: 200,
    backgroundColor: 'green',
  },
  main: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    height: '90vh',
  },
  nav: {
    backgroundColor: 'cyan',
    height: '10vh',
    width: '100%'
  },
  redBox: {
    backgroundColor: 'red',
    height: 40,
    left:-10,
    width: 20,
  },
  sidebar: {
    backgroundColor: 'gray',
    height: '100%',
    width: '40%',
  }
});
