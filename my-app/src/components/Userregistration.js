import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { onInputchange, saveUser } from "../redux/user.slice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Userregistration = () => {
    let {userInput}= useSelector((state) => state.user);
    let navigate=useNavigate();
    let dispatch=useDispatch();
    let inputchange =(event)=>{
        let {name,value} = event.target;
        let data={name,value};
        dispatch(onInputchange(data))
    }
    let saveUserdata = ()=>{
        dispatch(saveUser());
        Swal.fire({
            title: 'Success!',
            text: 'User added succesfully',
            icon: 'success',
            confirmButtonText: 'ok'
          }).then(()=>{
            navigate('/user-list')
          })

    }

    return (
        <>
            <section className="row justify-content-center">
                <section className="col-6 card mt-3 p-3">
                    <form className="mb-2" >
                        <Input inputchange={inputchange} userInput={userInput} placeholder="Enter your Name" type="text" name="userName" label="NAME" value={userInput.userName}></Input>
                        <Input inputchange={inputchange} userInput={userInput} placeholder="Enter your Email" type="email" name="userEmail" label="EMAIL" value={userInput.userEmail}></Input>
                        <div className="text-center gap-3 d-flex justify-content-center">
                            <button onClick={saveUserdata} type="button" className="btn btn-success px-5 rounded-0"><i className="fa fa-bookmark" aria-hidden="true"></i>
                            SAVE</button>
                            <button type="reset" className="btn btn-outline-danger rounded-0 px-5"><i className="fa fa-history" aria-hidden="true"></i>
                            RESET</button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}
export default Userregistration;