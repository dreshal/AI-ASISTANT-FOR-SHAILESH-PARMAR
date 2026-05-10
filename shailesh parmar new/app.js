// ─── PHOTO URL ───────────────────────────────────────────────────────────────
const MLA_PHOTO = "https://prsindia.org/files/mlatrack/gujarat/14/mla_images/Shailesh%20Manharbhai%20Parmar.jpg";

// ─── KNOWLEDGE BASE ──────────────────────────────────────────────────────────
const KB = {

  greeting: {
    triggers: ["hello", "hi", "hey", "kem cho", "namaste", "namaskar", "jai hind", "good morning", "good evening", "start", "help"],
    response: `🙏 <strong>Jai Hind! Jai Congress!</strong><br><br>
Welcome to the official assistant of <strong>Shri Shailesh Parmar</strong>, MLA representing <strong>Danilimda constituency</strong> in Ahmedabad.<br><br>
Shri Parmar has been fighting for the rights of Dalit, Muslim, and working-class communities since 2007. How can I help you today?`,
    chips: ["Book Appointment", "AMC Complaint", "About MLA", "Government Schemes", "Constituency Work", "Contact Office"]
  },

  profile: {
    triggers: ["who is", "about", "profile", "history", "career", "biography", "background", "parmar", "kon chhe", "intro", "tell me"],
    response: `<strong>Shri Shailesh Manharbhai Parmar</strong> is one of Gujarat's most experienced and consistent Congress legislators.<br><br>
He has won from Danilimda <strong>three consecutive times</strong> — 2012, 2017, and 2022 — making him one of the few Congress leaders to hold a seat in BJP-dominated Gujarat. Even with AAP and AIMIM splitting votes in 2022, he defeated BJP by a <strong>margin of 13,525 votes</strong> — a clear sign of the trust his community places in him.<br><br>
His <strong>assembly attendance is 92.9%</strong> (above state average of 85%) and he has participated in <strong>125 debates</strong> in the Gujarat Vidhan Sabha.`,
    card: [
      ["Full Name", "Shailesh Manharbhai Parmar"],
      ["Born", "26 June 1969, Gujarat"],
      ["Party", "Indian National Congress (INC)"],
      ["Constituency", "Danilimda (SC Reserved), Ahmedabad"],
      ["First Elected", "2007 — Shaher Kotda constituency"],
      ["Danilimda MLA since", "2012 · 2017 · 2022 (3 consecutive terms)"],
      ["Assembly Attendance", "92.9% (State avg: 85%)"],
      ["Debates in Assembly", "125 debates participated"],
      ["Phone", "9825029992"],
    ],
    chips: ["Work done in Danilimda", "Book Appointment", "Government schemes"]
  },

  election: {
    triggers: ["election", "vote", "win", "margin", "2022", "2017", "2012", "result", "won", "defeat", "victory", "record"],
    response: `<strong>Shailesh Parmar's election track record</strong> — consistent winner across 4 elections:<br><br>
🗳️ <strong>2007</strong> — Won from <strong>Shaher Kotda</strong> constituency (first MLA term)<br>
🗳️ <strong>2012</strong> — Won from <strong>Danilimda</strong> by ~32,000 votes<br>
🗳️ <strong>2017</strong> — Won from <strong>Danilimda</strong> by ~14,000 votes<br>
🗳️ <strong>2022</strong> — Won from <strong>Danilimda</strong> by <strong>13,525 votes</strong> despite AAP &amp; AIMIM also contesting<br><br>
📊 <strong>2022 vote breakdown:</strong><br>
&nbsp;&nbsp;• Shailesh Parmar (INC): <strong>68,906 votes</strong><br>
&nbsp;&nbsp;• Nareshbhai Vyas (BJP): 55,381 votes<br>
&nbsp;&nbsp;• Soma Kapadia (AAP): 22,934 votes<br><br>
Danilimda has <strong>2,65,000 registered voters</strong>. BJP has <strong>never won</strong> this seat since it was created in 2012.`,
    chips: ["About MLA", "Constituency work", "Book appointment"]
  },

  appointment: {
    triggers: ["appointment", "meet", "milna", "booking", "schedule", "samay", "visit", "mla ne", "mulakat", "bhetvani", "time", "slot"],
    response: `To meet <strong>Shri Shailesh Parmar</strong>, please contact his constituency office. The MLA personally holds <strong>Janata Darbar sessions</strong> where any resident can walk in and meet him directly.<br><br>
📋 <strong>Please have these details ready:</strong><br>
&nbsp;&nbsp;• Your full name<br>
&nbsp;&nbsp;• Contact number (WhatsApp preferred)<br>
&nbsp;&nbsp;• Purpose of the meeting<br>
&nbsp;&nbsp;• Preferred date and time`,
    card: [
      ["Office Phone", "9825029992"],
      ["Office Address", "22 Veer Arjun Soc., Vijay Nagar, Near Railway Crossing, Nava Vadaj, Ahmedabad – 380013"],
      ["Working Hours", "Monday – Saturday, 10:00 AM – 6:00 PM"],
      ["Walk-in Welcome", "Yes — Janata Darbar sessions held weekly"],
      ["Facebook", "facebook.com/ShriShaileshParmar"],
    ],
    chips: ["AMC complaint", "Government schemes", "Contact Office"]
  },

  amc: {
    triggers: ["amc", "municipal", "corporation", "water", "drainage", "garbage", "road", "light", "sanitation", "tax", "property", "birth", "sewage", "complaint", "ward", "repair", "footpath", "park"],
    response: `For <strong>AMC (Ahmedabad Municipal Corporation)</strong> civic services in the Danilimda ward — roads, water, drainage, sanitation, taxes and more:<br><br>
Danilimda falls under the <strong>South-West Zone</strong> of AMC. You can complain online or visit the ward office directly.`,
    card: [
      ["AMC Zone", "South-West Zone, Ahmedabad"],
      ["24×7 Toll-Free", "1800 233 2330"],
      ["Online Complaints", "amccrs.com"],
      ["WhatsApp Complaints", "Available via AMCCRS portal"],
      ["AMC Head Office", "Sardar Patel Bhavan, Danapith, Ahmedabad"],
      ["Services covered", "Water bill · Property tax · Birth/Death cert · Road repair · Drainage · Garbage · Street lights"],
    ],
    chips: ["Raise a grievance", "Book MLA appointment", "Government schemes"]
  },

  schemes: {
    triggers: ["scheme", "yojana", "government", "benefit", "subsidy", "help", "awas", "ayushman", "ambedkar", "sc", "dalit", "scholarship", "education", "free", "ration", "pension", "widow", "sarkar"],
    response: `Key <strong>government schemes</strong> available for Danilimda residents — especially SC, Dalit, and low-income communities:<br><br>
<strong>🏛️ Central Government Schemes:</strong><br>
<span class="scheme-tag">🏠 PM Awas Yojana</span>
<span class="scheme-tag">🏥 Ayushman Bharat (₹5L health cover)</span>
<span class="scheme-tag">🔥 PM Ujjwala Yojana</span>
<span class="scheme-tag">🌾 PM Kisan Samman Nidhi</span>
<span class="scheme-tag">💰 Mudra Loan Yojana</span>
<span class="scheme-tag">🏦 Jan Dhan Yojana</span><br><br>
<strong>⚖️ SC / Dalit Specific Schemes:</strong><br>
<span class="scheme-tag">📚 SC Student Scholarship</span>
<span class="scheme-tag">🏠 Dr. Ambedkar Awas Yojana</span>
<span class="scheme-tag">💼 Self-Employment for SC</span>
<span class="scheme-tag">👩 Widow Pension Scheme</span>
<span class="scheme-tag">🧒 Balika Samridhi Yojana</span>
<span class="scheme-tag">🎓 Post-Matric Scholarship</span><br><br>
📍 For eligibility &amp; application help, visit the nearest <strong>Jan Seva Kendra</strong> or call our office at <strong>9825029992</strong>.`,
    chips: ["Book appointment to apply", "AMC services", "Contact Office"]
  },

  work: {
    triggers: ["work", "development", "project", "kaam", "constituency", "initiative", "achievement", "done", "completed", "built"],
    response: `<strong>Shri Shailesh Parmar's work for the people of Danilimda:</strong><br><br>
🏛️ <strong>Legislative voice</strong> — 92.9% assembly attendance &amp; 125 debates — one of Gujarat's most active opposition MLAs<br>
⚖️ <strong>SC community rights</strong> — Consistently raised Dalit rights, caste atrocity cases, and reservation issues in the Assembly<br>
🛣️ <strong>Infrastructure push</strong> — Advocated for road repair, drainage, and streetlight improvements in Danilimda slum pockets<br>
📚 <strong>Education support</strong> — Helped SC students access post-matric scholarships and government education schemes<br>
🏥 <strong>Health access</strong> — Facilitated Ayushman Bharat cards and health camps for BPL families<br>
🗣️ <strong>Deputy Speaker candidate 2026</strong> — Congress nominated him for Gujarat Assembly Deputy Speaker, backed for his deep knowledge of legislative procedures<br>
🤝 <strong>Janata Darbar</strong> — Weekly open-door session where any constituent can meet him directly, no appointment needed`,
    chips: ["Government schemes", "Book appointment", "AMC issues"]
  },

  grievance: {
    triggers: ["grievance", "problem", "issue", "help", "sahay", "madad", "pareshani", "dikkat", "complain", "raise", "injustice", "police", "legal", "fight"],
    response: `Shri Shailesh Parmar has always stood up for his constituents. Here's how to get help:<br><br>
<strong>🏛️ MLA Office</strong> — Government schemes, land disputes, police matters, local development:<br>
&nbsp;&nbsp;→ Call <strong>9825029992</strong> or visit the Vijay Nagar office<br><br>
<strong>🏢 AMC Issues</strong> — Roads, water, garbage, drainage, street lights:<br>
&nbsp;&nbsp;→ <strong>amccrs.com</strong> or toll-free: <strong>1800 233 2330</strong><br><br>
<strong>📋 State Govt Services</strong> — Ration card, caste certificate, land records, pension:<br>
&nbsp;&nbsp;→ Nearest <strong>Jan Seva Kendra</strong><br><br>
<strong>🚨 Urgent</strong> — Walk in directly during Janata Darbar. The MLA's team handles walk-in cases without appointment.`,
    chips: ["AMC contacts", "Book MLA appointment", "Government schemes"]
  },

  contact: {
    triggers: ["contact", "phone", "address", "email", "social", "reach", "helpline", "number", "website", "office", "where"],
    response: `Here's how to reach <strong>Shri Shailesh Parmar</strong> and his office:`,
    card: [
      ["Mobile", "9825029992"],
      ["Home Address", "22 Veer Arjun Soc., Vijay Nagar, Near Railway Crossing, Nava Vadaj, Ahmedabad – 380013"],
      ["Facebook", "facebook.com/ShriShaileshParmar (9,200+ likes)"],
      ["Twitter / X", "@shaileshpMLA"],
      ["AMC Helpline", "1800 233 2330 (24×7 toll-free)"],
      ["Working Hours", "Mon–Sat, 10:00 AM – 6:00 PM"],
    ],
    chips: ["Book appointment", "Raise AMC complaint", "About MLA"]
  },

  deputy_speaker: {
    triggers: ["deputy speaker", "speaker", "assembly role", "vidhan sabha", "gandhinagar", "legislative", "february 2026"],
    response: `In <strong>February 2026</strong>, the Indian National Congress nominated <strong>Shri Shailesh Parmar</strong> as their candidate for <strong>Gujarat Assembly Deputy Speaker</strong>.<br><br>
Congress MLA Imran Khedawala confirmed the nomination: <em>"Shailesh Parmar is a capable leader. Congress fully supports him."</em><br><br>
The party cited his <strong>nearly two decades of legislative experience</strong>, deep knowledge of Assembly rules, and strong organisational presence in South Gujarat as key reasons for the nomination. This reflects the trust and respect he commands within the party and across the Assembly.`,
    chips: ["About MLA", "Election history", "Contact Office"]
  }
};

