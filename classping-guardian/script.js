function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const payments = [
  { name: "Alya Putri Ramadhani", initials: "AP", className: "A1", month: "Agustus 2026", date: "27 Agu 2026", amount: "Rp 250.000", color: "" },
  { name: "Raka Aditya Pratama", initials: "RA", className: "B1", month: "Agustus 2026", date: "27 Agu 2026", amount: "Rp 250.000", color: "alt" },
  { name: "Nayla Zahra Aulia", initials: "NZ", className: "A2", month: "Agustus 2026", date: "26 Agu 2026", amount: "Rp 250.000", color: "blue" },
  { name: "Daffa Alfarizi", initials: "DA", className: "B2", month: "Agustus 2026", date: "26 Agu 2026", amount: "Rp 250.000", color: "purple" },
  { name: "Keisha Amalia Putri", initials: "KA", className: "A1", month: "Agustus 2026", date: "25 Agu 2026", amount: "Rp 250.000", color: "alt" }
];

const guardianActivityData = [
  { title: "Melukis dengan Jari", className: "A1", date: "2026-08-27", participants: "8 siswa", status: "Dipublikasi" },
  { title: "Menanam Kacang Hijau", className: "A1", date: "2026-08-27", participants: "12 siswa", status: "Dipublikasi" },
  { title: "Bermain Alat Musik", className: "A2", date: "2026-08-27", participants: "10 siswa", status: "Draf" },
  { title: "Membaca Cerita", className: "B1", date: "2026-08-26", participants: "7 siswa", status: "Dipublikasi" },
  { title: "Eksperimen Sains", className: "B2", date: "2026-08-25", participants: "9 siswa", status: "Dipublikasi" }
];

const guardianAssessmentData = [
  { childId: "alya", name: "Penilaian Keterampilan Motorik", className: "A1", period: "Semester 1", average: "88", status: "Published" },
  { childId: "alya", name: "Penilaian Sosial Emosional", className: "A1", period: "Semester 1", average: "92", status: "Published" },
  { childId: "alya", name: "Penilaian Bahasa Indonesia", className: "A1", period: "Semester 1", average: "84", status: "Draft" },
  { childId: "alya", name: "Penilaian Kreativitas", className: "A1", period: "Semester 1", average: "90", status: "Published" },
  { childId: "jisindo", name: "Penilaian Kemandirian", className: "B2", period: "Semester 1", average: "86", status: "Published" },
  { childId: "jisindo", name: "Penilaian Bahasa & Literasi", className: "B2", period: "Semester 1", average: "79", status: "Published" },
  { childId: "jisindo", name: "Penilaian Motorik Kasar", className: "B2", period: "Semester 1", average: "91", status: "Published" },
  { childId: "jisindo", name: "Penilaian Sosial Emosional", className: "B2", period: "Semester 1", average: "82", status: "Draft" }
];

const guardianPaymentData = [
  { childId: "alya", student: "Alya Putri Ramadhani", month: "Agustus 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Lunas", date: "27 Agu 2026" },
  { childId: "alya", student: "Alya Putri Ramadhani", month: "Juli 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Lunas", date: "26 Jul 2026" },
  { childId: "alya", student: "Alya Putri Ramadhani", month: "Juni 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Lunas", date: "25 Jun 2026" },
  { childId: "alya", student: "Alya Putri Ramadhani", month: "September 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Belum", date: "Belum dibayar" },
  { childId: "alya", student: "Alya Putri Ramadhani", month: "Oktober 2026", type: "Kegiatan Ekskul", nominal: "Rp 180.000", status: "Belum", date: "Belum dibayar" },
  { childId: "jisindo", student: "Jisindo Beaugeste", month: "September 2026", type: "SPP Bulanan", nominal: "Rp 275.000", status: "Belum", date: "Belum dibayar" },
  { childId: "jisindo", student: "Jisindo Beaugeste", month: "Agustus 2026", type: "SPP Bulanan", nominal: "Rp 275.000", status: "Sebagian", date: "Rp 175.000 · 19 Agu 2026" },
  { childId: "jisindo", student: "Jisindo Beaugeste", month: "Juli 2026", type: "SPP Bulanan", nominal: "Rp 275.000", status: "Lunas", date: "9 Jul 2026" },
  { childId: "jisindo", student: "Jisindo Beaugeste", month: "Juni 2026", type: "SPP Bulanan", nominal: "Rp 275.000", status: "Lunas", date: "7 Jun 2026" }
];

const guardianChildren = {
  alya: { id: "alya", firstName: "Alya", name: "Alya Putri Ramadhani", initials: "AP", className: "A1", classLabel: "Matahari", nis: "26001", badge: "1" },
  jisindo: { id: "jisindo", firstName: "Jisindo", name: "Jisindo Beaugeste", initials: "JB", className: "B2", classLabel: "Bulan", nis: "26008", badge: "2" }
};

let activeGuardianChildId = "alya";

function getGuardianChildId(session = activeSession) {
  const requested = new URLSearchParams(window.location.search).get("child");
  if (requested && guardianChildren[requested]) return requested;
  if (session?.activeChild && guardianChildren[session.activeChild]) return session.activeChild;
  return "alya";
}

function withGuardianChild(href, childId = activeGuardianChildId) {
  if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return href;
  const [path, hash = ""] = href.split("#");
  const [base, query = ""] = path.split("?");
  const params = new URLSearchParams(query);
  params.set("child", childId);
  return `${base}?${params.toString()}${hash ? `#${hash}` : ""}`;
}

function renderJisindoDashboard() {
  if (!parentView) return;
  parentView.innerHTML = `
    <section class="parent-hero panel" id="parentHome">
      <div><p class="eyebrow">PORTAL ORANG TUA</p><h1>Selamat pagi, Ibu Rina! 👋</h1><p>Ini kabar terbaru Jisindo dari TK Harapan Bangsa.</p></div>
      <div class="child-card"><span class="child-avatar child-avatar-blue">JB</span><div><strong>Jisindo Beaugeste</strong><small>Kelas B2 · Bulan · NIS 26008</small></div><span class="active-dot">● Aktif</span></div>
    </section>
    <section class="parent-alert fee-alert warning-alert"><span class="alert-icon"><svg><use href="#icon-bell" /></svg></span><div><strong>SPP Agustus masih kurang Rp 100.000</strong><p>Selesaikan sisa pembayaran bersama tagihan September sebelum 10 September 2026.</p></div><a href="payment.html">Lihat tagihan →</a></section>
    <section class="parent-overview">
      <article class="parent-stat panel"><span class="stat-icon green"><svg><use href="#icon-clipboard" /></svg></span><div><small>Aktivitas minggu ini</small><strong>4 kegiatan</strong><p>9 foto Jisindo</p></div></article>
      <article class="parent-stat panel"><span class="stat-icon purple"><svg><use href="#icon-award" /></svg></span><div><small>Perkembangan</small><strong>Mulai Berkembang</strong><p>Semester 1</p></div></article>
      <article class="parent-stat panel"><span class="stat-icon blue"><svg><use href="#icon-wallet" /></svg></span><div><small>Status SPP Agustus</small><strong class="partial-text">Sebagian</strong><p>Sisa Rp 100.000</p></div></article>
    </section>
    <section class="parent-layout">
      <div class="parent-feed" id="parentActivities">
        <div class="section-heading"><div><h2>Aktivitas Jisindo</h2><p>Foto yang menampilkan Jisindo, dibagikan oleh sekolah.</p></div><a class="text-button" href="student-activity.html">Lihat semua</a></div>
        <article class="parent-activity panel"><div class="parent-photo art-music"><span>🔦</span><span class="privacy-label">Khusus orang tua Jisindo</span></div><div class="parent-activity-copy"><span class="activity-date">HARI INI · 08.30</span><h3>Eksperimen Cahaya dan Bayangan</h3><p>Jisindo mencoba berbagai benda untuk melihat bentuk bayangan yang dihasilkan.</p><div class="teacher-note"><strong>Catatan Bu Nia</strong><p>“Jisindo tekun mengamati perubahan bayangan dan berani menjelaskan temuannya.”</p></div></div></article>
        <article class="parent-activity panel"><div class="parent-photo art-garden"><span>🍂</span><span class="photo-count">3 foto</span></div><div class="parent-activity-copy"><span class="activity-date">KEMARIN · 10.00</span><h3>Kolase Daun Musim Kering</h3><p>Jisindo menyusun daun berdasarkan ukuran dan warna menjadi sebuah gambar.</p></div></article>
      </div>
      <aside class="parent-side">
        <a class="panel assessment-card assessment-card-link" id="parentAssessment" href="assessment.html" aria-label="Buka halaman Penilaian Jisindo"><div class="panel-heading"><div><h2>Penilaian Jisindo</h2><p>Agustus 2026</p></div><span class="report-ready draft-report">Dalam proses</span></div><div class="skill-row"><span>Kemandirian</span><b>BSH</b><div class="progress"><i style="width:82%"></i></div></div><div class="skill-row"><span>Bahasa & Literasi</span><b>MB</b><div class="progress"><i style="width:68%"></i></div></div><div class="skill-row"><span>Motorik Kasar</span><b>BSB</b><div class="progress"><i style="width:91%"></i></div></div><div class="skill-row"><span>Sosial Emosional</span><b>BSH</b><div class="progress"><i style="width:80%"></i></div></div><p class="assessment-key">MB: Mulai Berkembang · BSH: Berkembang Sesuai Harapan · BSB: Berkembang Sangat Baik</p></a>
        <article class="panel fee-card" id="parentFees"><div class="panel-heading"><div><h2>SPP & Tagihan</h2><p>Riwayat pembayaran Jisindo</p></div></div><div class="next-bill overdue-bill"><small>Sisa Agustus + SPP September</small><strong>Rp 375.000</strong><span>Jatuh tempo 10 Sep 2026</span></div><div class="fine-info"><span>!</span><p>Rincian sisa Agustus<br><strong>Rp 100.000</strong></p></div><div class="fee-history"><div><span>Agustus 2026<small>19 Agu · Transfer Bank</small></span><b class="fine-paid">Sebagian</b></div><div><span>Juli 2026<small>9 Jul · Transfer Bank</small></span><b>Lunas</b></div><div><span>Juni 2026<small>7 Jun · QRIS</small></span><b>Lunas</b></div></div><button class="primary-button pay-button" id="openGuardianPayment" type="button">Bayar Sekarang</button></article>
      </aside>
    </section>`;
}

