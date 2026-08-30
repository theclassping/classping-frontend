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
  { name: "Penilaian Keterampilan Motorik", className: "A1", period: "Semester 1", average: "88", status: "Published" },
  { name: "Penilaian Sosial Emosional", className: "A2", period: "Semester 1", average: "92", status: "Published" },
  { name: "Penilaian Bahasa Indonesia", className: "B1", period: "Semester 1", average: "84", status: "Draft" },
  { name: "Penilaian Kreativitas", className: "B2", period: "Semester 1", average: "90", status: "Published" },
  { name: "Penilaian Agama", className: "A1", period: "Triwulan 2", average: "95", status: "Published" }
];

const guardianPaymentData = [
  { student: "Alya Putri Ramadhani", month: "Agustus 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Lunas", date: "27 Agu 2026" },
  { student: "Alya Putri Ramadhani", month: "Juli 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Lunas", date: "26 Jul 2026" },
  { student: "Alya Putri Ramadhani", month: "Juni 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Lunas", date: "25 Jun 2026" },
  { student: "Alya Putri Ramadhani", month: "September 2026", type: "SPP Bulanan", nominal: "Rp 250.000", status: "Belum", date: "Belum dibayar" },
  { student: "Alya Putri Ramadhani", month: "Oktober 2026", type: "Kegiatan Ekskul", nominal: "Rp 180.000", status: "Belum", date: "Belum dibayar" }
];

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

if (document.querySelector("#loginForm")) {
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
      loginEmail.value = account.email;
      loginPassword.value = account.password;
      enterApp(account, rememberLogin.checked);
      loginForm.reset();
    });
  });

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      sessionStorage.removeItem(sessionKey);
      localStorage.removeItem(sessionKey);
      appShell.hidden = true;
      loginPage.hidden = false;
      applyDashboardRole("PARENT", false);
      document.title = "ClassPing Guardian — Masuk";
      loginEmail.focus();
    });
  }

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

  renderPayments();
  renderStudents();
  updateDashboardStats();

  try {
    const savedSession = localStorage.getItem(sessionKey) || sessionStorage.getItem(sessionKey);
    if (savedSession) {
      const session = JSON.parse(savedSession);
      if (!["ADMIN", "PARENT"].includes(session.role)) throw new Error("Invalid guardian role");
      enterApp(session, Boolean(localStorage.getItem(sessionKey)));
    } else {
      loginEmail.focus();
    }
  } catch {
    localStorage.removeItem(sessionKey);
    sessionStorage.removeItem(sessionKey);
  }
}

if (document.querySelector("#studentActivityRows")) {
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

if (document.querySelector("#assessmentRows")) {
  renderGuardianListPage({
    rowsSelector: "#assessmentRows",
    searchSelector: "#assessmentSearch",
    filterSelector: "#assessmentStatusFilter",
    emptySelector: "#assessmentEmptyState",
    paginationSelector: "#assessmentPagination",
    data: guardianAssessmentData,
    searchFields: ["name", "className", "status"],
    filterKey: "status",
    mapRow: (item) => `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td>${item.className}</td>
        <td>${item.period}</td>
        <td>${item.average}</td>
        <td><span class="status-pill ${item.status === "Draft" ? "warning" : ""}">${item.status}</span></td>
        <td><a class="table-view-button" href="assessment-view.html?id=${slugify(item.name)}">View</a></td>
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
    data: guardianPaymentData,
    searchFields: ["student", "month", "type"],
    filterKey: "status",
    mapRow: (item) => `
      <tr>
        <td>${item.month}</td>
        <td>${item.type}</td>
        <td>${item.nominal}</td>
        <td><span class="status-pill ${item.status === "Belum" ? "warning" : ""}">${item.status}</span></td>
        <td>${item.date}</td>
        <td><a class="table-view-button" href="payment-view.html?id=${slugify(item.month)}">View</a></td>
      </tr>
    `
  });
}
