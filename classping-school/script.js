const payments = [
  { name: "Alya Putri Ramadhani", initials: "AP", className: "A1", month: "Agustus 2026", date: "27 Agu 2026", amount: "Rp 250.000", color: "" },
  { name: "Raka Aditya Pratama", initials: "RA", className: "B1", month: "Agustus 2026", date: "27 Agu 2026", amount: "Rp 250.000", color: "alt" },
  { name: "Nayla Zahra Aulia", initials: "NZ", className: "A2", month: "Agustus 2026", date: "26 Agu 2026", amount: "Rp 250.000", color: "blue" },
  { name: "Daffa Alfarizi", initials: "DA", className: "B2", month: "Agustus 2026", date: "26 Agu 2026", amount: "Rp 250.000", color: "purple" },
  { name: "Keisha Amalia Putri", initials: "KA", className: "A1", month: "Agustus 2026", date: "25 Agu 2026", amount: "Rp 250.000", color: "alt" },
  { name: "Zafran Hidayat", initials: "ZH", className: "A2", month: "Agustus 2026", date: "25 Agu 2026", amount: "Rp 250.000", color: "blue" },
  { name: "Mira Putri", initials: "MP", className: "B1", month: "Agustus 2026", date: "24 Agu 2026", amount: "Rp 250.000", color: "" },
  { name: "Hafiz Ardiansyah", initials: "HA", className: "B2", month: "Agustus 2026", date: "24 Agu 2026", amount: "Rp 250.000", color: "purple" },
  { name: "Nadya Salsabila", initials: "NS", className: "A1", month: "Agustus 2026", date: "23 Agu 2026", amount: "Rp 250.000", color: "alt" },
  { name: "Ariq Hadi Wijaya", initials: "AH", className: "A2", month: "Agustus 2026", date: "23 Agu 2026", amount: "Rp 250.000", color: "blue" }
];

const students = [
  { name: "Alya Putri Ramadhani", initials: "AP", nis: "26001", className: "A1", gender: "Perempuan", age: 5, status: "Aktif", guardian: "Ibu Rina Ramadhani", relation: "Ibu", phone: "0812-3456-7801", color: "" },
  { name: "Rafi Akbar Maulana", initials: "RA", nis: "26002", className: "A1", gender: "Laki-laki", age: 5, status: "Aktif", guardian: "Bapak Dedi Maulana", relation: "Ayah", phone: "0813-7890-1245", color: "alt", overdue: true },
  { name: "Nayla Zahra Aulia", initials: "NZ", nis: "26003", className: "A2", gender: "Perempuan", age: 4, status: "Aktif", guardian: "Ibu Siti Aulia", relation: "Ibu", phone: "0857-2234-1180", color: "blue" },
  { name: "Fathan Rizky Pratama", initials: "FR", nis: "26004", className: "A2", gender: "Laki-laki", age: 5, status: "Aktif", guardian: "Bapak Andri Pratama", relation: "Ayah", phone: "0819-5521-9034", color: "purple" },
  { name: "Raka Aditya Pratama", initials: "RA", nis: "26005", className: "B1", gender: "Laki-laki", age: 6, status: "Aktif", guardian: "Ibu Maya Lestari", relation: "Ibu", phone: "0821-7789-4421", color: "alt" },
  { name: "Keisha Amalia Putri", initials: "KA", nis: "26006", className: "B1", gender: "Perempuan", age: 6, status: "Aktif", guardian: "Bapak Arif Setiawan", relation: "Ayah", phone: "0812-9065-7730", color: "" },
  { name: "Daffa Alfarizi", initials: "DA", nis: "26007", className: "B2", gender: "Laki-laki", age: 5, status: "Aktif", guardian: "Ibu Nurul Hikmah", relation: "Ibu", phone: "0852-1109-6832", color: "blue" },
  { name: "Citra Maharani", initials: "CM", nis: "26008", className: "B2", gender: "Perempuan", age: 6, status: "Aktif", guardian: "Bapak Reza Mahendra", relation: "Ayah", phone: "0878-3345-9012", color: "purple" }
];

const assessmentReportLayout = [
  {
    title: "Personal Development",
    sections: [
      {
        title: "Social Development",
        indicators: ["Cooperation", "Taking Turns", "Sharing"]
      },
      {
        title: "Emotional Development",
        indicators: ["Confidence", "Independence"]
      }
    ]
  }
];
const assessmentIndicators = assessmentReportLayout.flatMap((group) => group.sections.flatMap((section) => section.indicators));
const defaultAssessments = [
  {
    id: "observasi-keterampilan",
    name: "Observasi Keterampilan Motorik",
    className: "A1",
    startDate: "2026-07-01",
    endDate: "2026-07-31",
    period: "Juli 2026",
    remark: "Anak-anak sudah mulai menunjukkan koordinasi motorik yang lebih baik dan mandiri saat mengikuti kegiatan.",
    status: "Published",
    students: ["Alya Putri Ramadhani", "Rafi Akbar Maulana"],
    scores: {
      "Alya Putri Ramadhani": { Cooperation: "4", "Taking Turns": "3", Sharing: "4", Confidence: "3", Independence: "4" },
      "Rafi Akbar Maulana": { Cooperation: "3", "Taking Turns": "3", Sharing: "3", Confidence: "3", Independence: "4" }
    }
  },
  {
    id: "penilaian-sosial",
    name: "Penilaian Sosial Emosional",
    className: "A2",
    startDate: "2026-08-01",
    endDate: "2026-08-30",
    period: "Agustus 2026",
    remark: "Dukungan guru dan teman sebaya membantu siswa lebih aktif berkomunikasi dan berinteraksi secara sehat.",
    status: "Draft",
    students: ["Nayla Zahra Aulia", "Fathan Rizky Pratama"],
    scores: {
      "Nayla Zahra Aulia": { Cooperation: "4", "Taking Turns": "4", Sharing: "4", Confidence: "4", Independence: "4" },
      "Fathan Rizky Pratama": { Cooperation: "3", "Taking Turns": "3", Sharing: "3", Confidence: "3", Independence: "3" }
    }
  },
  {
    id: "evaluasi-pembelajaran",
    name: "Evaluasi Pembelajaran Bahasa",
    className: "B1",
    startDate: "2026-08-05",
    endDate: "2026-08-25",
    period: "Agustus 2026",
    remark: "Siswa sudah lebih berani menyampaikan ide dan menjawab pertanyaan sederhana dengan benar.",
    status: "Published",
    students: ["Raka Aditya Pratama", "Keisha Amalia Putri"],
    scores: {
      "Raka Aditya Pratama": { Cooperation: "3", "Taking Turns": "4", Sharing: "4", Confidence: "4", Independence: "3" },
      "Keisha Amalia Putri": { Cooperation: "4", "Taking Turns": "4", Sharing: "4", Confidence: "4", Independence: "4" }
    }
  }
];

const savedAssessments = JSON.parse(localStorage.getItem("classping-assessments") || "null");
const assessments = Array.isArray(savedAssessments) && savedAssessments.length ? savedAssessments : defaultAssessments;
const assessmentRows = document.querySelector("#assessmentRows");
const assessmentSearch = document.querySelector("#assessmentSearch");
const assessmentFilterStart = document.querySelector("#assessmentFilterStart");
const assessmentFilterEnd = document.querySelector("#assessmentFilterEnd");
const assessmentClassFilter = document.querySelector("#assessmentClassFilter");
const assessmentPagination = document.querySelector("#assessmentPagination");
const assessmentEmptyState = document.querySelector("#assessmentEmptyState");
const paymentRows = document.querySelector("#paymentRows");
const searchInput = document.querySelector("#searchInput");
const classFilter = document.querySelector("#classFilter");
const emptyState = document.querySelector("#emptyState");
const paymentDialog = document.querySelector("#paymentDialog");
const paymentForm = document.querySelector("#paymentForm");
const toast = document.querySelector("#toast");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menuButton");
const studentRows = document.querySelector("#studentRows");
const studentSearch = document.querySelector("#studentSearch");
const studentClassFilter = document.querySelector("#studentClassFilter");
const studentEmptyState = document.querySelector("#studentEmptyState");
const studentCount = document.querySelector("#studentCount");
const viewSwitch = document.querySelector("#viewSwitch");
const parentView = document.querySelector("#parentView");
const adminView = document.querySelector("#adminView");
const profileName = document.querySelector(".profile strong");
const profileRole = document.querySelector(".profile small");
const profileAvatar = document.querySelector(".profile-avatar");
const profileTrigger = document.querySelector(".profile");
const notificationTrigger = document.querySelector('.icon-button[aria-label="Notifikasi"]');
const activityDialog = document.querySelector("#activityDialog");
const activityForm = document.querySelector("#activityForm");
const activityPhotos = document.querySelector("#activityPhotos");
const uploadPreview = document.querySelector("#uploadPreview");
const activityGrid = document.querySelector("#activityGrid");
const todoChecks = [...document.querySelectorAll(".todo-check")];
const todoProgressBar = document.querySelector("#todoProgressBar");
const todoProgressLabel = document.querySelector("#todoProgressLabel");
const activityDateFilter = document.querySelector("#activityDateFilter");
const activityClassFilter = document.querySelector("#activityClassFilter");
const activityTotal = document.querySelector(".activity-total");
const activityEmpty = document.querySelector("#activityEmpty");
const manageActivityDialog = document.querySelector("#manageActivityDialog");
const manageActivityForm = document.querySelector("#manageActivityForm");
const manageActivitySubtitle = document.querySelector("#manageActivitySubtitle");
const existingPhotoCount = document.querySelector("#existingPhotoCount");
const managedPhotoGrid = document.querySelector("#managedPhotoGrid");
const managePhotos = document.querySelector("#managePhotos");
const classStudentOptions = document.querySelector("#classStudentOptions");
const selectAllStudents = document.querySelector("#selectAllStudents");
const newActivityClass = activityForm?.elements?.activityClass;
const reminderDialog = document.querySelector("#reminderDialog");
const sendReminderDialog = document.querySelector("#sendReminderDialog");
const reminderForm = document.querySelector("#reminderForm");
const reminderTemplate = document.querySelector("#reminderTemplate");
const reminderRecipients = document.querySelector("#reminderRecipients");
const reminderRecipientCount = document.querySelector("#reminderRecipientCount");
const loginPage = document.querySelector("#loginPage");
const appShell = document.querySelector("#appShell");
const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginError = document.querySelector("#loginError");
const rememberLogin = document.querySelector("#rememberLogin");
const logoutButton = document.querySelector(".logout");
const welcomeFirstName = document.querySelector("#welcomeFirstName");
const dashboardDate = document.querySelector("#dashboardDate");
const sessionKey = "classping-school-session";
const schoolProfileOverridesKey = "classping-school-profile-overrides";
const schoolNotificationsKey = "classping-school-notifications";
const schoolWorktimeKey = "classping-school-worktime";
const sessionIdleTimeout = 30 * 60 * 1000;
const sessionTouchInterval = 30 * 1000;
const weeklyWorktimeTarget = 40 * 60;
const studentPagination = document.querySelector("#studentPagination");
const paymentPagination = document.querySelector("#paymentPagination");
const activityPagination = document.querySelector("#activityPagination");
let isParentView = false;
let managedClass = "";
let studentPage = 1;
let paymentPage = 1;
let activityPage = 1;
let assessmentPage = 1;
let activeSchoolSession = null;
let sessionRemembered = false;
let lastSessionTouch = 0;
let worktimeLastTick = Date.now();
let worktimeInterval = null;

