import React from "react";

const ContactSection = () => (
  <section className="py-16 px-4 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-6 text-primary">Contact</h2>
    <form className="flex flex-col gap-4 bg-card rounded-lg shadow p-6 mb-6">
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        placeholder="Your Message"
        className="p-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
      />
      <button
        type="submit"
        className="bg-primary text-primary-foreground rounded py-2 font-semibold hover:bg-primary/80 transition-colors"
        disabled
      >
        Send (coming soon)
      </button>
    </form>
    <div className="flex gap-6 justify-center">
      <a
        href="https://www.linkedin.com/in/your-linkedin/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-primary"
      >
        <span role="img" aria-label="LinkedIn">
          🔗
        </span>{" "}
        LinkedIn
      </a>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-primary"
      >
        <span role="img" aria-label="GitHub">
          🐙
        </span>{" "}
        GitHub
      </a>
    </div>
  </section>
);

export default ContactSection;
