declare const grecaptcha: {
  ready(callback: () => void): void;
  execute(siteKey: string, opts: { action: string }): Promise<string>;
};
