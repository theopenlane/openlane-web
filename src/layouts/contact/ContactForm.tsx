import React from "react";
import { ChevronRight } from "lucide-react";

const ContactForm = () => {
  return (
    <div>
      <form className="space-y-4">
        <div>
          <label className="block text-color text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-card border border-input text-color rounded-md focus:outline-none focus:border-input focus:border-input"
          />
        </div>
        <div>
          <label className="block text-color text-sm mb-1">Company</label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-card border border-input text-color rounded-md focus:outline-none focus:border-input focus:border-input"
          />
        </div>
        <div>
          <label className="block text-color text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 bg-card border border-input text-color rounded-md focus:outline-none focus:border-input focus:border-input"
          />
        </div>
        <div>
          <label className="block text-color text-sm mb-1">Message</label>
          <textarea
            rows="5"
            className="w-full px-3 py-2 bg-card border border-input text-color rounded-md resize-none focus:outline-none focus:border-input focus:border-input"
          ></textarea>
        </div>

        <button className="text-sm font-semibold px-4 py-2 rounded-full bg-primary text-invert-primary inline-flex items-center gap-2 whitespace-nowrap cursor-pointer">
          Send <ChevronRight size={18} class="hidden lg:flex" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
