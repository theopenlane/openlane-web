import { actions } from "astro:actions";

declare const grecaptcha: {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

const siteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;

export function initFormHandler(fields: string[]) {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const button = document.getElementById(
    "submit-btn",
  ) as HTMLButtonElement | null;
  if (!button) return;

  const loadingText = button.querySelector(".loading-text");
  const defaultText = button.querySelector(".default-text");
  const toastContainer = document.getElementById("toast-container");
  const toastIcons = {
    success: document.getElementById("toast-icon-success")!.innerHTML,
    error: document.getElementById("toast-icon-error")!.innerHTML,
  };

  function showToast(message: string, type: "success" | "error" = "success") {
    const toast = document.createElement("div");

    toast.className = `
      flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg w-full max-w-sm
      ${
        type === "success"
          ? "bg-card border-brand-400 text-color-primary"
          : "bg-[var(--destructive-background)] border-destructive !text-destructive-foreground"
      }
      animate-slide-in
    `;

    toast.innerHTML = `
      <div class="icon w-5 h-5 shrink-0">${toastIcons[type]}</div>
      <span class="flex-1 text-sm font-medium">${message}</span>
    `;

    toastContainer?.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toast.remove(), 300);
    }, 5000);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let valid = true;

    fields.forEach((fieldName) => {
      const input = form.querySelector(`[name="${fieldName}"]`);
      const error = form.querySelector(`[data-error-for="${fieldName}"]`);
      if (
        !input ||
        !(
          input instanceof HTMLInputElement ||
          input instanceof HTMLSelectElement ||
          input instanceof HTMLTextAreaElement
        )
      )
        return;
      if (!input.value.trim()) {
        error?.classList.remove("hidden");
        valid = false;
      } else {
        error?.classList.add("hidden");
      }
    });

    if (!valid) return;

    button.disabled = true;
    defaultText?.classList.add("!hidden");
    loadingText?.classList.remove("hidden");

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        grecaptcha.ready(async () => {
          try {
            const token = await grecaptcha.execute(siteKey, {
              action: "submit",
            });
            resolve(token);
          } catch (err) {
            reject(new Error("recaptcha-generate-failed"));
          }
        });
      });

      const formData = new FormData(form as HTMLFormElement);
      formData.append("recaptchaToken", recaptchaToken);
      const { data, error } = await actions.send(formData);

      if (error?.message === "recaptcha-failed") {
        showToast(
          "We couldn't verify your request. Please try again.",
          "error",
        );
        return;
      }

      if (!data) throw new Error("request-failed");

      showToast("Message sent! We'll be in touch.", "success");
      (form as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      if (err instanceof Error && err.message === "recaptcha-generate-failed") {
        showToast(
          "We couldn't verify you're human. Please refresh and try again.",
          "error",
        );
      } else {
        showToast("Something went wrong. Please try again.", "error");
      }
    } finally {
      button.disabled = false;
      defaultText?.classList.remove("!hidden");
      loadingText?.classList.add("hidden");
    }
  });
}