const activityCatalog = {
  "melukis-dengan-jari": {
    title: "Melukis dengan Jari",
    avatar: "🎨",
    subtitle: "A1 · Matahari · 27 Agustus 2026",
    time: "09.00",
    status: "Dipublikasi",
    caption: "Anak-anak mengenal warna primer dan mencampurnya menjadi warna baru.",
    photos: 4,
    participants: ["Alya Putri Ramadhani", "Raka Aditya Pratama", "Nayla Zahra Aulia", "Fathan Rizky Pratama", "Keisha Amalia Putri", "Ariq Hadi Wijaya", "Laila Nabila", "Zaki Pratama"],
    className: "A1",
    tagged: 8,
    note: "Semua foto dan tag sudah sesuai dengan kelas dan hanya orang tua yang terlibat yang dapat melihatnya.",
    update: "27 Agu 2026"
  },
  "menanam-kacang-hijau": {
    title: "Menanam Kacang Hijau",
    avatar: "🌱",
    subtitle: "A1 · Matahari · 27 Agustus 2026",
    time: "10.15",
    status: "Dipublikasi",
    caption: "Belajar merawat tanaman dan mengamati proses pertumbuhan biji.",
    photos: 5,
    participants: ["Alya Putri Ramadhani", "Rafi Akbar Maulana", "Nayla Zahra Aulia", "Fathan Rizky Pratama", "Raka Aditya Pratama", "Keisha Amalia Putri", "Daffa Alfarizi", "Citra Maharani", "Zafran Hidayat", "Nadya Salsabila", "Hafiz Ardiansyah", "Mira Putri"],
    className: "A1",
    tagged: 12,
    note: "Proses pertumbuhan tanaman didokumentasikan agar orang tua dapat melihat perkembangan harian anak.",
    update: "27 Agu 2026"
  },
  "bermain-alat-musik": {
    title: "Bermain Alat Musik",
    avatar: "🎵",
    subtitle: "A2 · Pelangi · 27 Agustus 2026",
    time: "11.00",
    status: "Draf",
    caption: "Eksplorasi ritme sederhana menggunakan tamborin dan marakas.",
    photos: 3,
    participants: ["Nayla Zahra Aulia", "Fathan Rizky Pratama"],
    className: "A2",
    tagged: 2,
    note: "Masih dalam tahap draf, foto yang belum ditag perlu ditinjau ulang sebelum dipublikasikan.",
    update: "27 Agu 2026"
  }
};

const demoAccounts = {
  admin: { email: "admin@classping.id", password: "admin123", role: "ADMIN", name: "Andini Sari", initials: "AS" },
  teacher: { email: "nia@classping.id", password: "guru123", role: "TEACHER", name: "Nia Ramadhani", initials: "NR" }
};

function getUserInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "?";
}

function escapeInterfaceText(value = "") {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]);
}

function readLocalObject(key, fallback = {}) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function loadSchoolProfileOverride(role) {
  return readLocalObject(schoolProfileOverridesKey)[role] || {};
}

function saveSchoolProfileOverride(session) {
  const overrides = readLocalObject(schoolProfileOverridesKey);
  overrides[session.role] = {
    name: session.name,
    email: session.email,
    phone: session.phone || ""
  };
  localStorage.setItem(schoolProfileOverridesKey, JSON.stringify(overrides));
}

function showSchoolToast(message, tone = "success") {
  if (!toast) return;
  toast.innerHTML = `<span>${tone === "success" ? "✓" : "!"}</span>${escapeInterfaceText(message)}`;
  toast.classList.toggle("warning", tone !== "success");
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3000);
}

function defaultSchoolNotifications() {
  return [
    {
      id: "demo-upload-success",
      type: "upload",
      title: "Aktivitas berhasil dipublikasikan",
      message: "Foto Melukis dengan Jari sudah tampil untuk orang tua siswa yang ditandai.",
      time: "Baru saja",
      link: "activity.html",
      read: false
    },
    {
      id: "demo-payment-success",
      type: "payment",
      title: "Pembayaran SPP diterima",
      message: "Pembayaran Alya untuk September 2026 telah tercatat lunas.",
      time: "12 menit lalu",
      link: "payment.html",
      read: false
    }
  ];
}

function loadSchoolNotifications() {
  try {
    const stored = JSON.parse(localStorage.getItem(schoolNotificationsKey));
    if (Array.isArray(stored)) return stored;
  } catch {
    // Use the prototype defaults below.
  }
  const defaults = defaultSchoolNotifications();
  localStorage.setItem(schoolNotificationsKey, JSON.stringify(defaults));
  return defaults;
}

function saveSchoolNotifications(notifications) {
  localStorage.setItem(schoolNotificationsKey, JSON.stringify(notifications.slice(0, 20)));
}

function notificationIcon(type) {
  return type === "payment" ? "Rp" : type === "hours" ? "⏱" : "↑";
}

function ensureSchoolNotificationPanel() {
  if (!notificationTrigger) return null;
  let panel = document.querySelector(".school-notification-panel");
  if (!panel) {
    panel = document.createElement("section");
    panel.className = "school-notification-panel";
    panel.hidden = true;
    panel.setAttribute("aria-label", "Daftar notifikasi");
    notificationTrigger.closest(".topbar-actions")?.append(panel);
  }
  return panel;
}

function renderSchoolNotifications() {
  if (!notificationTrigger) return;
  const notifications = loadSchoolNotifications();
  const unread = notifications.filter((item) => !item.read).length;
  const badge = notificationTrigger.querySelector(".notification-badge") || notificationTrigger.querySelector("span");
  if (badge) {
    badge.classList.add("notification-badge");
    badge.hidden = unread === 0;
    badge.textContent = unread > 9 ? "9+" : String(unread);
  }
  notificationTrigger.setAttribute("aria-label", unread ? `Notifikasi, ${unread} belum dibaca` : "Notifikasi, tidak ada yang baru");

  const panel = ensureSchoolNotificationPanel();
  if (!panel) return;
  panel.innerHTML = `
    <header><div><strong>Notifikasi</strong><span>${unread ? `${unread} belum dibaca` : "Semua sudah dibaca"}</span></div>${unread ? '<button type="button" data-read-all>Tandai dibaca</button>' : ""}</header>
    <div class="school-notification-list">
      ${notifications.length ? notifications.map((item) => `
        <a class="school-notification-item ${item.read ? "" : "unread"}" href="${item.link || "#"}">
          <span class="school-notification-icon ${item.type}">${notificationIcon(item.type)}</span>
          <span><strong>${escapeInterfaceText(item.title)}</strong><small>${escapeInterfaceText(item.message)}</small><time>${escapeInterfaceText(item.time || "Baru saja")}</time></span>
        </a>`).join("") : '<p class="school-notification-empty">Belum ada notifikasi.</p>'}
    </div>`;
}

function addSchoolNotification(notification) {
  const notifications = loadSchoolNotifications();
  if (notification.id && notifications.some((item) => item.id === notification.id)) return;
  notifications.unshift({
    ...notification,
    id: notification.id || `notification-${Date.now()}`,
    time: notification.time || "Baru saja",
    read: false
  });
  saveSchoolNotifications(notifications);
  renderSchoolNotifications();
}

function ensureSchoolProfileMenu() {
  if (!profileTrigger) return null;
  let menu = document.querySelector(".school-profile-menu");
  if (!menu) {
    menu = document.createElement("section");
    menu.className = "school-profile-menu";
    menu.hidden = true;
    menu.setAttribute("role", "menu");
    menu.setAttribute("aria-label", "Menu profil pengguna");
    profileTrigger.closest(".topbar-actions")?.append(menu);
  }
  return menu;
}

function renderSchoolProfileMenu() {
  const menu = ensureSchoolProfileMenu();
  if (!menu || !activeSchoolSession) return;
  const session = activeSchoolSession;
  menu.innerHTML = `
    <div class="school-profile-menu__head">
      <span class="profile-avatar">${getUserInitials(session.name)}</span>
      <div><strong>${escapeInterfaceText(session.name)}</strong><small>${session.role === "TEACHER" ? "Guru" : "Administrator"}</small><span>${escapeInterfaceText(session.email)}</span></div>
    </div>
    <button type="button" role="menuitem" data-edit-school-profile><span aria-hidden="true">✎</span><span><strong>Edit profil</strong><small>Ubah nama dan informasi akun</small></span></button>
    <button type="button" role="menuitem" class="danger" data-school-profile-logout><span aria-hidden="true">↪</span><span><strong>Keluar</strong><small>Akhiri sesi di perangkat ini</small></span></button>`;
}

