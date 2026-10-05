"use client";

import { useState } from "react";

// Price-drop capture. Posts to /api/alert, which stores the request in Supabase.
// A daily job (not built yet) will diff scraped rates and email matches.
export default function PriceAlertForm({ iata, city, slug }) {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    try {
      const res = await fetch("/api/alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, email, pickup_date: date || null }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div className="card">
      {state === "done" ? (
        <>
          <div className="big" style={{ fontSize: "1.3rem" }}>You&apos;re set.</div>
          <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
            We&apos;ll email {email} if {iata} rental prices drop
            {date ? ` before ${date}` : ""}. One email, no spam.
          </p>
        </>
      ) : (
        <>
          <div className="faint">Not booking yet?</div>
          <div className="big" style={{ fontSize: "1.3rem", marginTop: 4 }}>
            Get an email when {city} ({iata}) rental prices drop
          </div>
          <p className="muted" style={{ marginTop: 8, maxWidth: 560 }}>
            Tell us your pickup date and we&apos;ll let you know if the price falls
            before you travel.
          </p>
          <form onSubmit={onSubmit} style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              style={{ flex: "1 1 220px", padding: "10px 12px", fontSize: 16, borderRadius: 8, border: "1px solid var(--border, #ccc)" }}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              aria-label="Pickup date (optional)"
              style={{ flex: "0 1 170px", padding: "10px 12px", fontSize: 16, borderRadius: 8, border: "1px solid var(--border, #ccc)" }}
            />
            <button type="submit" className="btn accent" disabled={state === "sending"}>
              {state === "sending" ? "Setting up..." : "Alert me"}
            </button>
          </form>
          <p className="faint" style={{ marginTop: 8 }}>
            One email, no spam. Unsubscribe anytime.
            {state === "error" ? " Something went wrong, please try again." : ""}
          </p>
        </>
      )}
    </div>
  );
}
