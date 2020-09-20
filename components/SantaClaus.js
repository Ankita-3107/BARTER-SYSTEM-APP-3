import React from 'react'; 
import LottieView from 'lottie-react-native'; 
export default class SantaAnimation extends React.Component { 
    render() { 
        return ( 
    <LottieView source={require('../assets/img.json')} 
    style={{width:"60%"}} 
    autoPlay loop /> 
    ) 
} 
}