function ensureSchoolProfileDialog() {
  let dialog = document.querySelector("#schoolProfileDialog");
  if (dialog) return dialog;
  dialog = document.createElement("dialog");
  dialog.id = "schoolProfileDialog";
  dialog.className = "school-profile-dialog";
  dialog.setAttribute("aria-labelledby", "schoolProfileDialogTitle");
  dialog.innerHTML = `
    <form id="schoolProfileForm">
      <div class="dialog-heading"><div><span class="dialog-icon">✎</span><div><h2 id="schoolProfileDialogTitle">Edit Profil</h2><p>Perbarui informasi pengguna portal sekolah.</p></div></div><button class="close-button" type="button" data-close-school-profile aria-label="Tutup">×</button></div>
      <div class="school-profile-dialog__identity"><span class="profile-avatar" data-profile-preview>?</span><div><strong data-profile-preview-name>Pengguna</strong><small data-profile-preview-role>Portal sekolah</small></div></div>
      <label>Nama lengkap<input name="profileName" type="text" autocomplete="name" required maxlength="80" /></label>
      <label>Email akun<input name="profileEmail" type="email" autocomplete="email" required maxlength="120" /></label>
      <label>Nomor WhatsApp<input name="profilePhone" type="tel" autocomplete="tel" placeholder="08xx-xxxx-xxxx" maxlength="24" /></label>
      <div class="dialog-actions"><button class="secondary-button" type="button" data-close-school-profile>Batal</button><button class="primary-button" type="submit">Simpan perubahan</button></div>
    </form>`;
  document.body.append(dialog);
  return dialog;
}

function openSchoolProfileDialog() {
  if (!activeSchoolSession) return;
  const dialog = ensureSchoolProfileDialog();
  const form = dialog.querySelector("#schoolProfileForm");
  const accountFallback = activeSchoolSession.role === "TEACHER" ? demoAccounts.teacher : demoAccounts.admin;
  const profileValues = {
    profileName: activeSchoolSession.name || accountFallback.name,
    profileEmail: activeSchoolSession.email || accountFallback.email,
    profilePhone: activeSchoolSession.phone || ""
  };
  Object.entries(profileValues).forEach(([name, value]) => {
    const input = form.querySelector(`[name="${name}"]`);
    input.value = value;
    input.defaultValue = value;
  });
  dialog.querySelector("[data-profile-preview]").textContent = getUserInitials(activeSchoolSession.name);
  dialog.querySelector("[data-profile-preview-name]").textContent = activeSchoolSession.name;
  dialog.querySelector("[data-profile-preview-role]").textContent = activeSchoolSession.role === "TEACHER" ? "Guru" : "Administrator";
  dialog.showModal();
  form.elements.profileName.focus();
}

function setupSchoolHeaderInteractions() {
  if (profileTrigger) {
    profileTrigger.setAttribute("role", "button");
    profileTrigger.setAttribute("tabindex", "0");
    profileTrigger.setAttribute("aria-haspopup", "true");
    profileTrigger.setAttribute("aria-expanded", "false");
    profileTrigger.setAttribute("aria-label", "Buka menu profil");
    const toggleProfileMenu = () => {
      const menu = ensureSchoolProfileMenu();
      if (!menu || !activeSchoolSession) return;
      renderSchoolProfileMenu();
      const opening = menu.hidden;
      menu.hidden = !opening;
      profileTrigger.setAttribute("aria-expanded", String(opening));
      const notificationPanel = ensureSchoolNotificationPanel();
      if (notificationPanel) notificationPanel.hidden = true;
      notificationTrigger?.setAttribute("aria-expanded", "false");
    };
    profileTrigger.addEventListener("click", toggleProfileMenu);
    profileTrigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleProfileMenu();
      }
    });
  }

  if (notificationTrigger) {
    notificationTrigger.setAttribute("aria-haspopup", "true");
    notificationTrigger.setAttribute("aria-expanded", "false");
    notificationTrigger.addEventListener("click", () => {
      renderSchoolNotifications();
      const panel = ensureSchoolNotificationPanel();
      if (!panel) return;
      const opening = panel.hidden;
      panel.hidden = !opening;
      notificationTrigger.setAttribute("aria-expanded", String(opening));
      const profileMenu = ensureSchoolProfileMenu();
      if (profileMenu) profileMenu.hidden = true;
      profileTrigger?.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", (event) => {
    const profileMenu = document.querySelector(".school-profile-menu");
    const notificationPanel = document.querySelector(".school-notification-panel");
    if (profileMenu && !profileMenu.hidden && !profileMenu.contains(event.target) && !profileTrigger?.contains(event.target)) {
      profileMenu.hidden = true;
      profileTrigger?.setAttribute("aria-expanded", "false");
    }
    if (notificationPanel && !notificationPanel.hidden && !notificationPanel.contains(event.target) && !notificationTrigger?.contains(event.target)) {
      notificationPanel.hidden = true;
      notificationTrigger?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.querySelectorAll(".school-profile-menu,.school-notification-panel").forEach((panel) => { panel.hidden = true; });
    profileTrigger?.setAttribute("aria-expanded", "false");
    notificationTrigger?.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-edit-school-profile]")) {
      document.querySelector(".school-profile-menu").hidden = true;
      profileTrigger?.setAttribute("aria-expanded", "false");
      openSchoolProfileDialog();
    }
    if (event.target.closest("[data-school-profile-logout]")) logoutSchoolUser();
    if (event.target.closest("[data-read-all]")) {
      const notifications = loadSchoolNotifications().map((item) => ({ ...item, read: true }));
      saveSchoolNotifications(notifications);
      renderSchoolNotifications();
    }
    if (event.target.closest("[data-close-school-profile]")) document.querySelector("#schoolProfileDialog")?.close();
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id !== "schoolProfileForm") return;
    event.preventDefault();
    if (!event.target.reportValidity() || !activeSchoolSession) return;
    const data = new FormData(event.target);
    activeSchoolSession = {
      ...activeSchoolSession,
      name: data.get("profileName").trim(),
      email: data.get("profileEmail").trim().toLowerCase(),
      phone: data.get("profilePhone").trim(),
      initials: getUserInitials(data.get("profileName"))
    };
    saveSchoolProfileOverride(activeSchoolSession);
    persistSchoolSession(activeSchoolSession, sessionRemembered);
    showAuthenticatedSchool(activeSchoolSession);
    document.querySelector("#schoolProfileDialog")?.close();
    showSchoolToast("Profil berhasil diperbarui.");
  });

  renderSchoolNotifications();
}

function getSchoolWeek(date = new Date()) {
  const weekStart = new Date(date);
  const dayFromMonday = (weekStart.getDay() + 6) % 7;
  weekStart.setDate(weekStart.getDate() - dayFromMonday);
  weekStart.setHours(0, 1, 0, 0);
  if (date < weekStart) weekStart.setDate(weekStart.getDate() - 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const key = `${weekStart.getFullYear()}-${String(weekStart.getMonth() + 1).padStart(2, "0")}-${String(weekStart.getDate()).padStart(2, "0")}`;
  return { key, start: weekStart, end: weekEnd };
}

function formatWorktime(minutes, zeroLabel = "0m") {
  const rounded = Math.max(0, Math.round(minutes));
  const hours = Math.floor(rounded / 60);
  const remaining = rounded % 60;
  if (!hours) return remaining ? `${remaining}m` : zeroLabel;
  return remaining ? `${hours}j ${remaining}m` : `${hours}j`;
}

function readSchoolWorktimeStore() {
  return readLocalObject(schoolWorktimeKey);
}

function loadCurrentWorktimeRecord() {
  if (!activeSchoolSession) return null;
  const store = readSchoolWorktimeStore();
  const identity = activeSchoolSession.role;
  const week = getSchoolWeek();
  let record = store[identity];
  if (!record) {
    record = { weekKey: week.key, days: [120, 210, 165, 270, 0, 0, 0], previousTotal: 685 };
  } else if (record.weekKey !== week.key) {
    const previousTotal = (record.days || []).reduce((sum, value) => sum + Number(value || 0), 0);
    record = { weekKey: week.key, days: [0, 0, 0, 0, 0, 0, 0], previousTotal };
  }
  record.days = Array.from({ length: 7 }, (_, index) => Number(record.days?.[index] || 0));
  store[identity] = record;
  localStorage.setItem(schoolWorktimeKey, JSON.stringify(store));
  return { store, identity, record, week };
}

function checkWorktimeNotifications(totalMinutes, weekKey) {
  if (!activeSchoolSession) return;
  const identity = activeSchoolSession.role.toLowerCase();
  if (totalMinutes >= weeklyWorktimeTarget) {
    addSchoolNotification({
      id: `hours-over-${identity}-${weekKey}`,
      type: "hours",
      title: "Batas 40 jam terlampaui",
      message: `Waktu aktif pekan ini sudah ${formatWorktime(totalMinutes)}. Pertimbangkan pembagian beban kerja.`,
      link: "index.html"
    });
  } else if (totalMinutes >= 36 * 60) {
    addSchoolNotification({
      id: `hours-near-${identity}-${weekKey}`,
      type: "hours",
      title: "Mendekati 40 jam pekan ini",
      message: `Waktu aktif sudah ${formatWorktime(totalMinutes)} dari target 40 jam.`,
      link: "index.html"
    });
  }
}

function renderSchoolWorktime() {
  const totalElement = document.querySelector("#worktimeTotal");
  const chart = document.querySelector("#worktimeChart");
  if (!totalElement || !chart || !activeSchoolSession) return;
  const current = loadCurrentWorktimeRecord();
  if (!current) return;
  const { record, week } = current;
  const total = record.days.reduce((sum, value) => sum + value, 0);
  const previous = Number(record.previousTotal || 0);
  const difference = total - previous;
  const todayIndex = (new Date().getDay() + 6) % 7;
  const labels = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
  const dayDescription = [];

  totalElement.textContent = formatWorktime(total);
  const weekLabel = document.querySelector("#worktimeWeekLabel");
  if (weekLabel) {
    const start = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" }).format(week.start);
    const end = new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short" }).format(week.end);
    weekLabel.textContent = `${start}–${end}`;
  }
  const change = document.querySelector("#worktimeChange");
  if (change) {
    change.textContent = difference === 0 ? "Sama dengan minggu lalu" : `${difference > 0 ? "↗" : "↘"} ${formatWorktime(Math.abs(difference))} dari minggu lalu`;
    change.classList.toggle("down", difference < 0);
  }
  chart.innerHTML = record.days.map((minutes, index) => {
    const height = Math.min(100, Math.max(minutes > 0 ? 3 : 0, (minutes / 480) * 100));
    const display = minutes > 0 ? formatWorktime(minutes) : "—";
    dayDescription.push(`${labels[index]} ${display}`);
    return `<div class="workday ${index === todayIndex ? "today" : ""} ${index > todayIndex ? "future" : ""}"><span><i style="height:${height}%"></i></span><b>${display}</b><small>${labels[index]}</small></div>`;
  }).join("");
  chart.setAttribute("aria-label", `Waktu aktif pekan ini: ${dayDescription.join(", ")}`);
  const goalLabel = document.querySelector("#worktimeGoalLabel");
  if (goalLabel) goalLabel.textContent = `${formatWorktime(total)} / 40j`;
  const goalProgress = document.querySelector("#worktimeGoalProgress");
  if (goalProgress) goalProgress.style.width = `${Math.min(100, (total / weeklyWorktimeTarget) * 100)}%`;
  checkWorktimeNotifications(total, week.key);
}

function trackSchoolWorktime() {
  const now = Date.now();
  if (!activeSchoolSession || document.hidden) {
    worktimeLastTick = now;
    return;
  }
  const current = loadCurrentWorktimeRecord();
  if (!current) return;
  const elapsedMinutes = Math.min(1, Math.max(0, (now - worktimeLastTick) / 60000));
  worktimeLastTick = now;
  const todayIndex = (new Date(now).getDay() + 6) % 7;
  current.record.days[todayIndex] += elapsedMinutes;
  current.store[current.identity] = current.record;
  localStorage.setItem(schoolWorktimeKey, JSON.stringify(current.store));
  renderSchoolWorktime();
}

function startSchoolWorktimeTracking() {
  worktimeLastTick = Date.now();
  renderSchoolWorktime();
  if (worktimeInterval) window.clearInterval(worktimeInterval);
  worktimeInterval = window.setInterval(trackSchoolWorktime, 15_000);
}

function updateDashboardDate() {
  if (!dashboardDate) return;
  dashboardDate.textContent = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date()).toLocaleUpperCase("id-ID");
}

