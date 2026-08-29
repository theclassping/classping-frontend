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
  { name: "Alya Putri Ramadhani", initials: "AP", nis: "26001", className: "A1", gender: "Perempuan", guardian: "Ibu Rina Ramadhani", relation: "Ibu", phone: "0812-3456-7801", color: "" },
  { name: "Rafi Akbar Maulana", initials: "RA", nis: "26002", className: "A1", gender: "Laki-laki", guardian: "Bapak Dedi Maulana", relation: "Ayah", phone: "0813-7890-1245", color: "alt", overdue: true },
  { name: "Nayla Zahra Aulia", initials: "NZ", nis: "26003", className: "A2", gender: "Perempuan", guardian: "Ibu Siti Aulia", relation: "Ibu", phone: "0857-2234-1180", color: "blue" },
  { name: "Fathan Rizky Pratama", initials: "FR", nis: "26004", className: "A2", gender: "Laki-laki", guardian: "Bapak Andri Pratama", relation: "Ayah", phone: "0819-5521-9034", color: "purple" },
  { name: "Raka Aditya Pratama", initials: "RA", nis: "26005", className: "B1", gender: "Laki-laki", guardian: "Ibu Maya Lestari", relation: "Ibu", phone: "0821-7789-4421", color: "alt" },
  { name: "Keisha Amalia Putri", initials: "KA", nis: "26006", className: "B1", gender: "Perempuan", guardian: "Bapak Arif Setiawan", relation: "Ayah", phone: "0812-9065-7730", color: "" },
  { name: "Daffa Alfarizi", initials: "DA", nis: "26007", className: "B2", gender: "Laki-laki", guardian: "Ibu Nurul Hikmah", relation: "Ibu", phone: "0852-1109-6832", color: "blue" },
  { name: "Citra Maharani", initials: "CM", nis: "26008", className: "B2", gender: "Perempuan", guardian: "Bapak Reza Mahendra", relation: "Ayah", phone: "0878-3345-9012", color: "purple" }
];

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
const logoutButton = document.querySelector("#logoutButton");
const welcomeFirstName = document.querySelector("#welcomeFirstName");
const dashboardDate = document.querySelector("#dashboardDate");
const sessionKey = "classping-school-session";
const studentPagination = document.querySelector("#studentPagination");
const paymentPagination = document.querySelector("#paymentPagination");
const activityPagination = document.querySelector("#activityPagination");
let isParentView = false;
let managedClass = "";
let studentPage = 1;
let paymentPage = 1;
let activityPage = 1;

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
  profileName.textContent = isParentView ? "Rina Ramadhani" : "Andini Sari";
  profileRole.textContent = isParentView ? "Orang Tua Alya" : "Administrator";
  profileAvatar.textContent = isParentView ? "RR" : "AS";
}

function authenticate(email, password) {
  return Object.values(demoAccounts).find((account) => account.email === email.trim().toLowerCase() && account.password === password);
}

function enterApp(account, remember = false) {
  if (!loginPage || !appShell || !profileName || !profileRole || !profileAvatar) return;
  const session = { role: account.role, email: account.email, name: account.name, initials: account.initials };
  sessionStorage.removeItem(sessionKey);
  localStorage.removeItem(sessionKey);
  (remember ? localStorage : sessionStorage).setItem(sessionKey, JSON.stringify(session));
  applyDashboardRole(account.role, false);
  profileName.textContent = account.name;
  profileRole.textContent = account.role === "TEACHER" ? "Guru" : "Administrator";
  profileAvatar.textContent = account.initials;
  if (welcomeFirstName) welcomeFirstName.textContent = account.name.split(" ")[0];
  loginPage.hidden = true;
  appShell.hidden = false;
  document.title = account.role === "TEACHER" ? "ClassPing School — Portal Guru" : "ClassPing School — Dashboard Admin";
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

if (logoutButton && appShell && loginPage && loginEmail) {
  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem(sessionKey);
    localStorage.removeItem(sessionKey);
    appShell.hidden = true;
    loginPage.hidden = false;
    applyDashboardRole("ADMIN", true);
    document.title = "ClassPing School — Masuk";
    loginEmail.focus();
  });
}

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

