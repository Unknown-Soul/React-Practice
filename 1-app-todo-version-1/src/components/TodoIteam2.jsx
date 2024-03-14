function TodoIteam1(){
    let  iteaName = "College";
    let date = "04/10/203";
    return       <div class="container custom-row">
            <div class="row">
          <div class="col-6">{iteaName}</div>
          <div class="col-4">{date}</div>
          <div class="col-2">
            <button type='button' className='btn btn-danger custom-botton'>Delete</button>      </div>
        </div>
        </div>
}
export default TodoIteam1;