if (dashboardDate) {
  updateDashboardDate();
  window.setInterval(updateDashboardDate, 60_000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateDashboardDate();
  });
}

function applyDashboardRole(role, allowPreview = true) {
  if (!adminView || !parentView || !viewSwitch || !profileName || !profileRole || !profileAvatar) return;
  isParentView = role === "PARENT";
  document.body.classList.toggle("parent-view", isParentView);
  adminView.hidden = isParentView;
  parentView.hidden = !isParentView;
  viewSwitch.hidden = !allowPreview;
  const label = viewSwitch.querySelector("span");
  if (label) label.textContent = isParentView ? "Kembali ke Admin" : "Lihat sebagai Orang Tua";
  const sessionName = activeSchoolSession?.name || "Andini Sari";
  const sessionRole = activeSchoolSession?.role === "TEACHER" ? "Guru" : "Administrator";
  profileName.textContent = isParentView ? "Rina Ramadhani" : sessionName;
  profileRole.textContent = isParentView ? "Orang Tua Alya" : sessionRole;
  profileAvatar.textContent = isParentView ? "RR" : getUserInitials(sessionName);
}

function authenticate(email, password) {
  return Object.values(demoAccounts).find((account) => account.email === email.trim().toLowerCase() && account.password === password);
}

function persistSchoolSession(session, remember = false) {
  sessionStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionKey);
  (remember ? localStorage : sessionStorage).setItem(sessionKey, JSON.stringify(session));
}

function clearSchoolSession() {
  sessionStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionKey);
  activeSchoolSession = null;
  sessionRemembered = false;
}

function logoutSchoolUser() {
  clearSchoolSession();
  if (loginPage) showSchoolLogin();
  else window.location.replace("index.html");
}

function readSchoolSession() {
  const localSession = localStorage.getItem(sessionKey);
  const rawSession = localSession || sessionStorage.getItem(sessionKey);
  if (!rawSession) return { session: null, remember: false, expired: false };
  const session = JSON.parse(rawSession);
  if (!['ADMIN', 'TEACHER'].includes(session.role)) throw new Error('Invalid school role');
  const accountFallback = session.role === "TEACHER" ? demoAccounts.teacher : demoAccounts.admin;
  const lastActive = Number(session.lastActive) || Date.now();
  return {
    session: {
      ...session,
      name: session.name || accountFallback.name,
      email: session.email || accountFallback.email,
      phone: session.phone || "",
      initials: getUserInitials(session.name || accountFallback.name),
      lastActive
    },
    remember: Boolean(localSession),
    expired: Date.now() - lastActive >= sessionIdleTimeout
  };
}

function showAuthenticatedSchool(session) {
  activeSchoolSession = session;
  if (profileName) profileName.textContent = session.name;
  if (profileRole) profileRole.textContent = session.role === "TEACHER" ? "Guru" : "Administrator";
  if (profileAvatar) profileAvatar.textContent = getUserInitials(session.name);
  if (welcomeFirstName) welcomeFirstName.textContent = session.name.split(" ")[0];
  renderSchoolProfileMenu();
  renderSchoolNotifications();
  renderSchoolWorktime();

  if (loginPage && appShell) {
    applyDashboardRole(session.role, false);
    loginPage.hidden = true;
    appShell.hidden = false;
    document.title = session.role === "TEACHER" ? "ClassPing School — Portal Guru" : "ClassPing School — Dashboard Admin";
  }
}

function showSchoolLogin(message = "") {
  if (!loginPage || !appShell) return;
  appShell.hidden = true;
  loginPage.hidden = false;
  applyDashboardRole("ADMIN", true);
  document.title = "ClassPing School — Masuk";
  if (loginError) loginError.textContent = message;
  loginEmail?.focus();
}

function expireSchoolSession() {
  clearSchoolSession();
  const message = "Sesi berakhir karena tidak ada aktivitas selama 30 menit. Silakan masuk kembali.";
  if (loginPage) showSchoolLogin(message);
  else window.location.replace("index.html?reason=idle");
}

function restoreSchoolSession() {
  try {
    const stored = readSchoolSession();
    if (stored.expired) {
      expireSchoolSession();
      return false;
    }
    if (!stored.session) {
      if (loginPage) {
        const idleMessage = new URLSearchParams(window.location.search).get("reason") === "idle"
          ? "Sesi berakhir karena tidak ada aktivitas selama 30 menit. Silakan masuk kembali."
          : "";
        showSchoolLogin(idleMessage);
      } else {
        window.location.replace("index.html");
      }
      return false;
    }
    sessionRemembered = stored.remember;
    showAuthenticatedSchool(stored.session);
    return true;
  } catch {
    clearSchoolSession();
    if (loginPage) showSchoolLogin();
    else window.location.replace("index.html");
    return false;
  }
}

function touchSchoolSession() {
  if (!activeSchoolSession) return;
  const now = Date.now();
  if (now - lastSessionTouch < sessionTouchInterval) return;
  activeSchoolSession.lastActive = now;
  lastSessionTouch = now;
  persistSchoolSession(activeSchoolSession, sessionRemembered);
}

function enterApp(account, remember = false) {
  const profileOverride = loadSchoolProfileOverride(account.role);
  const effectiveAccount = { ...account, ...profileOverride, role: account.role };
  const session = {
    role: effectiveAccount.role,
    email: effectiveAccount.email,
    name: effectiveAccount.name,
    phone: effectiveAccount.phone || "",
    initials: getUserInitials(effectiveAccount.name),
    lastActive: Date.now()
  };
  sessionRemembered = remember;
  lastSessionTouch = session.lastActive;
  persistSchoolSession(session, remember);
  showAuthenticatedSchool(session);
  window.scrollTo(0, 0);
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
}

const togglePasswordButton = document.querySelector("#togglePassword");
if (togglePasswordButton && loginPassword) {
  togglePasswordButton.addEventListener("click", (event) => {
    const showing = loginPassword.type === "text";
    loginPassword.type = showing ? "password" : "text";
    event.currentTarget.setAttribute("aria-label", showing ? "Tampilkan kata sandi" : "Sembunyikan kata sandi");
  });
}

document.querySelectorAll("[data-demo-account]").forEach((button) => {
  button.addEventListener("click", () => {
    const account = demoAccounts[button.dataset.demoAccount];
    if (!account || !loginEmail || !loginPassword || !loginForm) return;
    loginEmail.value = account.email;
    loginPassword.value = account.password;
    enterApp(account, rememberLogin?.checked);
    loginForm.reset();
  });
});

if (logoutButton && appShell) {
  logoutButton.addEventListener("click", logoutSchoolUser);
}

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

function getUnpaidStudents() {
  const paidNames = new Set(payments.filter((payment) => payment.month === "Agustus 2026").map((payment) => payment.name));
  return students.filter((student) => !paidNames.has(student.name));
}

