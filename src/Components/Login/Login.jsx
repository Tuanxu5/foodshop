import React , {useState} from 'react';
import background from "../../public/image/Login/background.jpg"
import image1 from "../../public/image/Login/image1.jpg"
import google from "../../public/image/Login/google.jpg"
import facebook from "../../public/image/Login/facebook.jpg"
import { HiOutlineUsers } from "react-icons/hi";
import { CgLock } from "react-icons/cg"
import { VscEye } from "react-icons/vsc"
import { VscEyeClosed } from "react-icons/vsc"
import { CgPushChevronRightR } from "react-icons/cg"
import { BsBoxArrowInRight } from "react-icons/bs"

const Login = () => {
    const [show, setShow] = useState(false);
    
    //handle show hide password
    const handleShowHide = () => {
        setShow((show) => !show);
        const changeShow = document.getElementById('password');
        changeShow.type = changeShow.type == "password" ? "text" : "password";
    }
    return (
        <div className="w-[full] h-auto background-image-login overflow-hidden">
            <img src={background} alt="" className="w-full h-[44.4em] opacity-[0.3]" />
            <form action="#" className="grid grid-cols-5 absolute w-[800px] h-auto bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center rounded-xl shadow-2xl">
                <div className="col-span-3 py-5 px-10">
                    <h1 className="text-[30px] font-bold text-primary">ĐĂNG NHẬP</h1>
                    <span className="text-[14px] font-bold">Để trải nghiệm những dịch vụ trên
                        <span className="text-primary"> FoodShop</span> nào!
                    </span>
                    <div className="mt-[80px]">
                        <div className="relative">
                            <span className="pr-2 border-r border-[#888] absolute top-[50%] left-[15px] text-[20px] translate-y-[-50%] text-[#888]"><HiOutlineUsers/></span>
                            <input type="text" placeholder="Nhập tài khoản" className="border-none outline-0 px-[55px]
                            py-2 rounded-xl w-full bg-[#FFF5EA] h-[50px] text-[13px] font-bold text-[#888]"/>
                        </div>
                        <div className="relative mt-5">
                            <span className="pr-2 border-r border-[#888] absolute top-[50%] left-[15px] text-[20px] translate-y-[-50%] text-[#888]"><CgLock/></span>
                            <input type="password" placeholder="Nhập mật khẩu" id="password" className="border-none outline-0 px-[55px]
                            py-2 rounded-xl w-full bg-[#FFF5EA] h-[50px] text-[13px] font-bold text-[#888]"/>
                            <button onClick={handleShowHide} className="cursor-pointer absolute top-[50%] right-[15px] text-[15px] translate-y-[-50%] text-[#888] hover-color-primary">
                                {show ? <VscEyeClosed/> : <VscEye/>}
                            </button>
                        </div>
                        <div className="flex justify-between mt-2 items-center">
                            <label className="flex items-center gap-2 cursor-pointer" htmlFor="nhomatkhau">
                                <input type="checkbox" name="radio" id="nhomatkhau" className="inputradio"/>
                                <span className="checkbox-input text-[13px] font-bold">Nhớ mật khẩu</span>
                            </label>
                            <a href="#" className="text-[13px] font-bold hover-text-primary">Quên mật khẩu</a>
                        </div>
                    </div>
                    <button type="submit" className="mt-5 border-2 border-primary w-full h-[45px] rounded-md font-bold text-[15px] bg-primary text-white">Đăng Nhập</button>
                    <div className="flex justify-center gap-1 mt-2 font-bold text-[13px]">
                        <a href="#" className="underline flex items-center hover-text-primary">
                            <span>Trở thành người bán hàng</span>
                        </a>
                    </div>
                    <div className="mt-5 flex justify-center items-center gap-5">
                        <button className="flex gap-2 border rounded-lg w-[150px] h-[40px] justify-center items-center">
                            <img src={google} alt="" className="w-[20px] h-[20px]"/>
                            <span className="font-bold text-[14px]">Google</span>
                        </button>
                        <button className="flex gap-2  border rounded-lg w-[150px] h-[40px] justify-center items-center">
                            <img src={facebook} alt="" className="w-[20px] h-[20px]"/>
                            <span className="font-bold text-[14px]">Facebook</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-2 relative">
                    <img src={image1} alt="" className="h-full w-full rounded-r-xl relative" />
                    <div className="translate-x-[-50%] translate-y-[-50%] py-3 px-2 w-[80%] rounded-lg bg-[#ffffffee] absolute top-[50%] left-[50%] font-bold text-[13px] text-center">
                        <span>Để trở thành ngay Thành viên của <span className="text-primary">FoodShop!</span></span>
                        <button className="border-2 btn-second relative left-[50%] translate-x-[-50%] px-4 py-2 rounded-md mt-2">Đăng Kí Ngay</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Login;