function renderJisindoFeed() {
  const social = document.querySelector(".guardian-social.parent-only");
  if (!social) return;
  const posts = [
    { teacher: "Bu Nia", avatar: "BN", tone: "purple", time: "Hari ini, 08.30", art: "art-music", emoji: "🔦", title: "Eksperimen Cahaya dan Bayangan", caption: "Jisindo mencoba senter pada benda bening dan tidak bening, lalu menceritakan perbedaan bayangannya.", likes: 11, skills: ["Sains", "Bahasa", "Keberanian"], date: "3 SEPTEMBER 2026" },
    { teacher: "Bu Ratna", avatar: "BR", tone: "green", time: "Kemarin, 10.00", art: "art-garden", emoji: "🍂", title: "Kolase Daun Musim Kering", caption: "Jisindo mengelompokkan daun berdasarkan ukuran dan menyusunnya menjadi bentuk kupu-kupu.", likes: 8, skills: ["Kreativitas", "Motorik halus"], date: "2 SEPTEMBER 2026" },
    { teacher: "Bu Sinta", avatar: "BS", tone: "", time: "Senin, 09.15", art: "art-paint", emoji: "🏃", title: "Lintasan Rintangan", caption: "Jisindo menjaga keseimbangan saat melewati balok, melompat, dan menyemangati teman satu kelompoknya.", likes: 15, skills: ["Motorik kasar", "Sosial"], date: "31 AGUSTUS 2026" }
  ];
  social.innerHTML = `
    <div class="guardian-feed-heading"><div><p class="eyebrow">MOMEN JISINDO</p><h1>Aktivitas Jisindo</h1><p>Foto dan cerita kegiatan yang menandai Jisindo.</p></div><span class="feed-privacy-pill"><svg aria-hidden="true"><use href="#icon-lock" /></svg>Khusus Jisindo</span></div>
    <div class="guardian-feed-notice" role="note"><span><svg aria-hidden="true"><use href="#icon-shield" /></svg></span><div><strong>Feed pribadi keluarga Jisindo</strong><p>Anda hanya melihat foto yang sudah ditandai “Jisindo” oleh sekolah.</p></div></div>
    <div class="guardian-feed" aria-label="Feed foto aktivitas Jisindo">
      ${posts.map((post) => `<article class="guardian-post"><header class="guardian-post-header"><span class="post-avatar ${post.tone}" aria-hidden="true">${post.avatar}</span><div><strong>${post.teacher}</strong><span>Kelas B2 — Bulan · ${post.time}</span></div><span class="tagged-label"><svg aria-hidden="true"><use href="#icon-user-check" /></svg>Jisindo ditandai</span></header><div class="guardian-post-photo ${post.art}" role="img" aria-label="Jisindo mengikuti kegiatan ${post.title}" data-download-name="jisindo-${slugify(post.title)}"><span class="photo-scene" aria-hidden="true">${post.emoji}</span></div><div class="guardian-post-content"><div class="post-actions" aria-label="Aksi unggahan"><button class="post-action post-like" type="button" aria-label="Sukai foto ${post.title}" aria-pressed="false"><svg aria-hidden="true"><use href="#icon-heart" /></svg></button><button class="post-action" type="button" aria-label="Lihat komentar foto ${post.title}"><svg aria-hidden="true"><use href="#icon-message" /></svg></button><button class="post-action post-download" type="button" aria-label="Unduh foto ${post.title}"><svg aria-hidden="true"><use href="#icon-download" /></svg></button><button class="post-action post-save" type="button" aria-label="Simpan foto ${post.title}" aria-pressed="false"><svg aria-hidden="true"><use href="#icon-bookmark" /></svg></button></div><p class="post-likes"><span>${post.likes}</span> apresiasi</p><p class="post-caption"><strong>${post.title}</strong> ${post.caption}</p><div class="post-skills" aria-label="Aspek perkembangan">${post.skills.map((skill) => `<span>${skill}</span>`).join("")}</div><p class="post-time">${post.date}</p></div></article>`).join("")}
      <p class="feed-end"><span aria-hidden="true">✓</span><strong>Semua kabar Jisindo sudah dilihat</strong>Foto baru akan muncul setelah sekolah menandai Jisindo.</p>
    </div>`;
}

function updateGuardianLinks(child) {
  document.querySelectorAll(".parent-nav a[href]").forEach((link) => {
    link.href = withGuardianChild(link.getAttribute("href"), child.id);
    if (link.getAttribute("href").startsWith("student-activity.html")) {
      link.childNodes.forEach((node) => { if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) node.textContent = `Aktivitas ${child.firstName}`; });
    }
  });
  document.querySelectorAll("#parentView a[href], .parent-page a[href], .guardian-social a[href]").forEach((link) => {
    link.href = withGuardianChild(link.getAttribute("href"), child.id);
  });
  document.querySelectorAll(".parent-nav .nav-badge").forEach((badge) => { badge.textContent = child.badge; });
}

function setupGuardianProfileMenu(child) {
  const profile = document.querySelector(".profile");
  const actions = profile?.closest(".topbar-actions");
  if (!profile || !actions) return;
  profile.classList.add("profile-trigger");
  profile.setAttribute("role", "button");
  profile.setAttribute("tabindex", "0");
  profile.setAttribute("aria-haspopup", "menu");
  profile.setAttribute("aria-expanded", "false");
  profile.setAttribute("aria-label", "Buka menu keluarga Rina Ramadhani");
  let menu = actions.querySelector(".guardian-profile-menu");
  if (!menu) {
    menu = document.createElement("div");
    menu.className = "guardian-profile-menu";
    menu.hidden = true;
    menu.setAttribute("role", "menu");
    actions.append(menu);
    profile.addEventListener("click", () => {
      const notificationMenu = actions.querySelector(".guardian-notification-menu");
      const notificationButton = actions.querySelector("[data-notification-trigger]");
      if (notificationMenu) notificationMenu.hidden = true;
      notificationButton?.setAttribute("aria-expanded", "false");
      menu.hidden = !menu.hidden;
      profile.setAttribute("aria-expanded", String(!menu.hidden));
    });
    profile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); profile.click(); }
      if (event.key === "Escape") { menu.hidden = true; profile.setAttribute("aria-expanded", "false"); profile.focus(); }
    });
    document.addEventListener("click", (event) => {
      if (!actions.contains(event.target)) { menu.hidden = true; profile.setAttribute("aria-expanded", "false"); }
    });
    menu.addEventListener("click", (event) => {
      const childButton = event.target.closest("[data-child-select]");
      if (childButton) {
        activeSession.activeChild = childButton.dataset.childSelect;
        saveSession(activeSession, Boolean(localStorage.getItem(sessionKey)));
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        window.location.href = `${currentPage}?child=${activeSession.activeChild}`;
      }
      if (event.target.closest("[data-profile-logout]")) logoutGuardian();
    });
  }
  menu.innerHTML = `<div class="family-menu-head"><span class="profile-avatar">RR</span><div><strong>Rina Ramadhani</strong><small>Orang tua · 2 anak</small></div></div><p class="family-menu-label">PILIH ANAK</p>${Object.values(guardianChildren).map((item) => `<button class="family-child-option${item.id === child.id ? " active" : ""}" type="button" role="menuitemradio" aria-checked="${item.id === child.id}" data-child-select="${item.id}"><span class="child-option-avatar ${item.id === "jisindo" ? "blue" : ""}">${item.initials}</span><span><strong>${item.name}</strong><small>Kelas ${item.className} · ${item.classLabel}</small></span><i>${item.id === child.id ? "✓" : ""}</i></button>`).join("")}<div class="family-menu-actions"><a role="menuitem" href="guardian-profile.html?child=${child.id}"><span aria-hidden="true">◉</span>Profil Rina</a><button type="button" role="menuitem" data-profile-logout><svg><use href="#icon-logout" /></svg>Keluar</button></div>`;
}

