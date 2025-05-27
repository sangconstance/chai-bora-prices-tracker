# 🍃 ChaiBora – Empowering Smallholder Tea Farmers

ChaiBora is a simple, powerful, and community-focused web platform designed to help Kenyan smallholder tea farmers stay informed. It enables real-time price tracking, historical insights, and price alerts to empower better decision-making and boost incomes. Born in Kericho, built for the entire tea-growing community.

> *“When farmers thrive, communities prosper.”*

---

## 🌐 Live Demo

🔗 https://chai-bora-prices-tracker.vercel.app/

---

## 🌟 Features

- ✅ Supabase-powered **Authentication**
- 📊 **Live Prices**: Instantly compare factory tea prices from KETEPA, Unilever, and more
- 📈 **Historical Trends**: Interactive charts that reveal pricing patterns
- 🛎️ **Custom Alerts**: Get notified via SMS or app when your target price is hit
- 🏆 **Best Daily Offers**: Auto-highlight the highest offer daily
- 🧑‍💼 **Buyer Listings**: View and compare buyers' current offers
- 🌍 **Responsive design** for mobile farmers
- 🧠 Built with **React + Vite + Tailwind + shadcn/ui**

---

## 🌍 Why It Matters

* **Problem**: Smallholder tea farmers often lack timely access to market prices and trends.
* **Solution**: Provide transparency and tools to make pricing decisions easier.
* **SDG Alignment**: ✅ SDG 1 (No Poverty), ✅ SDG 8 (Decent Work & Economic Growth), ✅ SDG 9 (Industry, Innovation, and Infrastructure)

---

## 🧪 Prototype
Check Out Chai-Bora's Prototype here:
(https://www.canva.com/design/DAGoflNoyWM/m9MsA_uK-Ve6xMo7YkSI2Q/edit?utm_content=DAGoflNoyWM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 📊 Pitch Deck
Also check out our pitch deck down below:
🎤 (https://www.canva.com/design/DAGoias5qVU/9PIxH0Va58A0401c1YK50A/edit?utm_content=DAGoias5qVU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, Tailwind CSS, Vite, shadcn/ui
* **Data & Charts**: Recharts
* **Backend (Planned)**: Supabase (for Auth & Realtime DB)
* **State Management**: React Context + Hooks

---

## 📁 Project Structure

```bash
/
├── public/                 # Static assets
├── src/
│   ├── pages/              # Page components (Login, Dashboard, etc.)
│   ├── components/         # Reusable UI elements
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # External API logic (Supabase, etc.)
│   ├── lib/                # Supabase client & utilities
│   └── App.tsx             # Main app router
├── supabase/               # Supabase configuration
├── .env                    # Environment variables
├── tailwind.config.ts      # Styling config
├── vite.config.ts          # Vite config
├── README.md
├── package.json
└── vite.config.ts
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

## ❤️ A Note from the Creator

> I'm from Kericho, born and raised. I've seen firsthand how smallholder tea farmers struggle with price uncertainty. ChaiBora is my way of helping—by bringing the power of data and digital tools back to the grassroots.

---

## 🧠 Documented Prompts by Platform

### 🔮 MGX (Logo Generator)

**Prompt**: 
"Design a modern mobile app UI for an app called "ChaiBora", made for small-scale tea farmers in Kericho. Use a fresh, calming green tea color palette. The app should include the following:

1. Welcome Screen – Background image or soft gradient of tea fields. Title: “Track tea prices. Sell smart.” Two buttons: “Login” (filled green) and “Sign Up” (outlined). Footer: “Empowering Tea Farmers — Powered by Vibe Coding Hackathon”.

2. Dashboard Screen – Show current tea market prices (in a card), a chart of tea price trends over the last 7 days, and a “Set Alert” button. Include a top nav with “Dashboard,” “Alerts,” and “Profile”.

3. Alerts Screen – Let users input a price threshold (e.g. alert me when tea hits Ksh 25/kg). Include toggle for SMS or WhatsApp alerts and a save button.

4. Profile Screen – Display name, phone number, location (Kericho), and farm size. Include an edit button and logout option."


###  Lovable.ai 

**Prompt**: 
Prompt 1:
"Build the homepage for an app called ChaiBora. This is a tea pricing platform for farmers in Kenya. Use a green-themed background with headline text 'Track tea prices. Sell smart.' Include Login and Sign Up buttons. Add a footer that says: 'Powered by Vibe Coding Hackathon'."

Prompt 2:
"Now add a dashboard page titled 'Today’s Market Prices'. Show a scrollable list of buyers like KETEPA with price per kg and location (e.g. Kericho). Highlight the best offer at the bottom."

Prompt 3:
"Add a price trends page with a 7-day price chart using dummy data. Include a toggle for '7 Days' and '30 Days'."

Prompt 4:
"Add a form where users can set a price alert. Input field for price threshold, dropdown to choose a buyer, and a toggle to receive SMS or push notifications. Button to save alert."

Prompt 5:
"Create a user profile settings page with name, phone number, preferred location (dropdown), and toggles for alerts."



---

## 🧩 Problem & Solution Summary

### 📍 Problem

Small-scale tea farmers in Kenya often operate without clear, timely access to pricing data from major buyers. This makes it hard to know when and where to sell their tea for maximum return.

### 💡 Solution

ChaiBora solves this by delivering real-time tea prices, trend insights, and buyer comparisons—all accessible from a mobile-friendly web app. Farmers can even set price alerts to stay ahead.

---

## 📬 Contact

Have feedback, questions, or collaboration ideas?  
I'd love to hear from you!

- **Email:** constancetetio@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/constancesang/

---

Made with ❤️ for the Kenyan tea community.
