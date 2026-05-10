// ─── CONFIG ──────────────────────────────────────────────────────────────────
const MLA_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jagdish_Vishwakarma.jpg";
const MLA_PHOTO_FALLBACK = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Jagdish_Vishwakarma.jpg/220px-Jagdish_Vishwakarma.jpg";
const WA_NUMBER = "917016440487"; // India code + number

function buildWALink(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── APPOINTMENT FORM STATE ───────────────────────────────────────────────────
let apptStep = 0;
let apptData = {};

// ─── KNOWLEDGE BASE ──────────────────────────────────────────────────────────
const KB = {

  greeting: {
    triggers: ["hello", "hi", "hey", "kem cho", "namaste", "namaskar", "jai hind", "jai shri ram", "good morning", "good evening", "start", "help"],
    response: `🙏 <strong>Jai Shri Ram! Jai Hind!</strong><br><br>
Welcome to the official AI assistant of <strong>Shri Jagdish Vishwakarma Panchal</strong> — MLA from <strong>Nikol constituency</strong>, Ahmedabad, and <strong>President of Gujarat BJP</strong>.<br><br>
How can I serve you today?`,
    chips: ["Book Appointment", "AMC Complaint", "About MLA", "Government Schemes", "Constituency Work", "Contact Office"]
  },

  profile: {
    triggers: ["who is", "about", "profile", "history", "career", "biography", "background", "jagdish", "panchal", "vishwakarma", "kon chhe", "intro", "tell me"],
    response: `<strong>Shri Jagdish Ishwarbhai Vishwakarma Panchal</strong> is a senior BJP leader, 3-time MLA from Nikol, and the current <strong>President of Gujarat BJP</strong> — one of the most powerful positions in Gujarat politics.<br><br>
He began his political journey as a <strong>booth in-charge in Thakkarbapanagar in 1998</strong> and rose through sheer dedication to become Gujarat's BJP chief in October 2025 — succeeding CR Patil. He is widely respected as a <strong>people's leader</strong> — known for his accessibility and humble approach despite holding high office.`,
    card: [
      ["Full Name", "Jagdish Ishwarbhai Vishwakarma Panchal"],
      ["Born", "12 August 1973, Ahmedabad"],
      ["Party", "Bharatiya Janata Party (BJP)"],
      ["Position", "President, Gujarat BJP (since Oct 2025)"],
      ["Constituency", "Nikol (46th), Ahmedabad"],
      ["MLA Terms", "2012 · 2017 · 2022 (3 consecutive)"],
      ["Community", "Vishwakarma Panchal (OBC)"],
      ["Education", "B.A. (Gujarat University) + MBA in Marketing"],
      ["Business", "Textile Machinery — Rabatex Industries Pvt. Ltd."],
      ["Hobbies", "Reading · Swimming · Badminton · Social service"],
    ],
    chips: ["Work in Nikol", "Ministerial career", "Book Appointment", "Contact Office"]
  },

  minister: {
    triggers: ["minister", "ministry", "portfolio", "cabinet", "mantri", "government post", "industries", "forest", "roads", "msme", "cottage"],
    response: `<strong>Ministerial career of Shri Jagdish Vishwakarma Panchal:</strong><br><br>
🏛️ <strong>Sworn in as Minister of State</strong> — 17 September 2021, Gujarat Cabinet under CM Bhupendra Patel<br><br>
<strong>Portfolios held:</strong><br>
<span class="scheme-tag">🏭 Industries</span>
<span class="scheme-tag">🛣️ Roads &amp; Buildings</span>
<span class="scheme-tag">🌲 Forest &amp; Environment</span>
<span class="scheme-tag">🤝 Co-operation</span>
<span class="scheme-tag">🧂 Salt Industries</span>
<span class="scheme-tag">🏠 Cottage &amp; Rural Industries</span>
<span class="scheme-tag">🏢 MSME</span>
<span class="scheme-tag">📋 Protocol (Independent Charge)</span>
<span class="scheme-tag">🖨️ Printing &amp; Stationery</span><br><br>
He resigned from all ministerial posts in <strong>October 2025</strong> upon becoming Gujarat BJP President, following the party's "One Person, One Post" principle.`,
    chips: ["About MLA", "Book Appointment", "Contact Office"]
  },

  appointment: {
    triggers: ["appointment", "meet", "milna", "booking", "schedule", "samay", "visit", "mla ne", "mulakat", "bhetvani", "time", "slot"],
    response: null, // Handled separately
    isAppointment: true
  },

  amc: {
    triggers: ["amc", "municipal", "corporation", "water", "drainage", "garbage", "road", "light", "sanitation", "tax", "property", "birth", "sewage", "complaint", "ward", "repair", "footpath", "park", "gutter"],
    response: `For <strong>AMC (Ahmedabad Municipal Corporation)</strong> civic services in the <strong>Nikol ward</strong> — roads, water, drainage, sanitation, taxes and more:<br><br>
Nikol falls under <strong>East Zone AMC</strong>. You can raise complaints online or visit the ward office directly.`,
    card: [
      ["AMC Zone", "East Zone, Ahmedabad"],
      ["Nikol Ward Office", "Nikol, Ahmedabad"],
      ["24×7 Toll-Free", "1800 233 2330"],
      ["Online Complaints", "amccrs.com"],
      ["WhatsApp Complaints", "Available via AMCCRS portal"],
      ["Services", "Water bill · Property tax · Birth/Death cert · Road/drain repair · Garbage · Street lights"],
    ],
    chips: ["Raise a grievance", "Book MLA appointment", "Government schemes"]
  },

  schemes: {
    triggers: ["scheme", "yojana", "government", "benefit", "subsidy", "help", "awas", "ayushman", "obc", "backward", "caste", "vishwakarma", "artisan", "mudra", "msme", "loan", "skill"],
    response: `Key <strong>Central &amp; State Government schemes</strong> for Nikol residents — especially for OBC, artisan, and working communities:<br><br>
<strong>🏛️ Central Government Schemes:</strong><br>
<span class="scheme-tag">🏠 PM Awas Yojana</span>
<span class="scheme-tag">🏥 Ayushman Bharat (₹5L health cover)</span>
<span class="scheme-tag">🔥 PM Ujjwala Yojana</span>
<span class="scheme-tag">💰 PM Mudra Loan</span>
<span class="scheme-tag">🌾 PM Kisan Samman Nidhi</span>
<span class="scheme-tag">🏦 Jan Dhan Yojana</span><br><br>
<strong>⚒️ Vishwakarma Community Special:</strong><br>
<span class="scheme-tag">🪚 PM Vishwakarma Yojana (free training + ₹3L loan)</span>
<span class="scheme-tag">🏭 MSME subsidies for artisans</span>
<span class="scheme-tag">📚 OBC Scholarship</span>
<span class="scheme-tag">💼 Self-Employment Scheme for OBC</span><br><br>
📍 Visit the nearest <strong>Jan Seva Kendra</strong> or call our office to apply.`,
    chips: ["Book appointment to apply", "AMC services", "Contact Office"]
  },

  work: {
    triggers: ["work", "development", "project", "kaam", "constituency", "initiative", "achievement", "nikol", "done", "completed", "built", "road", "school"],
    response: `<strong>Shri Jagdish Vishwakarma Panchal's work for the people of Nikol:</strong><br><br>
🗳️ <strong>Won Nikol in 2012 by 50,000+ votes</strong> — one of BJP's biggest margins in Ahmedabad<br>
🏭 <strong>Industries &amp; MSME Minister</strong> — Boosted local textile machinery industry, created jobs in East Ahmedabad<br>
🛣️ <strong>Roads &amp; Buildings portfolio</strong> — Pushed for infrastructure upgrades in Nikol and surrounding areas<br>
🌲 <strong>Environment Minister</strong> — Represented Gujarat at national-level board of trade meetings<br>
🌀 <strong>Charkha record</strong> — Present when 7,500 women spun charkha together during India's 75th Independence Day in PM Modi's presence<br>
🏙️ <strong>AMC elections 2021</strong> — As BJP Ahmedabad city president, led BJP to victory in AMC elections<br>
⭐ <strong>Gujarat BJP President (Oct 2025)</strong> — Elected unopposed, now leads BJP for upcoming local body elections`,
    chips: ["Government schemes", "Book appointment", "AMC issues", "Contact Office"]
  },

  grievance: {
    triggers: ["grievance", "problem", "issue", "help", "sahay", "madad", "pareshani", "dikkat", "complain", "raise", "injustice", "legal", "fight"],
    response: `We are here to help. Please choose the right channel for your concern:<br><br>
<strong>🏛️ MLA / BJP Office</strong> — Government schemes, land issues, police matters, local development:<br>
&nbsp;&nbsp;→ WhatsApp <strong>7016 440 487</strong> or visit the Nikol constituency office<br><br>
<strong>🏢 AMC Issues</strong> — Roads, water, garbage, drainage, street lights:<br>
&nbsp;&nbsp;→ <strong>amccrs.com</strong> or call toll-free: <strong>1800 233 2330</strong><br><br>
<strong>📋 State Govt Services</strong> — Ration card, caste cert, land records, pension:<br>
&nbsp;&nbsp;→ Nearest <strong>Jan Seva Kendra</strong>`,
    chips: ["AMC contacts", "Book MLA appointment", "Government schemes"]
  },

  contact: {
    triggers: ["contact", "phone", "address", "social", "reach", "helpline", "number", "website", "office", "where", "whatsapp"],
    response: `Here's how to reach <strong>Shri Jagdish Vishwakarma Panchal</strong>:`,
    card: [
      ["WhatsApp", "7016 440 487"],
      ["Website", "jagdishind.in"],
      ["Constituency", "Nikol (46th), Ahmedabad"],
      ["Party Office", "Gujarat BJP State HQ, Gandhinagar"],
      ["AMC Helpline", "1800 233 2330 (24×7 toll-free)"],
      ["Online AMC", "amccrs.com"],
      ["Working Hours", "Mon–Sat, 10:00 AM – 6:00 PM"],
    ],
    chips: ["Book appointment on WhatsApp", "Raise AMC complaint", "About MLA"]
  },

  bjp_president: {
    triggers: ["president", "bjp president", "gujarat bjp", "party president", "state president", "cr patil", "successor"],
    response: `On <strong>4 October 2025</strong>, Shri Jagdish Vishwakarma Panchal was <strong>unanimously elected as President of Gujarat BJP</strong> — succeeding Union Minister CR Patil.<br><br>
No other leader filed nominations — a clear sign of the <strong>complete consensus</strong> within the party behind Jagdish Panchal.<br><br>
He formally assumed charge at the BJP State HQ in Gandhinagar on <strong>5 October 2025</strong>. As Gujarat BJP President, he will now lead the party through upcoming <strong>local body elections</strong> across all civic bodies and panchayats in Gujarat.<br><br>
He resigned from all ministerial positions upon becoming president, following BJP's firm "One Person, One Post" principle.`,
    chips: ["About MLA", "Work in Nikol", "Book Appointment"]
  }
};

// ─── APPOINTMENT FLOW ─────────────────────────────────────────────────────────
function startAppointmentFlow() {
  apptStep = 1;
  apptData = {};
  addMessage(
    `📅 <strong>Book an Appointment with Shri Jagdish Vishwakarma Panchal</strong><br><br>
I'll collect your details and send them directly to his WhatsApp. Let's start!<br><br>
<strong>Step 1 of 4 — Your full name:</strong><br>
Please type your name below.`,
    false, [], null, true
  );
}

function handleAppointmentStep(text) {
  if (apptStep === 1) {
    apptData.name = text;
    apptStep = 2;
    addMessage(text, true);
    setTimeout(() => {
      addMessage(
        `✅ Got it, <strong>${text}</strong>!<br><br>
<strong>Step 2 of 4 — Your WhatsApp number:</strong><br>
Please type your 10-digit mobile number.`,
        false, [], null, true
      );
    }, 500);
    return true;
  }
  if (apptStep === 2) {
    apptData.phone = text;
    apptStep = 3;
    addMessage(text, true);
    setTimeout(() => {
      addMessage(
        `✅ Got it!<br><br>
<strong>Step 3 of 4 — Purpose of meeting:</strong><br>
Briefly describe why you want to meet the MLA.<br>
<em>(e.g. AMC complaint, government scheme, local issue, personal grievance)</em>`,
        false, [], null, true
      );
    }, 500);
    return true;
  }
  if (apptStep === 3) {
    apptData.purpose = text;
    apptStep = 4;
    addMessage(text, true);
    setTimeout(() => {
      addMessage(
        `✅ Noted!<br><br>
<strong>Step 4 of 4 — Preferred date &amp; time:</strong><br>
When would you like to visit?<br>
<em>(e.g. "Monday morning", "15 May after 2 PM", "Any weekday")</em>`,
        false, [], null, true
      );
    }, 500);
    return true;
  }
  if (apptStep === 4) {
    apptData.datetime = text;
    apptStep = 0;
    addMessage(text, true);
    setTimeout(() => showAppointmentSummary(), 500);
    return true;
  }
  return false;
}

function showAppointmentSummary() {
  const msg =
`Namaskar Jagdishbhai 🙏

*New Appointment Request*

👤 Name: ${apptData.name}
📞 Phone: ${apptData.phone}
📋 Purpose: ${apptData.purpose}
📅 Preferred Time: ${apptData.datetime}

Sent via Official AI Assistant`;

  const waLink = buildWALink(msg);

  const html = `
    <strong>✅ All details collected!</strong><br><br>
    <div class="wa-card">
      <div class="wa-card-title"><i class="ti ti-brand-whatsapp"></i> Ready to send to MLA's WhatsApp</div>
      <div class="wa-card-body">
        👤 <strong>Name:</strong> ${apptData.name}<br>
        📞 <strong>Phone:</strong> ${apptData.phone}<br>
        📋 <strong>Purpose:</strong> ${apptData.purpose}<br>
        📅 <strong>Preferred time:</strong> ${apptData.datetime}
      </div>
      <a href="${waLink}" target="_blank" class="wa-action-btn">
        <i class="ti ti-brand-whatsapp"></i> Send to Jagdishbhai on WhatsApp
      </a>
    </div>`;

  addMessage(html, false, ["Book another appointment", "AMC Complaint", "Government Schemes", "Contact Office"]);
}

// ─── REPLY LOGIC ─────────────────────────────────────────────────────────────
function getReply(userText) {
  const t = userText.toLowerCase();

  // Check appointment flow first
  if (apptStep > 0) {
    return { isStep: true };
  }

  for (const [, data] of Object.entries(KB)) {
    if (data.triggers && data.triggers.some(tr => t.includes(tr))) {
      return data;
    }
  }
  return {
    response: `Thank you for reaching out to the office of <strong>Shri Jagdish Vishwakarma Panchal</strong>, MLA Nikol &amp; Gujarat BJP President.<br><br>
For urgent help, please WhatsApp directly at <strong>7016 440 487</strong> or visit the Nikol constituency office (Mon–Sat, 10 AM – 6 PM).`,
    chips: ["Book Appointment", "AMC complaint", "About MLA", "Government schemes", "Contact Office"]
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

function addMessage(html, isUser, chips = [], card = null, isInput = false) {
  const msgs = document.getElementById('msgs');
  const div = document.createElement('div');
  div.className = 'msg ' + (isUser ? 'user' : 'bot');

  let content = `<div class="bubble">${html}`;
  if (card) content += renderCard(card);
  if (chips.length) content += renderChips(chips);
  content += `</div>`;

  if (!isUser) {
    const avWrap = `<div class="bot-av-wrap">
      <img src="${MLA_PHOTO}" class="bot-photo" alt="JV"
        onerror="this.src='${MLA_PHOTO_FALLBACK}';this.onerror=function(){this.style.display='none';this.nextElementSibling.style.display='flex';};"/>
      <div class="bot-av">JV</div>
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
  const d = document.createElement('div');
  d.className = 'typing-wrap'; d.id = 'typing';
  d.innerHTML = `<div class="bot-av-wrap">
    <img src="${MLA_PHOTO}" class="bot-photo" alt="JV"
      onerror="this.src='${MLA_PHOTO_FALLBACK}';this.onerror=function(){this.style.display='none';this.nextElementSibling.style.display='flex';};"/>
    <div class="bot-av">JV</div>
  </div>
  <div class="typing"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}
function removeTyping() { const t = document.getElementById('typing'); if (t) t.remove(); }

// ─── INTERACTION ──────────────────────────────────────────────────────────────
function processInput(text) {
  // If in appointment flow
  if (apptStep > 0) {
    handleAppointmentStep(text);
    return;
  }

  const reply = getReply(text);

  // Appointment trigger
  if (reply.isAppointment) {
    showTyping();
    setTimeout(() => { removeTyping(); startAppointmentFlow(); }, 600);
    return;
  }

  showTyping();
  setTimeout(() => {
    removeTyping();
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

  if (apptStep > 0) {
    handleAppointmentStep(text);
  } else {
    addMessage(text, true);
    processInput(text);
  }
}

document.getElementById('inp').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSend();
});

// ─── WELCOME ─────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    addMessage(
      `🙏 <strong>Jai Shri Ram! Jai Hind!</strong><br><br>
Welcome to the official AI assistant of <strong>Shri Jagdish Vishwakarma Panchal</strong> — MLA Nikol &amp; President of Gujarat BJP.<br><br>
I can help you book appointments, raise AMC complaints, find government schemes, and more. How can I help you today?`,
      false,
      ["Book Appointment", "AMC Complaint", "About MLA", "Government Schemes", "Constituency Work", "Contact Office"]
    );
  }, 400);
});
