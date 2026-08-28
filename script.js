const payments = [
  { name: "Alya Putri Ramadhani", initials: "AP", className: "A1", month: "Agustus 2026", date: "27 Agu 2026", amount: "Rp 250.000", color: "" },
  { name: "Raka Aditya Pratama", initials: "RA", className: "B1", month: "Agustus 2026", date: "27 Agu 2026", amount: "Rp 250.000", color: "alt" },
  { name: "Nayla Zahra Aulia", initials: "NZ", className: "A2", month: "Agustus 2026", date: "26 Agu 2026", amount: "Rp 250.000", color: "blue" },
  { name: "Daffa Alfarizi", initials: "DA", className: "B2", month: "Agustus 2026", date: "26 Agu 2026", amount: "Rp 250.000", color: "purple" },
  { name: "Keisha Amalia Putri", initials: "KA", className: "A1", month: "Agustus 2026", date: "25 Agu 2026", amount: "Rp 250.000", color: "alt" }
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

const rows = document.querySelector("#paymentRows");
const search = document.querySelector("#searchInput");
const classFilter = document.querySelector("#classFilter");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#paymentDialog");
const form = document.querySelector("#paymentForm");
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
const newActivityClass = activityForm.elements.activityClass;
const reminderDialog = document.querySelector("#reminderDialog");
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
let isParentView = false;
let managedClass = "";

const demoAccounts = {
  admin: { email: "admin@classping.id", password: "admin123", role: "ADMIN", name: "Andini Sari", initials: "AS" },
  parent: { email: "parent@classping.id", password: "parent123", role: "PARENT", name: "Rina Ramadhani", initials: "RR" },
};

function applyDashboardRole(role, allowPreview = true) {
  isParentView = role === "PARENT";
  document.body.classList.toggle("parent-view", isParentView);
  adminView.hidden = isParentView;
  parentView.hidden = !isParentView;
  viewSwitch.hidden = !allowPreview;
  viewSwitch.querySelector("span").textContent = isParentView ? "Kembali ke Admin" : "Lihat sebagai Orang Tua";
  profileName.textContent = isParentView ? "Rina Ramadhani" : "Andini Sari";
  profileRole.textContent = isParentView ? "Orang Tua Alya" : "Administrator";
  profileAvatar.textContent = isParentView ? "RR" : "AS";
}

function enterApp(account, remember = false) {
  const session = { role: account.role, email: account.email, name: account.name, initials: account.initials };
  sessionStorage.removeItem("classping-session");
  localStorage.removeItem("classping-session");
  (remember ? localStorage : sessionStorage).setItem("classping-session", JSON.stringify(session));
  applyDashboardRole(account.role, account.role === "ADMIN");
  loginPage.hidden = true;
  appShell.hidden = false;
  document.title = account.role === "PARENT" ? "ClassPing — Portal Orang Tua" : "ClassPing — Dashboard Admin";
  window.scrollTo(0, 0);
}

function authenticate(email, password) {
  return Object.values(demoAccounts).find((account) => account.email === email.trim().toLowerCase() && account.password === password);
}

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

document.querySelector("#togglePassword").addEventListener("click", (event) => {
  const showing = loginPassword.type === "text";
  loginPassword.type = showing ? "password" : "text";
  event.currentTarget.setAttribute("aria-label", showing ? "Tampilkan kata sandi" : "Sembunyikan kata sandi");
});

document.querySelectorAll("[data-demo-account]").forEach((button) => {
  button.addEventListener("click", () => {
    const account = demoAccounts[button.dataset.demoAccount];
    loginEmail.value = account.email;
    loginPassword.value = account.password;
    enterApp(account, rememberLogin.checked);
    loginForm.reset();
  });
});

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("classping-session");
  localStorage.removeItem("classping-session");
  appShell.hidden = true;
  loginPage.hidden = false;
  applyDashboardRole("ADMIN", true);
  document.title = "ClassPing — Masuk";
  loginEmail.focus();
});

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

function getUnpaidStudents() {
  const paidNames = new Set(payments.filter((payment) => payment.month === "Agustus 2026").map((payment) => payment.name));
  return students.filter((student) => !paidNames.has(student.name));
}