const guardianNotificationKey = "classping-guardian-notifications";
const defaultGuardianNotifications = [
  { id: "alya-activity-paint", childId: "alya", kind: "activity", title: "Aktivitas baru Alya", message: "Bu Ratna mengunggah laporan Melukis dengan Jari.", time: "Hari ini · 09.05", href: "student-activity.html", read: false },
  { id: "alya-payment-august", childId: "alya", kind: "payment", title: "Bukti pembayaran diterima", message: "Bukti SPP Agustus Alya berhasil diunggah dan sedang diverifikasi.", time: "2 Agu · 13.20", href: "payment.html", read: true },
  { id: "jisindo-activity-shadow", childId: "jisindo", kind: "activity", title: "Aktivitas baru Jisindo", message: "Bu Nia mengunggah Eksperimen Cahaya dan Bayangan.", time: "Hari ini · 08.35", href: "student-activity.html", read: false },
  { id: "jisindo-payment-august", childId: "jisindo", kind: "payment", title: "Bukti pembayaran diterima", message: "Bukti SPP Agustus Jisindo berhasil diunggah dan sudah diperiksa.", time: "19 Agu · 14.10", href: "payment.html", read: true }
];

function loadGuardianNotifications() {
  try {
    const stored = localStorage.getItem(guardianNotificationKey);
    if (stored) return JSON.parse(stored);
    localStorage.setItem(guardianNotificationKey, JSON.stringify(defaultGuardianNotifications));
  } catch {
    return [...defaultGuardianNotifications];
  }
  return [...defaultGuardianNotifications];
}

function saveGuardianNotifications(notifications) {
  try { localStorage.setItem(guardianNotificationKey, JSON.stringify(notifications)); } catch { /* Prototype fallback. */ }
}

function renderGuardianNotifications(menu, trigger, child) {
  const notifications = loadGuardianNotifications();
  const childNotifications = notifications.filter((item) => item.childId === child.id);
  const unreadCount = childNotifications.filter((item) => !item.read).length;
  trigger.setAttribute("aria-label", unreadCount ? `Notifikasi, ${unreadCount} belum dibaca` : "Notifikasi, semua sudah dibaca");
  const badge = trigger.querySelector(".notification-count");
  if (badge) {
    badge.textContent = unreadCount > 9 ? "9+" : String(unreadCount);
    badge.hidden = unreadCount === 0;
  }
  menu.innerHTML = `<div class="notification-menu-head"><div><strong>Notifikasi ${child.firstName}</strong><small>${unreadCount ? `${unreadCount} kabar belum dibaca` : "Semua kabar sudah dibaca"}</small></div><button type="button" data-read-all ${unreadCount ? "" : "disabled"}>Tandai semua dibaca</button></div><div class="notification-list">${childNotifications.length ? childNotifications.map((item) => `<a class="notification-item${item.read ? "" : " unread"}" href="${withGuardianChild(item.href, child.id)}" data-notification-id="${item.id}"><span class="notification-type ${item.kind}" aria-hidden="true">${item.kind === "activity" ? "▣" : "✓"}</span><span><strong>${item.title}</strong><small>${item.message}</small><time>${item.time}</time></span>${item.read ? "" : '<i aria-label="Belum dibaca"></i>'}</a>`).join("") : '<p class="notification-empty">Belum ada notifikasi.</p>'}</div><a class="notification-footer" href="${withGuardianChild("index.html", child.id)}">Buka beranda ${child.firstName}</a>`;
}

function setupGuardianNotifications(child) {
  const actions = document.querySelector(".topbar-actions");
  const profile = actions?.querySelector(".profile");
  if (!actions || !profile) return;
  let trigger = actions.querySelector('[aria-label="Notifikasi"], [data-notification-trigger]');
  if (!trigger) {
    trigger = document.createElement("button");
    trigger.className = "icon-button";
    trigger.type = "button";
    trigger.innerHTML = '<svg><use href="#icon-bell" /></svg><span></span>';
    actions.insertBefore(trigger, profile);
  }
  trigger.dataset.notificationTrigger = "true";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-expanded", "false");
  let menu = actions.querySelector(".guardian-notification-menu");
  if (!menu) {
    menu = document.createElement("section");
    menu.className = "guardian-notification-menu";
    menu.hidden = true;
    menu.setAttribute("aria-label", "Daftar notifikasi");
    actions.append(menu);
    trigger.addEventListener("click", () => {
      const profileMenu = actions.querySelector(".guardian-profile-menu");
      if (profileMenu) profileMenu.hidden = true;
      profile.setAttribute("aria-expanded", "false");
      menu.hidden = !menu.hidden;
      trigger.setAttribute("aria-expanded", String(!menu.hidden));
    });
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { menu.hidden = true; trigger.setAttribute("aria-expanded", "false"); trigger.focus(); }
    });
    document.addEventListener("click", (event) => {
      if (!actions.contains(event.target)) { menu.hidden = true; trigger.setAttribute("aria-expanded", "false"); }
    });
    menu.addEventListener("click", (event) => {
      const item = event.target.closest("[data-notification-id]");
      if (item) {
        const notifications = loadGuardianNotifications();
        const selected = notifications.find((notification) => notification.id === item.dataset.notificationId);
        if (selected) selected.read = true;
        saveGuardianNotifications(notifications);
      }
      if (event.target.closest("[data-read-all]")) {
        const notifications = loadGuardianNotifications();
        notifications.forEach((notification) => { if (notification.childId === activeGuardianChildId) notification.read = true; });
        saveGuardianNotifications(notifications);
        renderGuardianNotifications(menu, trigger, guardianChildren[activeGuardianChildId]);
      }
    });
  }
  trigger.innerHTML = '<svg><use href="#icon-bell" /></svg><span class="notification-count"></span>';
  renderGuardianNotifications(menu, trigger, child);
}

function addGuardianNotification(notification) {
  const notifications = loadGuardianNotifications();
  notifications.unshift({ id: `notice-${Date.now()}`, childId: activeGuardianChildId, read: false, time: "Baru saja", ...notification });
  saveGuardianNotifications(notifications);
  const menu = document.querySelector(".guardian-notification-menu");
  const trigger = document.querySelector("[data-notification-trigger]");
  if (menu && trigger) renderGuardianNotifications(menu, trigger, guardianChildren[activeGuardianChildId]);
}

const schoolContactEmail = "admin@tkharapanbangsa.sch.id";

function getSchoolContactSubject(category, childId) {
  const child = guardianChildren[childId];
  const childName = child?.name || "akun keluarga Rina Ramadhani";
  const subjects = {
    profile: `Permintaan pembaruan profil — ${childName}`,
    bug: `Laporan kendala website — ${childName}`,
    feedback: `Masukan untuk ClassPing — ${childName}`
  };
  return subjects[category] || subjects.profile;
}

