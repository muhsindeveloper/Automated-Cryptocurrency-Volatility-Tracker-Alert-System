# Automated Crypto Volatility Tracker and Alert System

A price monitoring pipeline that sends Telegram alerts when Bitcoin, Ethereum, or Solana moves more than 1% in 24 hours. Logs everything to Google Sheets, which I turned into a REST API to power a live dashboard.

---

## Project at a glance

| | |
|---|---|
| Tools | Make.com, CoinGecko API, Telegram Bot API, Google Sheets, SheetDB |
| Dashboard | [cryptopulseautomation.netlify.app](https://cryptopulseautomation.netlify.app/) |
| Make scenario | [View the workflow](https://eu1.make.com/public/shared-scenario/r481oegHnGn/integration-http) |

---

## What I built

Crypto prices move fast. Checking them manually is tedious and you'll miss things.

I built an automated pipeline that:
- Polls CoinGecko every few minutes for BTC, ETH, and SOL prices
- Filters out minor fluctuations (less than 1% change)
- Sends a Telegram message when something actually moves
- Logs every alert to Google Sheets
- Exposes that data through a REST API so I could build a live dashboard on top of it

---

## The problem

A client needed to track Bitcoin, Ethereum, and Solana without staring at charts all day. They wanted:

1. Alerts when prices actually move (not every tiny fluctuation)
2. A log of past alerts for weekly review
3. Something visual to check current status at a glance

The third requirement is what led me to build the dashboard.

---

## How it works

The workflow follows an Extract-Transform-Filter-Load pattern:

| Step | What happens |
|:---|:---|
| Extract | Hit CoinGecko API for current prices |
| Transform | Split the response into individual coins |
| Filter | Drop anything that hasn't moved 1% or more |
| Load | Send Telegram alert + log to Google Sheets |

---

## The workflow, step by step

### 1. Fetch prices from CoinGecko

Simple GET request to pull current market data:

```
GET /api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana
```

The response comes back as a JSON array. Make.com parses it automatically.

---

### 2. Split into individual coins

CoinGecko returns all three coins in one response. I use an Iterator module to break that array into separate items so each coin gets processed on its own.

---

### 3. Filter out the noise

This is where most requests get dropped. The filter only lets through coins where:

```
price_change_percentage_24h >= 1  OR  price_change_percentage_24h <= -1
```

Anything less than 1% movement gets ignored. No alert fatigue.

---

### 4. Send Telegram alert

When a coin passes the filter, it fires off a message:

```
Crypto Alert!

Coin: Bitcoin
Price: $67,432.15
24h Change: +2.34%
Market Cap: $1.3T
Volume: $28.5B
Updated: 2024-03-15 14:32:00 UTC
```

---

### 5. Log to Google Sheets

Every alert gets logged with timestamp, coin ID, price, percent change, market cap, and volume. This creates a running history I can query later.

---

## The live dashboard

Logging to Google Sheets was useful, but the client wanted something more visual. So I took it a step further.

I used SheetDB to turn the Google Sheet into a REST API. SheetDB gives you endpoints that return your spreadsheet data as JSON. From there, I built a simple dashboard that:

- Fetches the logged data via the SheetDB API
- Displays recent alerts in a table
- Shows price trends over time
- Auto-refreshes so you don't have to hit reload

The whole thing is hosted on Netlify. Zero server costs, minimal maintenance. The Google Sheet acts as both the database and the source of truth.

This was honestly the fun part. Taking spreadsheet data and making it actually usable.

---

## What I learned

Working on this project forced me to get better at a few things:

**API handling** - Dealing with JSON responses, query parameters, error states. CoinGecko's free tier has rate limits, so I had to think about polling frequency.

**Data iteration** - The Iterator module in Make.com is powerful once you understand it. Breaking arrays into individual items is a pattern I use constantly now.

**Filtering logic** - Boolean conditions are simple, but getting the thresholds right took some testing. Started at 5%, moved to 1% based on feedback.

**Connecting services** - This project touches CoinGecko, Telegram, Google Sheets, SheetDB, and Netlify. Keeping data consistent across all of them was the real challenge.

---

## What I'd do next

If I had more time with this project:

- **Dynamic watchlists** - Let users add/remove coins without editing the workflow. Pull the list from a separate sheet.
- **TradingView webhooks** - Trigger alerts based on technical indicators (RSI, MACD) instead of just percent change.
- **News context** - When a big drop happens, pull recent headlines so the user knows *why* it might be moving.

---

*Built this as a side project to learn Make.com. Ended up being more useful than I expected.*

