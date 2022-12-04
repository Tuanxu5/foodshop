import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Modal, Button, Input ,Space,Form} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { FaStarOfLife } from "react-icons/fa";


const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
function ModalAddProduct() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    
  ]);

  const handleCancel1 = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );



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
  
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };


  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
    return (
      <div>
        <button  onClick={() => setOpen(true)} className="bg-[#008060] text-white rounded-md h-[35px] w-[135px]">
            Thêm Sản Phẩm
        </button>
        <Modal  width={635} open={open} title="Thêm Sản Phẩm" onOk={handleOk} onCancel={handleCancel}
          footer={[
            <Button  onClick={handleCancel} className="border border-[#BABFC3] font-bold w-[90px] h-[35px] text-[#999] text-[13px] ">
              <span>Quay Lại</span>
            </Button>,
            <Button  loading={loading} onClick={handleOk} className="bg-[#EC7905] text-white hover:border-[#EC7905] font-bold w-[140px] h-[35px] text-[13px]">
              <span>Thêm Sản Phẩm</span>
            </Button>
          ]}>
            <div className="mt-5 ">
                <div className="flex items-center gap-5">
                    <div className="text-black font-bold text-[13px] flex">Hình Ảnh Minh Họa
                <span className="text-[#aa0c0c] text-[6px] ml-[2px] mt-1"><FaStarOfLife></FaStarOfLife></span>
              </div>
                    <div>
                        <Upload
                              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={handlePreview}
                              onChange={handleChange}
                            >
                              {fileList.length > 3 ? null : uploadButton}
                            </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel1}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
                    </div>

                    </div>
                    <div className="my-4 relative">
                      <div className="text-black font-bold text-[13px] flex">Tên Sản Phấm
                        <span className="text-[#aa0c0c] text-[6px] ml-[2px] mt-1"><FaStarOfLife></FaStarOfLife></span>
                      </div>
              <input type="text" className="text-[13px] font-bold px-3 border w-full outline-0 h-[40px] mt-1 rounded-lg relative" placeholder="Nhập Tên Sản Phẩm" />
                    </div>
                    <div className="my-4 relative">
                    <div className="text-black font-bold text-[13px] flex">Danh Mục
                <span className="text-[#aa0c0c] text-[6px] ml-[2px] mt-1"><FaStarOfLife></FaStarOfLife></span>
              </div>
                    <select name="" id="" className="h-[40px] text-center border rounded-md w-full border-[#BABFC3] text-[#999] outline-none shadow-sm mt-1">
                        <option value="">-- Danh Mục Sản Phẩm --</option>
                        <option value="">Hoạt Động</option>
                        <option value="">Tạm Ẩn</option>
                    </select>
                    </div>
                    <div className="my-4 relative">
                      <div className="text-black font-bold text-[13px] flex">Giá Sản Phẩm
                        <span className="text-[#aa0c0c] text-[6px] ml-[2px] mt-1"><FaStarOfLife></FaStarOfLife></span>
                      </div>
              <input type="text" className="text-[13px] font-bold px-3 border border-[#BABFC3] text-[#999] shadow-sm w-full outline-0 h-[40px] mt-1 rounded-lg relative" placeholder="Nhập Giá Sản Phẩm" />
                    </div>
                    <div className="my-4 relative">
                    <div className="text-black font-bold text-[13px] flex">Trạng Thái Sản Phẩm
                <span className="text-[#aa0c0c] text-[6px] ml-[2px] mt-1"><FaStarOfLife></FaStarOfLife></span>
              </div>
                    <select name="" id="" className="h-[40px] text-center border rounded-md w-full border-[#BABFC3] text-[#999] outline-none shadow-sm mt-1">
                        <option value="">-- Trạng Thái Sản Phẩm --</option>
                        <option value="">Hoạt Động</option>
                        <option value="">Tạm Ẩn</option>
                    </select>
            </div>
            <div className="my-4 relative">
                    <div className="text-black font-bold text-[13px] flex">Mô Tả Sản Phẩm
              </div>
                    <textarea name="" id="" className="h-[100px] text-center border rounded-md w-full border-[#BABFC3] text-[#999] outline-none shadow-sm mt-1">
                    </textarea>
                    </div>
                    <div className="flex items-center">
                    <Form form={form} name="dynamic_form_complex" onFinish={onFinish} autoComplete="off">
                        <Form.List name="sights">
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map((field) => (
                                <Space key={field.key} align="baseline">
                                    <Form.Item
                                    noStyle
                                    shouldUpdate={(prevValues, curValues) =>
                                        prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                    }
                                    >
                                    {() => (
                                        <Form.Item
                                        {...field}
                                        label="Sight"
                                        name={[field.name, 'sight']}
                                        rules={[
                                            {
                                            required: true,
                                            message: 'Không được bỏ trống',
                                            },
                                        ]}
                                        >
                                        <input type="text" placeholder="hihi" name="" value=""/>
                                        </Form.Item>
                                    )}
                                    </Form.Item>
                                    <Form.Item
                                    {...field}
                                    label="Price"
                                    name={[field.name, 'price']}
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Missing price',
                                        },
                                    ]}
                                    >
                                    <Input />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                                </Space>
                                ))}

                                <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Phân Loại Size (Nếu có)
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>
                    </Form>
                </div>
            </div>
        </Modal>
      </div>
    );
};
export default ModalAddProduct;