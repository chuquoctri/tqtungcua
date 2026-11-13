const KEY = "han-thang1-v1";

const CHART = [
  {
    h: "Không bật hơi / có bật hơi",
    tip: "Đặt tay trước miệng. Cột phải phải có luồng hơi.",
    items: [
      ["八", "bā", "tám"], ["怕", "pà", "sợ"],
      ["多", "duō", "nhiều"], ["拖", "tuō", "kéo"],
      ["哥", "gē", "anh"], ["科", "kē", "khoa"]
    ]
  },
  {
    h: "Ba chỗ lưỡi",
    tip: "z ở răng. zh cuộn. j ở lợi, phía sau có màu ü.",
    items: [
      ["三", "sān", "ba"], ["是", "shì", "là"], ["西", "xī", "tây"],
      ["字", "zì", "chữ"], ["吃", "chī", "ăn"], ["七", "qī", "bảy"],
      ["人", "rén", "người"], ["去", "qù", "đi, đọc ü"]
    ]
  },
  {
    h: "u và ü",
    tip: "ü: giữ lưỡi của i, chỉ chu môi. Sau j q x y, chữ u chính là ü.",
    items: [
      ["五", "wǔ", "năm, u"], ["女", "nǚ", "nữ, ü"],
      ["路", "lù", "đường, u"], ["绿", "lǜ", "xanh lá, ü"],
      ["月", "yuè", "tháng"]
    ]
  }
];

const RULES = [
  ["Thanh 3 + thanh 3", "Tiếng đầu đọc thành thanh 2.", "你好 nǐ hǎo → ní hǎo. 可以 → ké yǐ. 哪里 → ná lǐ. 两点 → liáng diǎn."],
  ["Thanh 3 đứng trước thanh khác", "Chỉ hạ, không nhấc.", "你是, 老师, 好看."],
  ["一", "Một mình là yī. Trước thanh 4 thành yí. Trước thanh 1, 2, 3 thành yì.", "一个 yí gè. 一块 yí kuài. 一杯 yì bēi. 一点 yì diǎn."],
  ["不", "Một mình là bù. Trước thanh 4 thành bú.", "不是 bú shì. 不要 bú yào. 不客气 bú kèqi. 不忙 vẫn là bù."],
  ["Thanh nhẹ", "Ngắn, bám vào tiếng trước.", "妈妈, 谢谢, 什么, 吗, 的, 了, 吧."],
  ["Câu tính từ", "Không dùng 是. Dùng 很, hoặc phủ định bằng 不.", "我很忙. 我不忙. Không nói 我是忙."]
];

const state = load();
const ui = { quiz: {}, rev: null, scrollTo: "", keepScroll: false, hear: null, rec: null, klass: null };

function fresh() {
  return {
    mode: 45,
    theme: "dark",
    lessons: {},
    cards: {},
    oral: {},
    speak: {},
    streak: { last: "", n: 0 },
    created: Date.now()
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return normalize(JSON.parse(raw));
  } catch (err) { /* bản lưu hỏng thì học lại từ đầu */ }
  return fresh();
}

function normalize(s) {
  const base = fresh();
  const mode = Number(s.mode);
  return {
    mode: mode === 30 || mode === 60 ? mode : 45,
    theme: s.theme === "light" ? "light" : "dark",
    lessons: s.lessons && typeof s.lessons === "object" ? s.lessons : {},
    cards: s.cards && typeof s.cards === "object" ? s.cards : {},
    oral: s.oral && typeof s.oral === "object" ? s.oral : {},
    speak: s.speak && typeof s.speak === "object" ? s.speak : {},
    streak: s.streak && typeof s.streak === "object" ? s.streak : base.streak,
    created: s.created || Date.now()
  };
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  document.documentElement.dataset.theme = state.theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", state.theme === "light" ? "#f3eee4" : "#12140f");
}

function todayStr(d) {
  const x = d || new Date();
  const m = String(x.getMonth() + 1).padStart(2, "0");
  const day = String(x.getDate()).padStart(2, "0");
  return x.getFullYear() + "-" + m + "-" + day;
}

function addDays(iso, n) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + n);
  return todayStr(dt);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function toneOf(syl) {
  const map = {
    ā: 1, á: 2, ǎ: 3, à: 4, ē: 1, é: 2, ě: 3, è: 4,
    ī: 1, í: 2, ǐ: 3, ì: 4, ō: 1, ó: 2, ǒ: 3, ò: 4,
    ū: 1, ú: 2, ǔ: 3, ù: 4, ǖ: 1, ǘ: 2, ǚ: 3, ǜ: 4
  };
  for (const ch of syl) if (map[ch]) return map[ch];
  return 0;
}

function paint(html) {
  return html.replace(/[A-Za-zÜü]*[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ][A-Za-zÜüāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]*/g, (m) => {
    return '<span class="tn tn' + toneOf(m) + '">' + m + "</span>";
  });
}

