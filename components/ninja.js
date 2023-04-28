import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.teste1}
      source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2bbscB4QxSU924zbhrkKnpgOjgkL1t1_X3swQXF7dtWn-ddMJb0LWEaDbKgs-wMGUKA&usqp=CAU"}}
      >
       <View style={styles.caixa}> 
      <Text style={styles.titulo}>Macaco ninja</Text>
      </View> 
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
    
  );
}





const styles = StyleSheet.create({
  titulo:{
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teste1:{
    width: "100%",
    height: "100%",
    backgroundColor: "#808080",
    alignItems: 'center',
    justifyContent: 'center',
  },
  caixa: {
    width: 200,
    height: 70,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }
});