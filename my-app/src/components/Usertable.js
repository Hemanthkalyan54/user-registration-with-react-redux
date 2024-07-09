import { useSelector } from "react-redux";

const Usertable = () => {
    let {userList} = useSelector((state) => state.user);
    return (
        <>
            <section className="row mt-3 justify-content-center">
                <section className="col-8 ">
                    <table className="table border table-bordered ">
                        <thead className="table-primary text-center">
                            <tr>
                                <th width="10%">sr.no</th>
                                <th width="40%">name</th>
                                <th width="50%">email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.length === 0 ? <tr> <td colSpan={3} className="text-center fw-bold text-danger "> No data to display</td></tr> : null}
                            {userList.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.userName}</td>
                                        <td>{value.userEmail}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </section>
            </section>
        </>

    )
}
export default Usertable;