function rich(s) {
  return paint(escapeHtml(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"));
}

function pyHtml(p) {
  return String(p).split(/(\s+)/).map((part) => {
    if (!part.trim()) return escapeHtml(part);
    return '<span class="tn tn' + toneOf(part) + '">' + escapeHtml(part) + "</span>";
  }).join("");
}

function showTier(tier) {
  return (tier || 30) <= state.mode;
}

function visibleOf(list) {
  return (list || []).filter((item) => showTier(item.tier));
}

function dueCards() {
  const t = todayStr();
  return Object.values(state.cards)
    .filter((c) => c.due <= t)
    .sort((a, b) => a.due.localeCompare(b.due) || String(a.from).localeCompare(String(b.from)));
}

function reviewLimit() {
  if (state.mode === 30) return 8;
  if (state.mode === 60) return 20;
  return 12;
}

function cardKey(v) {
  return v.z + "|" + v.p;
}

function enrollVisible(lesson) {
  let n = 0;
  visibleOf(lesson.vocab).forEach((v) => {
    const k = cardKey(v);
    if (state.cards[k]) return;
    const note = v.note || (v.sv ? "Hán Việt: " + v.sv : "");
    state.cards[k] = {
      z: v.z, p: v.p, vi: v.vi, note, due: addDays(todayStr(), 1),
      interval: 0, reps: 0, lapses: 0, from: lesson.id
    };
    n += 1;
  });
  return n;
}

function doneCount(list) {
  return (list || catalog()).filter((L) => state.lessons[L.id] && state.lessons[L.id].done).length;
}

function nextLesson() {
  return catalog().find((L) => !(state.lessons[L.id] && state.lessons[L.id].done)) || catalog()[catalog().length - 1];
}

function touchStreak() {
  const today = todayStr();
  if (state.streak.last === today) return;
  const y = addDays(today, -1);
  state.streak.n = state.streak.last === y ? (state.streak.n || 0) + 1 : 1;
  state.streak.last = today;
}

function catalog() {
  return LESSONS.concat(typeof PATH_LESSONS === "undefined" ? [] : PATH_LESSONS);
}

function findLesson(id) {
  const s = String(id);
  return catalog().find((L) => String(L.id) === s) || null;
}

function stageLessons(id) {
  if (id === "nen") return LESSONS;
  return (typeof PATH_LESSONS === "undefined" ? [] : PATH_LESSONS).filter((L) => L.stage === id);
}

function priorLesson(lesson) {
  const list = lesson.stage ? stageLessons(lesson.stage) : LESSONS;
  const i = list.findIndex((L) => String(L.id) === String(lesson.id));
  if (i > 0) return list[i - 1];
  if (!lesson.stage || typeof PATH_STAGES === "undefined") return null;
  const ids = PATH_STAGES.map((s) => s.id);
  const si = ids.indexOf(lesson.stage);
  for (let k = si - 1; k >= 0; k -= 1) {
    const prevList = stageLessons(ids[k]);
    if (prevList.length) return prevList[prevList.length - 1];
  }
  return null;
}

function firstGapBefore(lesson) {
  const all = catalog();
  const i = all.findIndex((L) => String(L.id) === String(lesson.id));
  for (let k = 0; k < i; k += 1) {
    const prev = state.lessons[all[k].id];
    if (!(prev && prev.done)) return all[k];
  }
  return null;
}

function earlierStageOpen(id) {
  if (typeof PATH_STAGES === "undefined") return null;
  const i = PATH_STAGES.findIndex((s) => s.id === id);
  for (let k = 0; k < i; k += 1) {
    const list = stageLessons(PATH_STAGES[k].id);
    if (list.length && doneCount(list) < list.length) return PATH_STAGES[k];
  }
  return null;
}

function choiceOrder(lessonId, qi, n) {
  const idx = Array.from({ length: n }, (_, i) => i);
  let base = lessonId;
  if (typeof lessonId !== "number") {
    base = 0;
    const s = String(lessonId);
    for (let i = 0; i < s.length; i += 1) base = (base * 33 + s.charCodeAt(i)) % 100000;
  }
  let seed = (base * 131 + qi * 17 + 9) % 2147483646 + 1;
  const rnd = () => {
    seed = (seed * 48271) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = n - 1; i > 0; i -= 1) {
    const j = Math.floor(rnd() * (i + 1));
    const tmp = idx[i];
    idx[i] = idx[j];
    idx[j] = tmp;
  }
  return idx;
}

function quizBag(lesson) {
  if (!ui.quiz[lesson.id]) ui.quiz[lesson.id] = { picks: {}, locked: false, score: null, total: null };
  return ui.quiz[lesson.id];
}

function visibleQuiz(lesson) {
  return lesson.exam ? (lesson.quiz || []) : visibleOf(lesson.quiz);
}

function hanziOnly(s) {
  return String(s || "").replace(/[^\u3400-\u9fff]/g, "");
}

function lineKey(ln) {
  return ln.z + "|" + ln.p;
}

function speakMap(lesson) {
  const id = String(lesson.id);
  if (!state.speak[id] || typeof state.speak[id] !== "object") state.speak[id] = {};
  return state.speak[id];
}

function speakStat(lesson) {
  const lines = visibleOf(lesson.lines);
  if (!lines.length) return null;
  const bag = state.speak[String(lesson.id)] || {};
  let chuan = 0;
  lines.forEach((ln) => { if (bag[lineKey(ln)] === "chuan") chuan += 1; });
  return { chuan: chuan, n: lines.length };
}

function machineHear(target, heard) {
  const a = hanziOnly(target);
  const b = hanziOnly(heard);
  if (!b) return "Máy không nghe ra chữ Trung. Đối miệng với video, rồi bấm Chuẩn hoặc Chưa.";
  if (a && (b === a || b.includes(a) || a.includes(b))) return "Máy nghe ra đúng chữ: " + b + ". Máy không chấm thanh. Đối với video rồi bấm Chuẩn hoặc Chưa.";
  return "Máy nghe ra: " + b + ". Khác câu mẫu. Nói lại, hoặc đối video rồi tự chấm.";
}

function stopListen() {
  if (!ui.rec) return;
  try { ui.rec.onresult = null; ui.rec.onerror = null; ui.rec.stop(); } catch (err) { /* mic đã tắt */ }
  ui.rec = null;
}

function startListen(lesson, ln) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const key = lineKey(ln);
  if (!SR) {
    ui.hear = { lessonId: String(lesson.id), key: key, note: "Trình duyệt này chưa nhận giọng. Mở bằng Edge hoặc Chrome. Thanh vẫn đối với video rồi bấm Chuẩn hoặc Chưa." };
    ui.keepScroll = true;
    draw();
    return;
  }
  stopListen();
  const rec = new SR();
  ui.rec = rec;
  rec.lang = "zh-CN";
  rec.interimResults = false;
  rec.maxAlternatives = 3;
  ui.hear = { lessonId: String(lesson.id), key: key, note: "Đang nghe. Nói câu mẫu một lần." };
  ui.keepScroll = true;
  draw();
  rec.onresult = (ev) => {
    let best = "";
    const alts = ev.results[0];
    for (let i = 0; i < alts.length; i += 1) {
      const t = alts[i].transcript || "";
      if (hanziOnly(t).length > hanziOnly(best).length) best = t;
    }
    if (!best && alts[0]) best = alts[0].transcript || "";
    ui.hear = { lessonId: String(lesson.id), key: key, note: machineHear(ln.z, best) };
    ui.rec = null;
    ui.keepScroll = true;
    draw();
  };
  rec.onerror = () => {
    ui.hear = { lessonId: String(lesson.id), key: key, note: "Máy không nghe được. Cho phép micro, nói lại, hoặc đối video rồi bấm Chuẩn hoặc Chưa." };
    ui.rec = null;
    ui.keepScroll = true;
    draw();
  };
  try { rec.start(); } catch (err) {
    ui.hear = { lessonId: String(lesson.id), key: key, note: "Máy không mở được micro." };
    ui.rec = null;
    draw();
  }
}

function setLearned(lesson, on) {
  if (!on) {
    delete state.lessons[lesson.id];
    save();
    return;
  }
  const prev = state.lessons[lesson.id] || {};
  let score = prev.score;
  let total = prev.total;
  if (ui.klass && String(ui.klass.id) === String(lesson.id)) {
    const qs = visibleQuiz(lesson);
    const answered = qs.length && qs.every((_, i) => ui.klass.picks[i] !== undefined);
    if (answered) {
      score = 0;
      qs.forEach((q, i) => { if (ui.klass.picks[i] === q.answer) score += 1; });
      total = qs.length;
    }
  }
  state.lessons[lesson.id] = {
    done: true,
    score: score == null ? null : score,
    total: total == null ? null : total,
    at: Date.now(),
    day: todayStr()
  };
  enrollVisible(lesson);
  touchStreak();
  save();
}

function lessonPill(L, next) {
  const st = state.lessons[L.id];
  const sp = speakStat(L);
  const speak = sp ? (sp.chuan === sp.n ? " · nói chuẩn" : " · nói " + sp.chuan + "/" + sp.n) : "";
  if (st && st.done) {
    if (st.total) return st.score + "/" + st.total + speak;
    return "đã học" + speak;
  }
  if (sp && sp.chuan) return "nói " + sp.chuan + "/" + sp.n;
  if (L.id === next.id) return "tiếp theo";
  return "chưa học";
}

function speak(text, rate) {
  if (!window.speechSynthesis) {
    toast("Trình duyệt này không đọc tiếng Trung. Nhái theo video.");
    return;
  }
  const voices = speechSynthesis.getVoices();
  const voice = voices.find((v) => /zh[-_]CN/i.test(v.lang) && /xiaoxiao|yunxi|huihui|natural/i.test(v.name))
    || voices.find((v) => /zh[-_]CN/i.test(v.lang))
    || voices.find((v) => /^zh/i.test(v.lang));
  if (!voice) {
    toast("Máy chưa có giọng tiếng Trung. Vào Cách học để tải giọng. Tối nay nhái video.");
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = rate || 0.85;
  u.voice = voice;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function toast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { t.hidden = true; }, 4600);
}

function hello() {
  const h = new Date().getHours();
  if (h < 4 || h >= 18) return "Tối nay";
  if (h < 11) return "Sáng nay";
  return "Buổi này";
}

function lessonFromHash() {
  const m = location.hash.match(/^#\/bai\/([A-Za-z0-9-]+)$/);
  if (!m) return null;
  return findLesson(m[1]);
}

function classFromHash() {
  const m = location.hash.match(/^#\/lop\/([A-Za-z0-9-]+)$/);
  if (!m) return null;
  return findLesson(m[1]);
}

function stageFromHash() {
  const m = (location.hash || "").match(/^#\/cap\/([a-z0-9]+)$/);
  return m ? m[1] : "";
}

function currentHash() {
  const h = location.hash || "#/";
  if (h === "#" || h === "#/") return "home";
  if (h.startsWith("#/bai/")) return "lesson";
  if (h.startsWith("#/lop/")) return "class";
  if (h.startsWith("#/cap/")) return "stage";
  if (h.startsWith("#/on")) return "review";
  if (h.startsWith("#/bang")) return "chart";
  if (h.startsWith("#/cach")) return "help";
  return "home";
}

function nav(here) {
  const due = dueCards().length;
  const item = (href, id, label) => {
    const cur = here === id ? ' aria-current="page"' : "";
    return `<a href="${href}"${cur}>${label}</a>`;
  };
  return `
    <header class="top">
      <a class="brand" href="#/"><span class="seal">汉</span><span><strong>Lộ trình tiếng Trung</strong><small>từ số 0, theo HSK 3.0</small></span></a>
      <nav>
        ${item("#/", "home", "Lộ trình")}
        ${item("#/on", "review", "Ôn từ" + (due ? " <em>" + due + "</em>" : ""))}
        ${item("#/bang", "chart", "Bảng âm")}
        ${item("#/cach", "help", "Cách học")}
      </nav>
      <div class="tools">
        <label>Mức
          <select id="mode" aria-label="Số phút tối nay">
            <option value="30">30 phút</option>
            <option value="45">45 phút</option>
            <option value="60">60 phút</option>
          </select>
        </label>
        <button type="button" data-act="theme">${state.theme === "dark" ? "Nền sáng" : "Nền tối"}</button>
      </div>
    </header>`;
}

function shell(here, main) {
  return nav(here) + '<main>' + main + '</main><p class="foot">Video là của các kênh giáo viên, nhúng để học. Phần tiếng Việt, bài tập và tiến độ nằm trên máy này, không có tài khoản.</p>';
}

function lessonLink(L, next) {
  const st = state.lessons[L.id];
  const cls = st && st.done ? "day done" : (L.id === next.id ? "day now" : "day");
  const pill = lessonPill(L, next);
  const num = typeof L.id === "number" ? String(L.id).padStart(2, "0") : String(L.week || "").padStart(2, "0");
  return `<a class="${cls}" href="#/bai/${L.id}"><span class="n">${num}</span><span><strong>${escapeHtml(L.title)}</strong><small>${escapeHtml(L.promise)}</small></span><span class="pill">${escapeHtml(pill)}</span></a>`;
}

function renderHome() {
  const next = nextLesson();
  const all = catalog();
  const done = doneCount(all);
  const pct = Math.round(done / all.length * 100);
  const due = dueCards().length;
  const stages = (typeof PATH_STAGES === "undefined" ? [] : PATH_STAGES).map((s, i) => {
    const list = stageLessons(s.id);
    const d = doneCount(list);
    const num = s.id === "hsk79" ? "7–9" : String(i).padStart(2, "0");
    const doneAll = list.length && d === list.length;
    return `<a class="day${doneAll ? " done" : ""}" href="#/cap/${s.id}"><span class="n">${num}</span><span><strong>${escapeHtml(s.title)}</strong><small>${escapeHtml(s.words)} · ${escapeHtml(s.months)}</small></span><span class="pill">${list.length ? d + "/" + list.length : "nhịp"}</span></a>`;
  }).join("");
  return shell("home", `
    <section class="hero">
      <div>
        <p class="kicker">${hello()}</p>
        <h1>${escapeHtml(next.title)}</h1>
        <p>${escapeHtml(next.promise)}</p>
        <div class="stats">
          <div><strong>${done}/${all.length}</strong>bài đã bấm xong</div>
          <div><strong>${state.streak.n || 0}</strong>ngày liền</div>
          <div><strong>${Object.keys(state.cards).length}</strong>từ trong sổ</div>
          <div><strong>${due}</strong>từ đến hạn</div>
        </div>
        <div class="bar" role="img" aria-label="Đã xong ${pct}%"><span style="width:${pct}%"></span></div>
      </div>
      <div>
        <div class="mark">${escapeHtml(next.mark || "汉")}</div>
        <p><a class="primary" href="#/bai/${next.id}">Học tiếp</a></p>
        ${due ? `<p><a href="#/on">Ôn ${Math.min(due, reviewLimit())} từ trước</a></p>` : ""}
      </div>
    </section>
    <section class="section">
      <h2>Chuẩn và giờ</h2>
      <div class="block">
        <p>Lộ trình theo HSK 3.0. Đề cương tháng 11/2025, có hiệu lực tháng 7/2026. Kỳ thi chính thức đầu là 13/12/2026. Từ số 0 không kịp kỳ đó.</p>
        <p>Cơ quan thi không công bố bảng giờ cho đề cương mới. Số giờ trên mỗi cấp là dải người học đang dùng để lập kế hoạch: HSK 1 khoảng 80–150 giờ từ số 0, HSK 4 khoảng 500–1.000 giờ, HSK 6 khoảng 1.500–2.500 giờ, bậc 7–9 khoảng 3.000–5.000 giờ. Mỗi tối 45 phút thì một giờ chuẩn là khoảng một tối cộng một phần ba.</p>
        <p>Bấm xong một bài chưa phải xong một cấp. Bài HSK có bốn tối. Từ cấp 3 trở đi, bài trên trang là xương ngữ pháp và cách nghe. Phần từ còn lại đi theo nhịp ghi ở trang cấp.</p>
        <p>Video là giáo viên người Việt. Phần tiếng Việt ở dưới mỗi bài khóa luật. Từ cấp 5 trở đi chưa có lớp miễn phí trọn bộ, nên video là cách nghe và bài sách, không phải hết từ của cấp.</p>
        <p>Người chưa biết gì học từ buổi 1. Tuần 1 chỉ tai và miệng, vì sai thanh là sai từ. Tuần 2 đến 4 mỗi tối một mẫu câu. HSK 1 là vòng hai, đúng thứ tự sách. Chưa xong cấp trước thì chưa mở cấp sau.</p>
      </div>
    </section>
    <section class="week"><h2>Các cấp</h2><div class="days">${stages}</div></section>
  `);
}

function renderStage() {
  const id = stageFromHash();
  const stage = (typeof PATH_STAGES === "undefined" ? [] : PATH_STAGES).find((s) => s.id === id);
  if (!stage) return shell("home", "<p>Không có cấp này.</p><p><a href=\"#/\">Về lộ trình</a></p>");
  const next = nextLesson();
  const list = stageLessons(id);
  let body = "";
  if (id === "nen") {
    body = WEEKS.map((w) => {
      const days = LESSONS.filter((L) => L.week === w.n).map((L) => lessonLink(L, next)).join("");
      return `<section class="week"><h2>Tuần ${w.n}. ${escapeHtml(w.title)} <span>${escapeHtml(w.aim)}</span></h2><div class="days">${days}</div></section>`;
    }).join("");
  } else if (list.length) {
    body = `<div class="days">${list.map((L) => lessonLink(L, next)).join("")}</div>`;
  } else {
    body = "<p class='muted'>Cấp này chưa có video bài học miễn phí trọn bộ. Nhịp ở trên là việc của mỗi tuần.</p>";
  }
  const blurb = (stage.blurb || []).map((p) => "<p>" + escapeHtml(p) + "</p>").join("");
  const earlier = earlierStageOpen(id);
  const gate = earlier ? `<div class="banner">Chưa xong ${escapeHtml(earlier.title)}. Làm cấp đó trước. Cấp này dùng âm và câu của cấp trước. <a href="#/cap/${earlier.id}">Mở ${escapeHtml(earlier.title)}</a></div>` : "";
  return shell("home", `
    ${gate}
    <p class="kicker">${escapeHtml(stage.kicker)}</p>
    <h1>${escapeHtml(stage.title)}</h1>
    <p class="promise">${escapeHtml(stage.words)}. ${escapeHtml(stage.hours)}.</p>
    <div class="block">${blurb}</div>
    ${body}
  `);
}

function videoHtml(v) {
  const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
  if (v.start) params.set("start", String(v.start));
  if (v.end) params.set("end", String(v.end));
  const src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) + "?" + params.toString();
  const watch = "https://www.youtube.com/watch?v=" + encodeURIComponent(v.id) + (v.start ? "&t=" + v.start + "s" : "");
  return `<figure class="video">
    <div class="player"><iframe src="${src}" title="${escapeHtml(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div>
    <figcaption><span class="tag">${escapeHtml(v.channel)}</span> ${escapeHtml(v.title)} · ${v.min} phút${v.tier > 30 ? " · khi có " + v.tier + " phút" : ""} · <a href="${watch}" target="_blank" rel="noopener">Mở YouTube</a>${v.note ? "<p>" + rich(v.note) + "</p>" : ""}</figcaption>
  </figure>`;
}

function blocksHtml(lesson) {
  return visibleOf(lesson.blocks).map((b) => {
    const lines = (b.lines || []).map((line) => "<p>" + rich(line) + "</p>").join("");
    const table = b.table ? `<div class="tablewrap"><table><thead><tr>${b.table.head.map((h) => "<th>" + rich(h) + "</th>").join("")}</tr></thead><tbody>${b.table.rows.map((r) => "<tr>" + r.map((c) => "<td>" + rich(c) + "</td>").join("") + "</tr>").join("")}</tbody></table></div>` : "";
    return `<section class="block"><h3>${escapeHtml(b.h)}</h3>${lines}${table}</section>`;
  }).join("");
}

function wordsHtml(lesson) {
  const words = visibleOf(lesson.vocab);
  if (!words.length) return "<p class='muted'>Buổi này không thêm từ mới.</p>";
  return `<div class="words">${words.map((v) => {
    const note = v.note || (v.sv ? "Hán Việt: " + v.sv : "");
    return `<article class="word">
      <div class="hz">${escapeHtml(v.z)}</div>
      <div class="py">${pyHtml(v.p)}</div>
      <div>${escapeHtml(v.vi)}</div>
      ${note ? `<p class="muted">${rich(note)}</p>` : ""}
      <div class="row">
        <button type="button" class="ghost" data-act="speak" data-text="${escapeHtml(v.z)}">Nghe</button>
        <button type="button" class="ghost" data-act="speak" data-text="${escapeHtml(v.z)}" data-rate="0.65">Chậm</button>
      </div>
    </article>`;
  }).join("")}</div>`;
}

function talkControls(lesson, ln) {
  const key = lineKey(ln);
  const mark = (state.speak[String(lesson.id)] || {})[key] || "";
  const live = ui.hear && ui.hear.lessonId === String(lesson.id) && ui.hear.key === key;
  const note = live ? `<p class="heard">${escapeHtml(ui.hear.note)}</p>` : "";
  return `<div class="row">
      <button type="button" data-act="speak" data-text="${escapeHtml(ln.z)}">Nghe mẫu</button>
      <button type="button" data-act="hear" data-lesson="${escapeHtml(lesson.id)}" data-key="${escapeHtml(key)}">Thu và chấm chữ</button>
      <button type="button" class="${mark === "chuan" ? "markon" : ""}" data-act="mark-speak" data-lesson="${escapeHtml(lesson.id)}" data-key="${escapeHtml(key)}" data-mark="chuan">Chuẩn</button>
      <button type="button" class="${mark === "chua" ? "markoff" : ""}" data-act="mark-speak" data-lesson="${escapeHtml(lesson.id)}" data-key="${escapeHtml(key)}" data-mark="chua">Chưa</button>
    </div>${note}<p class="muted">Máy chỉ nghe ra chữ. Thanh đối với video, rồi mới bấm Chuẩn hoặc Chưa.</p>`;
}

function linesHtml(lesson) {
  const lines = visibleOf(lesson.lines);
  if (!lines.length) return "";
  return lines.map((ln) => `<div class="line line-talk"><div><div class="hz">${escapeHtml(ln.z)}</div><div class="py">${pyHtml(ln.p)}</div><div class="muted">${escapeHtml(ln.vi)}</div>${talkControls(lesson, ln)}</div></div>`).join("");
}

function scenesHtml(lesson) {
  return (lesson.scenes || []).map((sc) => `
    <details class="scene">
      <summary>${escapeHtml(sc.title)}</summary>
      <p>${escapeHtml(sc.you)}</p>
      <p class="muted">Nói xong mới mở câu mẫu.</p>
      ${sc.model.map((ln) => `<div class="line line-talk"><div><div class="hz">${escapeHtml(ln.z)}</div><div class="py">${pyHtml(ln.p)}</div><div class="muted">${escapeHtml(ln.vi)}</div>${talkControls(lesson, ln)}</div></div>`).join("")}
    </details>`).join("");
}

function oralHtml(lesson) {
  if (!lesson.oral || !lesson.oral.length) return "";
  const saved = state.oral[lesson.id] || {};
  return `<div class="block"><h3>Tự kiểm</h3>${lesson.oral.map((text, i) => `<label class="check"><input type="checkbox" data-oral="${i}" data-lesson="${lesson.id}" ${saved[i] ? "checked" : ""}> <span>${escapeHtml(text)}</span></label>`).join("")}</div>`;
}

function quizHtml(lesson) {
  const qs = visibleQuiz(lesson);
  const bag = quizBag(lesson);
  const items = qs.map((q, i) => {
    const order = choiceOrder(lesson.id, i, q.choices.length);
    const pick = bag.picks[i];
    const buttons = order.map((orig, visual) => {
      let cls = "";
      if (!bag.locked && pick === orig) cls = "selected";
      if (bag.locked && orig === q.answer) cls = "good";
      if (bag.locked && pick === orig && orig !== q.answer) cls = "bad";
      return `<button type="button" class="${cls}" data-act="pick" data-qi="${i}" data-choice="${orig}" data-key="${visual}" ${bag.locked ? "disabled" : ""}>${visual + 1}. ${rich(q.choices[orig])}</button>`;
    }).join("");
    const spoken = q.speak ? `<div class="row"><span class="hz">${escapeHtml(q.speak)}</span><button type="button" data-act="speak" data-text="${escapeHtml(q.speak)}">Nghe</button></div>` : "";
    const why = bag.locked ? `<p class="why">${rich(q.why)}</p>` : "";
    return `<article class="q"><strong>Câu ${i + 1}.</strong> ${rich(q.prompt)}${spoken}<div class="choices">${buttons}</div>${why}</article>`;
  }).join("");
  const allPicked = qs.every((_, i) => bag.picks[i] !== undefined);
  const oralOk = !lesson.gateOral || (lesson.oral || []).every((_, i) => state.oral[lesson.id] && state.oral[lesson.id][i]);
  let foot = "";
  if (!bag.locked) {
    foot = `<p><button type="button" class="primary" data-act="submit" data-lesson="${lesson.id}" ${allPicked ? "" : "disabled"}>Chấm bài</button> ${allPicked ? "" : '<span class="muted">Chọn hết các câu rồi hãy chấm.</span>'}</p>`;
  } else {
    const prev = state.lessons[lesson.id];
    const finishLabel = lesson.stage ? "Xong bài, đưa từ vào sổ" : "Xong buổi, đưa từ vào sổ";
    foot = `<div class="block" id="ketqua"><p class="score">${bag.score}/${bag.total}</p><p>${band(bag.score, bag.total, lesson)}</p><p class="row"><button type="button" class="primary" data-act="finish" data-lesson="${lesson.id}" ${oralOk ? "" : "disabled"}>${finishLabel}</button><button type="button" data-act="retry" data-lesson="${lesson.id}">Làm lại</button></p>${oralOk ? "" : "<p class='muted'>Tick đủ các tối của bài rồi hãy bấm xong. Bốn tối mới đủ giờ của bài này.</p>"}${prev && prev.done ? `<p class="muted">Lần lưu trước: ${prev.score}/${prev.total}.</p>` : ""}</div>`;
  }
  return items + foot;
}

function band(score, total, lesson) {
  if (!lesson.exam) {
    if (score === total) return "Hết câu của buổi này. Nói lại câu bạn vừa đúng, một lần, rồi nghỉ.";
    return "Câu sai nằm ngay phía trên, có lời giải. Nói lại câu đó trước khi bấm xong buổi.";
  }
  const pct = score / total;
  if (lesson.stage) {
    if (pct >= 0.8) return "Đủ để mở cấp sau trên lộ trình. Giờ nghe và sổ từ của cấp này vẫn còn, điểm này không phải điểm đỗ chính thức.";
    if (pct >= 0.6) return "Làm lại bài của câu sai, rồi thi lại.";
    return "Quay lại các bài đầu của cấp này. Chưa thêm từ cấp sau.";
  }
  if (pct >= 0.85) return "Đủ chắc để mở HSK 1 trên lộ trình. Phần nền chưa phải đề HSK.";
  if (pct >= 0.6) return "Làm lại buổi 7, buổi 14 và buổi 21. Rồi bấm làm lại bài này. Chưa thêm từ mới.";
  return "Tuần 1 còn hổng. Quay lại buổi của câu sai, nhất là thanh, ü, và câu tính từ. HSK 1 chưa mở.";
}

function renderLesson() {
  const lesson = lessonFromHash();
  if (!lesson) return shell("home", "<p>Không có buổi này.</p>");
  state.lastLesson = lesson.id;
  const due = dueCards().length;
  const videos = visibleOf(lesson.videos);
  const plan = visibleOf(lesson.plan);
  const saved = state.lessons[lesson.id];
  const videoBlock = videos.length
    ? videos.map(videoHtml).join("")
    : "<p class='muted'>Ở mức " + state.mode + " phút, buổi này không mở video. Phần video đang để ở mức dài hơn. Bài bên dưới là đủ cho tối nay.</p>";
  const kicker = lesson.kicker || ("Tuần " + lesson.week + " · Buổi " + lesson.id + "/30");
  const videoLead = lesson.videoLead || "Dừng sau mỗi câu mẫu và nói lại. Tuần 1 đừng nhìn phụ đề. Giọng máy chỉ là nhắc, tai thật lấy từ video.";
  const gap = firstGapBefore(lesson);
  const prev = priorLesson(lesson);
  const gapHtml = gap ? `<div class="banner">Buổi này đứng sau buổi chưa xong. Làm <a href="#/bai/${gap.id}">${escapeHtml(gap.title)}</a> trước. Bài sau dùng âm và câu của bài trước.</div>` : "";
  const recallHtml = prev ? `<div class="block"><p><strong>Trước khi mở video.</strong> Nói lại việc buổi trước, không nhìn chữ: ${escapeHtml(prev.promise)}</p></div>` : "";
  const skipNote = !lesson.stage && lesson.week > 1 ? " Câu trong video không có trong phần giảng thì bỏ qua." : "";
  return shell("lesson", `
    ${gapHtml}
    ${due ? `<div class="banner">Có ${due} từ đến hạn. Với mức ${state.mode} phút, ôn ${Math.min(due, reviewLimit())} từ rồi hãy xem video. <a href="#/on">Ôn trước</a></div>` : ""}
    ${recallHtml}
    <article class="lesson">
      <p class="kicker">${escapeHtml(kicker)}${saved && saved.done ? " · đã học" + (saved.total ? " " + saved.score + "/" + saved.total : "") : ""}</p>
      <h1>${escapeHtml(lesson.title)}</h1>
      <p class="promise">${escapeHtml(lesson.promise)}</p>
      ${learnedBar(lesson)}
      <div class="jump">
        <button type="button" data-act="jump" data-to="video">Video</button>
        <button type="button" data-act="jump" data-to="giang">Giảng</button>
        <button type="button" data-act="jump" data-to="tu">Từ</button>
        <button type="button" data-act="jump" data-to="noi">Nói</button>
        <button type="button" data-act="jump" data-to="quiz">Quiz</button>
      </div>
      <ol class="plan">${plan.map((p) => `<li><strong>${escapeHtml(p.m)}.</strong> ${escapeHtml(p.t)}</li>`).join("")}</ol>
      <section class="section" id="video"><h2>Video</h2><p class="muted">${escapeHtml(videoLead)}${escapeHtml(skipNote)}</p>${videoBlock}</section>
      <section class="section" id="giang"><h2>Giảng bằng tiếng Việt</h2>${blocksHtml(lesson)}</section>
      <section class="section" id="tu"><h2>Từ của buổi</h2>${wordsHtml(lesson)}</section>
      <section class="section" id="noi"><h2>Nói theo</h2>${linesHtml(lesson)}${scenesHtml(lesson)}${oralHtml(lesson)}</section>
      <section class="section" id="quiz"><h2>${lesson.exam ? "20 câu của tháng" : "Quiz"}</h2>${quizHtml(lesson)}</section>
    </article>
  `);
}

function makeRev() {
  const all = dueCards();
  return {
    queue: all.slice(0, reviewLimit()).map((card) => ({ card, replayed: false })),
    totalDue: all.length,
    idx: 0,
    show: false
  };
}

function renderReview() {
  if (!ui.rev) ui.rev = makeRev();
  const rev = ui.rev;
  const backId = state.lastLesson || nextLesson().id;
  if (!rev.queue.length) {
    const waiting = Object.keys(state.cards).length;
    return shell("review", `
      <h1>Ôn từ</h1>
      <div class="block">
        <p>${waiting ? "Hết từ đến hạn. Từ vừa học sẽ hiện vào tối hôm sau." : "Sổ từ còn trống. Học xong một buổi, từ sẽ vào sổ và hiện lại tối hôm sau."}</p>
        <p>Nếu vắng vài hôm, đừng ôn một cục. Mỗi tối chỉ ôn đúng số từ của mức phút. Phần còn lại để tối sau.</p>
        <p><a class="primary" href="#/bai/${backId}">Về buổi ${backId}</a></p>
      </div>`);
  }
  if (rev.idx >= rev.queue.length) {
    return shell("review", `
      <h1>Hết lượt ôn</h1>
      <div class="block">
        <p>Đã ôn ${rev.queue.length} thẻ${rev.totalDue > rev.queue.length ? ". Còn " + (rev.totalDue - reviewLimit()) + " từ đến hạn, để tối sau hoặc chuyển lên 60 phút." : "."}</p>
        <p class="row"><a class="primary" href="#/bai/${backId}">Về buổi ${backId}</a><button type="button" data-act="rev-reset">Ôn tiếp nếu còn từ</button></p>
      </div>`);
  }
  const item = rev.queue[rev.idx];
  const c = item.card;
  const face = rev.show
    ? `<div class="py">${pyHtml(c.p)}</div><p>${escapeHtml(c.vi)}</p>${c.note ? `<p class="muted">${rich(c.note)}</p>` : ""}<p class="muted">Buổi ${c.from}</p>
       <div class="grades">
         <button type="button" data-act="grade" data-grade="0" data-key="0">1 Quên</button>
         <button type="button" data-act="grade" data-grade="1" data-key="1">2 Khó</button>
         <button type="button" data-act="grade" data-grade="2" data-key="2">3 Nhớ</button>
         <button type="button" data-act="grade" data-grade="3" data-key="3">4 Dễ</button>
       </div>`
    : `<p><button type="button" class="primary" data-act="reveal">Hiện nghĩa</button></p>`;
  return shell("review", `
    <p class="kicker">Thẻ ${rev.idx + 1}/${rev.queue.length}${rev.totalDue > reviewLimit() ? " · đến hạn cả thảy " + rev.totalDue : ""}</p>
    <article class="card rev">
      <div class="hz">${escapeHtml(c.z)}</div>
      <p class="row" style="justify-content:center">
        <button type="button" data-act="speak" data-text="${escapeHtml(c.z)}">Nghe</button>
        <button type="button" data-act="speak" data-text="${escapeHtml(c.z)}" data-rate="0.65">Chậm</button>
      </p>
      ${face}
    </article>
  `);
}

function renderChart() {
  const groups = CHART.map((g) => `
    <section class="block">
      <h3>${escapeHtml(g.h)}</h3>
      <p class="muted">${escapeHtml(g.tip)}</p>
      <div class="chips">${g.items.map((it) => `<button type="button" data-act="speak" data-text="${escapeHtml(it[0])}"><span class="hz">${escapeHtml(it[0])}</span><span class="py">${pyHtml(it[1])}</span><span class="muted">${escapeHtml(it[2])}</span></button>`).join("")}</div>
    </section>`).join("");
  const rules = RULES.map((r) => `<tr><td>${rich(r[0])}</td><td>${rich(r[1])}</td><td>${rich(r[2])}</td></tr>`).join("");
  return shell("chart", `
    <h1>Bảng âm và luật dùng mỗi tối</h1>
    <p class="legend"><span class="tn1">thanh 1</span><span class="tn2">thanh 2</span><span class="tn3">thanh 3</span><span class="tn4">thanh 4</span><span class="tn0">thanh nhẹ</span></p>
    <p>Bấm để nghe chữ. Giọng máy hay lệch thanh 3. Nếu lệch, tắt và quay lại video buổi 1 đến buổi 7.</p>
    <div class="groups">${groups}</div>
    <section class="section"><h2>Sáu luật</h2><div class="tablewrap"><table><tbody>${rules}</tbody></table></div></section>
  `);
}

function renderHelp() {
  const sources = SOURCES.map((s) => `<li><a href="${escapeHtml(s[2])}" target="_blank" rel="noopener">${escapeHtml(s[0])}</a> — ${escapeHtml(s[1])}</li>`).join("");
  return shell("help", `
    <article class="help">
      <h1>Cách học một mình</h1>
      <p>Mỗi tối một buổi, theo thứ tự. 30 phút là phần gắn mức 30. 45 phút thêm phần mức 45. 60 phút mới mở phần mức 60. Đổi mức ở góc trên, trang sẽ hiện hoặc giấu bài cho khớp.</p>
      <h2>Một tối đi theo thứ này</h2>
      <p>Nói lại việc buổi trước, không nhìn chữ. Ôn từ đến hạn, nếu có. Xem video và dừng để nhái. Câu không có trong phần giảng thì bỏ qua. Đọc phần tiếng Việt. Nói các câu mẫu. Làm quiz. Bấm xong buổi. Từ mới hiện lại vào tối hôm sau, không hiện lại ngay trong đêm, vì vừa học xong.</p>
      <h2>Vì sao thứ tự này</h2>
      <p>Sai thanh là sai từ, nên tuần 1 chưa nhồi chữ và chưa nhồi hội thoại. Mỗi tối sau đó chỉ thêm một mẫu câu. Nhớ lại trước khi xem giúp giữ âm đã học. Video giáo trình dài hơn bài của tối. Hết 30 buổi nền mới vào HSK 1. Vòng đó học lại 15 bài sách vì vòng đầu chỉ lấy câu để sống, chưa đủ 300 từ và chưa đủ giờ. Điểm trên trang không phải điểm đỗ.</p>
      <h2>Giáo viên, chấm nói, dấu đã học</h2>
      <p>Nút Vào lớp mở giáo viên của đúng bài đó. Giáo viên giảng từng đoạn đã viết, rồi hỏi từng câu. Trang này không có mô hình tự viết bài mới, vì bài mới dễ bịa thanh và bịa luật.</p>
      <p>Thu và chấm chữ dùng micro của Edge hoặc Chrome. Máy chỉ đối chữ. Thanh thì nghe video rồi bấm Chuẩn hoặc Chưa. Đánh dấu đã học thì buổi đó hiện trên lộ trình. Bỏ dấu nếu muốn học lại.</p>
      <h2>Giọng đọc trên máy</h2>
      <p>Windows: Cài đặt, Thời gian và ngôn ngữ, Ngôn ngữ, thêm Tiếng Trung giản thể, rồi tải Giọng nói. Chrome hoặc Edge sẽ dùng giọng đó cho nút Nghe. Buổi 1 đến buổi 7 vẫn lấy tai từ video, không lấy từ giọng máy.</p>
      <h2>Dữ liệu ở đâu</h2>
      <p>Tiến độ nằm trong trình duyệt này, khóa han-thang1-v1. Không có tài khoản, không gửi lên mạng. Đổi máy thì xuất bản lưu rồi nhập lại.</p>
      <p class="row">
        <button type="button" data-act="export">Tải bản lưu</button>
        <label class="btn">Nhập bản lưu<input id="import" type="file" accept="application/json,.json" hidden></label>
        <button type="button" data-act="reset">Xóa tiến độ</button>
      </p>
      <h2>Mở trang này</h2>
      <p>Bấm đúp <span class="han">index.html</span> là học được. Nếu khung video trắng, bấm đúp start.ps1 trong thư mục này, rồi mở <span class="han">http://127.0.0.1:8765</span>. Địa chỉ đó là chính máy này. Tắt máy, hoặc tắt cửa sổ server, là trang tắt. Máy khác trong nhà cũng không vào được.</p>
      <h2>Tắt máy vẫn học được</h2>
      <p>Địa chỉ miễn phí: <a href="https://chuquoctri.github.io/tqtungcua/">chuquoctri.github.io/tqtungcua</a>. Tắt máy nhà vẫn mở được. Trang không có mật khẩu. Ai có đường dẫn cũng đọc được bài. Sổ từ của mỗi trình duyệt vẫn trống, vì tiến độ không nằm trên máy chủ. Máy đang học ở localhost thì xuất bản lưu rồi nhập lại trên địa chỉ này.</p>
      <h2>Video lấy từ đâu</h2>
      <ul>${sources}</ul>
      <p>Trang chủ là cả lộ trình HSK 3.0, từ phần nền tới bậc 7–9. Giờ trên mỗi cấp là dải lập kế hoạch, vì đề cương mới không kèm bảng giờ chính thức. Bài cấp 1 và cấp 2 đi theo giáo trình mới. Từ cấp 3, bài trên trang là ngữ pháp, cách nghe và nhịp từ. Hết video của một cấp chưa phải đỗ cấp đó.</p>
    </article>
  `);
}

function learnedBar(lesson) {
  const on = state.lessons[lesson.id] && state.lessons[lesson.id].done;
  const sp = speakStat(lesson);
  const say = sp ? " Nói đã chấm chuẩn " + sp.chuan + "/" + sp.n + " câu." : "";
  return `<div class="block"><p>${on ? "Buổi này đã có dấu trên lộ trình." : "Buổi này chưa có dấu trên lộ trình."}${escapeHtml(say)}</p>
    <p class="row"><a class="primary" href="#/lop/${lesson.id}">Vào lớp với giáo viên</a>
    <button type="button" data-act="mark-lesson" data-lesson="${lesson.id}" data-on="${on ? "0" : "1"}">${on ? "Bỏ dấu đã học" : "Đánh dấu đã học"}</button></p></div>`;
}

function classSteps(lesson) {
  const steps = [{
    kind: "say",
    title: "Vào lớp",
    body: `<p>${escapeHtml(lesson.promise)}</p><p class="muted">Mình giảng đúng bài này và hỏi từng câu. Mình không viết thêm luật, không thêm từ ngoài bài.</p>`
  }];
  visibleOf(lesson.blocks).forEach((b) => {
    const lines = (b.lines || []).map((line) => "<p>" + rich(line) + "</p>").join("");
    const tableNote = b.table ? "<p>Phần này có bảng. Muốn nhìn lại thì mở trang bài.</p>" : "";
    steps.push({ kind: "say", title: b.h, body: lines + tableNote });
  });
  visibleQuiz(lesson).forEach((q, i) => steps.push({ kind: "ask", qi: i, q: q }));
  visibleOf(lesson.lines).forEach((ln) => steps.push({ kind: "talk", ln: ln }));
  steps.push({ kind: "end" });
  return steps;
}

function classState(lesson) {
  if (!ui.klass || String(ui.klass.id) !== String(lesson.id)) ui.klass = { id: lesson.id, step: 0, picks: {} };
  return ui.klass;
}

function renderClass() {
  const lesson = classFromHash();
  if (!lesson) return shell("lesson", "<p>Không có buổi này.</p><p><a href=\"#/\">Về lộ trình</a></p>");
  const steps = classSteps(lesson);
  const ks = classState(lesson);
  if (ks.step >= steps.length) ks.step = steps.length - 1;
  const step = steps[ks.step];
  const sp = speakStat(lesson);
  let body = "";
  if (step.kind === "say") {
    body = `<h2>${escapeHtml(step.title)}</h2>${step.body}<p class="row"><button type="button" class="primary" data-act="class-go" data-dir="1">Tiếp</button></p>`;
  } else if (step.kind === "ask") {
    const q = step.q;
    const order = choiceOrder(lesson.id, step.qi, q.choices.length);
    const pick = ks.picks[step.qi];
    const buttons = order.map((orig, visual) => {
      let cls = "";
      if (pick !== undefined && orig === q.answer) cls = "good";
      if (pick !== undefined && pick === orig && orig !== q.answer) cls = "bad";
      return `<button type="button" class="${cls}" data-act="class-pick" data-qi="${step.qi}" data-choice="${orig}" data-key="${visual}" ${pick !== undefined ? "disabled" : ""}>${visual + 1}. ${rich(q.choices[orig])}</button>`;
    }).join("");
    const why = pick !== undefined ? `<p class="why">${rich(q.why)}</p>` : "";
    const spoken = q.speak ? `<div class="row"><span class="hz">${escapeHtml(q.speak)}</span><button type="button" data-act="speak" data-text="${escapeHtml(q.speak)}">Nghe</button></div>` : "";
    body = `<p class="kicker">Câu hỏi ${step.qi + 1}</p><p>${rich(q.prompt)}</p>${spoken}<div class="choices">${buttons}</div>${why}<p class="row"><button type="button" data-act="class-go" data-dir="-1">Trước</button><button type="button" class="primary" data-act="class-go" data-dir="1">Tiếp</button></p>`;
  } else if (step.kind === "talk") {
    const ln = step.ln;
    body = `<p class="kicker">Đến lượt nói</p><div class="hz">${escapeHtml(ln.z)}</div><div class="py">${pyHtml(ln.p)}</div><p>${escapeHtml(ln.vi)}</p>${talkControls(lesson, ln)}<p class="row"><button type="button" data-act="class-go" data-dir="-1">Trước</button><button type="button" class="primary" data-act="class-go" data-dir="1">Tiếp</button></p>`;
  } else {
    const qs = visibleQuiz(lesson);
    let score = 0;
    let answered = 0;
    qs.forEach((q, i) => {
      if (ks.picks[i] === undefined) return;
      answered += 1;
      if (ks.picks[i] === q.answer) score += 1;
    });
    const on = state.lessons[lesson.id] && state.lessons[lesson.id].done;
    body = `<h2>Hết buổi</h2><p>Câu hỏi đúng ${score}/${qs.length}. Đã trả lời ${answered}/${qs.length}.${sp ? " Nói chuẩn " + sp.chuan + "/" + sp.n + " câu." : ""}</p><p>Dấu đã học hiện trên lộ trình. Điểm này không phải điểm thi.</p><p class="row"><button type="button" data-act="class-go" data-dir="-1">Trước</button><button type="button" class="primary" data-act="mark-lesson" data-lesson="${lesson.id}" data-on="${on ? "0" : "1"}">${on ? "Bỏ dấu đã học" : "Đánh dấu đã học"}</button><a href="#/bai/${lesson.id}">Về trang bài</a></p>`;
  }
  return shell("lesson", `
    <article class="classbox" id="lop">
      <p class="kicker">Giáo viên · bước ${ks.step + 1}/${steps.length}</p>
      <h1>${escapeHtml(lesson.title)}</h1>
      <div class="block">${body}</div>
      <p><a href="#/bai/${lesson.id}">Mở bài đầy đủ</a></p>
    </article>`);
}

function draw() {
  const here = currentHash();
  const root = document.getElementById("app");
  if (here !== "review") ui.rev = null;
  const savedY = window.scrollY;
  let html = "";
  if (here === "lesson") html = renderLesson();
  else if (here === "class") html = renderClass();
  else if (here === "stage") html = renderStage();
  else if (here === "review") html = renderReview();
  else if (here === "chart") html = renderChart();
  else if (here === "help") html = renderHelp();
  else html = renderHome();
  root.innerHTML = html;
  const sel = document.getElementById("mode");
  if (sel) sel.value = String(state.mode);
  if (ui.scrollTo) {
    const el = document.getElementById(ui.scrollTo);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    ui.scrollTo = "";
  } else if (ui.keepScroll) {
    window.scrollTo(0, savedY);
  }
  ui.keepScroll = false;
}

function onClick(e) {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const act = b.dataset.act;
  if (act === "theme") {
    state.theme = state.theme === "dark" ? "light" : "dark";
    save();
    ui.keepScroll = true;
    draw();
    return;
  }
  if (act === "jump") {
    const el = document.getElementById(b.dataset.to);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (act === "speak") {
    speak(b.dataset.text, Number(b.dataset.rate) || 0.85);
    return;
  }
  if (act === "hear") {
    const lesson = findLesson(b.dataset.lesson);
    if (!lesson) return;
    const ln = (lesson.lines || []).concat((lesson.scenes || []).flatMap((sc) => sc.model || [])).find((x) => lineKey(x) === b.dataset.key);
    if (!ln) return;
    startListen(lesson, ln);
    return;
  }
  if (act === "mark-speak") {
    const lesson = findLesson(b.dataset.lesson);
    if (!lesson) return;
    speakMap(lesson)[b.dataset.key] = b.dataset.mark === "chua" ? "chua" : "chuan";
    save();
    ui.keepScroll = true;
    draw();
    return;
  }
  if (act === "mark-lesson") {
    const lesson = findLesson(b.dataset.lesson);
    if (!lesson) return;
    const on = b.dataset.on === "1";
    setLearned(lesson, on);
    toast(on ? "Đã đánh dấu trên lộ trình." : "Đã bỏ dấu buổi này.");
    ui.keepScroll = true;
    draw();
    return;
  }
  if (act === "class-pick") {
    const lesson = classFromHash();
    if (!lesson) return;
    const ks = classState(lesson);
    if (ks.picks[b.dataset.qi] !== undefined) return;
    ks.picks[b.dataset.qi] = Number(b.dataset.choice);
    ui.keepScroll = true;
    draw();
    return;
  }
  if (act === "class-go") {
    const lesson = classFromHash();
    if (!lesson) return;
    const ks = classState(lesson);
    const steps = classSteps(lesson);
    const dir = Number(b.dataset.dir) || 1;
    const step = steps[ks.step];
    if (dir > 0 && step && step.kind === "ask" && ks.picks[step.qi] === undefined) {
      toast("Chọn một câu trả lời đã.");
      return;
    }
    if (dir > 0 && step && step.kind === "talk" && !(state.speak[String(lesson.id)] && state.speak[String(lesson.id)][lineKey(step.ln)])) {
      toast("Bấm Chuẩn hoặc Chưa. Thanh thì đối với video.");
      return;
    }
    ks.step = Math.max(0, Math.min(steps.length - 1, ks.step + dir));
    ui.scrollTo = "lop";
    draw();
    return;
  }
  if (act === "pick") {
    const lesson = lessonFromHash();
    if (!lesson) return;
    const bag = quizBag(lesson);
    if (bag.locked) return;
    bag.picks[b.dataset.qi] = Number(b.dataset.choice);
    ui.keepScroll = true;
    draw();
    return;
  }
  if (act === "submit") {
    const lesson = findLesson(b.dataset.lesson);
    if (!lesson) return;
    const bag = quizBag(lesson);
    const qs = visibleQuiz(lesson);
    let score = 0;
    qs.forEach((q, i) => { if (bag.picks[i] === q.answer) score += 1; });
    bag.locked = true;
    bag.score = score;
    bag.total = qs.length;
    ui.scrollTo = "ketqua";
    draw();
    return;
  }
  if (act === "retry") {
    ui.quiz[b.dataset.lesson] = { picks: {}, locked: false, score: null, total: null };
    draw();
    return;
  }
  if (act === "finish") {
    const lesson = findLesson(b.dataset.lesson);
    if (!lesson) return;
    if (lesson.gateOral && !(lesson.oral || []).every((_, i) => state.oral[lesson.id] && state.oral[lesson.id][i])) return;
    const bag = quizBag(lesson);
    state.lessons[lesson.id] = { done: true, score: bag.score, total: bag.total, at: Date.now(), day: todayStr() };
    const added = enrollVisible(lesson);
    touchStreak();
    save();
    toast(added ? "Đã thêm " + added + " từ. Tối mai chúng sẽ đến hạn." : "Bài đã lưu.");
    location.hash = lesson.stage ? "#/cap/" + lesson.stage : "#/cap/nen";
    return;
  }
  if (act === "reveal") {
    if (ui.rev) ui.rev.show = true;
    draw();
    return;
  }
  if (act === "grade") {
    if (!ui.rev) return;
    const item = ui.rev.queue[ui.rev.idx];
    rate(item.card, Number(b.dataset.grade));
    if (Number(b.dataset.grade) === 0 && !item.replayed) {
      ui.rev.queue.push({ card: item.card, replayed: true });
    }
    ui.rev.idx += 1;
    ui.rev.show = false;
    save();
    draw();
    return;
  }
  if (act === "rev-reset") {
    ui.rev = makeRev();
    draw();
    return;
  }
  if (act === "export") {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "tieng-trung-lo-trinh.json";
    a.click();
    URL.revokeObjectURL(a.href);
    return;
  }
  if (act === "reset") {
    if (!confirm("Xóa toàn bộ tiến độ trên trình duyệt này?")) return;
    const blank = fresh();
    blank.theme = state.theme;
    Object.keys(state).forEach((k) => delete state[k]);
    Object.assign(state, blank);
    ui.quiz = {};
    ui.rev = null;
    save();
    location.hash = "#/";
    draw();
  }
}

function rate(card, grade) {
  const c = state.cards[cardKey(card)];
  if (!c) return;
  c.reps = (c.reps || 0) + 1;
  if (grade === 0) {
    c.reps = 0;
    c.interval = 0;
    c.lapses = (c.lapses || 0) + 1;
    c.due = todayStr();
    return;
  }
  if (grade === 1) c.interval = 1;
  else if (grade === 2) c.interval = Math.max(2, Math.round((c.interval || 1) * 2));
  else c.interval = Math.max(5, Math.round((c.interval || 2) * 3));
  c.due = addDays(todayStr(), c.interval);
}

function onChange(e) {
  if (e.target.id === "mode") {
    state.mode = Number(e.target.value);
    save();
    draw();
    return;
  }
  if (e.target.id === "import" && e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    file.text().then((text) => {
      const data = JSON.parse(text);
      if (!data || typeof data !== "object" || !data.cards || !data.lessons) throw new Error("bad");
      const next = normalize(data);
      Object.keys(state).forEach((k) => delete state[k]);
      Object.assign(state, next);
      ui.quiz = {};
      ui.rev = null;
      save();
      toast("Đã nhập bản lưu.");
      draw();
    }).catch(() => toast("File này không phải bản lưu của trang."));
    return;
  }
  if (e.target.dataset && e.target.dataset.oral !== undefined) {
    const id = e.target.dataset.lesson;
    state.oral[id] = state.oral[id] || {};
    state.oral[id][e.target.dataset.oral] = e.target.checked;
    save();
    ui.keepScroll = true;
    draw();
  }
}

function onKey(e) {
  if (e.target.closest("input, textarea, select")) return;
  const n = "1234".indexOf(e.key);
  if (n < 0) return;
  const btn = document.querySelector('[data-key="' + n + '"]');
  if (btn && !btn.disabled) btn.click();
}

function init() {
  save();
  draw();
  document.body.addEventListener("click", onClick);
  document.body.addEventListener("change", onChange);
  document.addEventListener("keydown", onKey);
  window.addEventListener("hashchange", () => { stopListen(); draw(); });
  if (window.speechSynthesis) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }
}

init();
