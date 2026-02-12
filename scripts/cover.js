document.addEventListener("DOMContentLoaded", () => {
  const btnCoverAudioEs = document.getElementById("btn-cover-audio-es");
  const btnCoverAudioEn = document.getElementById("btn-cover-audio-en");

  const coverAudioEs = document.getElementById("cover-audio-es");
  const coverAudioEn = document.getElementById("cover-audio-en");

  const btnStart = document.getElementById("btn-start");
  const btnReset = document.getElementById("btn-reset");
  const cover = document.getElementById("cover");
  const book = document.getElementById("book");
  const resetMsg = document.getElementById("reset-msg");

  if (!btnStart || !cover || !book) return;

  function detenerAudiosPortada() {
    [coverAudioEs, coverAudioEn].forEach((a) => {
      if (!a) return;
      try {
        a.pause();
        a.currentTime = 0;
      } catch (_) {}
    });
  }

  // ▶️ Botón Español
  if (btnCoverAudioEs && coverAudioEs) {
    btnCoverAudioEs.addEventListener("click", () => {
      detenerAudiosPortada();
      coverAudioEs.currentTime = 0;
      coverAudioEs.play().catch(() => {});
    });
  }

  // ▶️ Botón English
  if (btnCoverAudioEn && coverAudioEn) {
    btnCoverAudioEn.addEventListener("click", () => {
      detenerAudiosPortada();
      coverAudioEn.currentTime = 0;
      coverAudioEn.play().catch(() => {});
    });
  }

  // Texto del botón según progreso
  const savedPage = parseInt(localStorage.getItem("paginaActual") || "0", 10);
  if (!Number.isNaN(savedPage) && savedPage > 0) {
    btnStart.textContent = `📖 Continuar (Página ${savedPage + 1})`;
  } else {
    btnStart.textContent = "📖 Empezar a leer";
  }

  // Abrir libro (detener audios de portada)
  btnStart.addEventListener("click", () => {
    detenerAudiosPortada();
    cover.classList.add("hidden");
    book.classList.remove("hidden");
    window.dispatchEvent(new Event("openBook"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Reiniciar progreso
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      localStorage.removeItem("paginaActual");
      btnStart.textContent = "📖 Empezar a leer";

      if (resetMsg) {
        resetMsg.textContent = "Progreso reiniciado ✅";
        resetMsg.classList.add("show");
        setTimeout(() => resetMsg.classList.remove("show"), 2000);
      }
    });
  }
});
