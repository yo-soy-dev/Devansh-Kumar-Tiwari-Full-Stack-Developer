
import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    console.log("ENV KEY:", import.meta.env.VITE_WEB3FORMS_KEY);
    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      e.target.reset();
    } else {
      setResult("❌ Error sending message. Please try again.");
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-[var(--card)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
          Get in Touch
        </h2>

        <p className="text-slate-400 mb-6 md:mb-10">
          Thinking of a project or collaboration? Let’s create something extraordinary together.
        </p>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            required
            className="
              py-3.5 px-3 md:p-3
              text-base md:text-sm
              min-h-[44px]
              rounded-xl
              bg-[var(--bg)]
              border border-slate-800
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[var(--primary)]
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
             aria-label="Your Email"
            required
            className="
              py-3.5 px-3 md:p-3
              text-base md:text-sm
              min-h-[44px]
              rounded-xl
              bg-[var(--bg)]
              border border-slate-800
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[var(--primary)]
            "
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            aria-label="Your Message"
            required
            className="
              py-3.5 px-3 md:p-3
              text-base md:text-sm
              min-h-[44px]
              rounded-xl
              bg-[var(--bg)]
              border border-slate-800
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[var(--primary)]
            "
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="mt-4 py-3 min-h-[44px] rounded-xl
              bg-[var(--primary)]
              font-medium text-black
              transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {result && (
          <p 
          className={`mt-4 text-center text-sm ${
              result.includes("success")
                ? "text-green-400"
                : result.includes("Sending")
                ? "text-slate-300"
                : "text-red-400"
            }`}
          >
            {result}
          </p>
        )}
      </motion.div>
    </SectionWrapper>
  );
}