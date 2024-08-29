function Input2({input, date,ondeleteclcik}){
    return (
    <div class="row container">
        <div class="col-6">{input}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
        <button type="button" class="btn btn-danger btn" onClick={()=>ondeleteclcik(input)}>Delete</button>
        </div>
    </div>);
}
export default Input2;