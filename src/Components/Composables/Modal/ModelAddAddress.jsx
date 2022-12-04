import React, { useState } from 'react';
import { CgAddR } from "react-icons/cg";
import { Modal, Button } from 'antd';

function ModalVoucher() {
  const [loading, setLoading] = useState(false);
  const [openModelAddAddress, setOpenModelAddAddress] = useState(false);

//handle click OK in model
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenModelAddAddress(false);
}, 1000);
  };
//handle click Cancel in model
  const handleCancel = () => {
    setOpenModelAddAddress(false);
  };
    return (
      <div>
        <button
            onClick={() => setOpenModelAddAddress(true)}
            className="flex items-center w-full text-[15px] font-bold justify-center gap-1.5 bg-white px-5 py-4 rounded-lg mt-2 shadow-lg bg-secondary hover-text-primary">
                <span className="text-[18px]"><CgAddR/></span>
                <span>Thêm Địa Chỉ Giao Hàng</span>
            </button>
            <Modal open={openModelAddAddress} title="Thêm Địa Chỉ Giao Hàng" onOk={handleOk} onCancel={handleCancel}
          footer={[
            <Button type="" onClick={handleCancel} className="border border-[#888] font-bold w-[90px] h-[40px] text-[#888] text-[14px]">
              <span>Trở Về</span>
            </Button>,
            <Button type="" loading={loading} onClick={handleOk} className="bg-[#EC7905] text-white hover:border-[#EC7905] font-bold w-[130px] h-[40px] text-[14px]">
              <span>Áp Dụng</span>
            </Button>
          ]}>
          <div className="mt-5 flex gap-5 items-center justify-between">
                            <div>
                                <span className="font-bold text-[14px]">Thành Phố</span><br/>
                                <select className="border-[#888] text-[13px] w-[200px] border rounded-lg h-[45px] text-center outline-none font-bold">
                                    <option className="border rounded-lg text-center w-[200px] h-[45px]" value="">--Chọn Thành Phố--</option>
                                    <option className="border rounded-lg text-center w-[200px] h-[45px]" value="">Hà Nội</option>
                                </select>
                            </div>
                            <div>
                                <span className="font-bold">Quận/Huyện</span><br/>
                                <select className="border-[#888] text-[13px] w-[250px] border rounded-lg   h-[45px] text-center outline-none font-bold">
                                    <option className="border rounded-lg p-2" value="">--Chọn Quận/Huyện--</option>
                                    <option className="border rounded-lg p-2" value="">Quận Ba Đình</option>
                                    <option className="border rounded-lg p-2" value="">Quận Bắc Từ Liêm</option>
                                    <option className="border rounded-lg p-2" value="">Quận Cầu Giấy</option>
                                    <option className="border rounded-lg p-2" value="">Quận Đống Đa</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hà Đông</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hai Bà Trưng</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hoàn Kiếm</option>
                                    <option className="border rounded-lg p-2" value="">Quận Hoàng Mai</option>
                                    <option className="border rounded-lg p-2" value="">Quận Long Biên</option>
                                    <option className="border rounded-lg p-2" value="">Quận Nam Từ Liêm</option>
                                    <option className="border rounded-lg p-2" value="">Quận Tây Hồ</option>
                                    <option className="border rounded-lg p-2" value="">Quận Thanh Xuân</option>
                                    <option className="border rounded-lg p-2" value="">Thị xã Sơn Tây</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Ba Vì</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Chương Mỹ</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Đan Phượng</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Đông Anh</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Gia Lâm</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Hoài Đức</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Mê Linh</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Mỹ Đức</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Phú Xuyên</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Phúc Thọ</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Quốc Oai</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Sóc Sơn</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thạch Thất</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thanh Oai</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thanh Trì</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Thường Tín</option>
                                    <option className="border rounded-lg p-2" value="">Huyện Ứng Hòa</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-[13px] mt-5">
                            <span className="font-bold text-[14px]">Địa chỉ chi tiết</span><br/>
                            <input type="text" className="mt-1 mb-5 border font-[500] w-full h-[45px] rounded-lg px-3 text-[13px] outline-0 border-[#888]" placeholder="Địa chỉ chi tiết"/>
                        </div>
        </Modal>
      </div>
    );
};
export default ModalVoucher;