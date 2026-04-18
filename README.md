# Crypto Price Alert System

> Set it up once — your phone tells you when Bitcoin actually moves.

[![Live Dashboard](https://img.shields.io/badge/Dashboard-Live-brightgreen)](https://cryptopulseautomation.netlify.app)
[![Built with Make.com](https://img.shields.io/badge/Built%20with-Make.com-blueviolet)](https://make.com)
[![Alerts via Telegram](https://img.shields.io/badge/Alerts-Telegram-2CA5E0)](https://telegram.org)

---

## The Problem

My client was checking crypto prices by hand.

Multiple times a day. Every day. Refreshing tabs, scanning numbers, trying to catch the moment something actually moved. It's exhausting — and you still miss things.

---

## What I Built

A system that watches Bitcoin, Ethereum, and Solana around the clock. The moment any of them moves more than 5% in a day, your phone gets a Telegram message — not a notification you have to go hunting for, a direct message, while it's still happening.

Every alert gets saved automatically. That creates a log you can look back on at the end of the week: what moved, when, and by how much.

I took that log and turned it into a live dashboard. It updates on its own. No logins, no spreadsheets to open, no refreshing. Just a clean view of what's been happening.

### Delivered

| # | What | How |
|---|------|-----|
| 1 | Alerts when prices actually move | Telegram message, straight to your phone |
| 2 | Automatic history of every alert | Logged to Google Sheets in real time |
| 3 | Live dashboard to see it all | Auto-refreshing, hosted on Netlify |

**[→ See the live dashboard](https://cryptopulseautomation.netlify.app)**

---

## Why It Works

Most price tracking tools send too many notifications. Every tiny dip, every small spike — your phone buzzes constantly until you start ignoring it.

This one only fires when something is worth your attention.

```
Under 5% movement  →  Silent
Over 5% movement   →  Your phone lights up
```

That's the whole design: **less noise, more signal.**

---

## Stack

| Tool | Role |
|------|------|
| Make.com | Automation engine |
| CoinGecko API | Live price data |
| Telegram Bot API | Instant alerts |
| Google Sheets | Alert history & storage |
| Netlify | Dashboard hosting |

---

<details>
<summary>Original brief (before simplification)</summary>

*A price monitoring pipeline that sends Telegram alerts when Bitcoin, Ethereum, or Solana moves more than 5% in 24 hours. Logs everything to Google Sheets, which I turned into a REST API to power a live dashboard. Built with Make.com, CoinGecko API, Telegram Bot API, Google Sheets, SheetDB. The workflow follows an Extract-Transform-Filter-Load pattern. An Iterator module breaks the JSON array into individual items...*

</details>
