//This file contatins 'ACTION-CREATOR' functions 
//In Redux, 'ACTION-CREATOR'  return an  ACTION(plain JavaScript object)

//example of simple 'ACTION-CREATOR'

export const sayHello = () => ({
    type: "HELLO_REACT"
})
export const addItem = () => ({
    type: "ADD_ITEM"
})

export function increment(){
    return{
        type:'INCREMENT'
    }
}

export function decrement(){
    return{
        type:'DECREMENT'
    }
}