// ─── KNOWLEDGE BASE ──────────────────────────────────────────────────────────
const KB = {
  greeting: {
    triggers: ["hello", "hi", "hey", "kem cho", "namaste", "namaskar", "jai hind", "jai shri", "good morning", "good evening", "start"],
    response: `🙏 <strong>Jai Hind! Jai Shri Ram!</strong><br><br>Welcome to the official AI assistant of <strong>Shri Amit Thaker</strong>, MLA representing the <strong>Vejalpur Constituency</strong>, Ahmedabad.<br><br>I can help you with appointments, AMC services, government schemes, and more. How can I serve you today?`,
    chips: ["Book Appointment", "AMC Complaint", "About MLA", "Government Schemes", "Constituency Work", "Contact Office"]
  },

  profile: {
    triggers: ["who is", "about", "profile", "history", "career", "biography", "intro", "thaker", "mla kon", "kon chhe", "background", "bjym", "past"],
    response: `<strong>Shri Amit Thaker</strong> is a dedicated public servant and proud BJP leader, elected to champion the cause of the people of Vejalpur.`,
    card: [
      ["Party", "Bharatiya Janata Party (BJP)"],
      ["Constituency", "Vejalpur Assembly (42nd), Ahmedabad"],
      ["Elected", "December 2022 — 15th Gujarat Legislative Assembly"],
      ["Past Role", "Ex-National President, BJYM (2007–2010)"],
      ["Education", "Post Graduate · LLM · PhD Scholar"],
      ["Trusts", "Lokmanya College / Vardhaman Charitable Trust — Trustee"],
      ["Social", "@AmitThakerBJP · 2.19L Twitter followers"],
    ],
    chips: ["Work done in Vejalpur", "Book Appointment", "Government schemes", "Contact Office"]
  },

  appointment: {
    triggers: ["appointment", "meet", "milna", "booking", "schedule", "samay", "visit", "mla ne", "mulakat", "bhetvani", "time", "slot"],
    response: `To book a meeting with <strong>Shri Amit Thaker</strong>, please share the following details. Our team will confirm your appointment within 24 hours.<br><br>
    📋 <strong>Details required:</strong><br>
    &nbsp;&nbsp;• Your full name<br>
    &nbsp;&nbsp;• Contact number (WhatsApp preferred)<br>
    &nbsp;&nbsp;• Purpose of meeting<br>
    &nbsp;&nbsp;• Preferred date &amp; time`,
    card: [
      ["Office Address", "Near Vejalpur Police Chowki, Vejalpur Rd, Ahmedabad – 380051"],
      ["Official Website", "amitthaker.com"],
      ["Twitter / X", "@AmitThakerBJP"],
      ["Working Hours", "Monday – Saturday, 10:00 AM – 6:00 PM"],
    ],
    chips: ["AMC complaint", "Government schemes", "Contact Office"]
  },

  amc: {
    triggers: ["amc", "municipal", "corporation", "water", "drainage", "garbage", "road", "light", "sanitation", "tax", "property", "birth", "sewage", "complaint", "ward", "repair", "footpath", "park"],
    response: `For <strong>AMC (Ahmedabad Municipal Corporation)</strong> services in the Vejalpur ward — roads, water, drainage, taxes, birth certificates and more:`,
    card: [
      ["Vejalpur Ward Office", "Opp. Vejalpur Police Chowki, Vejalpur Rd, Ahmedabad – 380051"],
      ["Ward Phone", "079-26813278 · 079-25391811"],
      ["24×7 Toll-Free", "1800 233 2330"],
      ["Online Complaints", "amccrs.com"],
      ["WhatsApp Complaints", "Available via AMCCRS portal"],
      ["Services", "Water bill · Property tax · Birth certificate · Road/drain repair · Street lights · Garbage pickup"],
    ],
    chips: ["Raise a grievance", "Book MLA appointment", "Government schemes"]
  },

  schemes: {
    triggers: ["scheme", "yojana", "government", "sarkar", "pm", "pradhan mantri", "benefit", "subsidy", "awas", "ayushman", "ujjwala", "kisan", "mudra", "saubhagya", "jandhan", "beti", "skill", "svnidhi", "help"],
    response: `Key <strong>Central &amp; State Government schemes</strong> available for Vejalpur residents:<br><br>
<span class="scheme-tag">🏠 PM Awas Yojana</span>
<span class="scheme-tag">🏥 Ayushman Bharat</span>
<span class="scheme-tag">🔥 PM Ujjwala Yojana</span>
<span class="scheme-tag">🌾 PM Kisan Samman Nidhi</span>
<span class="scheme-tag">💰 Mudra Loan Yojana</span>
<span class="scheme-tag">💡 Saubhagya Yojana</span>
<span class="scheme-tag">🏦 Jan Dhan Yojana</span>
<span class="scheme-tag">📚 Skill India Mission</span>
<span class="scheme-tag">👧 Beti Bachao Beti Padhao</span>
<span class="scheme-tag">🛒 PM SVANidhi (Street Vendors)</span>
<span class="scheme-tag">🤱 Matru Vandana Yojana</span>
<span class="scheme-tag">🧑‍🌾 Kisan Credit Card</span>
<br><br>
📍 For eligibility &amp; application, visit the nearest <strong>Jan Seva Kendra</strong> or contact our constituency office.`,
    chips: ["Book appointment to apply", "AMC services", "Contact Office"]
  },

  work: {
    triggers: ["work", "development", "project", "kaam", "constituency", "initiative", "achievement", "vejalpur area", "road", "park", "infrastructure", "done", "completed"],
    response: `<strong>Key work &amp; initiatives by Shri Amit Thaker</strong> for the people of Vejalpur:<br><br>
    🔰 <strong>Disturbed Areas Act</strong> — Active enforcement protecting residents of Makarba &amp; Vejalpur<br>
    ⚡ <strong>EV Advocacy</strong> — Arrived at Gujarat Vidhan Sabha on electric scooter, promoting green transport<br>
    🎓 <strong>Lokmanya College</strong> &amp; Vardhaman Charitable Trust — Quality education for all<br>
    🏥 <strong>Health Camps</strong> — Regular medical and eye camps for residents<br>
    🏛️ <strong>Legislative Work</strong> — Active participation in 15th Gujarat Assembly debates &amp; committees<br>
    🛣️ <strong>Urban Infrastructure</strong> — Advocating for road, drainage &amp; development funds<br>
    🤝 <strong>Disaster Relief</strong> — Coordination during floods and emergencies in the constituency`,
    chips: ["Government schemes", "Book appointment", "AMC issues", "Contact Office"]
  },

  grievance: {
    triggers: ["grievance", "problem", "issue", "help", "sahay", "madad", "pareshani", "dikkat", "complain", "raise", "file", "injustice", "legal"],
    response: `We are here to help. Please choose the right channel for your concern:<br><br>
    <strong>🏛️ For MLA Office</strong> (policy, schemes, land disputes, local development):<br>
    &nbsp;&nbsp;→ Visit the Vejalpur constituency office or book an appointment<br><br>
    <strong>🏢 For AMC / Civic Issues</strong> (water, roads, garbage, drainage, lights):<br>
    &nbsp;&nbsp;→ <a href="http://amccrs.com" target="_blank" style="color:#c94e00;">amccrs.com</a> or Toll-free: <strong>1800 233 2330</strong><br><br>
    <strong>📋 For State Government Services</strong> (ration card, land records, etc.):<br>
    &nbsp;&nbsp;→ Nearest Jan Seva Kendra`,
    chips: ["AMC contacts", "Book MLA appointment", "Government schemes"]
  },

  contact: {
    triggers: ["contact", "phone", "address", "email", "social media", "twitter", "facebook", "instagram", "reach", "helpline", "number", "website"],
    response: `Official contact channels for <strong>Shri Amit Thaker</strong>:`,
    card: [
      ["Website", "amitthaker.com"],
      ["Twitter / X", "@AmitThakerBJP (2.19L followers)"],
      ["Instagram", "@amitthakerbjp (43K followers)"],
      ["Facebook", "amitthaker.official (1.56L likes)"],
      ["Office", "Near Vejalpur Police Chowki, Ahmedabad – 380051"],
      ["AMC Ward", "079-26813278"],
      ["Toll-Free", "1800 233 2330"],
    ],
    chips: ["Book appointment", "Raise AMC complaint", "About MLA"]
  }
};

