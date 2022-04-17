const redux = require('redux');
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}

//(previousState, action) => newState

// const intialState = {
//     numOfCake:10,
//     numofIceCreams:10
// }

const intialIceCreamState = {
    numofIceCreams:10
}

const intialCakeState = {
    numOfCake:10,
}

const iceCreamReducer = (state = intialIceCreamState,action) => {
    switch(action.type){
        case BUY_ICECREAM:return {
            ...state,
            numofIceCreams : state.numofIceCreams -1
        }
        default : return state
    }

}

const cakeReducer = (state = intialCakeState,action) => {
    switch(action.type){
        case BUY_CAKE:return {
            ...state,
            numOfCake : state.numOfCake -1
        }
        default : return state
    }

}

// const reducer = (state = intialIceCreamState,action) => {
//     switch(action.type){
//         case BUY_CAKE:return {
//             ...state,
//             numOfCake : state.numOfCake -1
//         }
//         case BUY_ICECREAM:return {
//             ...state,
//             numofIceCreams : state.numofIceCreams -1
//         }
//         default : return state
//     }

// }

const rootReducer = redux.combineReducers(
    {
        iceCream :iceCreamReducer,
        cake : cakeReducer
    })

const store = redux.createStore(rootReducer,applyMiddleware(logger))
console.log('Intial State', store.getState() )
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
//unsubscribe();