import Heading from "./component/heading";
import Input from "./component/input";
import Todoitem from "./component/Todoitem";
import { useState } from "react";
function App() {
    const [todoitem,settodoitem]=useState([]);
    const addtodo=(setname,setdate)=>{
      const newtodoitem=[...todoitem,{
        name:setname,
        date:setdate
      },];
      settodoitem(newtodoitem)
    };
    const deleteitem=(todoitemname)=>{
       const todoitemdelete= todoitem.filter(item=>item.name!==todoitemname)
       settodoitem(todoitemdelete);
    }
    return (
    <div  style={{display:"flex", flexDirection : 'column', alignItems: 'center'}}>
    <Heading/>
    <Input addnewtodo={addtodo}/>
    <Todoitem todoitem={todoitem} ondeleteclcik={deleteitem}/>
    </div>
  );
}

export default App;
