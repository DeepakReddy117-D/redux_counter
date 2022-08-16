
// creating a Reducer 
export default function CounterReducer(state={value:0},action){

    switch(action.type){

        case "INCREASE":

            return{value:state.value+1}

        case "DECREASE":

            return{value:state.value-1}

        case "INCREASEBYAMOUNT":

            return {value:state.value+action.payload}

        default:

            return state;
    }
}

