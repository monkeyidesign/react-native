import React, {Component} from 'react';
import {View, Text} from 'react-native';

//npm install axios --save
import axios from 'axios';

class ListData extends Component {
  state = {dataFromAPI: []};

  componentDidMount() {
    axios
      .get('https://monkeyidesign.com/json/home.json')
      .then(res => this.setState({dataFromAPI: res.data}));
    //.then(res => console.log(res));
  }
  renderMyData() {
    return this.state.dataFromAPI.map(dataFromAPI => (
      <Text key={dataFromAPI.title}>{dataFromAPI.title}</Text>
    ));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <View>{this.renderMyData()}</View>
      </View>
    );
  }
}
export default ListData;
