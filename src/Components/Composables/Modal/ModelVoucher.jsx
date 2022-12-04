import React, { useState } from 'react';
import { CgCreditCard } from "react-icons/cg";
import { HiChevronRight } from "react-icons/hi2";
import { Modal, Button, Input } from 'antd';
import FreeShippingCheckout from "../VoucherItem/FreeShippingCheckout";
import VoucherItemSaleCheckout from "../VoucherItem/VoucherItemSaleCheckout";
import VoucherRefundCheckout from "../VoucherItem/VoucherRefundCheckout";

function ModalVoucher() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

//handle click OK in model
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
}, 1000);
  };
//handle click Cancel in model
  const handleCancel = () => {
    setOpen(false);
  };
    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-between p-3 rounded-md border w-full border-[#333] font-bold] hover:text-[#EC7905] hover:border-[#EC7905]" >
          <div className="flex items-center gap-[5px] text-[14px]">
            <span><CgCreditCard/></span>
            <span>Shop Voucher</span>
          </div>
          <span><HiChevronRight/></span>
        </button>
        <Modal open={open} title="FoodShop Voucher" onOk={handleOk} onCancel={handleCancel}
          footer={[
            <Button type="" onClick={handleCancel} className="border border-[#888] font-bold w-[90px] h-[40px] text-[#888] text-[14px]">
              <span>Trở Về</span>
            </Button>,
            <Button type="" loading={loading} onClick={handleOk} className="bg-[#EC7905] text-white hover:border-[#EC7905] font-bold w-[130px] h-[40px] text-[14px]">
              <span>Áp Dụng</span>
            </Button>
          ]}>
          <div className="flex bg-[#f8f8f8] rounded-md p-2 justify-between">
            <Input placeholder="Nhập Voucher" className="focus:outline-none w-[345px] h-[45px]"/>
            <Button type="" className="btn-primary px-4 rounded-lg w-[100px] h-[45px]">Áp Dụng</Button>
          </div>
          <div className="border-b border-[#dadada] py-5">
            <span className="text-[16px] font-bold">Mã miễn phí vận chuyển</span>
            <FreeShippingCheckout id="1" name="Áp Dụng Cho Toàn Sản Phẩm" limit="Đơn Hàng Từ 0k"/>
            <FreeShippingCheckout id="2" name="Áp Dụng Cho Một Số Cửa Hàng Nhất Định" limit="Tối Đa 16k&26k"/>
            <FreeShippingCheckout id="3" name="Thanh toán qua ví ShopeePay" limit="Đơn Hàng Từ 0k"/>
          </div>
          <div className="py-4">
            <span className="text-[16px] font-bold">Mã giảm giá - hoàn xu</span>
            <VoucherItemSaleCheckout id="1" name="Áp Dụng Cho Toàn Sản Phẩm" limit="Đơn Hàng Từ 0k"/>
            <VoucherRefundCheckout id="2" name="Áp Dụng Cho Toàn Sản Phẩm" limit="Đơn Hàng Từ 0k"/>
            <VoucherItemSaleCheckout id="3" name="Áp Dụng Cho Toàn Sản Phẩm" limit="Đơn Hàng Từ 0k"/>
            <VoucherRefundCheckout id="4" name="Áp Dụng Cho Toàn Sản Phẩm"limit="Đơn Hàng Từ 0k"
            />
          </div>
        </Modal>
      </div>
    );
};
export default ModalVoucher;