function setupGuardianSchoolContact(child) {
  if (!sidebar) return;
  let helpCard = sidebar.querySelector(".guardian-school-help");
  if (!helpCard) {
    helpCard = document.createElement("section");
    helpCard.className = "guardian-school-help";
    helpCard.setAttribute("aria-labelledby", "guardianHelpTitle");
    helpCard.innerHTML = `
      <span class="guardian-help-icon" aria-hidden="true">?</span>
      <div><strong id="guardianHelpTitle">Butuh bantuan?</strong><p>Hubungi sekolah untuk akun, kendala, atau masukan.</p></div>
      <button type="button" data-open-school-contact><span aria-hidden="true">✉</span> Hubungi sekolah</button>`;
    const logout = sidebar.querySelector(".logout");
    sidebar.insertBefore(helpCard, logout || null);
  }

  let contactDialog = document.querySelector("#schoolContactDialog");
  if (!contactDialog) {
    contactDialog = document.createElement("dialog");
    contactDialog.id = "schoolContactDialog";
    contactDialog.className = "school-contact-dialog";
    contactDialog.setAttribute("aria-labelledby", "schoolContactTitle");
    contactDialog.innerHTML = `
      <form id="schoolContactForm">
        <div class="dialog-heading">
          <div><span class="dialog-icon contact-dialog-icon" aria-hidden="true">✉</span><div><h2 id="schoolContactTitle">Hubungi sekolah</h2><p>Kirim permintaan atau masukan ke TK Harapan Bangsa.</p></div></div>
          <button class="close-button" type="button" data-close-school-contact aria-label="Tutup">×</button>
        </div>
        <div class="contact-recipient" aria-label="Alamat penerima"><span>KEPADA</span><strong>TK Harapan Bangsa</strong><small>${schoolContactEmail}</small></div>
        <div class="contact-form-grid">
          <label>Jenis bantuan
            <select name="category" required>
              <option value="profile">Pembaruan profil</option>
              <option value="bug">Kendala pada website</option>
              <option value="feedback">Masukan umum</option>
            </select>
          </label>
          <label>Terkait dengan
            <select name="relatedTo" required></select>
          </label>
        </div>
        <label>Subjek
          <input name="subject" type="text" required maxlength="120" autocomplete="off" />
        </label>
        <label>Pesan
          <textarea name="message" required rows="5" maxlength="1500" placeholder="Jelaskan permintaan atau kendala Anda secara singkat. Untuk laporan bug, sertakan halaman dan langkah yang dilakukan."></textarea>
        </label>
        <p class="contact-dialog-note"><span aria-hidden="true">i</span>Demi keamanan, jangan cantumkan kata sandi atau data pembayaran. Draf akan dibuka di aplikasi email Anda sebelum dikirim.</p>
        <p class="contact-status" id="schoolContactStatus" role="status" aria-live="polite"></p>
        <div class="dialog-actions">
          <button class="secondary-button" type="button" data-close-school-contact>Batal</button>
          <button class="primary-button" type="submit"><span aria-hidden="true">✉</span>Buka aplikasi email</button>
        </div>
      </form>`;
    document.body.append(contactDialog);

    const contactForm = contactDialog.querySelector("#schoolContactForm");
    const categoryField = contactForm.elements.category;
    const relatedField = contactForm.elements.relatedTo;
    const subjectField = contactForm.elements.subject;
    const status = contactDialog.querySelector("#schoolContactStatus");

    const updateSubject = () => {
      subjectField.value = getSchoolContactSubject(categoryField.value, relatedField.value);
    };
    categoryField.addEventListener("change", updateSubject);
    relatedField.addEventListener("change", updateSubject);
    contactDialog.querySelectorAll("[data-close-school-contact]").forEach((button) => {
      button.addEventListener("click", () => contactDialog.close());
    });
    contactDialog.addEventListener("click", (event) => {
      if (event.target === contactDialog) contactDialog.close();
    });
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;
      const selectedChild = guardianChildren[relatedField.value];
      const categoryLabel = categoryField.selectedOptions[0]?.textContent || "Bantuan";
      const relatedLabel = selectedChild ? `${selectedChild.name} · Kelas ${selectedChild.className}` : "Akun keluarga Rina Ramadhani";
      const body = [
        "Yth. Tim TK Harapan Bangsa,",
        "",
        contactForm.elements.message.value.trim(),
        "",
        `Jenis bantuan: ${categoryLabel}`,
        `Terkait dengan: ${relatedLabel}`,
        "Pengirim: Rina Ramadhani (parent@classping.id)",
        `Halaman asal: ${window.location.href}`,
        "",
        "Hormat saya,",
        "Rina Ramadhani"
      ].join("\n");
      status.textContent = "Draf email siap. Membuka aplikasi email Anda…";
      const mailto = `mailto:${schoolContactEmail}?subject=${encodeURIComponent(subjectField.value.trim())}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    });
  }

  const relatedField = contactDialog.querySelector('[name="relatedTo"]');
  relatedField.innerHTML = `${Object.values(guardianChildren).map((item) => `<option value="${item.id}">${item.name} · Kelas ${item.className}</option>`).join("")}<option value="family">Akun Rina / umum</option>`;
  relatedField.value = child.id;

  const openButton = helpCard.querySelector("[data-open-school-contact]");
  openButton.onclick = () => {
    const form = contactDialog.querySelector("#schoolContactForm");
    form.reset();
    form.elements.relatedTo.value = activeGuardianChildId;
    form.elements.subject.value = getSchoolContactSubject(form.elements.category.value, form.elements.relatedTo.value);
    contactDialog.querySelector("#schoolContactStatus").textContent = "";
    contactDialog.showModal();
    window.setTimeout(() => form.elements.category.focus(), 0);
  };
}

function applyGuardianChildContext() {
  if (!activeSession || (!isParentView && activeSession.role !== "PARENT")) return;
  activeGuardianChildId = getGuardianChildId(activeSession);
  activeSession.activeChild = activeGuardianChildId;
  const child = guardianChildren[activeGuardianChildId];
  if (profileRole) profileRole.textContent = `Orang Tua ${child.firstName}`;
  if (child.id === "jisindo") {
    renderJisindoDashboard();
    renderJisindoFeed();
  }
  const assessmentSubtitle = document.querySelector("#assessmentTitle + p");
  if (assessmentSubtitle) assessmentSubtitle.textContent = `Perkembangan dan evaluasi belajar ${child.firstName}`;
  const paymentSubtitle = document.querySelector("#paymentTitle + p");
  if (paymentSubtitle) paymentSubtitle.textContent = `Riwayat pembayaran dan tagihan ${child.firstName}`;
  const paymentFilter = document.querySelector("#paymentFilter");
  if (child.id === "jisindo" && paymentFilter && !paymentFilter.querySelector('option[value="Sebagian"]')) {
    paymentFilter.insertAdjacentHTML("beforeend", '<option value="Sebagian">Sebagian</option>');
  }
  if (child.id === "jisindo" && guardianPaymentMonth) {
    guardianPaymentMonth.innerHTML = '<option value="Sisa Agustus 2026" data-bill="100000">Sisa Agustus 2026</option><option value="September 2026" data-bill="275000">September 2026</option><option value="Oktober 2026" data-bill="275000">Oktober 2026</option>';
    if (guardianBillAmount) guardianBillAmount.value = formatRupiah(100000);
  }
  updateGuardianLinks(child);
  setupGuardianNotifications(child);
  setupGuardianProfileMenu(child);
  setupGuardianSchoolContact(child);
  document.title = document.title.replace(/Alya|Jisindo/g, child.firstName);
}

const students = [
  { name: "Alya Putri Ramadhani", className: "A1", guardian: "Ibu Rina Ramadhani", phone: "0812-3456-7801" },
  { name: "Rafi Akbar Maulana", className: "A1", guardian: "Bapak Dedi Maulana", phone: "0813-7890-1245", overdue: true },
  { name: "Nayla Zahra Aulia", className: "A2", guardian: "Ibu Siti Aulia", phone: "0857-2234-1180" },
  { name: "Fathan Rizky Pratama", className: "A2", guardian: "Bapak Andri Pratama", phone: "0819-5521-9034" }
];

const sessionKey = "classping-guardian-session";
const demoAccounts = {
  admin: { email: "admin@classping.id", password: "admin123", role: "ADMIN", name: "Andini Sari", initials: "AS" },
  parent: { email: "parent@classping.id", password: "parent123", role: "PARENT", name: "Rina Ramadhani", initials: "RR" }
};

const loginPage = document.querySelector("#loginPage");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginError = document.querySelector("#loginError");
const rememberLogin = document.querySelector("#rememberLogin");
const logoutButton = document.querySelector("#logoutButton");
const adminView = document.querySelector("#adminView");
const parentView = document.querySelector("#parentView");
const viewSwitch = document.querySelector("#viewSwitch");
const profileName = document.querySelector(".profile strong");
const profileRole = document.querySelector(".profile small");
const profileAvatar = document.querySelector(".profile-avatar");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menuButton");
const dialog = document.querySelector("#paymentDialog");
const form = document.querySelector("#paymentForm");
const toast = document.querySelector("#toast");
const guardianPaymentDialog = document.querySelector("#guardianPaymentDialog");
const guardianPaymentForm = document.querySelector("#guardianPaymentForm");
const guardianPaymentMonth = document.querySelector("#guardianPaymentMonth");
const guardianBillAmount = document.querySelector("#guardianBillAmount");
const guardianReceipt = document.querySelector("#guardianReceipt");
const guardianReceiptAmount = document.querySelector("#guardianReceiptAmount");
const guardianReceiptPreview = document.querySelector("#guardianReceiptPreview");
const guardianPaymentResult = document.querySelector("#guardianPaymentResult");
const reminderDialog = document.querySelector("#reminderDialog");
const reminderForm = document.querySelector("#reminderForm");
const reminderTemplate = document.querySelector("#reminderTemplate");
const reminderRecipients = document.querySelector("#reminderRecipients");
const activityDialog = document.querySelector("#activityDialog");
const activityForm = document.querySelector("#activityForm");
const activityPhotos = document.querySelector("#activityPhotos");
const uploadPreview = document.querySelector("#uploadPreview");
const activityGrid = document.querySelector("#activityGrid");
const activityEmpty = document.querySelector("#activityEmpty");
const activityDateFilter = document.querySelector("#activityDateFilter");
const activityClassFilter = document.querySelector("#activityClassFilter");
const manageActivityDialog = document.querySelector("#manageActivityDialog");
const manageActivityForm = document.querySelector("#manageActivityForm");
const manageActivitySubtitle = document.querySelector("#manageActivitySubtitle");
const existingPhotoCount = document.querySelector("#existingPhotoCount");
const managedPhotoGrid = document.querySelector("#managedPhotoGrid");
const managePhotos = document.querySelector("#managePhotos");
const classStudentOptions = document.querySelector("#classStudentOptions");
const selectAllStudents = document.querySelector("#selectAllStudents");
const newActivityClass = activityForm?.elements?.activityClass;
const todoChecks = [...document.querySelectorAll(".todo-check")];
const todoProgressBar = document.querySelector("#todoProgressBar");
const todoProgressLabel = document.querySelector("#todoProgressLabel");
const paymentRows = document.querySelector("#paymentRows");
const searchInput = document.querySelector("#searchInput");
const classFilter = document.querySelector("#classFilter");
const emptyState = document.querySelector("#emptyState");
const studentRows = document.querySelector("#studentRows");
const studentSearch = document.querySelector("#studentSearch");
const studentClassFilter = document.querySelector("#studentClassFilter");
const studentEmptyState = document.querySelector("#studentEmptyState");
const studentCount = document.querySelector("#studentCount");
const activityTotal = document.querySelector(".activity-total");
let activeSession = null;
let isParentView = false;
let managedClass = "";

function authenticate(email, password) {
  const normalizedEmail = String(email).trim().toLowerCase();
  return Object.values(demoAccounts).find((account) => account.email === normalizedEmail && account.password === password) || null;
}

function saveSession(session, remember) {
  sessionStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionKey);
  (remember ? localStorage : sessionStorage).setItem(sessionKey, JSON.stringify(session));
}

function updateProfile(session, viewingAsParent) {
  if (!profileName || !profileRole || !profileAvatar) return;
  profileName.textContent = session.name;
  profileAvatar.textContent = session.initials;
  profileRole.textContent = session.role === "PARENT"
    ? "Orang Tua Alya"
    : viewingAsParent ? "Administrator · Mode Orang Tua" : "Administrator";
}

function applyDashboardRole(targetRole, persistView = false) {
  isParentView = targetRole === "PARENT";
  document.body.classList.toggle("parent-view", isParentView);
  if (adminView) adminView.hidden = isParentView;
  if (parentView) parentView.hidden = !isParentView;

  if (viewSwitch) {
    const canPreview = activeSession?.role === "ADMIN";
    viewSwitch.hidden = !canPreview;
    const label = viewSwitch.querySelector("span");
    if (label) label.textContent = isParentView ? "Kembali ke Admin" : "Lihat sebagai Orang Tua";
  }

  if (activeSession) {
    activeSession.viewRole = targetRole;
    updateProfile(activeSession, isParentView);
    if (persistView) {
      const remember = Boolean(localStorage.getItem(sessionKey));
      saveSession(activeSession, remember);
    }
  }
}

function enterApp(account, remember = false) {
  const session = {
    role: account.role,
    email: account.email,
    name: account.name,
    initials: account.initials,
    viewRole: account.viewRole || account.role,
    activeChild: getGuardianChildId(account)
  };
  activeSession = session;
  saveSession(session, remember);
  if (loginPage) loginPage.hidden = true;
  if (appShell) appShell.hidden = false;
  applyDashboardRole(session.viewRole);
  applyGuardianChildContext();
  if (loginPage) {
    document.title = session.role === "PARENT" ? `ClassPing Guardian — Beranda ${guardianChildren[session.activeChild].firstName}` : "ClassPing Guardian — Dashboard Admin";
  }
  window.scrollTo(0, 0);
}

function restoreSavedSession() {
  try {
    const saved = localStorage.getItem(sessionKey) || sessionStorage.getItem(sessionKey);
    if (!saved) {
      if (!loginForm && appShell) window.location.replace("index.html");
      else loginEmail?.focus();
      return;
    }
    const session = JSON.parse(saved);
    if (!["ADMIN", "PARENT"].includes(session.role)) throw new Error("Invalid guardian role");
    enterApp(session, Boolean(localStorage.getItem(sessionKey)));
  } catch {
    localStorage.removeItem(sessionKey);
    sessionStorage.removeItem(sessionKey);
    if (!loginForm && appShell) window.location.replace("index.html");
  }
}

function logoutGuardian() {
  sessionStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionKey);
  activeSession = null;
  document.body.classList.remove("parent-view");
  if (loginPage && appShell) {
    appShell.hidden = true;
    loginPage.hidden = false;
    document.title = "ClassPing Guardian — Masuk";
    loginEmail?.focus();
  } else {
    window.location.replace("index.html");
  }
}

if (logoutButton) logoutButton.onclick = logoutGuardian;

restoreSavedSession();

function showToast(message, warning = false) {
  if (!toast) return;
  toast.innerHTML = `<span>${warning ? "!" : "✓"}</span>${message}`;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3000);
}

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function getSelectedGuardianBill() {
  const selectedOption = guardianPaymentMonth?.selectedOptions?.[0];
  return Number(selectedOption?.dataset.bill || 250000);
}

function resetGuardianPaymentFlow() {
  guardianPaymentForm?.reset();
  if (guardianBillAmount) guardianBillAmount.value = formatRupiah(getSelectedGuardianBill());
  if (guardianReceiptPreview) {
    guardianReceiptPreview.hidden = true;
    const filename = guardianReceiptPreview.querySelector("strong");
    if (filename) filename.textContent = "";
  }
  if (guardianPaymentResult) {
    guardianPaymentResult.hidden = true;
    guardianPaymentResult.classList.remove("warning");
    guardianPaymentResult.innerHTML = "";
  }
}

function closeGuardianPaymentFlow() {
  guardianPaymentDialog?.close();
}

document.querySelector("#openGuardianPayment")?.addEventListener("click", () => {
  resetGuardianPaymentFlow();
  guardianPaymentDialog?.showModal();
  window.setTimeout(() => guardianPaymentMonth?.focus(), 0);
});

document.querySelector("#closeGuardianPayment")?.addEventListener("click", closeGuardianPaymentFlow);
document.querySelector("#cancelGuardianPayment")?.addEventListener("click", closeGuardianPaymentFlow);

guardianPaymentMonth?.addEventListener("change", () => {
  if (guardianBillAmount) guardianBillAmount.value = formatRupiah(getSelectedGuardianBill());
  if (guardianPaymentResult) guardianPaymentResult.hidden = true;
});

guardianReceipt?.addEventListener("change", () => {
  const file = guardianReceipt.files?.[0];
  if (!file) {
    guardianReceiptPreview.hidden = true;
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    guardianReceipt.value = "";
    guardianReceiptPreview.hidden = true;
    showToast("Ukuran bukti pembayaran maksimal 5 MB.", true);
    return;
  }
  const filename = guardianReceiptPreview.querySelector("strong");
  if (filename) filename.textContent = file.name;
  guardianReceiptPreview.hidden = false;
});

document.querySelector("#removeGuardianReceipt")?.addEventListener("click", () => {
  if (guardianReceipt) guardianReceipt.value = "";
  if (guardianReceiptPreview) guardianReceiptPreview.hidden = true;
  guardianReceipt?.focus();
});

document.querySelector("#copyBankAccount")?.addEventListener("click", async (event) => {
  try {
    await navigator.clipboard.writeText("1234567890");
    event.currentTarget.textContent = "Tersalin";
    window.setTimeout(() => { event.currentTarget.textContent = "Salin"; }, 1600);
  } catch {
    showToast("Nomor rekening: 1234567890");
  }
});

guardianPaymentForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!guardianPaymentForm.reportValidity()) return;

  const bill = getSelectedGuardianBill();
  const paid = Number(guardianReceiptAmount.value);
  const month = guardianPaymentMonth.value;
  const remaining = Math.max(0, bill - paid);

  guardianPaymentResult.classList.toggle("warning", remaining > 0);
  guardianPaymentResult.innerHTML = remaining === 0
    ? `<span>✓</span><div><strong>Lunas</strong><small>Bukti pembayaran ${month} sesuai dengan total tagihan dan telah dikirim untuk verifikasi sekolah.</small></div>`
    : `<span>!</span><div><strong>Pembayaran belum lunas</strong><small>Sisa yang perlu dibayar berikutnya: <b>${formatRupiah(remaining)}</b>.</small></div>`;
  guardianPaymentResult.hidden = false;
  addGuardianNotification({
    kind: "payment",
    title: "Bukti pembayaran berhasil diunggah",
    message: `Bukti ${month} sebesar ${formatRupiah(paid)} diterima. ${remaining ? `Sisa tagihan ${formatRupiah(remaining)}.` : "Menunggu verifikasi sekolah."}`,
    href: "payment.html"
  });
  guardianPaymentResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function updateDashboardStats() {
  const paidNames = new Set(payments.map((payment) => payment.name));
  const collected = payments.length * 250000;
  const format = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
  const collectedAmount = document.querySelector("#collectedAmount");
  const paidCount = document.querySelector("#paidCount");
  const unpaidCount = document.querySelector("#unpaidCount");
  const studentTotal = document.querySelector("#studentTotal");
  if (collectedAmount) collectedAmount.textContent = format.format(collected);
  if (paidCount) paidCount.textContent = String(paidNames.size);
  if (unpaidCount) unpaidCount.textContent = String(Math.max(0, students.length - paidNames.size));
  if (studentTotal) studentTotal.textContent = String(students.length);
}

function renderPayments() {
  if (!paymentRows) return;
  const term = searchInput?.value.trim().toLowerCase() || "";
  const selectedClass = classFilter?.value || "all";
  const filtered = payments.filter((payment) => {
    const matchesName = payment.name.toLowerCase().includes(term);
    const matchesClass = selectedClass === "all" || payment.className === selectedClass;
    return matchesName && matchesClass;
  });
  paymentRows.innerHTML = filtered.map((payment) => `<tr><td><strong>${payment.name}</strong></td><td>${payment.className}</td><td>${payment.month}</td><td>${payment.date}</td><td>${payment.amount}</td><td><span class="status-pill">Lunas</span></td><td>···</td></tr>`).join("");
  if (emptyState) emptyState.hidden = filtered.length > 0;
}

function renderStudents() {
  if (!studentRows) return;
  const term = studentSearch?.value.trim().toLowerCase() || "";
  const selectedClass = studentClassFilter?.value || "all";
  const filtered = students.filter((student) => {
    const matchesSearch = `${student.name} ${student.guardian}`.toLowerCase().includes(term);
    const matchesClass = selectedClass === "all" || student.className === selectedClass;
    return matchesSearch && matchesClass;
  });
  studentRows.innerHTML = filtered.map((student, index) => `<tr><td><strong>${student.name}</strong></td><td>2600${index + 1}</td><td>${student.className}</td><td>—</td><td>${student.guardian}</td><td>${student.phone}</td><td><span class="status-pill">Aktif</span></td><td>···</td></tr>`).join("");
  if (studentCount) studentCount.textContent = `${filtered.length} siswa`;
  if (studentEmptyState) studentEmptyState.hidden = filtered.length > 0;
}

searchInput?.addEventListener("input", renderPayments);
classFilter?.addEventListener("change", renderPayments);
studentSearch?.addEventListener("input", renderStudents);
studentClassFilter?.addEventListener("change", renderStudents);

function updateTodoProgress() {
  if (!todoProgressBar || !todoProgressLabel || !todoChecks.length) return;
  const completed = todoChecks.filter((checkbox) => checkbox.checked).length;
  todoProgressBar.style.width = `${Math.round((completed / todoChecks.length) * 100)}%`;
  todoProgressLabel.textContent = `${completed} dari ${todoChecks.length} selesai`;
}

function personalizeReminder(student) {
  return reminderTemplate?.value
    .replaceAll("{nama_wali}", student.guardian)
    .replaceAll("{nama_siswa}", student.name) || "";
}

function renderReminderRecipients() {
  if (!reminderRecipients) return;
  const unpaid = students.filter((student) => !payments.some((payment) => payment.name === student.name));
  const counter = document.querySelector("#reminderRecipientCount");
  if (counter) counter.textContent = `${unpaid.length} orang tua`;
  reminderRecipients.innerHTML = unpaid.map((student) => {
    const phone = student.phone.replace(/^0/, "62").replace(/\D/g, "");
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(personalizeReminder(student))}`;
    return `<div class="recipient-row"><span class="student-avatar">${student.name.slice(0, 2).toUpperCase()}</span><div><strong>${student.guardian}</strong><small>${student.name} · ${student.phone}</small></div><a class="whatsapp-link" href="${link}" target="_blank" rel="noopener">Buka WhatsApp</a></div>`;
  }).join("") || "<p class='empty-state'>Semua siswa sudah membayar.</p>";
}