function updateDashboardStats() {
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

function personalizeReminder(student) {
  return reminderTemplate.value
    .replaceAll("{nama_wali}", student.guardian)
    .replaceAll("{nama_siswa}", student.name);
}

function whatsappNumber(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

function renderReminderRecipients() {
  const unpaid = getUnpaidStudents();
  reminderRecipientCount.textContent = `${unpaid.length} orang tua`;
  reminderRecipients.innerHTML = unpaid.map((student) => {
    const link = `https://wa.me/${whatsappNumber(student.phone)}?text=${encodeURIComponent(personalizeReminder(student))}`;
    return `<div class="recipient-row"><span class="student-avatar ${student.color}">${student.initials}</span><div><strong>${student.guardian}</strong><small>${student.name} · ${student.phone}${student.overdue ? " · Terlambat" : ""}</small></div><a class="whatsapp-link" href="${link}" target="_blank" rel="noopener">Buka WhatsApp</a></div>`;
  }).join("") || "<p class='empty-state'>Semua siswa sudah membayar.</p>";
}

function openReminderDialog(event) {
  event?.preventDefault();
  renderReminderRecipients();
  reminderDialog.showModal();
}

function updateTodoProgress() {
  const completed = todoChecks.filter((checkbox) => checkbox.checked).length;
  const percentage = Math.round((completed / todoChecks.length) * 100);
  todoProgressBar.style.width = `${percentage}%`;
  todoProgressLabel.textContent = `${completed} dari ${todoChecks.length} selesai`;
}

todoChecks.forEach((checkbox) => checkbox.addEventListener("change", updateTodoProgress));

newActivityClass.addEventListener("change", () => {
  const selectedClass = newActivityClass.value.slice(0, 2);
  const eligibleStudents = students.filter((student) => student.className === selectedClass);
  activityForm.querySelector(".tag-options").innerHTML = eligibleStudents.length
    ? eligibleStudents.map((student) => `<label><input type="checkbox" value="${student.name}" /> ${student.name}</label>`).join("")
    : "<p>Pilih kelas untuk menampilkan siswa.</p>";
});

function renderStudents() {
  const term = studentSearch.value.trim().toLocaleLowerCase("id");
  const selectedClass = studentClassFilter.value;
  const filtered = students.filter((student) =>
    `${student.name} ${student.guardian}`.toLocaleLowerCase("id").includes(term) &&
    (selectedClass === "all" || student.className === selectedClass)
  );
  studentRows.innerHTML = filtered.map((student) => `
    <tr>
      <td><div class="student-cell"><span class="student-avatar ${student.color}">${student.initials}</span><strong>${student.name}</strong></div></td>
      <td>${student.nis}</td><td><strong>${student.className}</strong></td>
      <td><span class="gender-pill ${student.gender === "Perempuan" ? "female" : ""}">${student.gender}</span></td>
      <td><div class="guardian-cell"><strong>${student.guardian}</strong><small>${student.relation}</small></div></td>
      <td>${student.phone}</td><td><span class="status-pill">Aktif</span></td>
      <td><button class="more-button" type="button" aria-label="Menu untuk ${student.name}">•••</button></td>
    </tr>`).join("");
  studentCount.textContent = `${filtered.length} siswa`;
  studentEmptyState.hidden = filtered.length > 0;
}

function renderPayments() {
  const term = search.value.trim().toLocaleLowerCase("id");
  const selectedClass = classFilter.value;
  const filtered = payments.filter((payment) =>
    payment.name.toLocaleLowerCase("id").includes(term) &&
    (selectedClass === "all" || payment.className === selectedClass)
  );

  rows.innerHTML = filtered.map((payment) => `
    <tr>
      <td><div class="student-cell"><span class="student-avatar ${payment.color}">${payment.initials}</span><strong>${payment.name}</strong></div></td>
      <td>${payment.className}</td><td>${payment.month}</td><td>${payment.date}</td>
      <td><strong>${payment.amount}</strong></td><td><span class="status-pill">Lunas</span></td>
      <td><button class="more-button" type="button" aria-label="Menu untuk ${payment.name}">•••</button></td>
    </tr>`).join("");
  emptyState.hidden = filtered.length > 0;
}

search.addEventListener("input", renderPayments);
classFilter.addEventListener("change", renderPayments);
studentSearch.addEventListener("input", renderStudents);
studentClassFilter.addEventListener("change", renderStudents);
document.querySelector("#openPayment").addEventListener("click", () => dialog.showModal());
document.querySelector("#openActivity").addEventListener("click", () => activityDialog.showModal());
document.querySelector("#emptyAddActivity").addEventListener("click", () => activityDialog.showModal());
document.querySelector("#openReminder").addEventListener("click", openReminderDialog);
document.querySelector("#openReminderFromTodo").addEventListener("click", openReminderDialog);
reminderTemplate.addEventListener("input", renderReminderRecipients);
document.querySelector("#previewAllMessages").addEventListener("click", renderReminderRecipients);

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

function updateActivityView() {
  const hasActivities = activityDateFilter.value === "2026-08-27";
  const selectedClass = activityClassFilter.value;
  let visibleCount = 0;
  let visiblePhotos = 0;
  activityGrid.querySelectorAll(".activity-card").forEach((card) => {
    const visible = hasActivities && (selectedClass === "all" || card.dataset.class === selectedClass);
    card.hidden = !visible;
    if (visible) {
      visibleCount += 1;
      visiblePhotos += Number(card.dataset.photos || 0);
    }
  });
  activityGrid.hidden = !hasActivities;
  activityEmpty.hidden = visibleCount > 0;
  activityTotal.textContent = `${visibleCount} aktivitas · ${visiblePhotos} foto`;
  activityForm.elements.date.value = activityDateFilter.value;
}

activityDateFilter.addEventListener("change", updateActivityView);
activityClassFilter.addEventListener("change", updateActivityView);

function renderManagedPhotos(count) {
  const icons = ["🎨", "🖌️", "🌈", "😊", "🌱"];
  managedPhotoGrid.innerHTML = Array.from({ length: count }, (_, index) => `
    <button class="managed-photo ${index === 0 ? "active" : ""}" type="button" aria-label="Pilih foto ${index + 1}">
      <span>${icons[index % icons.length]}</span><small class="photo-tag-count">${index === 2 ? "Belum ditag" : "2 tag"}</small>
    </button>`).join("");
  existingPhotoCount.textContent = `${count} foto tersimpan`;
}

function openManageActivity(button) {
  managedClass = button.dataset.class;
  const classLabel = managedClass === "A1" ? "Kelas A1 · Matahari" : managedClass === "A2" ? "Kelas A2 · Pelangi" : `Kelas ${managedClass}`;
  manageActivitySubtitle.textContent = `${button.dataset.title} · ${classLabel}`;
  document.querySelector("#classPrivacyCopy").textContent = `Hanya siswa ${classLabel} yang dapat dipilih.`;
  const classStudents = students.filter((student) => student.className === managedClass);
  classStudentOptions.innerHTML = classStudents.map((student) => `<label><input type="checkbox" value="${student.name}" /> <span class="student-avatar ${student.color}">${student.initials}</span> ${student.name}</label>`).join("");
  selectAllStudents.checked = false;
  renderManagedPhotos(Number(button.dataset.photos) || 1);
  manageActivityDialog.showModal();
}

activityGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".manage-activity");
  if (button) openManageActivity(button);
  const photo = event.target.closest(".managed-photo");
  if (photo) {
    managedPhotoGrid.querySelectorAll(".managed-photo").forEach((item) => item.classList.remove("active"));
    photo.classList.add("active");
  }
});

