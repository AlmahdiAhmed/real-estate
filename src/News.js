import { useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
const News = () => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const display = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  return (
    <div className="section news">
      <h1>Join our newsletter</h1>
      <div className="news-container">
        <div className="icon">
          <BiMessageAltDetail className="icon-item" />
        </div>
        <div className="input">
          <input
            value={email}
            onChange={(e) => setEmail(e.value)}
            type="email"
            placeholder="Enter you e-mail"
          />
          <button
            onClick={() => {
              setEmail("");
              display();
            }}
          >
            Send
          </button>
        </div>
        {showMessage && (
          <div className="message">
            <p>Thank you for joining</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default News;
