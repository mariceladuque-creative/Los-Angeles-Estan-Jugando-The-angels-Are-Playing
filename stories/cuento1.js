// stories/cuento1.js

const paginas = [
  {
    titulo: "Página 1",
    imagen: "images/page1.jpg",
    texto_en:
      "On a quiet afternoon, the sky seemed like a soft blanket. " +
      "Very high above, where the clouds turn into cotton, " +
      "a group of little angels gathered to play. " +
      "They laughed softly so as not to scare the little birds, " +
      "and their laughter sounded like little bells.",
    texto_es:
      "En una tarde tranquila, el cielo parecía una manta suave. " +
      "Muy arriba, donde las nubes se vuelven algodón, un grupo de " +
      "angelitos se reunió para jugar. Reían bajito para no asustar " +
      "a los pajaritos, y sus risas sonaban como campanitas.",
    audio_es: "sounds/page1_es.mp3",
    audio_en: "sounds/page1_en.mp3",
  },
  {
    titulo: "Página 2",
    imagen: "images/page2.jpg",
    texto_en:
      "One of them was named Luz. She kept a bright feather in her pocket. " +
      "“Today we’ll play the traveling feather,” she said. " +
      "The game was simple: blow the feather gently so it could fly without falling.",
    texto_es:
      "Uno de ellos se llamaba Luz. Tenía una pluma brillante " +
      "guardada en su bolsillo. —Hoy vamos a jugar a la pluma viajera — " +
      "dijo. El juego era simple: soplar la pluma suavemente para que volara sin caer.",
    audio_es: "sounds/page2_es.mp3",
    audio_en: "sounds/page2_en.mp3",
  },
  {
    titulo: "Página 3",
    imagen: "images/page3.jpg",
    texto_en:
      "The feather rose, spun, and danced… and everyone clapped with joy. " +
      "Suddenly, a strong gust of wind appeared—whoosh! " +
      "The feather shot away. “Nooo!” cried the little angels as it drifted far off.",
    texto_es:
      "La pluma subía, giraba, bailaba… y todos aplaudían con alegría. " +
      "De pronto, una ráfaga de viento fuerte apareció ¡zas! " +
      "La pluma salió disparada. —¡Nooo!— gritaron los angelitos, viendo cómo se alejaba.",
    audio_es: "sounds/page3_es.mp3",
    audio_en: "sounds/page3_en.mp3",
  },
  {
    titulo: "Página 4",
    imagen: "images/page4.jpg",
    texto_en:
      "The feather fell very far, slipping through clouds and sunbeams, " +
      "until it reached a small town on Earth. " +
      "There was a girl named Sofía, sitting by her window with a sad face.",
    texto_es:
      "La pluma cayó muy lejos, atravesó nubes y rayos de sol, " +
      "hasta que llegó cerca de un pequeño pueblo en la Tierra. " +
      "Allí estaba una niña llamada Sofía, sentada en su ventana con cara triste.",
    audio_es: "sounds/page4_es.mp3",
    audio_en: "sounds/page4_en.mp3",
  },
  {
    titulo: "Página 5",
    imagen: "images/page5.jpg",
    texto_en:
      "Sofía sighed. “Today was a difficult day… nobody wanted to play with me.” " +
      "Just then, the feather floated down and landed right in her hand. " +
      "Sofía opened her eyes, surprised. “Where did you come from?”",
    texto_es:
      "Sofía suspiró. —Hoy fue un día difícil… nadie quiso jugar conmigo. " +
      "En ese momento, la pluma bajó lentamente y cayó justo en su mano. " +
      "Sofía abrió los ojos sorprendida. —¿De dónde vienes tú?",
    audio_es: "sounds/page5_es.mp3",
    audio_en: "sounds/page5_en.mp3",
  },
  {
    titulo: "Página 6",
    imagen: "images/page6.jpg",
    texto_en:
      "The feather was so soft it felt like a gentle caress. " +
      "Sofía smiled for the first time that day. " +
      "“If you made it all the way to me… maybe something beautiful is still waiting.” " +
      "“Maybe tomorrow will be better,” she whispered, keeping it safe.",
    texto_es:
      "La pluma era tan suave que parecía una caricia. " +
      "Sofía sonrió por primera vez ese día. " +
      "—Si tú llegaste hasta mí… quizás es porque todavía hay algo bonito esperándome. " +
      "—Quizás mañana será mejor —susurró, guardándola con cuidado.",
    audio_es: "sounds/page6_es.mp3",
    audio_en: "sounds/page6_en.mp3",
  },
  {
    titulo: "Página 7",
    imagen: "images/page7.jpg",
    texto_en:
      "That night, Sofía dreamed of a shining sky. " +
      "She saw the little angels searching for the feather. " +
      "Luz looked down and said, “Don’t worry, you’re never alone. " +
      "Beautiful things always arrive where they’re needed.”",
    texto_es:
      "Esa noche, Sofía soñó con un cielo brillante. " +
      "Vio a los angelitos buscando la pluma. " +
      "Luz la miró desde arriba y dijo: —No te preocupes, nunca estás sola. " +
      "Las cosas lindas siempre llegan donde hacen falta.",
    audio_es: "sounds/page7_es.mp3",
    audio_en: "sounds/page7_en.mp3",
  },
  {
    titulo: "Página 8",
    imagen: "images/page8.jpg",
    texto_en:
      "When she woke up, Sofía went to school smiling, carrying her feather. " +
      "When she took it out, a girl came over, sat beside her, and said, " +
      "“It’s beautiful! Can I see it?” Sofía took a deep breath and replied, " +
      "“Yes… but carefully.” And that’s how a conversation began.",
    texto_es:
      "Al despertar, Sofía fue a la escuela con una sonrisa llevando su pluma. " +
      "Cuando la sacó, una niña se acercó, se sentó a su lado y dijo: " +
      "—¡Qué hermosa! ¿Puedo verla?— Sofía respiró profundo y respondió: " +
      "—Sí… pero con cuidado.— Y así empezó una conversación.",
    audio_es: "sounds/page8_es.mp3",
    audio_en: "sounds/page8_en.mp3",
  },
  {
    titulo: "Página 9",
    imagen: "images/page9.jpg",
    texto_en:
      "At recess, Sofía and her new friends invented a new game: the traveling feather. " +
      "They blew it gently and everyone laughed. " +
      "And Sofía understood something important: sometimes all it takes " +
      "is a small detail to lift the heart.",
    texto_es:
      "En el recreo, Sofía y sus nuevos amigos inventaron un juego nuevo: " +
      "la pluma viajera. La soplaban suave y todos reían. " +
      "Y Sofía entendió algo muy importante: a veces solo hace falta " +
      "un pequeño detalle para que el corazón se anime.",
    audio_es: "sounds/page9_es.mp3",
    audio_en: "sounds/page9_en.mp3",
  },
  {
    titulo: "Página 10",
    imagen: "images/page10.jpg",
    texto_en:
      "That afternoon, Sofía looked up at the sky, smiled, and felt peace. " +
      "The little angels above smiled too. Luz said, “Today our feather did its job.” " +
      "And in the wind remained an invisible message: “You are never alone.” " +
      "There is always magic near you.",
    texto_es:
      "Esa tarde, cuando Sofía miró al cielo, sonrió y sintió paz. " +
      "Los angelitos, desde arriba, también sonrieron. " +
      "Luz dijo: —Hoy nuestra pluma hizo su trabajo. " +
      "Y en el viento quedó un mensaje invisible: “Nunca estás sola”. " +
      "Siempre hay magia cerca de ti. Sofía supo que los ángeles seguían jugando, " +
      "y aunque no los viera, siempre estarían cerca de ella.",
    audio_es: "sounds/page10_es.mp3",
    audio_en: "sounds/page10_en.mp3",
  },
  {
    titulo: "Fin del cuento",
    imagen: "images/page11.jpg",
    texto_en:
      "The End. Thank you for reading this story. We hope you enjoyed the adventure of the little angels.",
    texto_es:
      "Fin. Gracias por leer este cuento. Esperamos que hayas disfrutado la aventura de los angelitos.",
    audio_es: "sounds/page11_es.mp3",
    audio_en: "sounds/page11_en.mp3",
  },
];

