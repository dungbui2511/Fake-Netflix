
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import {PageWrapper} from '../../styles/global/default';
import Footer from "../footer/Footer";
const BaseLayOut = () => {
  return (
    <PageWrapper>
    <Header/>
    <main style={{minHeight:'100vh'}}>
    <Outlet/>
    </main>
    <Footer/>
    </PageWrapper>
  )
}

export default BaseLayOut

