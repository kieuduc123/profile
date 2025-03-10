import { useState, useEffect, useRef } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './contact.scss';

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { init, sendForm } from 'emailjs-com';
import * as yup from "yup";
import Button from '../../components/Button/Button';
import Modal, { ModalContent } from '../../components/Modal/Modal';

init("dBaEcWnAM2EZ4lquH");

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required"),
  email: yup
    .string()
    .email('Must be a valid email')
    .required("Email is required")
    .max(50),
  subject: yup
    .string()
    .required("Subject is required")
    .max(50),
  message: yup
    .string()
    .required("Message is required")
    .max(255)
});

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const [_contactNumber, setContactNumber] = useState<any>("000000");
  const formRef = useRef<HTMLFormElement | null>(null);

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const handleClose1 = () => {
    const modal1 = document.querySelector('#modal-1') as HTMLElement;
    modal1.className = "modal";
  };

  const handleClose2 = () => {
    const modal2 = document.querySelector('#modal-2') as HTMLElement;
    modal2.className = "modal";
  };

  const onMessageSubmit: SubmitHandler<IFormInput> = (_data) => {
    generateContactNumber();
    sendForm('service_qv8fv0a', 'template_yakqoqa', '#contact-form')
      .then(function (_response) {
        const modal1 = document.querySelector('#modal-1') as HTMLElement;
        modal1.className = "modal active";

        formRef.current?.reset();
      }, function (_error) {
        const modal2 = document.querySelector('#modal-2') as HTMLElement;
        modal2.className = "modal active";
      });
  };

  return (
    <>
      <div className="slide"></div>
      <div className="section contact" data-aos="fade-up">
        <PageHeader white='get in' yellow='touch' titleBg='contact' />
        <div className="container">
          <div className="row">
            <div className="col col-4">
              <div className="contact-info mb-3">
                <h3>Liên hệ</h3>
                <p>Cảm ơn bạn đã xem đến cuối. Tôi rất vui nếu bạn có thể biết thêm về tôi thông qua trang web này.
                  Nếu bạn có bất kỳ nhận xét nào về trang web này hoặc về tôi, vui lòng sử dụng biểu mẫu liên hệ.</p>
                <ul className="contact-info__list">
                  <li>
                    <div className="icon"><i className='bx bxs-map'></i></div>
                    <span>Địa chỉ hiện tại</span>
                    Số 49 ngõ 99 cầu diễn
                  </li>
                  <li>
                    <div className="icon"><i className='bx bxs-envelope-open'></i></div>
                    <span>Địa chỉ email</span>
                    kieutrungduc.info@gmail.com
                  </li>
                  <li>
                    <div className="icon"><i className='bx bxs-phone-call'></i></div>
                    <span>Số điện thoại</span>
                    <a href="tel:07089592557">0394953305</a>
                  </li>
                </ul>
                <ul className="social-list">
                  <li><a href="bit.ly/kieuduc"><i className='bx bxl-facebook'></i></a></li>
                  <li><a href="https://github.com/kieuduc123"><i className='bx bxl-github'></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col col-8">
              <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onMessageSubmit)} ref={formRef}>
                <div className="field contact-form__info">
                  <div className="contact-form__info-name">
                    <input {...register("name")} placeholder="your name" />
                    {errors.name && <span className="error">{errors.name?.message}</span>}
                  </div>
                  <div className="contact-form__info-email">
                    <input {...register("email")} placeholder="your email" />
                    {errors.email && <span className="error">{errors.email?.message}</span>}
                  </div>
                </div>
                <div className="field contact-form__subject">
                  <input {...register("subject")} placeholder="your subject" />
                  {errors.subject && <span className="error">{errors.subject?.message}</span>}
                </div>
                <div className="field contact-form__message">
                  <textarea {...register("message")} placeholder="your message" />
                  {errors.message && <span className="error">{errors.message?.message}</span>}
                </div>
                <div className="field">
                  <Button type="submit">
                    <span className="btn-text">send message</span>
                    <span className="btn-icon">
                      <i className='bx bx-mail-send bx-tada'></i>
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal id="modal-1" active={false}>
        <ModalContent className="success">
          <div className="icon">
            <i className='bx bx-check'></i>
          </div>
          <h3>Success!</h3>
          <p>We've sent a confirmation to your e-mail for verification.</p>
          <button type="button" className="redo-btn" onClick={handleClose1}>Ok</button>
          <span className="change">-- Click to close the modal --</span>
        </ModalContent>
      </Modal>
      <Modal id="modal-2" active={false}>
        <ModalContent className="error">
          <div className="icon">
            <i className='bx bxs-dislike'></i>
          </div>
          <h3>Oh no!</h3>
          <p>Oops! Something went wrong, you should try again.</p>
          <button type="button" className="redo-btn" onClick={handleClose2}>Ok</button>
          <span className="change">-- Click to close the modal --</span>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Contact;