function getUnpaidStudents() {
  const paidNames = new Set(payments.filter((payment) => payment.month === "Agustus 2026").map((payment) => payment.name));
  return students.filter((student) => !paidNames.has(student.name));
}

function updateDashboardStats() {
  if (!document.querySelector("#collectedAmount") || !document.querySelector("#targetAmount") || !document.querySelector("#paidStudentCount") || !document.querySelector("#paidStudentTotal") || !document.querySelector("#unpaidStudentCount") || !document.querySelector("#overdueStudentCount") || !document.querySelector("#totalStudentCount") || !document.querySelector("#activeClassCount") || !document.querySelector("#unpaidTodoSummary")) return;
  const paidNames = new Set(payments.filter((payment) => payment.month === "Agustus 2026").map((payment) => payment.name));
  const unpaid = getUnpaidStudents();
  const overdue = unpaid.filter((student) => student.overdue).length;
  document.querySelector("#collectedAmount").textContent = rupiah.format(paidNames.size * 250000);
  document.querySelector("#targetAmount").textContent = rupiah.format(students.length * 250000);
  document.querySelector("#paidStudentCount").textContent = paidNames.size;
  document.querySelector("#paidStudentTotal").textContent = students.length;
  document.querySelector("#unpaidStudentCount").textContent = unpaid.length;
  document.querySelector("#overdueStudentCount").textContent = overdue;
  document.querySelector("#totalStudentCount").textContent = students.length;
  document.querySelector("#activeClassCount").textContent = new Set(students.map((student) => student.className)).size;
  document.querySelector("#unpaidTodoSummary").textContent = `${unpaid.length} siswa belum membayar · ${overdue} terlambat`;
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

  paymentPagination.querySelectorAll(".page-button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.page || paymentPage);
      if (!Number.isFinite(nextPage)) return;
      paymentPage = nextPage;
      renderPayments();
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
        <td>${student.phone}</td><td><span class="status-pill">Aktif</span></td>
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

  studentPagination.querySelectorAll(".page-button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = Number(button.dataset.page || studentPage);
      if (!Number.isFinite(nextPage)) return;
      studentPage = nextPage;
      renderStudents();
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

if (searchInput) searchInput.addEventListener("input", renderPayments);
if (classFilter) classFilter.addEventListener("change", renderPayments);
if (studentSearch) studentSearch.addEventListener("input", renderStudents);
if (studentClassFilter) studentClassFilter.addEventListener("change", renderStudents);
if (document.querySelector("#openPayment") && paymentDialog) document.querySelector("#openPayment").addEventListener("click", () => paymentDialog.showModal());
if (document.querySelector("#openActivity") && activityDialog) document.querySelector("#openActivity").addEventListener("click", () => activityDialog.showModal());
if (document.querySelector("#emptyAddActivity") && activityDialog) document.querySelector("#emptyAddActivity").addEventListener("click", () => activityDialog.showModal());
if (document.querySelector("#openReminder") && reminderDialog) document.querySelector("#openReminder").addEventListener("click", openReminderDialog);
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

if (document.querySelector("#collectedAmount")) updateDashboardStats();
if (paymentRows && searchInput && classFilter) renderPayments();
if (studentRows && studentSearch && studentClassFilter) renderStudents();
if (document.querySelector("#activityName")) populateActivityView();

document.querySelectorAll(".settings-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;
    document.querySelectorAll(".settings-tab").forEach((item) => item.classList.toggle("active", item === tab));
    document.querySelectorAll(".settings-panel").forEach((panel) => panel.classList.toggle("active", panel.id === targetId));
  });
});

try {
  const savedSession = localStorage.getItem(sessionKey) || sessionStorage.getItem(sessionKey);
  if (savedSession && loginPage && appShell && loginEmail && loginPassword && loginForm && loginError && rememberLogin) {
    const session = JSON.parse(savedSession);
    if (!["ADMIN", "TEACHER"].includes(session.role)) throw new Error("Invalid school role");
    enterApp(session, Boolean(localStorage.getItem(sessionKey)));
  } else if (loginEmail) {
    loginEmail.focus();
  }
} catch {
  localStorage.removeItem(sessionKey);
  sessionStorage.removeItem(sessionKey);
}