let paginaActual = 0;
let modoIdioma = "both"; // "both" | "en" | "es"

// Elementos del HTML
const pageEl = document.querySelector(".page");
const tituloEl = document.getElementById("titulo-pagina");
const textoEnEl = document.getElementById("texto-en");
const textoEsEl = document.getElementById("texto-es");
const imgEl = document.getElementById("imagen-pagina");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const btnBoth = document.getElementById("btn-both");
const btnEn = document.getElementById("btn-en");
const btnEs = document.getElementById("btn-es");

const btnAudio = document.getElementById("btn-audio");
const audioPlayer = new Audio();

const pageIndicator = document.getElementById("page-indicator");
const pageSound = document.getElementById("page-sound");

// 🎵 Música de fondo
const bgMusic = document.getElementById("bg-music");
const btnMusic = document.getElementById("btn-music");
let musicaSonando = false;

function playPageSound() {
  if (!pageSound) return;
  try {
    pageSound.currentTime = 0;
    pageSound.play().catch(() => {});
  } catch (_) {}
}

function detenerAudio() {
  try {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  } catch (_) {}
}

function actualizarBotonMusica() {
  if (!btnMusic) return;
  btnMusic.textContent = musicaSonando ? "⏸️ Pausar música" : "🎵 Música";
}

