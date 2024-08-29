import { useRef } from "react";

function Input({addnewtodo}){

    const nameadd=useRef();
    const dateadd=useRef();

    const addtodonew=()=>{
      const namechange=nameadd.current.value;
      const datechange=dateadd.current.value;
      nameadd.current.value="";
      dateadd.current.value="";
      addnewtodo(namechange,datechange);
    }
    return (
        <div class="row  container">
        <div class="col-6">
          <input 
          type="text" 
          placeholder="Enter Todo Hear" 
          ref={nameadd}
          />
        </div>
        <div class="col-4">
          <input 
          type="date" 
          ref={dateadd}
          />
        </div>
        <div class="col-2">
        <button type="button" class="btn btn-success btn" onClick={addtodonew}>Add</button>
        </div>
      </div>
    );
}
export default Input;