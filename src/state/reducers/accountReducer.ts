import { TypeEnum } from "../types/ReducerEnums";
import { ActionProp } from "../types/ReducerTypes";

const reducer = (state : number = 0, action: ActionProp) =>  {

    switch(action.type) {
        case TypeEnum.Deposit: 
            return state + action.playload;
        case TypeEnum.Withdraw:
            return state - action.playload;  
        default:
            return state;   
    }

}

export default reducer ;