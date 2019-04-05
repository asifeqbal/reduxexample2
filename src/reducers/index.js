
// const reducer = (state = {say:'How are u'}, action) => {

//     switch (action.type) {
//       case 'HELLO_REACT':
//         return {  say : 'Hello World Redux'  };
//       case 'ADD_ITEM':
//       return {say : 'i AM aDDED' };
//       default:
//         return state;
//     }
    
//   };
  
//   export default reducer;
  
const reducer = (state={counter:0},action)=>{
  switch(action.type){
     case 'INCREMENT':
     return {...state,say:state.counter++}
        
      default:
      return state;
  }
 }
 
 export default reducer;