// ─── REPLY LOGIC ─────────────────────────────────────────────────────────────
function getReply(userText) {
  const t = userText.toLowerCase();
  for (const [, data] of Object.entries(KB)) {
    if (data.triggers && data.triggers.some(tr => t.includes(tr))) {
      return data;
    }
  }
  return {
    response: `Thank you for reaching out to the office of <strong>Shri Amit Thaker</strong>.<br><br>Our team will respond to your query shortly. You may also visit <strong>amitthaker.com</strong> or contact the Vejalpur constituency office directly.`,
    chips: ["Book appointment", "AMC complaint", "About MLA", "Government schemes", "Contact Office"]
  };
}

// ─── RENDER HELPERS ──────────────────────────────────────────────────────────
function renderCard(rows) {
  return `<div class="icard">${rows.map(([l, v]) =>
    `<div class="irow"><span class="ilabel">${l}</span><span class="ival">${v}</span></div>`
  ).join('')}</div>`;
}

function renderChips(chips) {
  return `<div class="chips">${chips.map(c =>
    `<button class="chip" onclick="handleChip(this)">${c}</button>`
  ).join('')}</div>`;
}

function addMessage(html, isUser, chips = [], card = null) {
  const msgs = document.getElementById('msgs');
  const div = document.createElement('div');
  div.className = 'msg ' + (isUser ? 'user' : 'bot');

  let content = `<div class="bubble">${html}`;
  if (card) content += renderCard(card);
  if (chips.length) content += renderChips(chips);
  content += `</div>`;

  if (!isUser) {
    div.innerHTML = `<div class="bot-av">AT</div>${content}`;
  } else {
    div.innerHTML = content;
  }

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('msgs');
  const div = document.createElement('div');
  div.className = 'typing-wrap';
  div.id = 'typing';
  div.innerHTML = `<div class="bot-av">AT</div><div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

// ─── INTERACTION ──────────────────────────────────────────────────────────────
function processInput(text) {
  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = getReply(text);
    addMessage(
      reply.response || reply.r,
      false,
      reply.chips || [],
      reply.card || null
    );
  }, 600 + Math.random() * 500);
}

function handleChip(btn) {
  const text = btn.textContent.trim();
  // disable all chips in that group
  btn.closest('.chips').querySelectorAll('.chip').forEach(b => b.disabled = true);
  addMessage(text, true);
  processInput(text);
}

function quickTopic(text) {
  addMessage(text, true);
  processInput(text);
}

function handleSend() {
  const inp = document.getElementById('inp');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  addMessage(text, true);
  processInput(text);
}

document.getElementById('inp').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSend();
});

// ─── WELCOME MESSAGE ──────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    addMessage(
      `🙏 <strong>Jai Hind! Jai Shri Ram!</strong><br><br>Welcome to the official AI assistant of <strong>Shri Amit Thaker</strong>, MLA — Vejalpur, Ahmedabad.<br><br>I'm here to help you with appointments, AMC services, government schemes, and more.`,
      false,
      ["Book Appointment", "AMC Complaint", "About MLA", "Government Schemes", "Constituency Work", "Contact Office"]
    );
  }, 400);
});