function openReminderDialog(event) {
  event?.preventDefault();
  if (!reminderDialog) return;
  renderReminderRecipients();
  reminderDialog.showModal();
}

function updateActivityView() {
  if (!activityGrid || !activityDateFilter || !activityClassFilter || !activityEmpty) return;
  const selectedDate = activityDateFilter.value;
  const selectedClass = activityClassFilter.value;
  let visibleActivities = 0;
  let visiblePhotos = 0;
  activityGrid.querySelectorAll(".activity-card").forEach((card) => {
    const visible = selectedDate === "2026-08-27" && (selectedClass === "all" || card.dataset.class === selectedClass);
    card.hidden = !visible;
    if (visible) {
      visibleActivities += 1;
      visiblePhotos += Number(card.dataset.photos || 0);
    }
  });
  activityEmpty.hidden = visibleActivities > 0;
  if (activityTotal) activityTotal.textContent = `${visibleActivities} aktivitas · ${visiblePhotos} foto`;
}

function openManageActivity(button) {
  if (!manageActivityDialog || !managedPhotoGrid || !classStudentOptions) return;
  managedClass = button.dataset.class || "";
  const photoCount = Number(button.dataset.photos || 0);
  if (manageActivitySubtitle) manageActivitySubtitle.textContent = `${button.dataset.title || "Aktivitas"} · Kelas ${managedClass}`;
  if (existingPhotoCount) existingPhotoCount.textContent = `${photoCount} foto tersimpan`;
  managedPhotoGrid.innerHTML = Array.from({ length: photoCount }, (_, index) => `<button class="managed-photo ${index === 0 ? "active" : ""}" type="button"><span>📷</span><small class="photo-tag-count">Periksa tag</small></button>`).join("");
  classStudentOptions.innerHTML = students.filter((student) => student.className === managedClass).map((student) => `<label><input type="checkbox" value="${student.name}" /> ${student.name}</label>`).join("");
  manageActivityDialog.showModal();
}