managedPhotoGrid.addEventListener("click", (event) => {
  const photo = event.target.closest(".managed-photo");
  if (!photo) return;
  managedPhotoGrid.querySelectorAll(".managed-photo").forEach((item) => item.classList.remove("active"));
  photo.classList.add("active");
});

selectAllStudents.addEventListener("change", () => {
  classStudentOptions.querySelectorAll("input").forEach((input) => { input.checked = selectAllStudents.checked; });
});

managePhotos.addEventListener("change", () => {
  [...managePhotos.files].forEach((file) => {
    managedPhotoGrid.insertAdjacentHTML("beforeend", `<button class="managed-photo" type="button"><img src="${URL.createObjectURL(file)}" alt="${file.name}" /><small class="photo-tag-count">Belum ditag</small></button>`);
  });
  existingPhotoCount.textContent = `${managedPhotoGrid.children.length} foto tersimpan`;
});

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

viewSwitch.addEventListener("click", () => {
  applyDashboardRole(isParentView ? "ADMIN" : "PARENT", true);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

activityPhotos.addEventListener("change", () => {
  const files = [...activityPhotos.files];
  uploadPreview.innerHTML = files.length
    ? files.map((file) => `<img src="${URL.createObjectURL(file)}" alt="Pratinjau ${file.name}" />`).join("")
    : "<p>Foto yang dipilih akan muncul di sini.</p>";
});

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

menuButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (window.innerWidth <= 760 && sidebar.classList.contains("open") && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
    sidebar.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

renderPayments();
renderStudents();
updateDashboardStats();

try {
  const savedSession = localStorage.getItem("classping-session") || sessionStorage.getItem("classping-session");
  if (savedSession) {
    const session = JSON.parse(savedSession);
    enterApp(session, Boolean(localStorage.getItem("classping-session")));
  } else {
    loginEmail.focus();
  }
} catch {
  localStorage.removeItem("classping-session");
  sessionStorage.removeItem("classping-session");
}
