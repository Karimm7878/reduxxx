import { ADDTASK } from "./actionType";
import { EDITTASK } from "./actionType";
import { FILT } from "./actionType";


export const addtask = (data) => {
  return {
    type: ADDTASK,
    payload: data
  };
};
export const edit =(data)=>{
  return{
    type:EDITTASK,
    payload:data
  };
};
export const filt =(data)=>{
  return{
    type:FILT,
    payload:data
  };
};
