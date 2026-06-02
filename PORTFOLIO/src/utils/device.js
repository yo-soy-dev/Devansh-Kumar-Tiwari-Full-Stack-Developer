
export const isTouchDevice =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none)").matches;

export function getMailHref() {
  if (typeof navigator === "undefined") return "mailto:devanshtiwari817@gmail.com";
  return /Android|iPhone/i.test(navigator.userAgent)
    ? "mailto:devanshtiwari817@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=devanshtiwari817@gmail.com";
}