function updateDashboardStats() {
  const paymentNames = new Set(payments.filter((payment) => payment.month === "Agustus 2026").map((payment) => payment.name));
  const paidNames = new Set(students.filter((student) => paymentNames.has(student.name)).map((student) => student.name));
  const unpaid = getUnpaidStudents();
  const overdue = unpaid.filter((student) => student.overdue).length;
  const femaleStudents = students.filter((student) => student.gender === "Perempuan").length;
  const maleStudents = students.filter((student) => student.gender === "Laki-laki").length;
  const activeStudents = students.filter((student) => student.status === "Aktif").length;
  const ages = students.map((student) => student.age).filter(Number.isFinite);
  const ageCounts = ages.reduce((counts, age) => ({ ...counts, [age]: (counts[age] || 0) + 1 }), {});
  const ageDistribution = Object.entries(ageCounts).map(([age, count]) => `${age} th: ${count}`).join(" · ");
  const values = {
    collectedAmount: rupiah.format(paidNames.size * 250000),
    targetAmount: rupiah.format(students.length * 250000),
    paidStudentCount: paidNames.size,
    paidStudentTotal: students.length,
    unpaidStudentCount: unpaid.length,
    overdueStudentCount: overdue,
    totalStudentCount: students.length,
    activeClassCount: new Set(students.map((student) => student.className)).size,
    unpaidTodoSummary: `${unpaid.length} siswa belum membayar · ${overdue} terlambat`,
    studentTotalSummary: students.length,
    femaleStudentSummary: femaleStudents,
    maleStudentSummary: maleStudents,
    studentAgeRangeSummary: ages.length ? `${Math.min(...ages)}–${Math.max(...ages)} tahun` : "Belum ada data",
    studentAgeDistributionSummary: ageDistribution || "Belum ada data usia",
    activeStudentSummary: activeStudents,
    inactiveStudentSummary: students.length - activeStudents
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function renderPagination(totalPages, currentPage, container, pageKey) {
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
    <button class="page-button" type="button" data-page="${Math.max(1, currentPage - 1)}" data-page-key="${pageKey}" ${currentPage === 1 ? "disabled" : ""} aria-label="Halaman sebelumnya">«</button>
    ${pageNumbers.map((page) => `<button class="page-button ${page === currentPage ? "active" : ""}" type="button" data-page="${page}" data-page-key="${pageKey}">${page}</button>`).join("")}
    <button class="page-button" type="button" data-page="${Math.min(totalPages, currentPage + 1)}" data-page-key="${pageKey}" ${currentPage === totalPages ? "disabled" : ""} aria-label="Halaman berikutnya">»</button>
  `;
}

function renderPayments() {
  if (!paymentRows || !emptyState || !searchInput || !classFilter) return;
  const term = searchInput.value.trim().toLocaleLowerCase("id");
  const selectedClass = classFilter.value;
  const filtered = payments.filter((payment) =>
    payment.name.toLocaleLowerCase("id").includes(term) &&
    (selectedClass === "all" || payment.className === selectedClass)
  );
  paymentPage = Math.min(paymentPage, Math.max(1, Math.ceil(filtered.length / 5) || 1));
  const totalPages = Math.max(1, Math.ceil(filtered.length / 5));
  const start = (paymentPage - 1) * 5;
  paymentRows.innerHTML = filtered.slice(start, start + 5).map((payment) => {
    const slug = payment.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `
      <tr>
        <td><div class="student-cell"><span class="student-avatar ${payment.color}">${payment.initials}</span><strong>${payment.name}</strong></div></td>
        <td>${payment.className}</td><td>${payment.month}</td><td>${payment.date}</td>
        <td><strong>${payment.amount}</strong></td><td><span class="status-pill">Lunas</span></td>
        <td>
          <div class="student-action-wrap">
            <button class="more-button action-menu-trigger" type="button" aria-label="Menu untuk ${payment.name}" data-payment="${payment.name}">•••</button>
            <div class="action-menu" aria-label="Aksi untuk ${payment.name}">
              <a class="action-menu-item" href="payment-view.html?payment=${slug}">View</a>
              <a class="action-menu-item" href="payment-update.html?payment=${slug}">Update</a>
              <button class="action-menu-item" type="button" data-action="send-reminder" data-name="${payment.name}">Send Reminder</button>
            </div>
          </div>
        </td>
      </tr>`;
  }).join("");
  renderPagination(totalPages, paymentPage, paymentPagination, "payment");
  emptyState.hidden = filtered.length > 0;

  if (paymentPagination) {
    paymentPagination.querySelectorAll(".page-button").forEach((button) => {
      button.addEventListener("click", () => {
        const nextPage = Number(button.dataset.page || paymentPage);
        if (!Number.isFinite(nextPage)) return;
        paymentPage = nextPage;
        renderPayments();
      });
    });
  }

  document.querySelectorAll(".action-menu-trigger").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const wrap = event.currentTarget.closest(".student-action-wrap");
      const menu = wrap?.querySelector(".action-menu");
      document.querySelectorAll(".student-action-wrap").forEach((item) => {
        const otherMenu = item.querySelector(".action-menu");
        if (otherMenu && otherMenu !== menu) otherMenu.classList.remove("open");
      });
      if (menu) menu.classList.toggle("open");
    });
  });

  document.querySelectorAll("[data-action='send-reminder']").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      const paymentName = event.currentTarget.dataset.name || "";
      openSendReminderDialog(paymentName);
    });
  });
}

function renderStudents() {
  if (!studentRows || !studentSearch || !studentClassFilter || !studentCount || !studentEmptyState) return;
  const term = studentSearch.value.trim().toLocaleLowerCase("id");
  const selectedClass = studentClassFilter.value;
  const filtered = students.filter((student) =>
    `${student.name} ${student.guardian}`.toLocaleLowerCase("id").includes(term) &&
    (selectedClass === "all" || student.className === selectedClass)
  );
  studentPage = Math.min(studentPage, Math.max(1, Math.ceil(filtered.length / 5) || 1));
  const totalPages = Math.max(1, Math.ceil(filtered.length / 5));
  const start = (studentPage - 1) * 5;
  studentRows.innerHTML = filtered.slice(start, start + 5).map((student) => {
    const slug = student.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return `
      <tr>
        <td><div class="student-cell"><span class="student-avatar ${student.color}">${student.initials}</span><strong>${student.name}</strong></div></td>
        <td>${student.nis}</td><td><strong>${student.className}</strong></td>
        <td><span class="gender-pill ${student.gender === "Perempuan" ? "female" : ""}">${student.gender}</span></td>
        <td><div class="guardian-cell"><strong>${student.guardian}</strong><small>${student.relation}</small></div></td>
        <td>${student.phone}</td><td><span class="status-pill ${student.status === "Aktif" ? "" : "muted"}">${student.status}</span></td>
        <td>
          <div class="student-action-wrap">
            <button class="more-button action-menu-trigger" type="button" aria-label="Menu untuk ${student.name}" data-student="${student.name}">•••</button>
            <div class="action-menu" aria-label="Aksi untuk ${student.name}">
              <a class="action-menu-item" href="student-view.html?student=${slug}">View</a>
              <a class="action-menu-item" href="student-update.html?student=${slug}">Update</a>
              <a class="action-menu-item danger" href="student-inactive.html?student=${slug}">Inactive</a>
            </div>
          </div>
        </td>
      </tr>`;
  }).join("");
  studentCount.textContent = `${filtered.length} siswa`;
  studentEmptyState.hidden = filtered.length > 0;
  renderPagination(totalPages, studentPage, studentPagination, "student");

  if (studentPagination) {
    studentPagination.querySelectorAll(".page-button").forEach((button) => {
      button.addEventListener("click", () => {
        const nextPage = Number(button.dataset.page || studentPage);
        if (!Number.isFinite(nextPage)) return;
        studentPage = nextPage;
        renderStudents();
      });
    });
  }

  document.querySelectorAll(".action-menu-trigger").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const wrap = event.currentTarget.closest(".student-action-wrap");
      const menu = wrap?.querySelector(".action-menu");
      document.querySelectorAll(".student-action-wrap").forEach((item) => {
        const otherMenu = item.querySelector(".action-menu");
        if (otherMenu && otherMenu !== menu) otherMenu.classList.remove("open");
      });
      if (menu) menu.classList.toggle("open");
    });
  });
}

function saveAssessments() {
  localStorage.setItem("classping-assessments", JSON.stringify(assessments));
}

function getAssessmentAverage(assessment) {
  if (!assessment || !Array.isArray(assessment.students) || !assessment.students.length) return 0;
  const values = assessment.students.flatMap((student) => {
    const scoreSet = assessment.scores?.[student] || {};
    return assessmentIndicators
      .filter((indicator) => scoreSet[indicator] !== undefined && scoreSet[indicator] !== "")
      .map((indicator) => Number(scoreSet[indicator] || 0));
  });
  if (!values.length) return 0;
  const total = values.reduce((sum, item) => sum + Number(item || 0), 0);
  return Number((total / values.length).toFixed(1));
}

function renderAssessments() {
  const tableBody = document.querySelector("#assessmentRows");
  const searchInput = document.querySelector("#assessmentSearch");
  const startFilter = document.querySelector("#assessmentFilterStart");
  const endFilter = document.querySelector("#assessmentFilterEnd");
  const classFilter = document.querySelector("#assessmentClassFilter");
  const emptyState = document.querySelector("#assessmentEmptyState");
  const pagination = document.querySelector("#assessmentPagination");

  if (!tableBody || !searchInput || !classFilter || !emptyState || !pagination) return;

  const term = searchInput.value.trim().toLocaleLowerCase("id");
  const selectedClass = classFilter.value;
  const fromDate = startFilter ? startFilter.value : "";
  const toDate = endFilter ? endFilter.value : "";

  const filtered = assessments.filter((assessment) => {
    const matchesName = assessment.name.toLocaleLowerCase("id").includes(term);
    const matchesClass = selectedClass === "all" || assessment.className === selectedClass;
    const assessmentStart = assessment.startDate || "";
    const assessmentEnd = assessment.endDate || "";
    const matchesFrom = !fromDate || !assessmentStart || assessmentStart >= fromDate;
    const matchesTo = !toDate || !assessmentEnd || assessmentEnd <= toDate;
    return matchesName && matchesClass && matchesFrom && matchesTo;
  });

  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  assessmentPage = Math.min(assessmentPage, totalPages);
  const start = (assessmentPage - 1) * pageSize;

  tableBody.innerHTML = filtered.slice(start, start + pageSize).map((assessment) => {
    const slug = assessment.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const average = getAssessmentAverage(assessment);
    return `
      <tr>
        <td><strong>${assessment.name}</strong></td>
        <td>${assessment.className}</td>
        <td>${assessment.period}</td>
        <td>${assessment.students.length} siswa</td>
        <td><strong>${average}</strong></td>
        <td><span class="status-pill ${assessment.status === "Draft" ? "draft" : ""}">${assessment.status}</span></td>
        <td>
          <div class="student-action-wrap">
            <button class="more-button action-menu-trigger" type="button" aria-label="Menu untuk ${assessment.name}" data-assessment="${assessment.name}">•••</button>
            <div class="action-menu" aria-label="Aksi untuk ${assessment.name}">
              <a class="action-menu-item" href="assessment-view.html?assessment=${slug}">View</a>
              <a class="action-menu-item" href="assessment-update.html?assessment=${slug}">Update</a>
              <a class="action-menu-item danger" href="assessment-delete.html?assessment=${slug}">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  emptyState.hidden = filtered.length > 0;
  renderPagination(totalPages, assessmentPage, pagination, "assessment");

  pagination.querySelectorAll(".page-button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.page || assessmentPage);
      if (!Number.isFinite(nextPage)) return;
      assessmentPage = nextPage;
      renderAssessments();
    });
  });

  document.querySelectorAll(".action-menu-trigger").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const wrap = event.currentTarget.closest(".student-action-wrap");
      const menu = wrap?.querySelector(".action-menu");
      document.querySelectorAll(".student-action-wrap").forEach((item) => {
        const otherMenu = item.querySelector(".action-menu");
        if (otherMenu && otherMenu !== menu) otherMenu.classList.remove("open");
      });
      if (menu) menu.classList.toggle("open");
    });
  });
}

