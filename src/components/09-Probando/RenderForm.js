import { todoReducer } from "../08-useReducer/todoReducer";

export const RenderForm = (state=[],action) => {
 switch (action.type) {
     case 'add':
         return [...state, action.payload];
         
      case 'delete':   
      return state.filter(todo => todo.id !== action.payload );
    
      case 'togle':
       return state.map( valor => 
        (valor.id === action.payload)
        ?  {...valor, done: !valor.done}
        : valor           
       ) 

     default:
        return state;
 }



}
