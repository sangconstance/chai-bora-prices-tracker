# 🍃 ChaiBora – Tea Price Tracker for Kenyan Farmers

ChaiBora is a simple, powerful, and farmer-first web platform designed to help Kenyan smallholder tea farmers stay informed. It enables real-time price tracking, historical insights, and price alerts to empower better decision-making and boost incomes. Born in Kericho, built for the entire tea-growing community.

> *“When farmers thrive, communities prosper.”*

---

## 🌟 Features

* 📊 **Live Prices**: Instantly compare factory tea prices from KETEPA, Unilever, and more.
* 📈 **Historical Trends**: Interactive charts that reveal pricing patterns.
* 🔔 **Custom Alerts**: Get notified via SMS or app when your target price is hit.
* 🏆 **Best Daily Offers**: Auto-highlight the highest offer daily.
* 🧑‍💼 **Buyer Listings**: View and compare buyers' current offers.

---

## 🌍 Why It Matters

* **Problem**: Smallholder tea farmers often lack timely access to market prices and trends.
* **Solution**: Provide transparency and tools to make pricing decisions easier.
* **SDG Alignment**: ✅ SDG 1 (No Poverty), ✅ SDG 8 (Decent Work & Economic Growth), ✅ SDG 9 (Industry, Innovation, and Infrastructure)

---

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, Tailwind CSS, Vite
* **Data & Charts**: Recharts
* **Backend (Planned)**: Supabase (for Auth & Realtime DB)
* **State Management**: React Context + Hooks

---

## 📁 Folder Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/         # UI components
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External API logic (Supabase, etc.)
│   ├── lib/                # Utility functions and services
│   ├── pages/              # Application views
│   ├── App.tsx             # Route wrapper
│   └── main.tsx            # React root
├── supabase/               # Supabase configuration
├── .env                    # Environment variables
├── tailwind.config.ts      # Styling config
├── vite.config.ts          # Vite config
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+)
* Supabase account (optional)

### Installation

```bash
git clone https://github.com/your-username/chai-bora-prices-tracker.git
cd chai-bora-prices-tracker
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```

---

## ⚙️ Configuration

* **Supabase**: Set your project credentials in `src/lib/supabaseClient.ts`.
* **Environment Variables**: Create a `.env` file for any API keys or secrets.

---

## 🤝 Contributing

Pull requests are welcome! Let’s grow this platform together.

---

## 📜 License

MIT License

---

## ❤️ A Note from the Creator

> I'm from Kericho, born and raised. I've seen firsthand how smallholder tea farmers struggle with price uncertainty. ChaiBora is my way of helping—by bringing the power of data and digital tools back to the grassroots.

---

## 🧠 Documented Prompts by Platform

### 🔮 MGX (Logo Generator)

**Prompt**: "Design a minimal, modern logo for a platform called ChaiBora that tracks tea prices. The logo should feature elements of a tea leaf and a data graph. Color palette: green, gold, and white. Style: Clean and symbolic."

### 🎨 Canva (Pitch Deck)

**Prompt**: "Create a 12-slide pitch deck for a startup called ChaiBora, a tea price tracking platform for Kenyan farmers. Include: Intro, Problem, Solution, Product, Target Market, Market Size, Competitors, Competitive Advantage, Roadmap, Revenue Model, Go To Market, Ask, Team. Style: Conversational, local impact-focused."

### 💬 Lovable.ai (Messaging/Tone)

**Prompt**: "Make this pitch friendly, fun, and authentic. Use an empowering tone for farmers. Include local slang or relatable phrasing that Kenyan audiences would appreciate."

### 🧩 ChatGPT (Development/Structure/README)

**Prompt**: "Help build a README for a React + Supabase tea price tracker web app with sections on features, tech stack, folder structure, and developer note. Also add SDG alignment and a local founder’s personal note."

---

## 🧩 Problem & Solution Summary

### 📍 Problem

Small-scale tea farmers in Kenya often operate without clear, timely access to pricing data from major buyers. This makes it hard to know when and where to sell their tea for maximum return.

### 💡 Solution

ChaiBora solves this by delivering real-time tea prices, trend insights, and buyer comparisons—all accessible from a mobile-friendly web app. Farmers can even set price alerts to stay ahead.

---

## 📡 Deployment & Live Demo

Check out the live version of Chai Bora Prices Tracker:  
👉 [https://chai-bora.vercel.app](https://chai-bora.vercel.app)  
<sub>Replace this with your actual deployed URL if needed.</sub>

---

## 📬 Contact

Have feedback, questions, or collaboration ideas?  
I'd love to hear from you!

- **Email:** constancetetio@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/constancesang/

---

Made with ❤️ for the Kenyan tea community.