const activityActionTriggers = document.querySelectorAll(".action-menu-trigger");
if (activityActionTriggers.length) {
  activityActionTriggers.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const wrap = event.currentTarget.closest(".student-action-wrap");
      const menu = wrap?.querySelector(".action-menu");
      document.querySelectorAll(".student-action-wrap").forEach((item) => {
        const otherMenu = item.querySelector(".action-menu");
        if (otherMenu && otherMenu !== menu) otherMenu.classList.remove("open");
      });
      if (menu) menu.classList.toggle("open");
    });
  });
}

function personalizeReminder(student) {
  if (!reminderTemplate) return "";
  return reminderTemplate.value
    .replaceAll("{nama_wali}", student.guardian)
    .replaceAll("{nama_siswa}", student.name);
}

function whatsappNumber(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

function renderReminderRecipients() {
  if (!reminderRecipientCount || !reminderRecipients || !reminderTemplate) return;
  const unpaid = getUnpaidStudents();
  reminderRecipientCount.textContent = `${unpaid.length} orang tua`;
  reminderRecipients.innerHTML = unpaid.map((student) => {
    const link = `https://wa.me/${whatsappNumber(student.phone)}?text=${encodeURIComponent(personalizeReminder(student))}`;
    return `<div class="recipient-row"><span class="student-avatar ${student.color}">${student.initials}</span><div><strong>${student.guardian}</strong><small>${student.name} · ${student.phone}${student.overdue ? " · Terlambat" : ""}</small></div><a class="whatsapp-link" href="${link}" target="_blank" rel="noopener">Buka WhatsApp</a></div>`;
  }).join("") || "<p class='empty-state'>Semua siswa sudah membayar.</p>";
}

function openReminderDialog(event) {
  if (!reminderDialog) return;
  event?.preventDefault();
  renderReminderRecipients();
  reminderDialog.showModal();
}

let pendingReminderName = "";

function openSendReminderDialog(name) {
  if (!sendReminderDialog) return;
  pendingReminderName = name;
  sendReminderDialog.showModal();
}

function processSendReminder(method) {
  const target = students.find((student) => student.name === pendingReminderName) || students[0];
  if (!target) return;

  const methodLabel = method === "email" ? "Email" : "WhatsApp";
  if (toast) {
    toast.innerHTML = `<span>✓</span>Reminder ${methodLabel} dikirim ke wali ${target.guardian}.`;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 3000);
  }

  if (sendReminderDialog) sendReminderDialog.close();
}

function updateTodoProgress() {
  if (!todoProgressBar || !todoProgressLabel || !todoChecks.length) return;
  const completed = todoChecks.filter((checkbox) => checkbox.checked).length;
  const percentage = Math.round((completed / todoChecks.length) * 100);
  todoProgressBar.style.width = `${percentage}%`;
  todoProgressLabel.textContent = `${completed} dari ${todoChecks.length} selesai`;
}

if (todoChecks.length) {
  todoChecks.forEach((checkbox) => checkbox.addEventListener("change", updateTodoProgress));
}

if (newActivityClass && activityForm) {
  newActivityClass.addEventListener("change", () => {
    const selectedClass = newActivityClass.value.slice(0, 2);
    const eligibleStudents = students.filter((student) => student.className === selectedClass);
    activityForm.querySelector(".tag-options").innerHTML = eligibleStudents.length
      ? eligibleStudents.map((student) => `<label><input type="checkbox" value="${student.name}" /> ${student.name}</label>`).join("")
      : "<p>Pilih kelas untuk menampilkan siswa.</p>";
  });
}

function updateActivityView() {
  if (!activityGrid || !activityDateFilter || !activityClassFilter || !activityEmpty || !activityTotal) return;
  const hasActivities = activityDateFilter.value === "2026-08-27";
  const selectedClass = activityClassFilter.value;
  const visibleCards = Array.from(activityGrid.querySelectorAll(".activity-card")).filter((card) => hasActivities && (selectedClass === "all" || card.dataset.class === selectedClass));
  let visiblePhotos = 0;
  visibleCards.forEach((card) => {
    visiblePhotos += Number(card.dataset.photos || 0);
  });
  const totalPages = Math.max(1, Math.ceil(visibleCards.length / 3));
  activityPage = Math.min(activityPage, totalPages);
  const start = (activityPage - 1) * 3;

  activityGrid.querySelectorAll(".activity-card").forEach((card) => {
    const visible = visibleCards.includes(card);
    const pageVisible = visible && visibleCards.indexOf(card) >= start && visibleCards.indexOf(card) < start + 3;
    card.hidden = !pageVisible;
  });

  activityGrid.hidden = !hasActivities;
  activityEmpty.hidden = visibleCards.length > 0;
  activityTotal.textContent = `${visibleCards.length} aktivitas · ${visiblePhotos} foto`;
  renderPagination(totalPages, activityPage, activityPagination, "activity");

  if (activityPagination) {
    activityPagination.querySelectorAll(".page-button").forEach((button) => {
      button.addEventListener("click", () => {
        const nextPage = Number(button.dataset.page || activityPage);
        if (!Number.isFinite(nextPage)) return;
        activityPage = nextPage;
        updateActivityView();
      });
    });
  }

  if (activityForm) activityForm.elements.date.value = activityDateFilter.value;
}

if (activityDateFilter) activityDateFilter.addEventListener("change", () => { activityPage = 1; updateActivityView(); });
if (activityClassFilter) activityClassFilter.addEventListener("change", () => { activityPage = 1; updateActivityView(); });

function syncAssessmentListStorage() {
  localStorage.setItem("classping-assessments", JSON.stringify(assessments));
}

function generateAssessmentSlug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getStudentsForClass(className) {
  return students.filter((student) => student.className === className);
}

function populateAssessmentStudentChecklist(className, containerId, selectedValues = []) {
  const container = document.querySelector(containerId);
  if (!container) return;
  const eligible = getStudentsForClass(className);
  const selectedSet = new Set(selectedValues);
  container.innerHTML = eligible.length
    ? eligible.map((student) => `
        <label class="assessment-student-option">
          <input type="checkbox" name="assessmentStudents" value="${student.name}" ${selectedSet.has(student.name) ? "checked" : ""} />
          <span class="student-avatar ${student.color}">${student.initials}</span>
          <span>${student.name}</span>
        </label>
      `).join("")
    : '<p class="empty-state">Belum ada siswa pada kelas ini.</p>';
}