// 🔁 Sincronizar estado real del audio con el botón de música
if (bgMusic) {
  bgMusic.addEventListener("play", () => {
    musicaSonando = true;
    actualizarBotonMusica();
    localStorage.setItem("bgMusic", "on");
  });

  bgMusic.addEventListener("pause", () => {
    musicaSonando = false;
    actualizarBotonMusica();
    localStorage.setItem("bgMusic", "off");
  });

  bgMusic.addEventListener("ended", () => {
    musicaSonando = false;
    actualizarBotonMusica();
    localStorage.setItem("bgMusic", "off");
  });
}


function reproducirMusica() {
  if (!bgMusic) return;
  bgMusic.volume = 0.12;

  bgMusic.play().catch(() => {
    // si el navegador bloquea el play, deja todo consistente
    musicaSonando = false;
    actualizarBotonMusica();
    localStorage.setItem("bgMusic", "off");
  });
}
// 🔊 Permite que la portada inicie la música con un click del usuario
window.startMusic = () => {
  if (!bgMusic) return;
  if (!bgMusic.paused) return; // si ya está sonando, no reiniciar
  reproducirMusica();
};


function pausarMusica() {
  if (!bgMusic) return;
  bgMusic.pause();
  localStorage.setItem("bgMusic", "off");
}

if (btnMusic) {
  btnMusic.addEventListener("click", () => {
    if (musicaSonando) pausarMusica();
    else reproducirMusica();
  });
}

function obtenerAudioDePagina(p) {
  if (modoIdioma === "both") return null;
  if (modoIdioma === "es") return p.audio_es || null;
  if (modoIdioma === "en") return p.audio_en || null;
  return null;
}

let audioSonando = false;

function actualizarBotonAudio() {
  if (!btnAudio) return;

  if (modoIdioma === "both") {
    btnAudio.disabled = true;
    btnAudio.textContent = "🔊 Audio (elige EN o ES)";
    return;
  }

  btnAudio.disabled = false;
  btnAudio.textContent = audioSonando ? "⏸️ Pausar audio" : "🔊 Audio";
}

