# 🪷 Amit Thaker MLA – AI Assistant
### Official Digital Assistant for Vejalpur Constituency

---

## 📁 Files in this project

```
amit-thaker-assistant/
├── index.html     ← Main page
├── style.css      ← BJP-themed styling
├── app.js         ← Chat logic & knowledge base
└── README.md      ← This file
```

---

## 🖥️ STEP 1 — Run on Localhost (Show to MLA today)

### Option A — Open directly (Easiest, no install needed)
1. Unzip / extract this folder to your Desktop
2. Double-click `index.html`
3. It opens in your browser — done! ✅

> ⚠️ Some browsers block local fonts. For best result, use Option B below.

---

### Option B — Run with VS Code Live Server (Recommended for demo)

1. Install **VS Code** → https://code.visualstudio.com
2. Install extension: **Live Server** (by Ritwick Dey)
3. Open the `amit-thaker-assistant` folder in VS Code
4. Right-click `index.html` → **"Open with Live Server"**
5. Opens at: `http://127.0.0.1:5500` ✅

---

### Option C — Python (if you have Python installed)

Open terminal in the project folder and run:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000` ✅

---

## 🌐 STEP 2 — Deploy Online (Anyone can use it)

### 🆓 Option A — Netlify (FREE, easiest, 2 minutes)

1. Go to → https://netlify.com → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `amit-thaker-assistant` folder
4. Your site goes live instantly at a URL like:
   `https://amit-thaker-assistant.netlify.app`
5. You can set a **custom domain** (e.g. `assistant.amitthaker.com`) in settings ✅

---

### 🆓 Option B — GitHub Pages (FREE, good for long term)

1. Create account at → https://github.com
2. Create a new repository named `amit-thaker-assistant`
3. Upload all files (`index.html`, `style.css`, `app.js`)
4. Go to **Settings → Pages → Source → main branch → Save**
5. Live at: `https://yourusername.github.io/amit-thaker-assistant` ✅

---

### 💰 Option C — Custom Domain (Professional, paid)

1. Buy domain: `amithaker.in` or `vejalpuroffice.com` (₹500–800/year on GoDaddy/BigRock)
2. Buy hosting: Hostinger / SiteGround (₹100–200/month)
3. Upload files via cPanel File Manager
4. Done — live at your own domain ✅

---

## 📱 STEP 3 — WhatsApp Integration (Future upgrade)

To make this work on WhatsApp so any constituent can message directly:

1. Sign up for **Twilio WhatsApp API** or **Meta WhatsApp Business API**
2. Connect to a simple Node.js/Python backend
3. Use the same knowledge base from `app.js`
4. Cost: ~₹2,000–5,000/month for medium usage

---

## 🤖 STEP 4 — Make AI Smarter (Claude API upgrade)

Currently the assistant uses keyword matching. To make it answer ANY question intelligently:

1. Get an **Anthropic API key** → https://console.anthropic.com
2. Replace the `processInput()` function in `app.js` with a real API call
3. Cost: Very affordable — roughly ₹0.10–0.50 per conversation
4. Result: The assistant answers open-ended questions like a real human assistant ✅

---

## 🎨 Customization

| What to change | Where |
|----------------|-------|
| MLA name/details | `app.js` → KB object |
| Colors (saffron etc.) | `style.css` → `:root` variables |
| Add new topics | `app.js` → add new entry to KB |
| Add MLA photo | Replace `.mla-avatar` with `<img>` tag in `index.html` |

---

## 📞 Support

Built for the election campaign of **Shri Amit Thaker**, MLA Vejalpur.
For technical support or upgrades, contact your developer.

**Jai Hind! 🇮🇳**