function renderAssessmentScoringFields(className, containerId) {
  const container = document.querySelector(containerId);
  if (!container) return;
  const eligible = getStudentsForClass(className);
  const selected = [...document.querySelectorAll('input[name="assessmentStudents"]:checked')].map((input) => input.value);
  const studentsToRender = selected.length ? selected : eligible.map((student) => student.name).slice(0, 2);
  const assessmentForm = document.querySelector("#assessmentAddForm");
  const activeAssessment = assessmentForm?.dataset.assessmentId
    ? assessments.find((item) => item.id === assessmentForm.dataset.assessmentId)
    : null;

  container.innerHTML = studentsToRender.map((studentName) => {
    const student = students.find((item) => item.name === studentName) || { initials: studentName.slice(0, 2).toUpperCase() };
    const existingScores = activeAssessment?.scores?.[studentName] || {};
    const reportSections = assessmentReportLayout.map((group) => `
      <div class="assessment-report-group">
        <div class="assessment-report-group-title">${group.title}</div>
        ${group.sections.map((section) => `
          <div class="assessment-report-section">
            <div class="assessment-report-section-title">${section.title}</div>
            <div class="assessment-score-grid">
              ${section.indicators.map((indicator) => {
                const currentValue = existingScores[indicator] || "";
                const options = ["1", "2", "3", "4"].map((value) => `<option value="${value}" ${currentValue === value ? "selected" : ""}>${value}</option>`).join("");
                return `
                  <label>
                    <span>${indicator}</span>
                    <select name="score-${studentName}" data-student="${studentName}" data-indicator="${indicator}">
                      <option value="" ${!currentValue ? "selected" : ""}>Pilih</option>
                      ${options}
                    </select>
                  </label>
                `;
              }).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");

    return `
      <div class="assessment-score-row">
        <div class="assessment-student-meta">
          <span class="student-avatar ${student.color || ""}">${student.initials}</span>
          <strong>${studentName}</strong>
        </div>
        ${reportSections}
        <div class="assessment-student-remark">
          <label for="studentRemark-${studentName}">Catatan siswa</label>
          <textarea id="studentRemark-${studentName}" name="studentRemark-${studentName}" data-student="${studentName}" rows="3" placeholder="Tuliskan catatan pembelajaran siswa...">${existingScores.remark || ""}</textarea>
        </div>
      </div>
    `;
  }).join("");
}

function getAssessmentFormPayload(form) {
  const data = new FormData(form);
  const selectedStudents = [...form.querySelectorAll('input[name="assessmentStudents"]:checked')].map((input) => input.value);
  const scores = {};

  selectedStudents.forEach((studentName) => {
    scores[studentName] = {};
    assessmentIndicators.forEach((indicator) => {
      const value = form.querySelector(`select[data-student="${studentName}"][data-indicator="${indicator}"]`)?.value || "";
      scores[studentName][indicator] = value;
    });
    const remark = form.querySelector(`textarea[data-student="${studentName}"]`)?.value?.trim() || "";
    scores[studentName].remark = remark;
  });

  return {
    id: form.dataset.assessmentId || generateAssessmentSlug(data.get("assessmentName") + "-" + Date.now()),
    name: data.get("assessmentName").toString().trim(),
    className: data.get("assessmentClass").toString(),
    startDate: data.get("assessmentStartDate").toString(),
    endDate: data.get("assessmentEndDate").toString(),
    period: `${new Date(data.get("assessmentStartDate").toString()).toLocaleString("id-ID", { month: "long", year: "numeric" })}`,
    students: selectedStudents,
    scores,
    remark: data.get("assessmentRemark").toString().trim(),
    status: data.get("assessmentStatus") || "Draft",
    image: data.get("assessmentImage")?.name || ""
  };
}

function getAssessmentByQuery() {
  const param = new URLSearchParams(window.location.search).get("assessment");
  if (!param) return null;
  return assessments.find((item) => generateAssessmentSlug(item.name) === param) || null;
}

function populateAssessmentViewPage() {
  const detail = document.querySelector("#assessmentDetail");
  if (!detail) return;
  const assessment = getAssessmentByQuery() || assessments[0];
  if (!assessment) return;

  const average = getAssessmentAverage(assessment);
  document.querySelector("#assessmentName")?.replaceChildren(document.createTextNode(assessment.name));
  document.querySelector("#assessmentClass")?.replaceChildren(document.createTextNode(assessment.className));
  document.querySelector("#assessmentPeriod")?.replaceChildren(document.createTextNode(assessment.period));
  document.querySelector("#assessmentStatus")?.replaceChildren(document.createTextNode(assessment.status));
  document.querySelector("#assessmentStudents")?.replaceChildren(document.createTextNode(`${assessment.students.length} siswa`));
  document.querySelector("#assessmentAverage")?.replaceChildren(document.createTextNode(`${average.toFixed(1)}`));
  document.querySelector("#assessmentRemark")?.replaceChildren(document.createTextNode(assessment.remark || "Tidak ada catatan."));
  const detailStudentList = document.querySelector("#assessmentStudentList");
  if (detailStudentList) {
    detailStudentList.innerHTML = assessment.students.map((studentName) => {
      const student = students.find((item) => item.name === studentName) || { initials: studentName.slice(0, 2).toUpperCase(), color: "" };
      return `
        <li class="participant-item">
          <span class="student-avatar ${student.color}">${student.initials}</span>
          <span>${studentName}</span>
        </li>
      `;
    }).join("");
  }

  const scoreTableBody = document.querySelector("#assessmentScoreTableBody");
  if (scoreTableBody) {
    scoreTableBody.innerHTML = assessment.students.map((studentName) => {
      const studentScores = assessment.scores?.[studentName] || {};
      const scoreValues = assessmentIndicators
        .map((indicator) => Number(studentScores[indicator] || 0))
        .filter((value) => value > 0);
      const average = scoreValues.length
        ? (scoreValues.reduce((sum, value) => sum + value, 0) / scoreValues.length).toFixed(1)
        : "0.0";
      const remark = studentScores.remark || "-";

      const row = assessmentIndicators.map((indicator) => `
        <td>${studentScores[indicator] || "-"}</td>
      `).join("");

      return `
        <tr>
          <td><strong>${studentName}</strong></td>
          ${row}
          <td>${remark}</td>
          <td><strong>${average}</strong></td>
        </tr>
      `;
    }).join("") || '<tr><td colspan="8" class="empty-state">Belum ada siswa yang dipilih.</td></tr>';
  }

  const studentCount = document.querySelector("#assessmentStudentCount");
  if (studentCount) studentCount.textContent = `${assessment.students.length} siswa`;
  const deleteTitle = document.querySelector("#deleteAssessmentName");
  if (deleteTitle) deleteTitle.textContent = assessment.name;
  const summaryPeriod = document.querySelector("#assessmentSummaryPeriod");
  if (summaryPeriod) summaryPeriod.textContent = assessment.period;
}

function populateAssessmentEditForm() {
  const form = document.querySelector("#assessmentAddForm");
  if (!form || !window.location.pathname.endsWith("assessment-update.html")) return;
  const assessment = getAssessmentByQuery() || assessments[0];
  if (!assessment) return;

  form.dataset.assessmentId = assessment.id;
  form.querySelector("#assessmentName") && (form.querySelector("#assessmentName").value = assessment.name);
  form.querySelector("#assessmentClass") && (form.querySelector("#assessmentClass").value = assessment.className);
  form.querySelector("#assessmentStartDate") && (form.querySelector("#assessmentStartDate").value = assessment.startDate || "");
  form.querySelector("#assessmentEndDate") && (form.querySelector("#assessmentEndDate").value = assessment.endDate || "");
  form.querySelector("#assessmentStatus") && (form.querySelector("#assessmentStatus").value = assessment.status || "Draft");
  form.querySelector("#assessmentRemark") && (form.querySelector("#assessmentRemark").value = assessment.remark || "");

  const selectedClass = assessment.className || "A1";
  populateAssessmentStudentChecklist(selectedClass, "#assessmentStudentOptions", assessment.students || []);
  renderAssessmentScoringFields(selectedClass, "#assessmentScoringFields");
}

function handleAssessmentDelete() {
  const assessment = getAssessmentByQuery();
  const confirmButton = document.querySelector("#confirmDeleteAssessment");
  if (!confirmButton) return;

  confirmButton.addEventListener("click", () => {
    if (!assessment) return;
    const index = assessments.findIndex((item) => item.id === assessment.id);
    if (index >= 0) assessments.splice(index, 1);
    localStorage.setItem("classping-assessments", JSON.stringify(assessments));
    window.location.href = "assessment.html";
  });
}

if (document.querySelector("#assessmentAddForm")) {
  const classSelect = document.querySelector("#assessmentClass");
  const studentContainer = document.querySelector("#assessmentStudentOptions");
  const scoreContainer = document.querySelector("#assessmentScoringFields");

  if (classSelect && studentContainer && scoreContainer) {
    classSelect.addEventListener("change", () => {
      populateAssessmentStudentChecklist(classSelect.value || "A1", "#assessmentStudentOptions");
      renderAssessmentScoringFields(classSelect.value || "A1", "#assessmentScoringFields");
    });

    studentContainer.addEventListener("change", () => {
      renderAssessmentScoringFields(classSelect.value || "A1", "#assessmentScoringFields");
    });

    const existingAssessment = getAssessmentByQuery();
    if (window.location.pathname.endsWith("assessment-update.html") && existingAssessment) {
      populateAssessmentStudentChecklist(existingAssessment.className || "A1", "#assessmentStudentOptions", existingAssessment.students || []);
      renderAssessmentScoringFields(existingAssessment.className || "A1", "#assessmentScoringFields");
    } else {
      populateAssessmentStudentChecklist(classSelect.value || "A1", "#assessmentStudentOptions");
      renderAssessmentScoringFields(classSelect.value || "A1", "#assessmentScoringFields");
    }
  }

  const assessmentForm = document.querySelector("#assessmentAddForm");
  if (assessmentForm) {
    const existingAssessment = getAssessmentByQuery();
    if (existingAssessment) {
      assessmentForm.dataset.assessmentId = existingAssessment.id;
    }

    assessmentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const payload = getAssessmentFormPayload(assessmentForm);
      if (!payload.name || !payload.className || !payload.students.length) {
        const toast = document.querySelector("#toast");
        if (toast) {
          toast.innerHTML = "<span>!</span>Lengkapi form penilaian dan pilih siswa minimal 1.";
          toast.classList.add("show");
          window.setTimeout(() => toast.classList.remove("show"), 3000);
        }
        return;
      }

      const existingIndex = assessments.findIndex((item) => item.id === payload.id);
      if (existingIndex >= 0) {
        assessments.splice(existingIndex, 1, payload);
      } else {
        assessments.unshift(payload);
      }
      syncAssessmentListStorage();
      if (document.querySelector("#toast")) {
        const toast = document.querySelector("#toast");
        toast.innerHTML = "<span>✓</span>Penilaian berhasil disimpan.";
        toast.classList.add("show");
        window.setTimeout(() => toast.classList.remove("show"), 3000);
      }
      window.setTimeout(() => {
        window.location.href = "assessment.html";
      }, 500);
    });
  }
}

if (searchInput) searchInput.addEventListener("input", renderPayments);
if (classFilter) classFilter.addEventListener("change", renderPayments);
if (studentSearch) studentSearch.addEventListener("input", renderStudents);
if (studentClassFilter) studentClassFilter.addEventListener("change", renderStudents);
if (document.querySelector("#assessmentSearch")) document.querySelector("#assessmentSearch").addEventListener("input", renderAssessments);
if (document.querySelector("#assessmentFilterStart")) document.querySelector("#assessmentFilterStart").addEventListener("change", renderAssessments);
if (document.querySelector("#assessmentFilterEnd")) document.querySelector("#assessmentFilterEnd").addEventListener("change", renderAssessments);
if (document.querySelector("#assessmentClassFilter")) document.querySelector("#assessmentClassFilter").addEventListener("change", renderAssessments);
if (document.querySelector("#openPayment") && paymentDialog) document.querySelector("#openPayment").addEventListener("click", () => paymentDialog.showModal());
if (document.querySelector("#openActivity") && activityDialog) document.querySelector("#openActivity").addEventListener("click", () => activityDialog.showModal());
if (document.querySelector("#emptyAddActivity") && activityDialog) document.querySelector("#emptyAddActivity").addEventListener("click", () => activityDialog.showModal());
if (document.querySelector("#openReminder")) {
  document.querySelector("#openReminder").addEventListener("click", (event) => {
    if (reminderDialog) openReminderDialog(event);
    else openSendReminderDialog(getUnpaidStudents()[0]?.name || "");
  });
}
if (document.querySelector("#openReminderFromTodo") && reminderDialog) document.querySelector("#openReminderFromTodo").addEventListener("click", openReminderDialog);
if (sendReminderDialog) {
  sendReminderDialog.querySelectorAll("[data-reminder-method]").forEach((button) => {
    button.addEventListener("click", () => {
      const method = button.dataset.reminderMethod;
      processSendReminder(method);
    });
  });
}
if (reminderTemplate) reminderTemplate.addEventListener("input", renderReminderRecipients);
if (document.querySelector("#previewAllMessages")) document.querySelector("#previewAllMessages").addEventListener("click", renderReminderRecipients);

