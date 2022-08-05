import { Link } from "react-router-dom";

export default function SubscriptionPage() {
  return (
    <section className="subscription--page">
      <div className="subscription-container">
        <div className="subscription">
          <h2>Thank you for subscribing</h2>
          <p>
            One more thing: Please, check your mailbox. We've sent you a mail.
            <br></br> We need to be sure that you dropped the correct email
          </p>
          <p>
            Click <Link to="/">here</Link> to go back to the homepage
          </p>
        </div>

        <Link to="/">Home</Link>
      </div>
    </section>
  );
}
