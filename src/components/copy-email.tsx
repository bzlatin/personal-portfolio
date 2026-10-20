"use client";
import { useState } from "react";
export function CopyEmail() {
  const [status, setStatus] = useState("Copy email");
  async function copy() {
    try {
      await navigator.clipboard.writeText("btzlatin@gmail.com");
      setStatus("Email copied");
    } catch {
      setStatus("Select the email to copy");
    }
  }
  return (
    <button className="copy-email" type="button" onClick={copy}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M15 8V4H4v11h4" />
      </svg>
      <span aria-live="polite">{status}</span>
    </button>
  );
}
