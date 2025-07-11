"use client";

import Image from "next/image";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";

// --- EXPERIENCE DATA & TYPE (top-level, setelah import) ---
const experiences = [
  {
    title: {
      id: "Asisten Praktikum Algoritma 1",
      en: "Algorithm 1 Teaching Assistant",
    },
    company: {
      id: "Universitas Jember",
      en: "University of Jember",
    },
    year: "2023",
    summary: {
      id: "Membantu mahasiswa memahami materi dan praktik Algoritma 1.",
      en: "Helping students understand Algorithm 1 materials and practice.",
    },
    details: {
      id: `
      - Membimbing praktikum Algoritma 1 untuk mahasiswa semester awal.
      - Membuat soal, membahas, dan mengoreksi tugas praktikum.
      - Memberikan konsultasi dan solusi pemrograman dasar.
    `,
      en: `
      - Guiding Algorithm 1 practicum for early semester students.
      - Creating questions, discussing, and correcting practicum assignments.
      - Providing consultation and basic programming solutions.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Asisten Praktikum Algoritma 1",
          en: "Algorithm 1 Teaching Assistant Certificate",
        },
        url: "/sertif/asprak_algo1.pdf",
      },
    ],
  },
  {
    title: {
      id: "Asisten Praktikum Algoritma 2",
      en: "Algorithm 2 Teaching Assistant",
    },
    company: {
      id: "Universitas Jember",
      en: "University of Jember",
    },
    year: "2024",
    summary: {
      id: "Membantu mahasiswa memahami materi dan praktik Algoritma 2.",
      en: "Helping students understand Algorithm 2 materials and practice.",
    },
    details: {
      id: `
      - Membimbing praktikum Algoritma 2 untuk mahasiswa semester lanjutan.
      - Membuat soal, membahas, dan mengoreksi tugas praktikum.
      - Memberikan konsultasi dan solusi pemrograman lanjutan.
    `,
      en: `
      - Guiding Algorithm 2 practicum for advanced semester students.
      - Creating questions, discussing, and correcting practicum assignments.
      - Providing consultation and advanced programming solutions.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Asisten Praktikum Algoritma 2",
          en: "Algorithm 2 Teaching Assistant Certificate",
        },
        url: "/sertif/asprak_algo2.pdf",
      },
    ],
  },
  {
    title: {
      id: "Bootcamp Decoding: Dasar Pemrograman Web",
      en: "Decoding Bootcamp: Web Programming Fundamentals",
    },
    company: "Decoding Indonesia",
    year: "2023",
    summary: {
      id: "Peserta bootcamp Dasar Pemrograman Web.",
      en: "Web Programming Fundamentals bootcamp participant.",
    },
    details: {
      id: `
      - Mempelajari HTML, CSS, dan dasar web development.
      - Membuat project landing page responsif.
    `,
      en: `
      - Learning HTML, CSS, and web development fundamentals.
      - Creating responsive landing page projects.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Dasar Pemrograman Web",
          en: "Web Programming Fundamentals Certificate",
        },
        url: "/sertif/decoding_web.pdf",
      },
    ],
  },
  {
    title: {
      id: "Bootcamp Decoding: Dasar Pemrograman JavaScript",
      en: "Decoding Bootcamp: JavaScript Programming Fundamentals",
    },
    company: "Decoding Indonesia",
    year: "2023",
    summary: {
      id: "Peserta bootcamp Dasar Pemrograman JavaScript.",
      en: "JavaScript Programming Fundamentals bootcamp participant.",
    },
    details: {
      id: `
      - Mempelajari dasar JavaScript, ES6, dan DOM manipulation.
      - Membuat aplikasi interaktif sederhana.
    `,
      en: `
      - Learning JavaScript fundamentals, ES6, and DOM manipulation.
      - Creating simple interactive applications.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Dasar Pemrograman JavaScript",
          en: "JavaScript Programming Fundamentals Certificate",
        },
        url: "/sertif/decoding_js.pdf",
      },
    ],
  },
  {
    title: {
      id: "Bootcamp Decoding: Dasar AI",
      en: "Decoding Bootcamp: AI Fundamentals",
    },
    company: "Decoding Indonesia",
    year: "2024",
    summary: {
      id: "Peserta bootcamp Dasar Artificial Intelligence.",
      en: "AI Fundamentals bootcamp participant.",
    },
    details: {
      id: `
      - Mempelajari konsep dasar AI dan machine learning.
      - Implementasi AI sederhana dengan Python.
    `,
      en: `
      - Learning AI fundamentals and machine learning concepts.
      - Implementing simple AI with Python.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Dasar AI",
          en: "AI Fundamentals Certificate",
        },
        url: "/sertif/decoding_ai.pdf",
      },
    ],
  },
  {
    title: {
      id: "Bootcamp Decoding: Front End",
      en: "Decoding Bootcamp: Front End Development",
    },
    company: "Decoding Indonesia",
    year: "2024",
    summary: {
      id: "Peserta bootcamp Front End Web Development.",
      en: "Front End Web Development bootcamp participant.",
    },
    details: {
      id: `
      - Mempelajari React, Next.js, dan Tailwind CSS.
      - Membuat project web portfolio modern.
    `,
      en: `
      - Learning React, Next.js, and Tailwind CSS.
      - Creating modern web portfolio projects.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Front End",
          en: "Front End Development Certificate",
        },
        url: "/sertif/decoding_fe.pdf",
      },
    ],
  },
  {
    title: {
      id: "Kepanitiaan SSI Hology",
      en: "SSI Hology Committee Member",
    },
    company: {
      id: "Himpunan Mahasiswa Sistem Informasi (SSI)",
      en: "Information Systems Student Association (SSI)",
    },
    year: "2023",
    summary: {
      id: "Panitia divisi perlengkapan (perkap) pada event SSI Hology.",
      en: "Equipment division committee member at SSI Hology event.",
    },
    details: {
      id: `
      - Bertanggung jawab sebagai perkap (perlengkapan) dalam acara SSI Hology.
      - Mengelola, menyiapkan, dan mendistribusikan seluruh kebutuhan logistik acara.
      - Berkoordinasi dengan divisi lain untuk memastikan kelancaran pelaksanaan event.
      - Membantu dokumentasi dan penataan ulang perlengkapan setelah acara selesai.
    `,
      en: `
      - Responsible as equipment coordinator in SSI Hology event.
      - Managing, preparing, and distributing all event logistics needs.
      - Coordinating with other divisions to ensure smooth event execution.
      - Assisting in documentation and equipment reorganization after the event.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Kepanitiaan SSI Hology",
          en: "SSI Hology Committee Certificate",
        },
        url: "/sertif/ssi_hology.pdf",
      },
    ],
  },
  {
    title: {
      id: "Kepanitiaan SSI Sharingala",
      en: "SSI Sharingala Committee Member",
    },
    company: {
      id: "Himpunan Mahasiswa Sistem Informasi (SSI)",
      en: "Information Systems Student Association (SSI)",
    },
    year: "2024",
    summary: {
      id: "Panitia divisi perlengkapan (perkap) pada event SSI Sharingala.",
      en: "Equipment division committee member at SSI Sharingala event.",
    },
    details: {
      id: `
      - Bertugas sebagai perkap (perlengkapan) dalam acara SSI Sharingala.
      - Menyiapkan, mengatur, dan memastikan seluruh alat dan fasilitas acara siap digunakan.
      - Melakukan pengecekan dan pengelolaan inventaris sebelum dan sesudah acara.
      - Mendukung kelancaran acara dengan koordinasi antar divisi.
    `,
      en: `
      - Serving as equipment coordinator in SSI Sharingala event.
      - Preparing, organizing, and ensuring all tools and event facilities are ready to use.
      - Conducting inventory checks and management before and after the event.
      - Supporting event success through inter-division coordination.
    `,
    },
    certificates: [
      {
        name: {
          id: "Sertifikat Kepanitiaan SSI Sharingala",
          en: "SSI Sharingala Committee Certificate",
        },
        url: "/sertif/ssi_sharingala.pdf",
      },
    ],
  },
];
type Experience = (typeof experiences)[number];

// Weather & Time Widget
function WeatherTimeWidget() {
  const [weather, setWeather] = useState<{
    temp: number;
    icon: string;
    desc: string;
  } | null>(null);
  const [time, setTime] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get time (local)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Get weather (Open-Meteo, no API key needed, fallback to Jakarta)
  useEffect(() => {
    setLoading(true);
    setError(null);
    // Try geolocation
    const fetchWeather = (lat: number, lon: number) => {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.current_weather) {
            const temp = data.current_weather.temperature;
            const code = data.current_weather.weathercode;
            // Weather icon mapping (simple)
            const iconMap: Record<number, { icon: string; desc: string }> = {
              0: { icon: "☀️", desc: "Clear" },
              1: { icon: "🌤️", desc: "Mainly Clear" },
              2: { icon: "⛅", desc: "Partly Cloudy" },
              3: { icon: "☁️", desc: "Cloudy" },
              45: { icon: "🌫️", desc: "Fog" },
              48: { icon: "🌫️", desc: "Depositing Rime Fog" },
              51: { icon: "🌦️", desc: "Drizzle: Light" },
              53: { icon: "🌦️", desc: "Drizzle: Moderate" },
              55: { icon: "🌦️", desc: "Drizzle: Dense" },
              61: { icon: "🌧️", desc: "Rain: Slight" },
              63: { icon: "🌧️", desc: "Rain: Moderate" },
              65: { icon: "🌧️", desc: "Rain: Heavy" },
              80: { icon: "🌦️", desc: "Showers: Slight" },
              81: { icon: "🌦️", desc: "Showers: Moderate" },
              82: { icon: "🌦️", desc: "Showers: Violent" },
              95: { icon: "⛈️", desc: "Thunderstorm" },
              96: { icon: "⛈️", desc: "Thunderstorm w/ Hail" },
              99: { icon: "⛈️", desc: "Thunderstorm w/ Hail" },
            };
            const weatherInfo = iconMap[code] || {
              icon: "❓",
              desc: "Unknown",
            };
            setWeather({
              temp,
              icon: weatherInfo.icon,
              desc: weatherInfo.desc,
            });
          } else {
            setError("No weather data");
          }
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to fetch weather");
          setLoading(false);
        });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          // Fallback: Jakarta
          fetchWeather(-6.2, 106.8166);
        },
        { timeout: 4000 }
      );
    } else {
      fetchWeather(-6.2, 106.8166);
    }
  }, []);

  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 shadow text-xs font-semibold select-none min-w-[90px] animate-fade-in-up relative overflow-hidden"
      style={{ minHeight: 36 }}
    >
      {/* Weather icon + temp */}
      {loading ? (
        <span className="w-4 h-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></span>
      ) : error ? (
        <span className="text-red-400 animate-pulse">{error}</span>
      ) : weather ? (
        <span className="flex items-center gap-1">
          <span
            className="text-lg drop-shadow animate-weather-pop"
            title={weather.desc}
            style={{ filter: "drop-shadow(0 0 6px #38bdf8)" }}
          >
            {weather.icon}
          </span>
          <span className="font-bold text-blue-500 dark:text-fuchsia-400 animate-glow-temp">
            {Math.round(weather.temp)}°C
          </span>
        </span>
      ) : null}
      <span className="mx-1 text-gray-400">|</span>
      {/* Time with subtle pulse */}
      <span className="tabular-nums font-mono text-blue-500 dark:text-fuchsia-400 drop-shadow animate-pulse-time">
        {time}
      </span>
      {/* Subtle animated orb accent */}
      <span className="absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-gradient-to-tr from-blue-400/40 via-fuchsia-400/30 to-yellow-300/30 blur-[2px] animate-orb-float pointer-events-none" />
      <style jsx global>{`
        @keyframes weather-pop {
          0% {
            transform: scale(0.7) rotate(-10deg);
            opacity: 0.5;
          }
          60% {
            transform: scale(1.15) rotate(8deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        .animate-weather-pop {
          animation: weather-pop 0.7s cubic-bezier(0.7, -0.2, 0.3, 1.4);
        }
        @keyframes glow-temp {
          0% {
            text-shadow: 0 0 0 #38bdf8, 0 0 0 #a21caf;
          }
          60% {
            text-shadow: 0 0 12px #38bdf8, 0 0 8px #a21caf;
          }
          100% {
            text-shadow: 0 0 4px #38bdf8, 0 0 2px #a21caf;
          }
        }
        .animate-glow-temp {
          animation: glow-temp 1.2s cubic-bezier(0.7, -0.2, 0.3, 1.4);
        }
        @keyframes pulse-time {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse-time {
          animation: pulse-time 1.5s infinite;
        }
        @keyframes orb-float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-4px) scale(1.15);
            opacity: 1;
          }
        }
        .animate-orb-float {
          animation: orb-float 2.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Moving Underline Navbar Component (top-level, not inline)
const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

type MovingUnderlineNavProps = {
  activeNav: string;
  setActiveNav: (id: string) => void;
};

function MovingUnderlineNav({
  activeNav,
  setActiveNav,
}: MovingUnderlineNavProps) {
  // --- Micro-interaction: Button press scale & bounce ---
  // Add scale effect on nav button click
  const handleNavButtonClick = (id: string, i: number) => {
    setActiveNav(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Scale bounce effect
    const btn = navRefs.current[i];
    if (btn) {
      btn.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0.92)" },
          { transform: "scale(1.08)" },
          { transform: "scale(1)" },
        ],
        {
          duration: 340,
          easing: "cubic-bezier(.7,-0.2,.3,1.4)",
        }
      );
    }
  };
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    glow: 0,
    color: "#00fff0",
  });
  const [tail, setTail] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    scale: 1,
    borderRadius: 999,
    taper: 1,
    color: "#00fff0",
  });
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Detect theme (light/dark)
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains("dark");
      setTheme(isDarkNow ? "dark" : "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  const [hovered, setHovered] = useState<string | null>(null);
  const tailTimeout = useRef<number | null>(null);

  // Update underline instantly, tail with inertia/delay/overshoot & taper
  const updateUnderline = useCallback(
    (id: string | null) => {
      const idx = NAV_ITEMS.findIndex((item) => item.id === id);
      const btn = navRefs.current[idx];
      const container = containerRef.current;
      // Dynamic color by theme
      const colorLight = {
        underline:
          "linear-gradient(90deg, #00fff0 0%, #00bfff 60%, #007cf0 100%)",
        tail: "linear-gradient(90deg, rgba(0,255,240,0.45) 0%, rgba(0,191,255,0.32) 40%, rgba(0,124,240,0.08) 100%)",
        tailColor: "#00fff0",
      };
      const colorDark = {
        underline:
          "linear-gradient(90deg, #00fff0 0%, #00bfff 60%, #00e0ff 100%)",
        tail: "linear-gradient(90deg, rgba(0,255,255,0.7) 0%, rgba(0,191,255,0.38) 40%, rgba(0,124,240,0.12) 100%)",
        tailColor: "#00fff0",
      };
      const colorSet = theme === "dark" ? colorDark : colorLight;
      if (btn && container) {
        const margin = 6;
        const left = btn.offsetLeft + margin;
        const width = btn.offsetWidth - margin * 2;
        // Saat bergerak, glow aktif
        setUnderline({
          left,
          width,
          opacity: 1,
          glow: 1,
          color: colorSet.underline,
        });
        if (tailTimeout.current) window.clearTimeout(tailTimeout.current);
        tailTimeout.current = window.setTimeout(() => {
          setTail({
            left: left - width * 0.38,
            width: width * 2.1 + 44,
            opacity: 0.68,
            scale: 1.22,
            borderRadius: 999,
            taper: 2.2,
            color: colorSet.tail,
          });
          // Fade out/scale after anim
          window.setTimeout(() => {
            setTail((t) => ({ ...t, scale: 1, opacity: 0.22, taper: 1.5 }));
            // Setelah tail selesai, matikan glow underline
            setUnderline((u) => ({ ...u, glow: 0 }));
          }, 420);
        }, 60);
      } else {
        setUnderline((u) => ({ ...u, opacity: 0, glow: 0 }));
        setTail((t) => ({ ...t, opacity: 0 }));
      }
    },
    [theme]
  );

  useEffect(() => {
    const id = hovered || activeNav;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateUnderline(id);
      });
    });
    return () => {
      if (tailTimeout.current) window.clearTimeout(tailTimeout.current);
    };
  }, [activeNav, hovered, updateUnderline]);

  useEffect(() => {
    const onResize = () => updateUnderline(hovered || activeNav);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeNav, hovered, updateUnderline]);
  // --- SVG Particle Micro-interaction ---
  // Simple animated SVG particles for navbar underline
  const [particles, setParticles] = useState<
    { x: number; y: number; key: number; color: string }[]
  >([]);
  // Add particles on underline move
  useEffect(() => {
    if (underline.glow) {
      // Emit a few particles at underline position
      const count = Math.floor(2 + Math.random() * 2);
      const newParticles = Array.from({ length: count }).map((_, i) => ({
        x: underline.left + underline.width * Math.random(),
        y: 0,
        key: Date.now() + i + Math.random(),
        color: theme === "dark" ? "#00fff0" : "#00bfff",
      }));
      setParticles((prev) => [...prev, ...newParticles]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [underline.glow]);

  // Animate and remove particles
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            y: p.y + 2 + Math.random() * 2,
            x: p.x + (Math.random() - 0.5) * 2,
          }))
          .filter((p) => p.y < 24)
      );
    }, 24);
    return () => clearInterval(interval);
  }, [particles]);

  // Dynamic color for underline & tail based on theme is now handled in state

  return (
    <div
      ref={containerRef}
      className="relative flex gap-6 items-center min-h-[40px]"
      onMouseLeave={() => setHovered(null)}
    >
      {/* Underline - Dynamic by theme */}
      <span
        className="pointer-events-none absolute z-10 rounded-full shadow-lg"
        style={{
          left: underline.left,
          width: underline.width,
          height: 4,
          bottom: -6,
          opacity: underline.opacity * 0.7,
          background: underline.color,
          boxShadow: underline.glow
            ? theme === "dark"
              ? "0 2px 16px 0 #00fff0, 0 0px 8px 0 #00e0ff, 0 0 24px 2px #00fff0"
              : "0 2px 10px 0 #00fff0, 0 0px 4px 0 #00bfff, 0 0 16px 2px #00fff0"
            : theme === "dark"
            ? "0 1px 2px 0 #00e0ff"
            : "0 1px 2px 0 #00bfff",
          filter: underline.glow
            ? theme === "dark"
              ? "drop-shadow(0 0 8px #00fff0)"
              : "drop-shadow(0 0 4px #00fff0)"
            : "none",
          transition:
            "left 0.5s cubic-bezier(.8,0,.2,1), width 0.5s cubic-bezier(.8,0,.2,1), opacity 0.25s, box-shadow 0.4s, filter 0.4s",
        }}
      />
      {/* SVG Particles micro-interaction */}
      <svg
        className="pointer-events-none absolute z-30"
        style={{ left: 0, width: "100%", height: 28, bottom: -18 }}
      >
        {particles.map((p) => (
          <circle
            key={p.key}
            cx={p.x}
            cy={p.y}
            r={2.2 + Math.random() * 1.2}
            fill={p.color}
            opacity={0.7 - p.y / 32}
            style={{ filter: theme === "dark" ? "blur(1.5px)" : "blur(1px)" }}
          />
        ))}
      </svg>
      {/* Meteor Tail Effect - Dynamic by theme */}
      <span
        className="pointer-events-none absolute z-20"
        style={{
          left: tail.left,
          width: tail.width,
          height: 22,
          bottom: -15,
          opacity: tail.opacity,
          borderRadius: `${12 * tail.taper}px / 60%`,
          background: tail.color,
          filter:
            theme === "dark"
              ? "blur(16px) brightness(1.2)"
              : "blur(12px) brightness(1.1)",
          transform: `scaleX(${tail.scale}) scaleY(${1 / tail.taper})`,
          transition:
            "left 0.7s cubic-bezier(.8,0,.2,1), width 0.7s cubic-bezier(.8,0,.2,1), opacity 0.4s, filter 0.4s, transform 0.5s cubic-bezier(.8,0,.2,1), border-radius 0.5s cubic-bezier(.8,0,.2,1)",
        }}
      />
      {/* Navigation Buttons */}
      {NAV_ITEMS.map((item, i) => (
        <button
          key={item.id}
          ref={(el) => {
            navRefs.current[i] = el;
          }}
          onClick={() => handleNavButtonClick(item.id, i)}
          onMouseEnter={() => setHovered(item.id)}
          className={`relative px-1 transition text-base font-medium focus:outline-none
            ${
              activeNav === item.id
                ? theme === "dark"
                  ? "text-fuchsia-400 font-bold"
                  : "text-blue-500 font-bold"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:text-blue-400 dark:hover:text-fuchsia-400`}
          style={{ zIndex: 20 }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("en");
  const [activeNav, setActiveNav] = useState<string>("home");
  const [expIndex, setExpIndex] = useState(0);
  const [showExpModal, setShowExpModal] = useState(false);
  const [modalContent, setModalContent] = useState<Experience | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Featured");
  const [showContactModal, setShowContactModal] = useState(false);

  // Project categories mapping (language-independent)
  const projectCategories = useMemo(
    () => ({
      // Flowmart
      "Flowmart – Flower Shop Application": "CLI App",
      "Flowmart – Aplikasi Toko Bunga": "CLI App",
      // MakeOvers
      "MakeOvers – Salon Nean Reservation App": "CLI App",
      "MakeOvers – Aplikasi Reservasi Salon Nean": "CLI App",
      // MI-KOS
      "MI-KOS – Boarding House Requirements Analysis":
        "System Analysis & Design",
      "Requirement Analysis dan Business Process MI-KOS":
        "System Analysis & Design",
      // Healthy Habits
      "Healthy Habits – Student Health Monitoring": "System Analysis & Design",
      "Healthy Habits – Pemantauan Kesehatan Mahasiswa":
        "System Analysis & Design",
      // HeyBrew Analysis
      "HeyBrew – Coffee Bean Management System (Analysis)":
        "System Analysis & Design",
      "HeyBrew – Sistem Manajemen Biji Kopi (Analysis)":
        "System Analysis & Design",
      // HeyBrew Design
      "HeyBrew – Coffee Bean Management System (Design)":
        "System Analysis & Design",
      "HeyBrew – Sistem Manajemen Biji Kopi (Design)":
        "System Analysis & Design",
      // WIB Fish Farm Web
      "WIB Fish Farm – Ornamental Fish Sales & Finance System": "Web App",
      "WIB Fish Farm – Sistem Penjualan & Keuangan Ikan Hias": "Web App",
      // WIB Fish Farm Management
      "WIB Fish Farm – Management & Marketing System": "Web App",
      "WIB Fish Farm – Sistem Pengelolaan & Pemasaran": "Web App",
      // MeowInn
      "MeowInn – Digital Cat Boarding System": "Web App",
      "MeowInn – Sistem Digital Penitipan Kucing": "Web App",
      // Diabetes Classification
      "Diabetes Classification with Gaussian Naive Bayes": "Data Mining",
      "Klasifikasi Diabetes dengan Gaussian Naive Bayes": "Data Mining",
    }),
    []
  );

  // Featured projects mapping (language-independent)
  const featuredProjects = useMemo(
    () => [
      // English titles
      "MeowInn – Digital Cat Boarding System",
      "WIB Fish Farm – Management & Marketing System",
      "HeyBrew – Coffee Bean Management System (Analysis)",
      // Indonesian titles
      "MeowInn – Sistem Digital Penitipan Kucing",
      "WIB Fish Farm – Sistem Pengelolaan & Pemasaran",
      "HeyBrew – Sistem Manajemen Biji Kopi (Analysis)",
    ],
    []
  );

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  };

  // handleNavClick tidak dipakai, hapus untuk hilangkan error lint

  // Animasi reveal on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(".animate-reveal");
    const onScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tambahkan animasi scroll reveal per card project
  useEffect(() => {
    const cards = document.querySelectorAll(".animate-project-reveal");
    const onScroll = () => {
      cards.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget as HTMLElement;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.className = "ripple";
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  // Handle contact form submission
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  // Inject ripple style
  useEffect(() => {
    if (!document.getElementById("ripple-style")) {
      const style = document.createElement("style");
      style.id = "ripple-style";
      style.innerHTML = `.ripple { position: absolute; border-radius: 50%; background: rgba(59,130,246,0.3); transform: scale(0); animation: ripple 0.6s linear; pointer-events:none; z-index:10;}
      @keyframes ripple { to { transform: scale(2.5); opacity: 0; } } 
      .ripple-btn { position: relative; overflow: hidden; }`;
      document.head.appendChild(style);
    }
  }, []);

  // Filter projects function
  const filterProjects = useCallback(
    (category: string) => {
      setActiveFilter(category);
      const projectCards = document.querySelectorAll(".project-card");

      projectCards.forEach((card, index) => {
        const projectTitle = card.querySelector("h3")?.textContent?.trim();
        let shouldShow = false;

        if (category === "All") {
          shouldShow = true;
        } else if (category === "Featured") {
          shouldShow = projectTitle
            ? featuredProjects.includes(projectTitle)
            : false;
        } else {
          shouldShow = !!(
            projectTitle &&
            projectCategories[
              projectTitle as keyof typeof projectCategories
            ] === category
          );
        }

        if (shouldShow) {
          card.classList.remove("filter-out");
          card.classList.add("filter-in");
          (card as HTMLElement).style.display = "block";
          setTimeout(() => {
            card.classList.add("opacity-100", "translate-y-0");
            card.classList.remove("opacity-0", "translate-y-8");
          }, index * 100);
        } else {
          card.classList.remove("filter-in");
          card.classList.add("filter-out");
          card.classList.add("opacity-0", "translate-y-8");
          card.classList.remove("opacity-100", "translate-y-0");
          setTimeout(() => {
            (card as HTMLElement).style.display = "none";
          }, 300);
        }
      });
    },
    [featuredProjects, projectCategories]
  );

  // Apply featured filter on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      filterProjects("Featured");
    }, 100);
    return () => clearTimeout(timer);
  }, [filterProjects]);

  // Navbar animation on mount and scroll
  useEffect(() => {
    const navbar = document.getElementById("main-navbar");
    if (!navbar) return;
    navbar.classList.add("opacity-0", "-translate-y-8");
    setTimeout(() => {
      navbar.classList.remove("opacity-0", "-translate-y-8");
      navbar.classList.add("opacity-100", "translate-y-0");
    }, 100);
    const onScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add("shadow-xl", "backdrop-blur-lg", "scale-95");
      } else {
        navbar.classList.remove("shadow-xl", "backdrop-blur-lg", "scale-95");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tambahkan style animasi underline ke global jika belum ada
  useEffect(() => {
    if (!document.getElementById("underline-style")) {
      const style = document.createElement("style");
      style.id = "underline-style";
      style.innerHTML = `@keyframes underline { from { width: 0; opacity:0.5; } to { width: 100%; opacity:1; } } .animate-underline { animation: underline 0.4s cubic-bezier(.4,0,.2,1) forwards; }`;
      document.head.appendChild(style);
    }
  }, []);

  // Add filter animation styles
  useEffect(() => {
    if (!document.getElementById("filter-style")) {
      const style = document.createElement("style");
      style.id = "filter-style";
      style.innerHTML = `
        .filter-in {
          animation: filterIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .filter-out {
          animation: filterOut 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }
        @keyframes filterIn {
          from {
            opacity: 0;
            transform: translateY(30px) rotateX(20deg) scale(0.9);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes filterOut {
          from {
            opacity: 1;
            transform: translateY(0) rotateX(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) rotateX(-10deg) scale(0.95);
            filter: blur(5px);
          }
        }
        
        /* Contact Cards Animation */
        .contact-card {
          animation: contactCardFloat 6s ease-in-out infinite;
        }
        .contact-card:nth-child(1) { animation-delay: 0s; }
        .contact-card:nth-child(2) { animation-delay: 2s; }
        .contact-card:nth-child(3) { animation-delay: 4s; }
        
        @keyframes contactCardFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(0.5deg); }
          50% { transform: translateY(-2px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-0.5deg); }
        }
        
        /* Form Group Animation */
        .form-group {
          animation: formGroupSlide 0.6s ease-out forwards;
          opacity: 0;
          transform: translateX(-30px);
        }
        .form-group:nth-child(1) { animation-delay: 0.1s; }
        .form-group:nth-child(2) { animation-delay: 0.2s; }
        .form-group:nth-child(3) { animation-delay: 0.3s; }
        .form-group:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes formGroupSlide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Initialize project cards visibility
  useEffect(() => {
    const initializeCards = () => {
      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach((card) => {
        card.classList.add("opacity-100", "translate-y-0");
        (card as HTMLElement).style.display = "block";
      });
    };

    // Wait a bit for DOM to be ready
    setTimeout(initializeCards, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-gray-900 flex flex-col">
      {/* Navbar */}
      <nav
        id="main-navbar"
        className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30 backdrop-blur transition-all duration-500 opacity-0 -translate-y-8"
      >
        <div className="flex items-center gap-3">
          <span
            className="font-extrabold text-lg md:text-xl bg-clip-text text-transparent animate-nama-color font-[Poppins,sans-serif] tracking-tight"
            style={{
              letterSpacing: "0.5px",
              WebkitTextStroke: "0.5px rgba(0,0,0,0.08)",
              textShadow: "0 2px 12px #00fff055, 0 0px 4px #f472b655",
              display: "inline-block",
              filter: "drop-shadow(0 2px 8px #fbbf2455)",
              backgroundImage:
                "linear-gradient(90deg, #3b82f6, #a21caf, #f472b6, #fbbf24, #f59e42, #fbbf24, #a21caf, #3b82f6)",
              backgroundSize: "300% 200%",
              backgroundPosition: "0% 50%",
              transition: "background-position 0.5s",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Ariski Ade Raharjo
            <style jsx global>{`
              @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&display=swap");
              @keyframes nama-color {
                0% {
                  background-position: 0% 50%;
                }
                20% {
                  background-position: 40% 50%;
                }
                40% {
                  background-position: 80% 50%;
                }
                60% {
                  background-position: 100% 50%;
                }
                80% {
                  background-position: 60% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
              .animate-nama-color {
                animation: nama-color 4s ease-in-out infinite;
              }
            `}</style>
          </span>
        </div>
        {/* Moving Underline Navbar */}
        <MovingUnderlineNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <div className="flex items-center gap-2">
          <WeatherTimeWidget />
          <button
            aria-label="Toggle Language"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 shadow text-xs font-semibold min-w-[56px] h-9 hover:scale-110 transition"
            style={{ minHeight: 36, minWidth: 56 }}
          >
            <LanguageIcon className="w-5 h-5 text-blue-500 dark:text-fuchsia-400" />
            <span className="font-semibold text-xs text-gray-700 dark:text-gray-200">
              {lang === "id" ? "ID" : "EN"}
            </span>
          </button>
        </div>
      </nav>
      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 flex flex-col gap-20 md:p-12 lg:p-24 relative z-10"
      >
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex flex-col md:flex-row items-center justify-between gap-10 min-h-[50vh] py-5 overflow-hidden"
        >
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              {lang === "en" ? "Hi, I’m " : "Halo, Saya "}
              <span className="whitespace-nowrap">Ariski Ade Raharjo</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-xl">
              {lang === "en"
                ? "Creative Frontend Developer, UI Designer, and Data Analyst with a passion for building intuitive, visually compelling, and data-informed web solutions."
                : "Frontend Developer, UI Designer, dan Data Analyst yang kreatif dengan passion membangun solusi web yang intuitif, menarik, dan berbasis data."}
            </p>
            <div className="flex gap-4 mt-2 ml-1">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-white/30 dark:bg-gray-900/30 backdrop-blur border border-blue-400 text-blue-700 dark:text-blue-200 font-bold shadow-lg hover:scale-105 transition ripple-btn"
                onClick={handleRipple}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-bold shadow-lg hover:scale-105 transition ripple-btn"
                onClick={handleRipple}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center relative animate-float">
            {/* Custom hero image - avatar.png (besar, tanpa kotak/background) */}
            <Image
              src="/images/avatar.png"
              alt="Hero Avatar"
              width={448}
              height={448}
              className="w-96 h-96 md:w-[20rem] md:h-[20rem] object-contain drop-shadow-2xl rounded-3xl"
              draggable={false}
              priority
            />
          </div>
        </section>
        {/* ABOUT ME */}
        <section
          id="about"
          className="flex flex-col items-center justify-center min-h-[40  vh] py-16 animate-reveal opacity-0 translate-y-8 transition-all duration-700 scroll-mt-20"
        >
          <div className="mb-6">
            {/* Avatar bulat dengan border gradient */}
            {/* <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Image
                src="/profile.jpg"
                alt=""
                width={120}
                height={120}
                className="rounded-full object-cover border-4 border-white dark:border-gray-900"
              />
            </div> */}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 leading-tight">
            {lang === "en" ? (
              <>
                I write code and
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                  keep getting{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                    better at it!
                  </span>
                </span>
              </>
            ) : (
              <>
                Saya menulis kode dan
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                  terus{" "}
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
                    menjadi lebih baik!
                  </span>
                </span>
              </>
            )}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-300 text-center max-w-xl mb-8">
            {lang === "en"
              ? "I’m a Computer Science student at Universitas Jember who’s passionate about web development and design. I enjoy creating clean, responsive, and user-focused digital experiences, and I’m constantly learning to improve both my technical and creative skills."
              : "Saya mahasiswa Sistem Informasi di Universitas Jember yang antusias dengan pengembangan web dan desain. Saya suka membuat pengalaman digital yang bersih, responsif, dan berfokus pada pengguna, serta terus belajar meningkatkan skill teknis dan kreatif."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 font-bold shadow hover:scale-105 transition ripple-btn text-gray-900 dark:text-white"
              onClick={handleRipple}
            >
              {lang === "en" ? "Get In Touch" : "Hubungi Saya"}
            </a>
            <a
              href="/sertif/CV-Ariski Ade Raharjo-Universitas Jember.pdf"
              download="CV-Ariski Ade Raharjo-Universitas Jember.pdf"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-bold shadow-lg hover:scale-105 transition ripple-btn border-2 border-transparent"
              onClick={handleRipple}
            >
              {lang === "en" ? "Download CV" : "Unduh CV"}
            </a>
          </div>
        </section>
        {/* EDUCATION & EXPERIENCE */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-8">
          {/* EDUCATION (dummy data) */}
          <section
            id="education"
            className="animate-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl p-8 scroll-mt-20"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
              {lang === "en" ? "Education" : "Pendidikan"}
            </h2>
            <div className="mb-4">
              <span className="block text-lg font-semibold text-gray-900 dark:text-white">
                {lang === "en"
                  ? "Bachelor of Information Systems, University of Jember"
                  : "S1 Sistem Informasi, Universitas Jember"}
              </span>
              <span className="block text-gray-500 dark:text-gray-400 text-sm">
                2023 - {lang === "en" ? "Now" : "Sekarang"}
              </span>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {lang === "en"
                  ? "Active in the coding community and often participates in IT competitions"
                  : "Aktif di komunitas coding dan sering ikut lomba IT"}
              </p>
            </div>
            <div>
              <span className="block text-lg font-semibold text-gray-900 dark:text-white">
                {lang === "en" ? "High School Diploma" : "SMA"}
              </span>
              <span className="block text-gray-500 dark:text-gray-400 text-sm">
                2020 - 2023
              </span>
              {/* <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Ketua ekskul IT Club, sering ikut lomba desain & olimpiade
                komputer.
              </p> */}
            </div>
          </section>
          {/* EXPERIENCE (dummy data) */}
          <section
            id="experience"
            className="animate-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl p-8 scroll-mt-20"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
              {lang === "en" ? "Experience" : "Pengalaman"}
            </h2>
            <div className="mb-4">
              <span className="block text-lg font-semibold text-gray-900 dark:text-white">
                {typeof experiences[expIndex].title === "string"
                  ? experiences[expIndex].title
                  : experiences[expIndex].title[lang]}
              </span>
              <span className="block text-gray-500 dark:text-gray-400 text-sm">
                {typeof experiences[expIndex].company === "string"
                  ? experiences[expIndex].company
                  : experiences[expIndex].company[lang]}
                , {experiences[expIndex].year}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                {typeof experiences[expIndex].summary === "string"
                  ? experiences[expIndex].summary
                  : experiences[expIndex].summary[lang]}
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold shadow hover:scale-105 transition"
                  onClick={() => {
                    setModalContent(experiences[expIndex]);
                    setShowExpModal(true);
                  }}
                >
                  {lang === "en" ? "View" : "Lihat"}
                </button>
                <button
                  className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold shadow hover:scale-105 transition"
                  onClick={() =>
                    setExpIndex((i) => (i + 1) % experiences.length)
                  }
                  aria-label="Next Experience"
                >
                  {lang === "en" ? "Next" : "Selanjutnya"}
                </button>
                <button
                  className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold shadow hover:scale-105 transition"
                  onClick={() =>
                    setExpIndex(
                      (i) => (i - 1 + experiences.length) % experiences.length
                    )
                  }
                  aria-label="Previous Experience"
                >
                  {lang === "en" ? "Prev" : "Sebelumnya"}
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* SKILLS */}
        <section
          id="skills"
          className="animate-reveal opacity-0 translate-y-8 transition-all duration-700 relative max-w-6xl mx-auto w-full mt-8 scroll-mt-20"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {lang === "en" ? "My Skills" : "Keahlian Saya"}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Skills */}
              <div className="space-y-4">
                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/html.svg"
                            alt="HTML"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          HTML
                        </span>
                      </div>
                      <span className="text-lg font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full pulse-glow">
                        95%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-skill-bar"
                        style={{ width: "95%", animationDelay: "0.1s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/css.svg"
                            alt="CSS"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          CSS
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full pulse-glow">
                        90%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-skill-bar"
                        style={{ width: "90%", animationDelay: "0.2s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/js.svg"
                            alt="JavaScript"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          JavaScript
                        </span>
                      </div>
                      <span className="text-lg font-bold text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full pulse-glow">
                        80%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-skill-bar"
                        style={{ width: "80%", animationDelay: "0.3s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/react.svg"
                            alt="React"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          React
                        </span>
                      </div>
                      <span className="text-lg font-bold text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded-full pulse-glow">
                        60%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full animate-skill-bar"
                        style={{ width: "65%", animationDelay: "0.4s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/bootstra.svg"
                            alt="Bootstrap"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          Bootstrap
                        </span>
                      </div>
                      <span className="text-lg font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full pulse-glow">
                        75%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-skill-bar"
                        style={{ width: "80%", animationDelay: "0.5s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/tailwind.svg"
                            alt="Tailwind CSS"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          Tailwind CSS
                        </span>
                      </div>
                      <span className="text-lg font-bold text-teal-500 bg-teal-100 dark:bg-teal-900/30 px-2 py-1 rounded-full pulse-glow">
                        80%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full animate-skill-bar"
                        style={{ width: "80%", animationDelay: "0.6s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Skills */}
              <div className="space-y-4">
                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/node.svg"
                            alt="Node.js"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          Node.js
                        </span>
                      </div>
                      <span className="text-lg font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full pulse-glow">
                        60%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-skill-bar"
                        style={{ width: "65%", animationDelay: "0.7s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/mysql.svg"
                            alt="Database (SQL)"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          Database (SQL)
                        </span>
                      </div>
                      <span className="text-lg font-bold text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 rounded-full pulse-glow">
                        85%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-full animate-skill-bar"
                        style={{ width: "85%", animationDelay: "0.8s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/python.svg"
                            alt="Python"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          Python
                        </span>
                      </div>
                      <span className="text-lg font-bold text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full pulse-glow">
                        85%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-skill-bar"
                        style={{ width: "85%", animationDelay: "0.9s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/csharp.svg"
                            alt="C#"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          C#
                        </span>
                      </div>
                      <span className="text-lg font-bold text-violet-500 bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded-full pulse-glow">
                        80%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-500 rounded-full animate-skill-bar"
                        style={{ width: "85%", animationDelay: "1.0s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="group skill-card relative p-4 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg skill-icon-3d">
                          <Image
                            src="/skills/php.svg"
                            alt="PHP"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                          />
                        </div>
                        <span className="text-lg font-bold text-gray-800 dark:text-white">
                          PHP
                        </span>
                      </div>
                      <span className="text-lg font-bold text-pink-500 bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded-full pulse-glow">
                        85%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-200/50 dark:bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-skill-bar"
                        style={{ width: "85%", animationDelay: "1.1s" }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full animate-shimmer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Badges */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                {lang === "en" ? "Supporting Skillsets" : "Skillset Pendukung"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="group relative tech-badge-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <span className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-600 dark:text-blue-300 px-6 py-3 rounded-2xl font-bold text-lg border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-300 block">
                    System Analysis and Design
                  </span>
                </div>
                <div className="group relative tech-badge-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <span className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-green-600 dark:text-green-300 px-6 py-3 rounded-2xl font-bold text-lg border border-green-200 dark:border-green-700 hover:scale-105 transition-transform duration-300 block">
                    Knowledge Discovery in Databases (KDD)
                  </span>
                </div>

                <div className="group relative tech-badge-float">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <span className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-yellow-600 dark:text-yellow-300 px-6 py-3 rounded-2xl font-bold text-lg border border-yellow-200 dark:border-yellow-700 hover:scale-105 transition-transform duration-300 block">
                    UI & UX Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MY PROJECTS */}
        <section
          id="projects"
          className="max-w-7xl mx-auto w-full animate-reveal opacity-0 translate-y-8 transition-all duration-700 py-16 scroll-mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent">
              {lang === "en" ? "My Projects" : "Proyek Saya"}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>

            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => filterProjects("Featured")}
                className={`px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
                  activeFilter === "Featured"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {lang === "en" ? "Featured" : "Unggulan"}
              </button>
              <button
                onClick={() => filterProjects("All")}
                className={`px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
                  activeFilter === "All"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {lang === "en" ? "All" : "Semua"}
              </button>
              <button
                onClick={() => filterProjects("CLI App")}
                className={`px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
                  activeFilter === "CLI App"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {lang === "en" ? "CLI App" : "Aplikasi CLI"}
              </button>
              <button
                onClick={() => filterProjects("Web App")}
                className={`px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
                  activeFilter === "Web App"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {lang === "en" ? "Web App" : "Aplikasi Web"}
              </button>
              <button
                onClick={() => filterProjects("Data Mining")}
                className={`px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
                  activeFilter === "Data Mining"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {lang === "en" ? "Data Mining" : "Data Mining"}
              </button>
              <button
                onClick={() => filterProjects("System Analysis & Design")}
                className={`px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 ${
                  activeFilter === "System Analysis & Design"
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                }`}
              >
                {lang === "en"
                  ? "System Analysis & Design"
                  : "Analisis & Desain Sistem"}
              </button>
            </div>
          </div>

          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Flowmart */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🌸</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {lang === "en"
                      ? "Flowmart – Flower Shop Application"
                      : "Flowmart – Aplikasi Toko Bunga"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "CLI-based flower shop application with features for login, shopping cart, automatic payment, and stock management by admin."
                      : "Aplikasi toko bunga berbasis CLI dengan fitur login, keranjang belanja, pembayaran otomatis, dan pengelolaan stok oleh admin."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Python
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      CSV
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                      CLI
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/Flowmart.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Project
                    </button>
                    <a
                      href="https://github.com/namamu/flowmart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 min-w-[100px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25c-5.37 0-9.75 4.38-9.75 9.75 0 4.85 3.54 8.87 8.18 9.68.6.11.82-.26.82-.58v-2.02c-3.33.72-4.03-1.61-4.03-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A10.01 10.01 0 0 0 22 12c0-5.37-4.38-9.75-9.75-9.75Z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: MI-KOS Analysis */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🏠</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {lang === "en"
                      ? "MI-KOS Requirement Analysis & Business Process"
                      : "Requirement Analysis dan Business Process MI-KOS"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "System requirements analysis and business process for MI-KOS application, a web-based boarding house rental platform based on real operational flow from Kos Q-TA."
                      : "Analisis kebutuhan sistem dan proses bisnis untuk aplikasi MI-KOS, platform penyewaan kamar kos berbasis web berdasarkan alur operasional nyata dari Kos Q-TA."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Oracle
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      PostgreSQL
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                      SQL
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Figma
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open(
                          "/sertif/RequirementAnalysisdanBusinessProcessMI-KOS.pdf",
                          "_blank"
                        )
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: MakeOvers */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">💄</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {lang === "en"
                      ? "MakeOvers – Salon Nean Reservation App"
                      : "MakeOvers – Aplikasi Reservasi Salon Nean"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Mobile application for managing salon service reservations, payment recording, and product stock management with insertion sort algorithm and interpolation searching."
                      : "Aplikasi mobile untuk mengelola reservasi layanan salon, pencatatan pembayaran, dan manajemen stok produk dengan algoritma insertion sort dan interpolasi searching."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Python
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      SQL
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      PostgreSQL
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                      CLI
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/MakeOvers.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Project
                    </button>
                    <a
                      href="https://github.com/namamu/makeovers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 min-w-[100px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25c-5.37 0-9.75 4.38-9.75 9.75 0 4.85 3.54 8.87 8.18 9.68.6.11.82-.26.82-.58v-2.02c-3.33.72-4.03-1.61-4.03-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A10.01 10.01 0 0 0 22 12c0-5.37-4.38-9.75-9.75-9.75Z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4: Healthy Habits */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🏃‍♂️</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {lang === "en"
                      ? "Healthy Habits – Student Health Monitoring"
                      : "Healthy Habits – Pemantauan Kesehatan Mahasiswa"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Android and iOS mobile application for UNEJ students with features for calorie calculator, exercise planner, goal tracker, and SIAKAD integration."
                      : "Aplikasi mobile Android dan iOS untuk mahasiswa UNEJ dengan fitur kalkulator kalori, exercise planner, goal tracker, dan integrasi SIAKAD."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Figma
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      SRS
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Mobile
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/HEALTHYHABITS.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Design
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5: HeyBrew (Analysis) */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">☕</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {lang === "en"
                      ? "HeyBrew – Coffee Bean Management System (Analysis)"
                      : "HeyBrew – Sistem Manajemen Biji Kopi (Analysis)"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Website-based information system for Dopy Coffee with features for product management, coffee bean recommendations, ordering, and digital marketing strategies."
                      : "Sistem informasi berbasis website untuk Dopy Coffee dengan fitur manajemen produk, rekomendasi biji kopi, pemesanan, dan strategi pemasaran digital."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      System Analysis
                    </span>
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Business Process
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/HeyBrewAPS.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 6: HeyBrew (Design) */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🎨</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                    {lang === "en"
                      ? "HeyBrew – Coffee Bean Management System (Design)"
                      : "HeyBrew – Sistem Manajemen Biji Kopi (Design)"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "UI/UX design and system architecture for HeyBrew platform using Object Oriented Design and Enterprise Architect for system documentation."
                      : "Perancangan UI/UX dan arsitektur sistem untuk platform HeyBrew menggunakan Object Oriented Design dan Enterprise Architect untuk dokumentasi sistem."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Figma
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      OOD
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Enterprise Architect
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/HeyBrewOOD.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Design
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 7: WIB Fish Farm (Web Development) */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🐠</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {lang === "en"
                      ? "WIB Fish Farm – Ornamental Fish Sales & Finance System"
                      : "WIB Fish Farm – Sistem Penjualan & Keuangan Ikan Hias"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Web platform for product management, transactions, and finance for ornamental fish business using SDLC methodology with stock management and online catalog features."
                      : "Platform web untuk pengelolaan produk, transaksi, dan keuangan usaha ikan hias menggunakan metode SDLC dengan fitur manajemen stok dan katalog online."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-semibold">
                      HTML
                    </span>
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Tailwind
                    </span>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Laravel
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                      JavaScript
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                      PHP
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/WIBFishFarmAnalis.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 8: WIB Fish Farm (Software Development) */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🌐</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {lang === "en"
                      ? "WIB Fish Farm – Management & Marketing System"
                      : "WIB Fish Farm – Sistem Pengelolaan & Pemasaran"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Website-based information system development to support WIB Fish Farm operations with focus on recording efficiency and digital marketing."
                      : "Pengembangan sistem informasi berbasis website untuk mendukung operasional WIB Fish Farm dengan fokus pada efisiensi pencatatan dan pemasaran digital."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Software Development
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Web Development
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/WIBFishFarmDesign.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 9: MeowInn */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">🐱</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {lang === "en"
                      ? "MeowInn – Digital Cat Boarding System"
                      : "MeowInn – Sistem Digital Penitipan Kucing"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Web application for cat boarding that connects cat owners with pet houses in one platform with reservation features and cat condition reports."
                      : "Aplikasi web penitipan kucing yang menghubungkan pemilik kucing dengan pet house dalam satu platform dengan fitur reservasi dan laporan kondisi kucing."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                      PHP (Blade)
                    </span>
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Tailwind CSS
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                      jQuery
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      MySQL
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open("/sertif/MeowInn.pdf", "_blank")
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Project
                    </button>
                    <a
                      href="https://github.com/namamu/meowinn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 min-w-[100px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25c-5.37 0-9.75 4.38-9.75 9.75 0 4.85 3.54 8.87 8.18 9.68.6.11.82-.26.82-.58v-2.02c-3.33.72-4.03-1.61-4.03-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A10.01 10.01 0 0 0 22 12c0-5.37-4.38-9.75-9.75-9.75Z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 10: Diabetes Classification */}
            <div className="project-card group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="project-card-content relative flex flex-col h-full">
                <div className="project-card-image w-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl mb-4">
                  <div className="text-white text-6xl">📊</div>
                </div>
                <div className="project-card-body flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {lang === "en"
                      ? "Diabetes Classification with Gaussian Naive Bayes"
                      : "Klasifikasi Diabetes dengan Gaussian Naive Bayes"}
                  </h3>
                  <p className="project-card-description text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "en"
                      ? "Research on diabetes status classification using Gaussian Naive Bayes algorithm with SMOTE technique to handle data imbalance."
                      : "Penelitian klasifikasi status diabetes menggunakan algoritma Gaussian Naive Bayes dengan teknik SMOTE untuk mengatasi ketidakseimbangan data."}
                  </p>
                  <div className="project-card-tags flex flex-wrap gap-2 mb-4">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Python
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Scikit-learn
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Pandas
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                      Machine Learning
                    </span>
                  </div>
                  <div className="project-card-actions flex gap-3 mt-auto">
                    <button
                      onClick={() =>
                        window.open(
                          "/sertif/KlasifikasiPenyakitDiabetes.pdf",
                          "_blank"
                        )
                      }
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 min-w-[120px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"></path>
                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      View Details
                    </button>
                    <a
                      href="https://github.com/namamu/diabetes-classification"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 min-w-[100px]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.25c-5.37 0-9.75 4.38-9.75 9.75 0 4.85 3.54 8.87 8.18 9.68.6.11.82-.26.82-.58v-2.02c-3.33.72-4.03-1.61-4.03-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A10.01 10.01 0 0 0 22 12c0-5.37-4.38-9.75-9.75-9.75Z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MY CONTACT */}
        <section
          id="contact"
          className="animate-reveal opacity-0 translate-y-8 transition-all duration-700 relative max-w-6xl mx-auto w-full mt-8 scroll-mt-20"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-3xl"></div>

          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {lang === "en" ? "My Contact" : "Kontak Saya"}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                {lang === "en"
                  ? "Let's connect! I'm always excited to discuss new opportunities, collaborations, or just have a chat about technology and development."
                  : "Mari terhubung! Saya selalu antusias mendiskusikan peluang baru, kolaborasi, atau sekadar mengobrol tentang teknologi dan pengembangan."}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {lang === "en" ? "Get in Touch" : "Hubungi Saya"}
                </h3>

                {/* Email Card */}
                <div className="group contact-card relative p-6 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        ariskiaderaharjo@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group contact-card relative p-6 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        Location
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Jember, Indonesia
                      </p>
                    </div>
                  </div>
                </div>

                {/* GitHub Card */}
                <div className="group contact-card relative p-6 bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-800/60 dark:to-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-xl hover:scale-105 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">
                        GitHub
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        github.com/ariskiarr
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Info */}
                <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        {lang === "en" ? "Quick Response" : "Respon Cepat"}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        {lang === "en"
                          ? "Usually reply within 24 hours"
                          : "Biasanya membalas dalam 24 jam"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {lang === "en" ? "Send Message" : "Kirim Pesan"}
                </h3>

                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="space-y-4">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder={
                          lang === "en"
                            ? "Enter your name"
                            : "Masukkan nama Anda"
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder={
                          lang === "en"
                            ? "Enter your email"
                            : "Masukkan email Anda"
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder={
                          lang === "en"
                            ? "What's this about?"
                            : "Tentang apa ini?"
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder={
                          lang === "en"
                            ? "Tell me about your project or just say hello!"
                            : "Ceritakan tentang proyek Anda atau sekadar say hello!"
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ripple-btn relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                      {lang === "en" ? "Send Message" : "Kirim Pesan"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER (lengkapi icon sosmed) */}
      <footer className="w-full py-6 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 mt-10 flex flex-col items-center gap-2">
        <div className="flex gap-4 justify-center mb-2">
          <a
            href="https://github.com/ariskiarr"
            className="hover:text-blue-500 transition-colors duration-300"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25c-5.37 0-9.75 4.38-9.75 9.75 0 4.85 3.54 8.87 8.18 9.68.6.11.82-.26.82-.58v-2.02c-3.33.72-4.03-1.61-4.03-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A10.01 10.01 0 0 0 22 12c0-5.37-4.38-9.75-9.75-9.75Z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-500 transition-colors duration-300"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 8.99 4.07 7.13 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7Z" />
            </svg>
          </a>
        </div>
        <div>
          © {new Date().getFullYear()}{" "}
          {lang === "en"
            ? "Ariski Ade Raharjo. All Rights Reserved."
            : "Ariski Ade Raharjo. Semua Hak Dilindungi."}
        </div>
      </footer>

      {/* Modal Experience */}
      {showExpModal && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-fuchsia-500 text-2xl font-bold transition-transform duration-300 ease-in-out hover:rotate-90 focus:rotate-90"
              onClick={() => setShowExpModal(false)}
              aria-label="Tutup"
            >
              <span className="inline-block transition-transform duration-300 ease-in-out">
                ×
              </span>
            </button>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-300">
              {typeof modalContent.title === "string"
                ? modalContent.title
                : modalContent.title[lang]}
            </h3>
            <div className="mb-1 text-gray-500 dark:text-gray-400 text-sm">
              {typeof modalContent.company === "string"
                ? modalContent.company
                : modalContent.company[lang]}
              , {modalContent.year}
            </div>
            <div className="mb-4 text-gray-700 dark:text-gray-300 text-sm whitespace-pre-line">
              {typeof modalContent.details === "string"
                ? modalContent.details
                : modalContent.details[lang]}
            </div>
            {modalContent.certificates &&
              modalContent.certificates.length > 0 && (
                <div className="mb-4">
                  <div className="font-semibold mb-1 text-gray-700 dark:text-gray-200">
                    {lang === "en" ? "Certificates:" : "Sertifikat:"}
                  </div>
                  <div className="flex flex-col gap-2">
                    {modalContent.certificates.map((cert, idx) => (
                      <a
                        key={idx}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold shadow hover:scale-105 transition text-sm text-center"
                      >
                        {typeof cert.name === "string"
                          ? cert.name
                          : cert.name[lang]}
                      </a>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      )}

      {/* Modal Contact Notification */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold transition-transform duration-300 ease-in-out hover:rotate-90 focus:rotate-90"
              onClick={() => setShowContactModal(false)}
              aria-label="Tutup"
            >
              <span className="inline-block transition-transform duration-300 ease-in-out">
                ×
              </span>
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.168 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-center text-gray-800 dark:text-white">
              {lang === "en"
                ? "Feature Under Maintenance"
                : "Fitur Dalam Perbaikan"}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
              {lang === "en"
                ? "Sorry, the Send Message feature is currently under maintenance and not available."
                : "Maaf, fitur Send Message saat ini masih dalam tahap perbaikan dan belum dapat digunakan."}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              {lang === "en"
                ? "For now, you can contact me directly via email at "
                : "Untuk sementara, Anda dapat menghubungi saya langsung melalui email di "}
              <a
                href="mailto:ariskiaderaharjo@gmail.com"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                ariskiaderaharjo@gmail.com
              </a>
            </p>

            <button
              onClick={() => setShowContactModal(false)}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {lang === "en" ? "Understood" : "Mengerti"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
