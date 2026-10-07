"use client";

import { useState } from "react";

export default function ContactButton({ contactUrl }) {
  const [pending, setPending] = useState(false);
  const allowedUrl = /^(https:\/\/|mailto:)/i.test(contactUrl) ? contactUrl : "";

  if (allowedUrl) {
    return (
      <a className="button" href={allowedUrl} aria-label="Entrar em contato com a Feitosatech">
        Fale com a Feitosatech <span className="arrow">↗</span>
      </a>
    );
  }

  return (
    <button className="button" type="button" onClick={() => setPending(true)} aria-live="polite">
      {pending ? "Canal de contato em breve" : <>Fale com a Feitosatech <span className="arrow">↗</span></>}
    </button>
  );
}
