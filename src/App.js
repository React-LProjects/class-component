




























// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io();

// function App() {
//   const [isConnected, setIsConnected] = useState(socket.connected);
//   const [lastPong, setLastPong] = useState(null);

//   useEffect(() => {
//     socket.on('connect', () => {
//       setIsConnected(true);
//     });

//     socket.on('disconnect', () => {
//       setIsConnected(false);
//     });

//     socket.on('pong', () => {
//       setLastPong(new Date().toISOString());
//     });

//     return () => {
//       socket.off('connect');
//       socket.off('disconnect');
//       socket.off('pong');
//     };
//   }, []);

//   const sendPing = () => {
//     socket.emit('ping');
//   }

//   return (
//     <div>
//       <p>Connected: { '' + isConnected }</p>
//       <p>Last pong: { lastPong || '-' }</p>
//       <button onClick={ sendPing }>Send ping</button>
//     </div>
//   );
// }

// export default App;








// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(){
//     super()

//     console.log("constructor");
//   }

//   static getDerivedStateFromProps(props ,state){
//     console.log("getDerivedStateFromProps")
//   }
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }






// import React,{Component} from "react"

// class App extends Component {

//   constructor()
//   {
//     super()
//     this.state = {
//       data : 1
//     }

//   }

//   apple(){
//    this.setState({data:this.state.data + 1})
//   }

//   render() 
//   {
//     return ( 
//       <>
//          <h1>{this.state.data}</h1>
//          <button onClick={()=>this.apple()}>Update</button>
//       </>
//     );
//   }
  
// }

// export default App;


