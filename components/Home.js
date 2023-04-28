import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
      style={styles.teste1}
      source={{uri:"https://cdn1.epicgames.com/spt-assets/764b2d57552c436590f50318bd7587f9/download-bloons-td-6-offer-100fo.jpg"}}
      >
        
      <Text style={styles.titulo}></Text>
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