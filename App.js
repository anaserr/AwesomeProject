import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import moment from 'moment' ;
import CoursList from './CoursList';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      // isCalendarShowing: false,
      // selectedDate: moment().format('YYYY-MM-DD')
    }
  }

  // showCalendar = () => {
  //   this.setState(prevState => {
  //     return {isCalendarShowing: !prevState.isCalendarShowing}
  //   });
  //   // console.log('new state ',this.state.isCalendarShowing);
  // }

  // getDateFromCalendar = (day) => {
  //   this.setState({
  //     isCalendarShowing: false,
  //     selectedDate: day.dateString
  //   });
  // }

  render(){
    console.log('date = ' + moment().format('YYYY-MM-DD'));
    return (
      <View style={styles.container}>
         <CoursList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Dimensions.get('window').height  * 4) / 100,
    // backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "column"
    // justifyContent: 'center',
  },
  /* btn: {
    width: 100,
    position: 'relative',
    // zIndex: 5
  }, 
  texty: {
    marginTop: 50, 
    backgroundColor: 'red', 
    // position: 'absolute' ,
    zIndex: 0,
    overflow: 'hidden',
  }, */
});
