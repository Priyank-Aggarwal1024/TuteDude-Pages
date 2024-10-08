import Navbar from '../components/Navbar';
import '../styles/RefundPolicy.css'
function RefundPolicy() {
    return (
        <>
            <Navbar />
            <div className="tut-refundpolicy">
                <div className="tut-refundpolicy-heading">
                    REFUND AND CANCELLATION POLICY
                </div>
                <div className="tut-refundpolicy-main">
                    <div className="">
                        <p className="tut-refuncpolicy-section">• RETURN: </p>
                        <p className="tut-refundpolicy-text">The Company will issue refunds to students who enrolled the course under &quot;100% Feesback offer&quot;(valid from 14th December 2022) where after completing the course they can apply for a refund, other than that company is not liable for a refund under any circumstances.</p>
                    </div>
                    <div className="">
                        <p className="tut-refundpolicy-text"><b>Note:</b> In case the admins feel the reason for refund is genuine and student can't proceed ahead with the course, we have an option to refund 60% of enrollment fee to the student(The 40% deduction is for the taxes, operational and payment gateway fees.)</p>
                    </div>
                    <div className="">
                        <p className="tut-refuncpolicy-section">• EXCHANGE: </p>
                        <p className="tut-refundpolicy-text">'Exchange' is the action or process of Exchanging of the services provided by the Companyfor any such other services provided by the Company. User can request for an Exchange of Course availed by the User on the platform with another course available on the platform after placing a request for the Course but before accessing and availing the course. An intimation shall be provided by the Company to the User seeking either "Exchange” and the User shall receive a confirmation regarding the replacement. POINTS TO BE</p>
                    </div>
                    <div className="">
                        <p className="tut-refuncpolicy-section">NOTED: • </p>
                        <p className="tut-refundpolicy-text">The user can request for an exchange before accessing the course online on the platform of the User. • If the Company disagrees an exchange request due to non-technical issue, User can file a dispute. • We encourage the User to review the course and its subjective nature before making the request to avail such services. • User needs to raise the exchange request within 7 days from availing the course online.</p>

                    </div>
                    <div className="">
                        <p className="tut-refundpolicy-text"><b>REFUND PROCESS</b>(Only enrolled under limited time Feesback Offer)</p>
                        <ol className="tut-refundpolicy-ol">
                            <li className="tut-refundpolicy-text">For Refund Request the user may place a request for the same on the chat box of lecture page, the Representative of the Company shall reach out to the User on the Registered number provided by the User on the Platform.</li>
                            <li className="tut-refundpolicy-text">The Refund will be processed if the user has completed the course genuinely and submittedall the assignments and projects covered during the course.</li>
                            <li className="tut-refundpolicy-text"> If it is found that the student is faking the course completion, we have the right to ban the student's account.</li>
                            <li className="tut-refundpolicy-text">The Company be at the sole discretion to refund to the User and all refunds shall be processed after such statutory deductions.</li>
                            <li className="tut-refundpolicy-text">All refunds shall be credited to the source of the payment received by the Company from the User.</li>
                        </ol>

                    </div>
                </div>
                <div className=""></div>
            </div>
        </>
    );
}

export default RefundPolicy;