import Home from "../TrangChu";
import Footer from "../footer";
import Header from "../header";
import {Outlet} from "react-router-dom"

const BaseLayout = () => {
  return (
    <div>
        <Header></Header>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}

export default BaseLayout