// ─── REPLY LOGIC ─────────────────────────────────────────────────────────────
function getReply(userText) {
  const t = userText.toLowerCase();
  for (const [, data] of Object.entries(KB)) {
    if (data.triggers && data.triggers.some(tr => t.includes(tr))) return data;
  }
  return {
    response: `Thank you for reaching out. Our team will look into your query shortly.<br><br>
For urgent matters, please call <strong>9825029992</strong> or visit the constituency office at Vijay Nagar, Nava Vadaj, Ahmedabad (Mon–Sat, 10 AM – 6 PM).<br><br>
You can also raise AMC complaints at <strong>amccrs.com</strong> or call <strong>1800 233 2330</strong>.`,
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
    // Bot avatar with real photo
    const avWrap = `<div class="bot-av-wrap">
      <img src="${MLA_PHOTO}" class="bot-photo" alt="SP"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <div class="bot-av">SP</div>
    </div>`;
    div.innerHTML = avWrap + content;
  } else {
    div.innerHTML = content;
  }

  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('msgs');
  const div = document.createElement('div');
  div.className = 'typing-wrap'; div.id = 'typing';
  div.innerHTML = `<div class="bot-av-wrap">
    <img src="${MLA_PHOTO}" class="bot-photo" alt="SP"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"/>
    <div class="bot-av">SP</div>
  </div>
  <div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

function processInput(text) {
  showTyping();
  setTimeout(() => {
    removeTyping();
    const reply = getReply(text);
    addMessage(reply.response, false, reply.chips || [], reply.card || null);
  }, 700 + Math.random() * 400);
}

function handleChip(btn) {
  const text = btn.textContent.trim();
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

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    addMessage(
      `🙏 <strong>Jai Hind! Jai Congress!</strong><br><br>
Welcome to the official AI assistant of <strong>Shri Shailesh Parmar</strong>, MLA — Danilimda, Ahmedabad.<br><br>
Serving the people of Danilimda since 2007 — with dedication to Dalit, Muslim, and working-class communities. How can I help you today?`,
      false,
      ["Book Appointment", "AMC Complaint", "About MLA", "Government Schemes", "Constituency Work", "Contact Office"]
    );
  }, 400);
});
