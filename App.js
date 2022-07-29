import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

// class App extends Component {
//   render() {

//     let nome = 'Eu';

//     return (
//       <View>
//         <Text>My first App</Text>
//         <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
//           Sujeito Programador
//         </Text>

//         <Text style={{ fontSize: 30 }}>{nome}</Text>

//         <Jobs largura={200} altura={200} fulano="Steaven Trabalho" />

//       </View>
//     );
//   }
// }

// class Jobs extends Component {
//   render() {

//     let img = 'https://sujeitoprogramador.com/steve.png';

//     return (
//       <View>
//         <Image
//           source={{ uri: img }}
//           style={{ width: this.props.largura, height: this.props.altura }}
//         />
//         <Text> {this.props.fulano} </Text>
//       </View>
//     );
//   }
// }

// props = Estáticas
// states = Váriaveis

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Gil'
      
    };
  }
  render() {
    return (
      <View>
        <Text>My first App</Text>
      </View>
    );
  }
}

export default App;
