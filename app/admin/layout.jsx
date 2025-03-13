
import Sidebar from "@/Components/AdminComponents/Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import MobileNav from "@/Components/AdminComponents/MobileNav";


export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center ">
                <ToastContainer theme="dark" />
                <span className="hidden sm:block">

                    <Sidebar />
                </span>

                <span className="sm:hidden mt-5 flex justify-center">

                <MobileNav/>
                </span>

                <div className="flex w-full">


                    {children}
                </div>
            </div>
        </>
    )
}