"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import OpeningAnimation from "@/components/OpeningAnimation";
import Turntable from "@/components/Turntable";
import DancingCouple from "@/components/DancingCouple"; // 👈 추가

export default function Page() {
  const [stage, setStage] = useState("loading"); // ✅ 처음은 로딩부터 시작
  const [isPlaying, setIsPlaying] = useState(false);
  const [section, setSection] = useState("home"); // 👈 DancingCouple용

  useEffect(() => {
    if (stage === "loading") {
      // 3초간 로딩 → 오프닝으로 전환
      const t1 = setTimeout(() => setStage("opening"), 3000);
      return () => clearTimeout(t1);
    }
    if (stage === "opening") {
      // 오프닝 2.5초 후 → 메인 전환
      const t2 = setTimeout(() => setStage("ready"), 2500);
      return () => clearTimeout(t2);
    }
  }, [stage]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Stage: Loading */}
      {stage === "loading" && <LoadingScreen />}

      {/* Stage: Opening */}
      {stage === "opening" && (
        <OpeningAnimation onComplete={() => setStage("ready")} />
      )}

      {/* Stage: Main */}
      {stage === "ready" && (
        <>
          {/* 🎵 턴테이블 */}
          <Turntable isPlaying={isPlaying} isCompact={false} />

          {/* 💃 춤추는 커플 */}
          <DancingCouple section={section} />

          {/* 💬 메인 콘텐츠 */}
          <section className="container mx-auto px-4 py-8 text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-gray-300 mb-6">
              This is a simple Next.js + Tailwind + Motion UI demo (JSX, no
              TypeScript).
            </p>

            {/* 재생 버튼 */}
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            {/* 섹션 변경 버튼 */}
            <div className="mt-8 space-x-3">
              {["home", "about", "projects", "skills", "contact"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSection(sec)}
                  className={`px-4 py-1 rounded-full border ${
                    section === sec
                      ? "bg-purple-600 border-purple-400"
                      : "border-gray-500 hover:bg-gray-800"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