if (reminderForm && reminderDialog && reminderTemplate && toast) {
  reminderForm.addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const automationToggle = document.querySelector("#automationEnabled");
    const config = {
      enabled: automationToggle.checked,
      dueDate: document.querySelector("#reminderDueDate").value,
      time: document.querySelector("#reminderTime").value,
      schedule: document.querySelector("#reminderSchedule").value,
      template: reminderTemplate.value
    };
    localStorage.setItem("classping-whatsapp-reminder", JSON.stringify(config));
    reminderDialog.close();
    toast.innerHTML = `<span>✓</span>Pengaturan pengingat WhatsApp ${config.enabled ? "diaktifkan" : "disimpan"}.`;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 3000);
  });
}

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    const expanded = sidebar.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(expanded));
  });
}

document.addEventListener("click", (event) => {
  if (window.innerWidth <= 760 && sidebar && sidebar.classList.contains("open") && !sidebar.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
    sidebar.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  if (!event.target.closest(".student-action-wrap")) {
    document.querySelectorAll(".student-action-wrap .action-menu").forEach((menu) => menu.classList.remove("open"));
  }
});

if (viewSwitch) {
  viewSwitch.addEventListener("click", () => {
    applyDashboardRole(isParentView ? "ADMIN" : "PARENT", true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (activityForm && activityDialog && activityGrid && activityPhotos && uploadPreview && toast) {
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
    addSchoolNotification({
      type: "upload",
      title: "Aktivitas berhasil dipublikasikan",
      message: `${data.get("title")} sudah tampil untuk ${tagged.length} orang tua siswa yang ditandai.`,
      link: "activity.html"
    });
  });
}

if (activityPhotos && uploadPreview) {
  activityPhotos.addEventListener("change", () => {
    const files = [...activityPhotos.files];
    uploadPreview.innerHTML = files.length
      ? files.map((file) => `<img src="${URL.createObjectURL(file)}" alt="Pratinjau ${file.name}" />`).join("")
      : "<p>Foto yang dipilih akan muncul di sini.</p>";
  });
}

if (manageActivityForm && manageActivityDialog && classStudentOptions && toast) {
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
    addSchoolNotification({
      type: "upload",
      title: "Foto aktivitas berhasil diperbarui",
      message: `${taggedCount} tag siswa kelas ${managedClass} telah tersimpan.`,
      link: "activity.html"
    });
  });
}

if (selectAllStudents && classStudentOptions) {
  selectAllStudents.addEventListener("change", () => {
    classStudentOptions.querySelectorAll("input").forEach((input) => { input.checked = selectAllStudents.checked; });
  });
}

if (managePhotos && managedPhotoGrid && existingPhotoCount) {
  managePhotos.addEventListener("change", () => {
    [...managePhotos.files].forEach((file) => {
      managedPhotoGrid.insertAdjacentHTML("beforeend", `<button class="managed-photo" type="button"><img src="${URL.createObjectURL(file)}" alt="${file.name}" /><small class="photo-tag-count">Belum ditag</small></button>`);
    });
    existingPhotoCount.textContent = `${managedPhotoGrid.children.length} foto tersimpan`;
  });
}

function renderManagedPhotos(count) {
  if (!managedPhotoGrid || !existingPhotoCount) return;
  const icons = ["🎨", "🖌️", "🌈", "😊", "🌱"];
  managedPhotoGrid.innerHTML = Array.from({ length: count }, (_, index) => `
    <button class="managed-photo ${index === 0 ? "active" : ""}" type="button" aria-label="Pilih foto ${index + 1}">
      <span>${icons[index % icons.length]}</span><small class="photo-tag-count">${index === 2 ? "Belum ditag" : "2 tag"}</small>
    </button>`).join("");
  existingPhotoCount.textContent = `${count} foto tersimpan`;
}

function openManageActivity(button) {
  if (!manageActivityDialog || !manageActivitySubtitle || !classStudentOptions || !selectAllStudents || !managedPhotoGrid || !existingPhotoCount) return;
  managedClass = button.dataset.class;
  const classLabel = managedClass === "A1" ? "Kelas A1 · Matahari" : managedClass === "A2" ? "Kelas A2 · Pelangi" : `Kelas ${managedClass}`;
  manageActivitySubtitle.textContent = `${button.dataset.title} · ${classLabel}`;
  const classPrivacyCopy = document.querySelector("#classPrivacyCopy");
  if (classPrivacyCopy) classPrivacyCopy.textContent = `Hanya siswa ${classLabel} yang dapat dipilih.`;
  const classStudents = students.filter((student) => student.className === managedClass);
  classStudentOptions.innerHTML = classStudents.map((student) => `<label><input type="checkbox" value="${student.name}" /> <span class="student-avatar ${student.color}">${student.initials}</span> ${student.name}</label>`).join("");
  selectAllStudents.checked = false;
  renderManagedPhotos(Number(button.dataset.photos) || 1);
  manageActivityDialog.showModal();
}

if (activityGrid) {
  activityGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".manage-activity");
    if (button) openManageActivity(button);
    const photo = event.target.closest(".managed-photo");
    if (photo && managedPhotoGrid) {
      managedPhotoGrid.querySelectorAll(".managed-photo").forEach((item) => item.classList.remove("active"));
      photo.classList.add("active");
    }
  });
}

if (managedPhotoGrid) {
  managedPhotoGrid.addEventListener("click", (event) => {
    const photo = event.target.closest(".managed-photo");
    if (!photo) return;
    managedPhotoGrid.querySelectorAll(".managed-photo").forEach((item) => item.classList.remove("active"));
    photo.classList.add("active");
  });
}

if (paymentForm && paymentDialog && toast) {
  paymentForm.addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    if (!paymentForm.reportValidity()) return;
    const data = new FormData(paymentForm);
    const name = data.get("student").trim();
    const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
    payments.unshift({ name, initials, className: data.get("class"), month: data.get("month"), date: "27 Agu 2026", amount: `Rp ${data.get("amount")}`, color: "" });
    paymentPage = 1;
    renderPayments();
    updateDashboardStats();
    paymentDialog.close();
    paymentForm.reset();
    toast.innerHTML = "<span>✓</span>Pembayaran berhasil dicatat.";
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 3000);
    addSchoolNotification({
      type: "payment",
      title: "Pembayaran SPP diterima",
      message: `Pembayaran ${name} untuk ${data.get("month")} sebesar Rp ${data.get("amount")} telah tercatat.`,
      link: "payment.html"
    });
  });
}

function populateActivityView() {
  const activityParam = new URLSearchParams(window.location.search).get("activity");
  const activity = activityCatalog[activityParam] || activityCatalog["melukis-dengan-jari"];
  const activityName = document.querySelector("#activityName");
  const activityAvatar = document.querySelector("#activityAvatar");
  const activitySubtitle = document.querySelector("#activitySubtitle");
  const detailTime = document.querySelector("#detailTime");
  const detailStatus = document.querySelector("#detailStatus");
  const detailCaption = document.querySelector("#detailCaption");
  const detailPhotos = document.querySelector("#detailPhotos");
  const detailParticipants = document.querySelector("#detailParticipants");
  const summaryClass = document.querySelector("#summaryClass");
  const summaryTagged = document.querySelector("#summaryTagged");
  const summaryUpdate = document.querySelector("#summaryUpdate");
  const activityNote = document.querySelector("#activityNote");
  const participantCount = document.querySelector("#participantCount");
  const activityParticipants = document.querySelector("#activityParticipants");

  if (!activityName || !activitySubtitle || !detailTime || !detailStatus || !detailCaption || !detailPhotos || !detailParticipants || !summaryClass || !summaryTagged || !summaryUpdate || !activityNote || !participantCount || !activityParticipants) return;

  activityName.textContent = activity.title;
  if (activityAvatar) activityAvatar.textContent = activity.avatar;
  activitySubtitle.textContent = activity.subtitle;
  detailTime.textContent = activity.time;
  detailStatus.textContent = activity.status;
  detailCaption.textContent = activity.caption;
  detailPhotos.textContent = `${activity.photos} foto`;
  detailParticipants.textContent = `${activity.participants.length} siswa`;
  summaryClass.textContent = activity.className;
  summaryTagged.textContent = `${activity.tagged} siswa`;
  summaryUpdate.textContent = activity.update;
  activityNote.textContent = activity.note;
  participantCount.textContent = `${activity.participants.length} siswa`;
  activityParticipants.innerHTML = activity.participants.map((participant) => `
    <li>
      <span class="participant-avatar">${participant.split(" ").slice(0, 2).map((part) => part[0]).join("").toUpperCase()}</span>
      <span>${participant}</span>
    </li>
  `).join("");
}

if (document.querySelector("#collectedAmount") || document.querySelector("#unpaidTodoSummary")) updateDashboardStats();
if (paymentRows && searchInput && classFilter) renderPayments();
if (studentRows && studentSearch && studentClassFilter) renderStudents();
if (assessmentRows && assessmentSearch) renderAssessments();
if (document.querySelector("#activityName")) populateActivityView();
if (document.querySelector("#assessmentDetail")) populateAssessmentViewPage();
if (window.location.pathname.endsWith("assessment-update.html")) populateAssessmentEditForm();
if (document.querySelector("#confirmDeleteAssessment")) handleAssessmentDelete();

document.querySelectorAll(".settings-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;
    document.querySelectorAll(".settings-tab").forEach((item) => item.classList.toggle("active", item === tab));
    document.querySelectorAll(".settings-panel").forEach((panel) => panel.classList.toggle("active", panel.id === targetId));
  });
});

setupSchoolHeaderInteractions();
restoreSchoolSession();
startSchoolWorktimeTracking();

window.addEventListener("pageshow", () => {
  restoreSchoolSession();
});

["pointerdown", "pointermove", "keydown", "scroll", "touchstart"].forEach((eventName) => {
  document.addEventListener(eventName, touchSchoolSession, { passive: true });
});

document.addEventListener("visibilitychange", () => {
  worktimeLastTick = Date.now();
  if (!document.hidden && restoreSchoolSession()) {
    touchSchoolSession();
    renderSchoolWorktime();
  }
});

window.setInterval(() => {
  if (!activeSchoolSession) return;
  if (Date.now() - activeSchoolSession.lastActive >= sessionIdleTimeout) expireSchoolSession();
}, 60_000);
