import { useState } from "react";
// import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => { // Removed TypeScript type annotation
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => { // Removed TypeScript type annotation
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message sent! 💜",
        description: "Thank you for reaching out, I'll reply soon.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 1300);
  };

  return (
    <section id="contact" className="w-full max-w-xl mx-auto animate-fade-in mt-12">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 flex items-center gap-2 justify-center">
        <Mail className="text-purple-500" /> Contact Me
      </h2>
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="rounded px-4 py-3 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          required
          onChange={handleChange}
          placeholder="Your Email"
          className="rounded px-4 py-3 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition"
        />
        <textarea
          name="message"
          value={form.message}
          required
          onChange={handleChange}
          rows={4}
          placeholder="Your Message"
          className="rounded px-4 py-3 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition"
        />
        <button
          type="submit"
          disabled={sending}
          className="mt-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-semibold shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}