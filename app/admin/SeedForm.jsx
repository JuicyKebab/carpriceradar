"use client";

import { useState } from "react";
import { READY_AIRPORTS, currencySymbol } from "@/lib/airports";

const CATEGORIES = ["economy", "compact", "suv", "premium"];

export default function SeedForm() {
  const [secret, setSecret] = useState("");
  const [prices, setPrices] = useState({}); // `${slug}|${cat}` -> string
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  const set = (slug, cat, v) =>
    setPrices((p) => ({ ...p, [`${slug}|${cat}`]: v }));

  async function submit() {
    const entries = [];
    for (const a of READY_AIRPORTS) {
      for (const cat of CATEGORIES) {
        const v = prices[`${a.slug}|${cat}`];
        if (v != null && String(v).trim() !== "") {
          entries.push({ airport_slug: a.slug, category: cat, price: Number(v) });
        }
      }
    }
    if (!entries.length) {
      setStatus("Nothing to save — fill at least one price.");
      return;
    }
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch("/api/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${secret}` },
        body: JSON.stringify({ entries }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(`Error ${res.status}: ${data.error || "failed"}`);
      } else {
        setStatus(`Saved ${data.written} price point(s). Reload a page to see the trend after 2+ captures.`);
        setPrices({});
      }
    } catch (e) {
      setStatus(`Network error: ${e.message}`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <label style={{ display: "block", fontWeight: 700, marginBottom: 6 }}>
        Secret (CRON_SECRET)
      </label>
      <input
        type="password"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        placeholder="paste CRON_SECRET"
        style={{ width: "100%", maxWidth: 420, padding: "10px 12px", fontSize: 16, marginBottom: 20 }}
      />

      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 8px" }}>Airport</th>
              {CATEGORIES.map((c) => (
                <th key={c} style={{ textAlign: "left", padding: "6px 8px", textTransform: "capitalize" }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {READY_AIRPORTS.map((a) => (
              <tr key={a.slug} style={{ borderTop: "1px solid #e3e7ee" }}>
                <td style={{ padding: "6px 8px", whiteSpace: "nowrap" }}>
                  <strong>{a.iata}</strong> <span className="faint">{a.city}</span>
                </td>
                {CATEGORIES.map((c) => (
                  <td key={c} style={{ padding: "6px 8px" }}>
                    <span className="faint">{currencySymbol(a.currency)}</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="0.01"
                      value={prices[`${a.slug}|${c}`] || ""}
                      onChange={(e) => set(a.slug, c, e.target.value)}
                      style={{ width: 80, padding: "6px 8px", fontSize: 16, marginLeft: 4 }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button type="button" className="btn accent" onClick={submit} disabled={busy} style={{ marginTop: 20 }}>
        {busy ? "Saving..." : "Save today's prices"}
      </button>
      {status && <p className="muted" style={{ marginTop: 12 }}>{status}</p>}
    </div>
  );
}
