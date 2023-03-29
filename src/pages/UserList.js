import lamu from "../assets/img1.png";
import img2 from "../assets/img2.png";

import { useState, useEffect } from "react";
import { Toast } from "../components/modal/Toast";
import { AddAdminModal } from "../components/modal/AddAdminModal";
import { useNavigate } from "react-router-dom";
import {
    getUser,
    getRentedAmount,
    getWaitList,
    getRentedInfo,
} from "../Api.js";
import { NavBar } from "../components/NavBar";

const UserList = () => {
    const [waitListLoading, setWaitListLoading] = useState(true);
    const [rentedLoading, setRentedLoading] = useState(true);
    const [showAddAdminModal, setShowAddAdminModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const url = window.location.href;
    const [amount, setAmount] = useState({ data: { remain: '--', rented: '--' } });
    const [waitList, setWaitList] = useState({ data: [] });
    const [rentInfo, setRentInfo] = useState({ data: [] });
    let navigate = useNavigate();

    // 接收api資料
    useEffect(() => {
        //get user info
        getUser()
            .then((response) => {
                if (response.data.user.role !== 1) {
                    window.location.replace("/");
                }
                getData();
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("登入狀態已逾期，請重新登入");
                    window.location.replace("/");
                }
            });
    }, []);

    const getData = () => {
        getRentedAmount()
            .then((response) => {
                if (response.status === 200) {
                    setAmount(response.data);
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("登入狀態已逾期，請重新登入");
                    window.location.replace("/");
                }
            });

        // 候補清單
        getWaitList()
            .then((response) => {
                if (response.status === 200) {
                    setWaitList(response.data);
                    setWaitListLoading(false);
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("登入狀態已逾期，請重新登入");
                    window.location.replace("/");
                }
            });

        getRentedInfo()
            .then((response) => {
                if (response.status === 200) {
                    setRentInfo(response.data);
                    setRentedLoading(false);
                }
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    alert("登入狀態已逾期，請重新登入");
                    window.location.replace("/");
                }
            });
    };

    // 已租借清單
    const data = [
        {
            img: img2,
            amount: amount.data.remain,
            bgColor: "#FFC700",
            state: "未租",
        },
        {
            img: lamu,
            amount: amount.data.rented,
            bgColor: "#519E75",
            state: "已租",
        },
    ];
    const info = waitList.data;

    const rentedInfo = rentInfo.data.map((x) => {
        return {
            id: x.id,
            name: x.owner.name,
            email: x.owner.email,
            plantName: x.plant?.name,
            plantIMG: x.plant?.imgPath,
            container: x.container,
        };
    });

    const navBarItems = [
        {
            title: "盆栽管理",
            onClick: () => navigate("/admin"),
        },
        {
            title: "新增管理員",
            onClick: () => setShowAddAdminModal(true),
        },
        {
            title: "管理員列表",
            onClick: () => navigate("/admin/adminList"),
        },
        {
            title: "使用者列表",
            onClick: () => navigate("/admin/userList"),
            isCurrent: true,
        },
        {
            title: "查看前臺",
            onClick: () => navigate("/main"),
        },
    ];

    const onAdminSuccess = () => {
        setShowAddAdminModal(false);
        setToastMsg("成功新增管理員！");
        setShowToast(true);
    };

    const onDeleteRent = () => {
        setToastMsg("刪除成功！");
        setShowToast(true);
        setWaitListLoading(true);
        setRentedLoading(true);
        getData();
    }

    return (
        //navbar
        <div id="admin" className="flex flex-col items-center desktop:h-screen">
            <NavBar onLogoClick={() => { }} navItems={navBarItems} />
            <div className="desktop:h-24 tablet:h-20 h-16 flex-none" />
            {/* 新增管理員modal */}
            <AddAdminModal
                show={showAddAdminModal}
                onSuccess={onAdminSuccess}
                onCancel={() => setShowAddAdminModal(false)}
            />
            <div
                id="content"
                className="w-full flex justify-center desktop:flex-auto relative"
            >
                <Toast
                    show={showToast}
                    onClose={() => setShowToast(false)}
                    type="success"
                    text={toastMsg}
                />

                <div class="flex flex-col mt-8">
                    <div class="flex flex-col items-center">
                        {/* 左半邊 */}
                        <h1 class="text-[28px] text-center">使用者列表</h1>
                        <div class=" w-[55vw] h-[540px] overflow-y-scroll overflow-x-hidden mt-6 bg-[#F9F9F9] border border-[#F9F9F9] rounded-3xl shadow-md ">
                            <div class="max-w-3xl mt-8 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                                <div class="flex flex-row p-8 px-10 justify-between">
                                    <div class="w-96 flex flex-col">
                                        <div class="tracking-wide text-2xl text-black font-medium">
                                            使用者
                                        </div>
                                        <div class="h-20 mt-2 ml-2 flex flex-col text-gray-600 justify-between">
                                            <div>Email：zoe2636@kimo.com</div>
                                            <div>加入日期：2022-02-12</div>
                                            <div>已登記盆器數量：2</div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-end">
                                        <button class="py-1 px-2 bg-red-400 text-red-50 rounded-lg">刪除使用者</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
