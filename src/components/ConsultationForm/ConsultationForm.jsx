import { useState } from "react";
import "./ConsultationForm.css"; // Import CSS file

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    issue: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/send-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Form submitted successfully! We'll be in touch soon.");
        setFormData({
          fullName: "",
          gender: "",
          dob: "",
          phone: "",
          email: "",
          issue: "",
        });
      } else {
        setMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
            <div className="form-fields">
              <label>Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>

          {/* Gender */}
            <div className="form-fields">
                <label>Gender</label>
                <div className="gender-options d-flex justify-content-between">
                    <label><input type="radio" name="gender" value="Female" className="radio-button" onChange={handleChange} required /> Female</label>
                    <label><input type="radio" name="gender" value="Male" className="radio-button" onChange={handleChange} required /> Male</label>
                    <label><input type="radio" name="gender" value="Other" className="radio-button" onChange={handleChange} required /> Others</label>
                </div>
            </div>

          {/* Date of Birth */}
            <div className="form-fields">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                {/* <DatePicker
                    selected={formData.dob}
                    onChange={handleChange}
                    dateFormat="yyyy/MM/dd"
                    className="date-picker w-100"
                    required
                /> */}
            </div>

          {/* Phone & Email */}
            <div className="form-fields">
                <div className="input-row">
                    <div>
                    <label>Phone Number</label>
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
            </div>

          {/* Issue */}
            <div className="form-fields">
                <label>Issue</label>
                <textarea name="issue" value={formData.issue} onChange={handleChange} rows="4" required></textarea>
            </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="book-button" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {message && <p style={{ textAlign: "center", marginTop: "1rem", color: message.includes("Error") ? "red" : "green" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
