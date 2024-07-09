import Userregistration from "./components/Userregistration";
import Usertable from "./components/Usertable";
import { NavLink, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <section className="container-fluid ">
        <header className="row">
          <nav className="col-12 border-bottom shadow-sm">
            <ul className="list-unstyled d-flex gap-4 justify-content-center mb-0 py-3">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-success text-decoration-none" : "text-decoration-none"}><i className="fa fa-home" aria-hidden="true"></i>
                  Home</NavLink>
              </li>
              <li>
                <NavLink to="user-list" className={({ isActive }) => isActive ? "text-success text-decoration-none" : "text-decoration-none"}><i className="fa fa-users" aria-hidden="true"></i>
                  UserList</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Userregistration />} />
          <Route path="/user-list" element={<Usertable />} />
        </Routes>
      </section>
    </>
  );

};

export default App;