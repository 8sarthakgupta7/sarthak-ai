import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-16 px-4 text-center">
        <div className="text-5xl mb-4">📬</div>
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          Have a question, want to partner with us, or need support? We'd love
          to hear from you.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Contact Information
              </h2>
            </div>

            {[
              {
                emoji: "📧",
                title: "Email Us",
                detail: "support@sarthakai.in",
                sub: "We reply within 24 hours",
              },
              {
                emoji: "📞",
                title: "Call Us",
                detail: "+91 86269 83244",
                sub: "Mon–Sat, 9AM to 6PM IST",
              },
              {
                emoji: "📍",
                title: "Location",
                detail: "Solan, Himachal Pradesh, India",
                sub: "Serving across India",
              },
              {
                emoji: "🤝",
                title: "Partnerships",
                detail: "partner@sarthakai.in",
                sub: "NGOs, companies & institutions",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <h3 className="font-semibold text-blue-900">{item.title}</h3>
                  <p className="text-gray-800 text-sm font-medium">
                    {item.detail}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* SDG Badge */}
            <div className="bg-gradient-to-br from-blue-900 to-green-700 text-white p-5 rounded-2xl">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-bold mb-1">Building for SDGs</h3>
              <p className="text-blue-100 text-sm">
                SarthakAI is committed to all 17 UN Sustainable Development
                Goals — starting with 7 core goals for India.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-blue-900 mb-3">
                  Message Sent!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm text-gray-700"
                    >
                      <option value="">Select a subject</option>
                      <option>General Inquiry</option>
                      <option>NGO Partnership</option>
                      <option>Technical Support</option>
                      <option>Volunteer with Us</option>
                      <option>Report an Issue</option>
                      <option>Media & Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-900 to-green-700 text-white py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-all shadow-md hover:shadow-lg"
                  >
                    Send Message 🚀
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
