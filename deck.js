(() => {
  const data = window.DECK_DATA;
  const deck = document.getElementById("deck");
  const stage = document.getElementById("stage");
  const counterCurrent = document.getElementById("counterCurrent");
  const counterTotal = document.getElementById("counterTotal");
  const sectionLabel = document.getElementById("sectionLabel");
  const progressBar = document.getElementById("progressBar");
  const notesPanel = document.getElementById("notesPanel");
  const notesText = document.getElementById("notesText");
  const overview = document.getElementById("overview");
  const overviewGrid = document.getElementById("overviewGrid");
  const authorModal = document.getElementById("authorModal");
  const authorModalName = document.getElementById("authorModalName");
  const authorModalRole = document.getElementById("authorModalRole");
  const authorModalBio = document.getElementById("authorModalBio");
  const authorModalPortrait = document.getElementById("authorModalPortrait");
  const authorModalClose = document.getElementById("authorModalClose");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let current = 0;
  let timelineTimer = null;

  const pad = (value) => String(value).padStart(2, "0");

  data.slides.forEach((slide, index) => {
    const section = document.createElement("section");
    section.className = `slide ${slide.shellClass || ""}`;
    section.id = `slide-${index + 1}`;
    section.dataset.index = String(index);
    section.setAttribute("aria-label", `${index + 1}. ${slide.nav}`);
    section.innerHTML = `<div class="slide-inner">${slide.html}</div>`;
    const slideHeadCopy = section.querySelector(".slide-head > div");
    if (slideHeadCopy && slide.titleEn) {
      const englishTitle = document.createElement("p");
      englishTitle.className = "title-en reveal";
      englishTitle.textContent = slide.titleEn;
      slideHeadCopy.querySelector(".eyebrow")?.insertAdjacentElement("afterend", englishTitle);
    }
    deck.appendChild(section);
  });

  const slides = [...deck.querySelectorAll(".slide")];
  counterTotal.textContent = pad(slides.length);

  function fitStage() {
    const scale = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    stage.style.setProperty("--stage-scale", String(scale));
  }

  function updateTimeline(year) {
    const events = data.timelineEvents;
    const available = events.filter((event) => year >= event.year);
    const active = available[available.length - 1] || events[0];
    const activeIndex = events.indexOf(active);

    document.getElementById("timelineYear").textContent = String(active.year);
    document.getElementById("timelineTitle").textContent = active.type;
    document.getElementById("timelineDetail").textContent = active.detail;
    document.getElementById("yearOutput").textContent = String(year);
    const range = document.getElementById("yearRange");
    if (range) range.value = String(year);

    document.querySelectorAll(".venue-point").forEach((node, index) => {
      node.classList.toggle("is-on", index <= activeIndex);
      node.classList.toggle("is-current", index === activeIndex);
      node.setAttribute("aria-pressed", index === activeIndex ? "true" : "false");
    });
  }

  function stopTimeline() {
    if (timelineTimer) {
      window.clearInterval(timelineTimer);
      timelineTimer = null;
      const play = document.getElementById("timelinePlay");
      if (play) {
        play.textContent = "播放";
        play.setAttribute("aria-label", "播放场域扩张");
      }
    }
  }

  function initializeTimeline() {
    const track = document.getElementById("timelineTrack");
    const range = document.getElementById("yearRange");
    const play = document.getElementById("timelinePlay");
    if (!track || !range || !play) return;

    data.timelineEvents.forEach((event, index) => {
      // The final event is represented by the central year hub and the range endpoint.
      if (index === data.timelineEvents.length - 1) return;
      const node = document.createElement("button");
      node.type = "button";
      node.className = `venue-point vp${index + 1}`;
      node.innerHTML = `<b>${event.year}</b><span>${event.shortLabel}</span>`;
      node.setAttribute("aria-label", `${event.year} ${event.label}。${event.detail}`);
      node.addEventListener("click", () => {
        stopTimeline();
        range.value = String(event.year);
        updateTimeline(event.year);
      });
      track.appendChild(node);
    });

    range.addEventListener("input", () => {
      stopTimeline();
      updateTimeline(Number(range.value));
    });

    play.addEventListener("click", () => {
      if (timelineTimer) {
        stopTimeline();
        return;
      }

      if (Number(range.value) >= 1979) {
        range.value = "1965";
        updateTimeline(1965);
      }

      play.textContent = "暂停";
      play.setAttribute("aria-label", "暂停场域扩张动画");
      const years = data.timelineEvents.map((event) => event.year);
      let cursor = years.findIndex((year) => year > Number(range.value));
      if (cursor < 0) cursor = 0;

      timelineTimer = window.setInterval(() => {
        const year = years[cursor];
        range.value = String(year);
        updateTimeline(year);
        cursor += 1;
        if (cursor >= years.length) {
          window.clearInterval(timelineTimer);
          timelineTimer = null;
          play.textContent = "重播";
          play.setAttribute("aria-label", "重播场域扩张动画");
        }
      }, 760);
    });

    updateTimeline(1965);
  }

  function bindResearchLinks() {
    const items = [...document.querySelectorAll(".research-item")];
    const mechanisms = [...document.querySelectorAll(".mech-item")];
    if (!items.length) return;

    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((node) => node.classList.remove("is-active"));
        item.classList.add("is-active");
        const targets = new Set((item.dataset.links || "").split(/\s+/).filter(Boolean));
        mechanisms.forEach((node) => {
          node.classList.toggle("is-linked", targets.has(node.dataset.mech));
        });
      });
    });
  }

  const authorProfiles = {
    baumgartner: {
      name: "Frank R. Baumgartner",
      role: "政策注意力、议程设置与政策变化",
      bio: "Frank R. Baumgartner 长期研究政府为何关注某些问题，以及这种注意力如何改变政策结果。1991年发表本文时，他在德州农工大学任教。此后，他与 Bryan D. Jones 共同推进 Policy Agendas Project，以可比较的政府议程数据检验长期稳定与短时间剧变如何并存。他也是间断—均衡研究的重要推动者。",
      portrait: "assets/frank_baumgartner.jpg",
    },
    jones: {
      name: "Bryan D. Jones",
      role: "制度摩擦、信息处理与政策议程",
      bio: "Bryan D. Jones 的研究关注政府如何处理有限信息、制度摩擦如何减缓政策调整，以及注意力变化何时突破原有安排。1991年发表本文时，他同样在德州农工大学任教。他与 Frank R. Baumgartner 长期合作，把政策意象、政策场域和正反馈整合为间断—均衡理论的重要基础。",
      portrait: "assets/bryan_jones.jpeg",
    },
  };

  let lastAuthorTrigger = null;

  function openAuthorProfile(key, trigger) {
    const profile = authorProfiles[key];
    if (!profile) return;
    lastAuthorTrigger = trigger || null;
    authorModalName.textContent = profile.name;
    authorModalRole.textContent = profile.role;
    authorModalBio.textContent = profile.bio;
    authorModalPortrait.src = profile.portrait;
    authorModalPortrait.alt = `${profile.name} 照片`;
    authorModal.classList.add("is-visible");
    authorModal.setAttribute("aria-hidden", "false");
    trigger?.setAttribute("aria-expanded", "true");
    authorModalClose.focus();
  }

  function closeAuthorProfile() {
    if (!authorModal.classList.contains("is-visible")) return;
    authorModal.classList.remove("is-visible");
    authorModal.setAttribute("aria-hidden", "true");
    lastAuthorTrigger?.setAttribute("aria-expanded", "false");
    lastAuthorTrigger?.focus();
  }

  function bindAuthorBios() {
    document.querySelectorAll(".author-card[data-author]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      button.addEventListener("click", () => openAuthorProfile(button.dataset.author, button));
    });
    authorModalClose.addEventListener("click", closeAuthorProfile);
    authorModal.addEventListener("click", (event) => {
      if (event.target === authorModal) closeAuthorProfile();
    });
  }

  function updateChrome(index) {
    const slide = data.slides[index];
    counterCurrent.textContent = pad(index + 1);
    sectionLabel.textContent = slide.nav;
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
    notesText.textContent = slide.notes || "本页无讲者备注。";
    history.replaceState(null, "", `#slide-${index + 1}`);
  }

  function showSlide(index, push = false) {
    const next = Math.max(0, Math.min(index, slides.length - 1));
    if (next === current && slides[current].classList.contains("is-active")) {
      updateChrome(next);
      return;
    }

    if (next !== 11) stopTimeline();
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === next);
      slide.classList.toggle("is-past", slideIndex < next);
    });
    current = next;
    updateChrome(current);
    if (push) {
      history.pushState({ slide: current }, "", `#slide-${current + 1}`);
    }
  }

  function toggleNotes() {
    notesPanel.classList.toggle("is-visible");
  }

  function toggleOverview(force) {
    const shouldShow = typeof force === "boolean" ? force : !overview.classList.contains("is-visible");
    overview.classList.toggle("is-visible", shouldShow);
    if (shouldShow) overviewGrid.querySelector("button")?.focus();
  }

  function buildOverview() {
    data.slides.forEach((slide, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "overview-item";
      button.innerHTML = `<span>${pad(index + 1)} / ${pad(slides.length)}</span><strong>${slide.nav}</strong>`;
      button.addEventListener("click", () => {
        toggleOverview(false);
        showSlide(index, true);
      });
      overviewGrid.appendChild(button);
    });
  }

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be blocked by the browser; navigation still works.
    }
  }

  function initializeFromHash() {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    const index = match ? Number(match[1]) - 1 : 0;
    showSlide(index);
  }

  document.getElementById("prevBtn").addEventListener("click", () => showSlide(current - 1, true));
  document.getElementById("nextBtn").addEventListener("click", () => showSlide(current + 1, true));
  document.getElementById("notesBtn").addEventListener("click", toggleNotes);
  document.getElementById("overviewBtn").addEventListener("click", () => toggleOverview());
  document.getElementById("fullscreenBtn").addEventListener("click", toggleFullscreen);

  document.addEventListener("keydown", (event) => {
    if (authorModal.classList.contains("is-visible")) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAuthorProfile();
      }
      return;
    }
    if (event.target instanceof HTMLInputElement) return;
    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      showSlide(current + 1, true);
      return;
    }
    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      showSlide(current - 1, true);
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      showSlide(0, true);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      showSlide(slides.length - 1, true);
      return;
    }
    if (event.key.toLowerCase() === "n") toggleNotes();
    if (event.key.toLowerCase() === "o") toggleOverview();
    if (event.key.toLowerCase() === "f") toggleFullscreen();
    if (event.key === "Escape") {
      toggleOverview(false);
      notesPanel.classList.remove("is-visible");
    }
  });

  window.addEventListener("resize", fitStage);
  window.addEventListener("hashchange", initializeFromHash);

  if (new URLSearchParams(window.location.search).has("capture")) {
    document.body.classList.add("capture");
  }

  fitStage();
  buildOverview();
  initializeTimeline();
  bindResearchLinks();
  bindAuthorBios();
  initializeFromHash();
})();