function reproducirAudioDePaginaActual() {
  const p = paginas[paginaActual];
  const src = obtenerAudioDePagina(p);

  if (!src) {
    detenerAudio();
    audioSonando = false;
    actualizarBotonAudio();
    return;
  }

  try {
    audioPlayer.src = src;
    audioPlayer.currentTime = 0;
    audioPlayer.play().then(() => {
      audioSonando = true;
      actualizarBotonAudio();
    }).catch(() => {
      audioSonando = false;
      actualizarBotonAudio();
    });
  } catch (_) {
    audioSonando = false;
    actualizarBotonAudio();
  }
}

function toggleAudio() {
  if (modoIdioma === "both") return;

  if (audioSonando) {
    detenerAudio();
    audioSonando = false;
    actualizarBotonAudio();
  } else {
    reproducirAudioDePaginaActual();
  }
}

if (btnAudio) btnAudio.addEventListener("click", toggleAudio);

audioPlayer.addEventListener("ended", () => {
  audioSonando = false;
  actualizarBotonAudio();
});

function aplicarModoIdioma() {
  const hr = document.querySelector(".texto-bilingue hr");

  if (modoIdioma === "both") {
    if (textoEnEl) textoEnEl.style.display = "";
    if (hr) hr.style.display = "";
    if (textoEsEl) textoEsEl.style.display = "";
  } else if (modoIdioma === "en") {
    if (textoEnEl) textoEnEl.style.display = "";
    if (hr) hr.style.display = "none";
    if (textoEsEl) textoEsEl.style.display = "none";
  } else {
    if (textoEnEl) textoEnEl.style.display = "none";
    if (hr) hr.style.display = "none";
    if (textoEsEl) textoEsEl.style.display = "";
  }

  if (btnBoth && btnEn && btnEs) {
    btnBoth.classList.toggle("active", modoIdioma === "both");
    btnEn.classList.toggle("active", modoIdioma === "en");
    btnEs.classList.toggle("active", modoIdioma === "es");
  }

  localStorage.setItem("modoIdioma", modoIdioma);

  // al cambiar idioma: detener audio y actualizar botón
  detenerAudio();
  audioSonando = false;
  actualizarBotonAudio();
}

function renderPagina() {
  const p = paginas[paginaActual];

  // detener audio cuando se cambia de página
  detenerAudio();
  audioSonando = false;
  actualizarBotonAudio();

  if (pageEl) pageEl.classList.add("fade-out");

  setTimeout(() => {
    if (tituloEl) tituloEl.textContent = p.titulo;
    if (imgEl) imgEl.src = p.imagen;
    if (textoEnEl) textoEnEl.textContent = p.texto_en || "";
    if (textoEsEl) textoEsEl.textContent = p.texto_es || "";

    if (pageIndicator) {
      pageIndicator.textContent = `Página ${paginaActual + 1} de ${paginas.length}`;
    }

    if (btnPrev) btnPrev.disabled = false;
    if (btnNext) btnNext.disabled = paginaActual === paginas.length - 1;

    aplicarModoIdioma();
    localStorage.setItem("paginaActual", String(paginaActual));

    if (pageEl) {
      pageEl.classList.remove("fade-out");
      pageEl.classList.add("fade-in");
      setTimeout(() => pageEl.classList.remove("fade-in"), 300);
    }
  }, 150);
}