function renderPagination(container, totalPages, currentPage, onPageClick) {
  if (!container) return;
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  const pageNumbers = [];
  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages, start + 2);
  for (let index = start; index <= end; index += 1) {
    pageNumbers.push(index);
  }

  container.innerHTML = `
    <button class="page-button" type="button" data-page="${Math.max(1, currentPage - 1)}" ${currentPage === 1 ? "disabled" : ""} aria-label="Halaman sebelumnya">«</button>
    ${pageNumbers.map((page) => `<button class="page-button ${page === currentPage ? "active" : ""}" type="button" data-page="${page}">${page}</button>`).join("")}
    <button class="page-button" type="button" data-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage === totalPages ? "disabled" : ""} aria-label="Halaman berikutnya">»</button>
  `;

  container.querySelectorAll(".page-button").forEach((button) => {
    button.addEventListener("click", () => onPageClick(Number(button.dataset.page)));
  });
}

function renderGuardianListPage({ rowsSelector, searchSelector, filterSelector, emptySelector, paginationSelector, data, searchFields, filterKey, mapRow, pageSize = 5 }) {
  const rows = document.querySelector(rowsSelector);
  const searchInput = searchSelector ? document.querySelector(searchSelector) : null;
  const filterInput = filterSelector ? document.querySelector(filterSelector) : null;
  const emptyState = emptySelector ? document.querySelector(emptySelector) : null;
  const pagination = document.querySelector(paginationSelector);
  if (!rows || !pagination) return;

  let currentPage = 1;

  function apply() {
    const term = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filterValue = filterInput ? filterInput.value : "all";

    const filtered = data.filter((item) => {
      const matchesSearch = !term || searchFields.some((field) => String(item[field]).toLowerCase().includes(term));
      const matchesFilter = filterValue === "all" || item[filterKey] === filterValue;
      return matchesSearch && matchesFilter;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * pageSize;
    const pageItems = filtered.slice(startIndex, startIndex + pageSize);

    rows.innerHTML = pageItems.map(mapRow).join("");
    renderPagination(pagination, totalPages, currentPage, (nextPage) => {
      currentPage = nextPage;
      apply();
    });

    if (emptyState) {
      emptyState.hidden = filtered.length > 0;
    }
  }

  if (searchInput) searchInput.addEventListener("input", apply);
  if (filterInput) filterInput.addEventListener("change", apply);

  apply();
}

if (loginForm && loginEmail && loginPassword && loginError && rememberLogin) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginError.textContent = "";
    if (!loginForm.reportValidity()) return;
    const account = authenticate(loginEmail.value, loginPassword.value);
    if (!account) {
      loginError.textContent = "Email atau kata sandi tidak sesuai. Silakan coba kembali.";
      loginPassword.focus();
      return;
    }
    enterApp(account, rememberLogin.checked);
    loginForm.reset();
  });

  if (document.querySelector("#togglePassword")) {
    document.querySelector("#togglePassword").addEventListener("click", (event) => {
      const showing = loginPassword.type === "text";
      loginPassword.type = showing ? "password" : "text";
      event.currentTarget.setAttribute("aria-label", showing ? "Tampilkan kata sandi" : "Sembunyikan kata sandi");
    });
  }

  document.querySelectorAll("[data-demo-account]").forEach((button) => {
    button.addEventListener("click", () => {
      const account = demoAccounts[button.dataset.demoAccount];
      if (!account) return;
      loginEmail.value = account.email;
      loginPassword.value = account.password;
      enterApp(account, rememberLogin.checked);
      loginForm.reset();
    });
  });

  if (document.querySelector("#openPayment")) {
    document.querySelector("#openPayment").addEventListener("click", () => dialog.showModal());
  }
  if (document.querySelector("#openActivity")) {
    document.querySelector("#openActivity").addEventListener("click", () => activityDialog.showModal());
  }
  if (document.querySelector("#emptyAddActivity")) {
    document.querySelector("#emptyAddActivity").addEventListener("click", () => activityDialog.showModal());
  }
  if (document.querySelector("#openReminder")) {
    document.querySelector("#openReminder").addEventListener("click", openReminderDialog);
  }
  if (document.querySelector("#openReminderFromTodo")) {
    document.querySelector("#openReminderFromTodo").addEventListener("click", openReminderDialog);
  }
  if (reminderTemplate) reminderTemplate.addEventListener("input", renderReminderRecipients);
  if (document.querySelector("#previewAllMessages")) {
    document.querySelector("#previewAllMessages").addEventListener("click", renderReminderRecipients);
  }

  if (reminderForm) {
    reminderForm.addEventListener("submit", (event) => {
      if (event.submitter?.value === "cancel") return;
      event.preventDefault();
      const config = {
        enabled: document.querySelector("#automationEnabled").checked,
        dueDate: document.querySelector("#reminderDueDate").value,
        time: document.querySelector("#reminderTime").value,
        schedule: document.querySelector("#reminderSchedule").value,
        template: reminderTemplate.value,
      };
      localStorage.setItem("classping-whatsapp-reminder", JSON.stringify(config));
      reminderDialog.close();
      toast.innerHTML = `<span>✓</span>Pengaturan pengingat WhatsApp ${config.enabled ? "diaktifkan" : "disimpan"}.`;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3000);
    });
  }

  if (todoChecks.length) {
    todoChecks.forEach((checkbox) => checkbox.addEventListener("change", updateTodoProgress));
  }

  if (activityDateFilter && activityClassFilter) {
    activityDateFilter.addEventListener("change", updateActivityView);
    activityClassFilter.addEventListener("change", updateActivityView);
  }

  if (newActivityClass) {
    newActivityClass.addEventListener("change", () => {
      const selectedClass = newActivityClass.value.slice(0, 2);
      const eligibleStudents = students.filter((student) => student.className === selectedClass);
      activityForm.querySelector(".tag-options").innerHTML = eligibleStudents.length
        ? eligibleStudents.map((student) => `<label><input type="checkbox" value="${student.name}" /> ${student.name}</label>`).join("")
        : "<p>Pilih kelas untuk menampilkan siswa.</p>";
    });
  }

  if (activityGrid && activityEmpty) {
    if (document.querySelector("#activityDialog")) {
      activityGrid.addEventListener("click", (event) => {
        const button = event.target.closest(".manage-activity");
        if (button) openManageActivity(button);
        const photo = event.target.closest(".managed-photo");
        if (photo) {
          managedPhotoGrid.querySelectorAll(".managed-photo").forEach((item) => item.classList.remove("active"));
          photo.classList.add("active");
        }
      });
    }
  }

  if (managedPhotoGrid) {
    managedPhotoGrid.addEventListener("click", (event) => {
      const photo = event.target.closest(".managed-photo");
      if (!photo) return;
      managedPhotoGrid.querySelectorAll(".managed-photo").forEach((item) => item.classList.remove("active"));
      photo.classList.add("active");
    });
  }

  if (selectAllStudents && classStudentOptions) {
    selectAllStudents.addEventListener("change", () => {
      classStudentOptions.querySelectorAll("input").forEach((input) => { input.checked = selectAllStudents.checked; });
    });
  }

  if (managePhotos) {
    managePhotos.addEventListener("change", () => {
      [...managePhotos.files].forEach((file) => {
        managedPhotoGrid.insertAdjacentHTML("beforeend", `<button class="managed-photo" type="button"><img src="${URL.createObjectURL(file)}" alt="${file.name}" /><small class="photo-tag-count">Belum ditag</small></button>`);
      });
      existingPhotoCount.textContent = `${managedPhotoGrid.children.length} foto tersimpan`;
    });
  }

  if (manageActivityForm) {
    manageActivityForm.addEventListener("submit", (event) => {
      if (event.submitter?.value === "cancel") return;
      event.preventDefault();
      const taggedCount = classStudentOptions.querySelectorAll("input:checked").length;
      if (!taggedCount) {
        toast.innerHTML = "<span>!</span>Pilih minimal satu siswa dari kelas ini.";
        toast.classList.add("show");
        window.setTimeout(() => toast.classList.remove("show"), 3000);
        return;
      }
      manageActivityDialog.close();
      toast.innerHTML = `<span>✓</span>Foto dan ${taggedCount} tag siswa ${managedClass} tersimpan.`;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3000);
    });
  }

  if (viewSwitch) {
    viewSwitch.addEventListener("click", () => {
      applyDashboardRole(isParentView ? "ADMIN" : "PARENT", true);
      applyGuardianChildContext();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (activityPhotos) {
    activityPhotos.addEventListener("change", () => {
      const files = [...activityPhotos.files];
      uploadPreview.innerHTML = files.length
        ? files.map((file) => `<img src="${URL.createObjectURL(file)}" alt="Pratinjau ${file.name}" />`).join("")
        : "<p>Foto yang dipilih akan muncul di sini.</p>";
    });
  }

  if (activityForm) {
    activityForm.addEventListener("submit", (event) => {
      if (event.submitter?.value === "cancel") return;
      event.preventDefault();
      if (!activityForm.reportValidity()) return;
      const data = new FormData(activityForm);
      const tagged = [...activityForm.querySelectorAll(".tag-options input:checked")];
      const photoCount = activityPhotos.files.length;
      if (!photoCount || !tagged.length) {
        toast.innerHTML = "<span>!</span>Pilih foto dan tag minimal satu siswa.";
        toast.classList.add("show");
        window.setTimeout(() => toast.classList.remove("show"), 3000);
        return;
      }
      const imageUrl = URL.createObjectURL(activityPhotos.files[0]);
      activityGrid.insertAdjacentHTML("afterbegin", `
        <article class="activity-card panel" data-class="${data.get("activityClass").slice(0,2)}" data-photos="${photoCount}">
          <div class="activity-cover" style="background:url('${imageUrl}') center/cover"><b>${photoCount} foto</b></div>
          <div class="activity-body"><div class="activity-meta"><span>${data.get("time")}</span><span>${data.get("activityClass")}</span><span class="published">● Dipublikasi</span></div><h3>${data.get("title")}</h3><p>${data.get("description") || "Dokumentasi kegiatan belajar siswa."}</p><div class="tag-summary"><span class="mini-avatars">${tagged[0].value.slice(0,2).toUpperCase()}<i>+${tagged.length - 1}</i></span><strong>${tagged.length} siswa ditandai</strong></div><button class="outline-button manage-activity" type="button" data-class="${data.get("activityClass").slice(0,2)}" data-title="${data.get("title")}" data-photos="${photoCount}">Kelola foto & tag</button></div>
        </article>`);
      updateActivityView();
      activityDialog.close();
      activityForm.reset();
      uploadPreview.innerHTML = "<p>Foto yang dipilih akan muncul di sini.</p>";
      toast.innerHTML = "<span>✓</span>Aktivitas berhasil dipublikasikan.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3000);
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      if (event.submitter?.value === "cancel") return;
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = data.get("student").trim();
      const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
      payments.unshift({ name, initials, className: data.get("class"), month: data.get("month"), date: "27 Agu 2026", amount: `Rp ${data.get("amount")}`, color: "" });
      renderPayments();
      updateDashboardStats();
      dialog.close();
      form.reset();
      toast.innerHTML = "<span>✓</span>Pembayaran berhasil dicatat.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3000);
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (sidebar && menuButton) {
    document.addEventListener("click", (event) => {
      if (window.innerWidth <= 760 && sidebar.classList.contains("open") && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (typeof renderPayments === "function") renderPayments();
  if (typeof renderStudents === "function") renderStudents();
  if (typeof updateDashboardStats === "function") updateDashboardStats();

  const settingsTabs = document.querySelectorAll(".settings-tab");
  if (settingsTabs.length) {
    settingsTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.target;
        settingsTabs.forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(".settings-panel").forEach((panel) => panel.classList.remove("active"));
        tab.classList.add("active");
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add("active");
      });
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const detailId = urlParams.get("id");
  if (detailId) {
    if (document.querySelector("#activityName")) {
      const matchedAct = guardianActivityData.find((a) => slugify(a.title) === detailId);
      if (matchedAct) {
        document.querySelector("#activityName").textContent = matchedAct.title;
        const sub = document.querySelector("#activitySubtitle");
        if (sub) sub.textContent = `Kelas ${matchedAct.className} · ${matchedAct.date}`;
      } else {
        const matchedAss = guardianAssessmentData.find((a) => a.childId === activeGuardianChildId && slugify(a.name) === detailId);
        if (matchedAss) {
          document.querySelector("#activityName").textContent = matchedAss.name;
          const sub = document.querySelector("#activitySubtitle");
          if (sub) sub.textContent = `Kelas ${matchedAss.className} · ${matchedAss.period}`;
        } else {
          const matchedPay = guardianPaymentData.find((a) => a.childId === activeGuardianChildId && slugify(a.month) === detailId);
          if (matchedPay) {
            document.querySelector("#activityName").textContent = matchedPay.type;
            const sub = document.querySelector("#activitySubtitle");
            if (sub) sub.textContent = `${matchedPay.month} · ${matchedPay.student}`;
          }
        }
      }
    }
  }

}

if (document.querySelector("#studentActivityRows") && activeSession?.role === "ADMIN") {
  renderGuardianListPage({
    rowsSelector: "#studentActivityRows",
    searchSelector: "#studentActivitySearch",
    filterSelector: "#studentActivityFilter",
    emptySelector: "#studentActivityEmptyState",
    paginationSelector: "#studentActivityPagination",
    data: guardianActivityData,
    searchFields: ["title", "className", "status"],
    filterKey: "className",
    mapRow: (item) => `
      <tr>
        <td><strong>${item.title}</strong></td>
        <td>${item.className}</td>
        <td>${item.date}</td>
        <td>${item.participants}</td>
        <td><span class="status-pill ${item.status === "Draf" ? "warning" : ""}">${item.status}</span></td>
        <td><a class="table-view-button" href="activity-view.html?id=${slugify(item.title)}">View</a></td>
      </tr>
    `
  });
}

document.querySelectorAll(".post-like").forEach((button) => {
  button.addEventListener("click", () => {
    const isLiked = button.getAttribute("aria-pressed") === "true";
    const likes = button.closest(".guardian-post")?.querySelector(".post-likes span");
    button.setAttribute("aria-pressed", String(!isLiked));
    button.classList.toggle("liked", !isLiked);
    if (likes) likes.textContent = String(Number(likes.textContent) + (isLiked ? -1 : 1));
  });
});

document.querySelectorAll(".post-save").forEach((button) => {
  button.addEventListener("click", () => {
    const isSaved = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isSaved));
    button.classList.toggle("saved", !isSaved);
    button.setAttribute("aria-label", isSaved ? button.getAttribute("aria-label").replace("Batalkan simpan", "Simpan") : button.getAttribute("aria-label").replace("Simpan", "Batalkan simpan"));
  });
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".guardian-carousel-track");
  const slides = [...carousel.querySelectorAll(".guardian-slide")];
  const dots = [...carousel.querySelectorAll(".carousel-dots button")];
  const position = carousel.querySelector(".photo-position");
  let currentSlide = 0;
  let pointerStartX = null;

  function showSlide(nextIndex) {
    currentSlide = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides.forEach((slide, index) => {
      const active = index === currentSlide;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, index) => {
      const active = index === currentSlide;
      dot.classList.toggle("active", active);
      if (active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    if (position) position.textContent = `${currentSlide + 1}/${slides.length}`;
  }

  carousel.querySelector(".carousel-previous")?.addEventListener("click", () => showSlide(currentSlide - 1));
  carousel.querySelector(".carousel-next")?.addEventListener("click", () => showSlide(currentSlide + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));

  track?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(currentSlide - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(currentSlide + 1);
    }
  });

  carousel.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });
  carousel.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 45) return;
    showSlide(currentSlide + (distance < 0 ? 1 : -1));
  });
  carousel.addEventListener("pointercancel", () => { pointerStartX = null; });

  showSlide(0);
});

function downloadGuardianSlide(button) {
  const post = button.closest(".guardian-post");
  const slide = post?.querySelector(".guardian-slide.is-active") || post?.querySelector(".guardian-post-photo");
  if (!slide) return;
  const originalLabel = button.getAttribute("aria-label") || "Unduh foto";

  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 900;
  const context = canvas.getContext("2d");
  const palette = slide.classList.contains("art-paint-alt")
    ? ["#98d9d2", "#d9edb2", "#f6c889"]
    : slide.classList.contains("art-garden")
      ? ["#bde6c4", "#7fc5a4", "#68ae8d"]
      : slide.classList.contains("art-music")
        ? ["#d5c3f0", "#a99adf", "#8878c5"]
        : ["#ffd98d", "#f2a69d", "#ee938d"];
  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  palette.forEach((color, index) => gradient.addColorStop(index / (palette.length - 1), color));
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "rgba(255,255,255,.24)";
  context.lineWidth = 70;
  context.beginPath();
  context.arc(1080, 70, 270, 0, Math.PI * 2);
  context.stroke();
  context.beginPath();
  context.arc(120, 850, 310, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = "#17231f";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = '170px "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
  context.fillText(slide.querySelector(".photo-scene")?.textContent.trim() || "📷", canvas.width / 2, canvas.height / 2);

  canvas.toBlob((blob) => {
    if (!blob) return;
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${slide.dataset.downloadName || "aktivitas-alya"}.png`;
    link.click();
    URL.revokeObjectURL(downloadUrl);
    button.classList.add("downloaded");
    button.setAttribute("aria-label", "Foto berhasil diunduh");
    window.setTimeout(() => {
      button.classList.remove("downloaded");
      button.setAttribute("aria-label", originalLabel);
    }, 1800);
  }, "image/png");
}

document.querySelectorAll(".post-download").forEach((button) => {
  button.addEventListener("click", () => downloadGuardianSlide(button));
});

if (document.querySelector("#assessmentRows")) {
  renderGuardianListPage({
    rowsSelector: "#assessmentRows",
    searchSelector: "#assessmentSearch",
    filterSelector: "#assessmentStatusFilter",
    emptySelector: "#assessmentEmptyState",
    paginationSelector: "#assessmentPagination",
    data: guardianAssessmentData.filter((item) => item.childId === activeGuardianChildId),
    searchFields: ["name", "className", "status"],
    filterKey: "status",
    mapRow: (item) => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td>${item.className}</td>
        <td>${item.period}</td>
        <td>${item.average}</td>
        <td><span class="status-pill ${item.status === "Draft" ? "warning" : ""}">${item.status}</span></td>
        <td><a class="table-view-button" href="assessment-view.html?id=${slugify(item.name)}&child=${activeGuardianChildId}">View</a></td>
      </tr>
    `
  });
}

if (document.querySelector("#paymentRows")) {
  renderGuardianListPage({
    rowsSelector: "#paymentRows",
    searchSelector: "#paymentSearch",
    filterSelector: "#paymentFilter",
    emptySelector: "#paymentEmptyState",
    paginationSelector: "#paymentPagination",
    data: guardianPaymentData.filter((item) => item.childId === activeGuardianChildId),
    searchFields: ["student", "month", "type"],
    filterKey: "status",
    mapRow: (item) => `
      <tr>
        <td>${item.month}</td>
        <td>${item.type}</td>
        <td>${item.nominal}</td>
        <td><span class="status-pill ${item.status !== "Lunas" ? "warning" : ""}">${item.status}</span></td>
        <td>${item.date}</td>
        <td><a class="table-view-button" href="payment-view.html?id=${slugify(item.month)}&child=${activeGuardianChildId}">View</a></td>
      </tr>
    `
  });
}
