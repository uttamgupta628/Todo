import Input2 from "./2ndComponent"
const Todoitem=({todoitem,ondeleteclcik})=>{
return(
    <>
    {todoitem.map(
        (item)=>(<Input2 input={item.name} date={item.date} ondeleteclcik={ondeleteclcik} />)
)}
    </>
);
}
export default Todoitem;