function cerrarLibro() {
  if (typeof window.volverAPortada === "function") {
    window.volverAPortada();
  } else {
    // fallback mínimo por si no existe
    const cover = document.getElementById("cover");
    const book = document.getElementById("book");
    if (cover && book) {
      book.classList.add("hidden");
      cover.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

// Navegación
if (btnNext) {
  btnNext.addEventListener("click", () => {
    if (paginaActual < paginas.length - 1) {
      paginaActual++;
      playPageSound();
      renderPagina();
    }
  });
}

if (btnPrev) {
  btnPrev.addEventListener("click", () => {
    if (paginaActual === 0) {
      cerrarLibro();
      return;
    }
    paginaActual--;
    playPageSound();
    renderPagina();
  });
}

// Idioma
if (btnBoth) btnBoth.addEventListener("click", () => { modoIdioma = "both"; aplicarModoIdioma(); });
if (btnEn) btnEn.addEventListener("click", () => { modoIdioma = "en"; aplicarModoIdioma(); });
if (btnEs) btnEs.addEventListener("click", () => { modoIdioma = "es"; aplicarModoIdioma(); });

function cargarProgreso() {
  const savedPage = parseInt(localStorage.getItem("paginaActual") || "0", 10);
  const savedLang = localStorage.getItem("modoIdioma");

  if (!Number.isNaN(savedPage)) {
    paginaActual = Math.max(0, Math.min(paginas.length - 1, savedPage));
  }
  if (savedLang === "both" || savedLang === "en" || savedLang === "es") {
    modoIdioma = savedLang;
  }
}

// ===== Inicialización =====
function initBookIfNeeded() {
  const bookEl = document.getElementById("book");
  if (!bookEl) return;
  if (bookEl.classList.contains("hidden")) return;

  cargarProgreso();
  renderPagina();

  // Solo sincroniza el texto del botón con el estado real del audio
  musicaSonando = !!(bgMusic && !bgMusic.paused);
actualizarBotonMusica();
}


// Estado inicial de botones
actualizarBotonMusica();
actualizarBotonAudio();

document.addEventListener("DOMContentLoaded", () => {
  initBookIfNeeded();

  // También soporta el evento openBook (si la portada lo dispara)
  window.addEventListener("openBook", initBookIfNeeded);
 
});

// Controles por teclado (← →)
document.addEventListener("keydown", (e) => {
  if (document.getElementById("book")?.classList.contains("hidden")) return;

  if (e.key === "ArrowRight" && paginaActual < paginas.length - 1) {
    paginaActual++;
    playPageSound();
    renderPagina();
  }

  if (e.key === "ArrowLeft") {
    if (paginaActual === 0) {
      cerrarLibro();
      return;
    }
    paginaActual--;
    playPageSound();
    renderPagina();
  }
});

// Pantalla completa
const btnFullscreen = document.getElementById("btn-fullscreen");

function syncFullscreenButton() {
  if (!btnFullscreen) return;
  btnFullscreen.textContent = document.fullscreenElement
    ? "⛶ Salir pantalla completa"
    : "⛶ Pantalla completa";
}

if (btnFullscreen) {
  btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  document.addEventListener("fullscreenchange", syncFullscreenButton);
  syncFullscreenButton();
}

// ====== MODO OSCURO ======
const btnTheme = document.getElementById("btn-theme");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  if (btnTheme) btnTheme.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

applyTheme(localStorage.getItem("theme") === "dark");

if (btnTheme) {
  btnTheme.addEventListener("click", () => {
    applyTheme(!document.body.classList.contains("dark"));
  });
}

// ====== SWIPE EN MÓVIL ======
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (e) => {
  if (document.getElementById("book")?.classList.contains("hidden")) return;
  if (!e.touches || e.touches.length !== 1) return;

  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (e) => {
  if (document.getElementById("book")?.classList.contains("hidden")) return;
  if (!e.changedTouches || e.changedTouches.length !== 1) return;

  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;

  const dx = endX - touchStartX;
  const dy = endY - touchStartY;

  if (Math.abs(dy) > Math.abs(dx)) return;

  const SWIPE_MIN = 50;

  if (dx <= -SWIPE_MIN) {
    if (paginaActual < paginas.length - 1) {
      paginaActual++;
      playPageSound();
      renderPagina();
    }
  }

  if (dx >= SWIPE_MIN) {
    if (paginaActual === 0) {
      cerrarLibro();
      return;
    }
    paginaActual--;
    playPageSound();
    renderPagina();
  }
}, { passive: true });

// Fin de cuento1.js




