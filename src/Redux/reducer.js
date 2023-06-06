import {tododata} from '../Data'
import { ADDTASK } from './actionType'
import { EDITTASK } from "./actionType";
import {FILT} from './actionType';



const initState={
    task:tododata
};
export const reducer = (state = initState, action) => {
    switch (action.type) {
      case ADDTASK:
        return {
          ...state,
          task: [...state.task, action.payload]
        };
        case EDITTASK:
          return {
            ...state,
            task:state.task.map((el)=>(el.id===action.payload.id?action.payload:el)




            )
          };
          case FILT:
          return{
            
            task:state.task.filter((el)=>(action.payload !==el.id))
          }
  
      default:
        return state;
    }
  };
  



