const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

//las acciones modifican el estate
const todoReducer = (state= initialState,action) => {
   //el signo de interreg solo valida q si la action tiene algun valor haga el if entocnes
    if(action?.type==='agregar'){
       return [...state,action.payload];
   }
  
    //por defecto siempre se devuelve un state
    return state;
}
let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false 
} 

const agregraTodoAction ={
    type: 'agregar',
    payload: newTodo 
}

todos = todoReducer(todos,agregraTodoAction);

console.log(todos);