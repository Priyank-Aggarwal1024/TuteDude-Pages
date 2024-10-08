import '../styles/Contact.css'
function Contact() {
    return (
        <>
            <div className="tut-contact">
                <div className="tut-contact-inner">
                    <div className="tut-con-left">
                        <form action="#" className="tut-con-left-form">
                            <div className="tut-con-left-form-main">
                                <input type="text" name="name" id='name' placeholder='Name' className='tut-con-inp' />
                                <input type="text" name="email" id='email' placeholder='Email' className='tut-con-inp' />
                                <textarea className="tut-con-inp" placeholder='Message' name='message' id='message' rows={4} />
                            </div>
                            <div className="tut-con-button">Enroll Now</div>
                        </form>
                    </div>
                    <div className="tut-con-right">
                        <div className="tut-conr-top">Contact Us</div>
                        <div className="tut-conr-bottom">Want to know more about us? Feel free to contact us. Suncity Success tower, sector 65, Gurugram, Haryana</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;