import {CreateStore} from 'redux';



const reducerFn = (state={counter:0},action)=>{

    return state;
}

const store = CreateStore(reducerFn);

export default store;