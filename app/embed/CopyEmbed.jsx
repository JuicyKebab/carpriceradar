"use client";

import { useState } from "react";

export default function CopyEmbed({ code }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Fallback for browsers that block the clipboard API.
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <span className="faint" style={{ fontWeight: 650 }}>Embed code</span>
        <button type="button" className="btn ghost" style={{ padding: "7px 14px", fontSize: ".85rem" }} onClick={copy}>
          {copied ? "Copied ✓" : "Copy code"}
        </button>
      </div>
      <textarea
        readOnly
        value={code}
        onClick={(e) => e.target.select()}
        rows={5}
        style={{
          width: "100%",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12,
          lineHeight: 1.5,
          color: "var(--ink-soft)",
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          padding: "12px 14px",
          resize: "vertical",
        }}
      />
    </div>
  );
}
