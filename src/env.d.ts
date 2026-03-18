/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly SECRET_RESEND_API_KEY: string;
  readonly RECAPTCHA_SECRET_KEY: string;
  readonly PIRSCH_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const grecaptcha: {
  ready(callback: () => void): void;
  execute(siteKey: string, opts: { action: string }): Promise<string>;
};
