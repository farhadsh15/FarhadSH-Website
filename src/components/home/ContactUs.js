import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Function
import { validata } from '../../function/validata';
import { notify } from '../../function/toastify';

// Styles
import styles from "./ContactUs.module.css"

const ContactUs = () => {

    const [data, setData] = useState({
        name: "",
        tel: "",
        email: "",
        topic: "",
        text: "",
        isAccepted: false,
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validata(data, "signup"))
    }, [data, touched]);

    const focusHandeler = event => {
        setTouched({...touched, [event.target.name]: true})
    };

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    };

    const SubmitHandeler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("success", "پیام با موفقیت ارسال شد");
            console.log(data)
        } else {
            notify("error", "اطلاعات را به صورد صحیح وارد کنید");
            setTouched({
                name: true,
                tel: true,
                email: true,
                topic: true,
                text: true,
                isAccepted: true,
            })
        }
    };

    return (
        <div className={styles.container} id='ContactMe'>
            <form onSubmit={SubmitHandeler} className={styles.formContainer}>
                <h2 className={styles.header}>ارتباط با من</h2>
                <div className={styles.formField}>
                    <label>نام و نام خانوادگی :</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type=""
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandeler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.telEmail}>
                    {/* tel */}
                    <div className={styles.formField}> 
                        <label>تلفن :</label>
                        <input
                            className={(errors.tel && touched.tel) ? styles.uncompleted : styles.formInput}
                            type="tel"
                            name="tel"
                            value={data.tel}
                            onChange={changeHandler}
                            onFocus={focusHandeler}
                        />
                        {errors.tel && touched.tel && <span>{errors.tel}</span>}
                    </div>

                    {/* email */}
                    <div className={styles.formField}>
                        <label>ایمیل :</label>
                        <input
                            className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={changeHandler}
                            onFocus={focusHandeler} />
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                </div>
                <div className={styles.formField}>
                    <label>موضوع :</label>
                    <input
                        className={(errors.topic && touched.topic) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="topic"
                        value={data.topic}
                        onChange={changeHandler}
                        onFocus={focusHandeler} />
                    {errors.topic && touched.topic && <span>{errors.topic}</span>}
                </div>
                <div className={styles.formField}>
                    <label>متن پیام :</label>
                    <textarea
                        className={(errors.text && touched.text) ? styles.uncompleted : styles.formInput}
                        // className={styles.formInput}
                        type="text"
                        name="text"
                        value={data.text}
                        onChange={changeHandler}
                        // rows="25"
                        // cols="50"
                        onFocus={focusHandeler} />
                    {errors.text && touched.text && <span>{errors.text}</span>}
                </div>
                {/* <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label></label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandeler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div> */}
                <div className={styles.formButtons}>
                    <button type="submit">ارسال</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;