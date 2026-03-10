import { useState, useEffect, useRef } from "react";
import { Play, Loader2 } from "lucide-react";
import { showTossInterstitialAd } from "@/lib/toss";

interface AdBreakProps {
  onClose: () => void;
}

export function AdBreak({ onClose }: AdBreakProps) {
  const [phase, setPhase] = useState<"intro" | "watching" | "done">("intro");
  const [progress, setProgress] = useState(0);
  const adCalled = useRef(false);

  // 광고 실행 (watching 단계 진입 시)
  useEffect(() => {
    if (phase !== "watching" || adCalled.current) return;
    adCalled.current = true;

    // 프로그레스 바 애니메이션 (5초)
    const duration = 5000;
    const interval = 50;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    // 실제 앱인토스 전면 광고 호출
    showTossInterstitialAd().then((success) => {
      clearInterval(timer);
      setProgress(100);
      console.log("[AdBreak] 광고 결과:", success);
      setPhase("done");
    });

    return () => clearInterval(timer);
  }, [phase]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {phase === "intro" && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <span className="text-6xl mb-6">🔮</span>
          <h2 className="text-xl font-bold text-foreground mb-2">
            당신의 분석 결과가 준비되었어요!
          </h2>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-xs">
            짧은 광고를 시청하면<br />나에 대한 깊이 있는 분석 결과를 확인할 수 있어요
          </p>
          <button
            onClick={() => setPhase("watching")}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base animate-scale-press transition-all hover:opacity-90"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            광고 보고 결과 확인하기
          </button>
        </div>
      )}

      {phase === "watching" && (
        <div className="flex flex-col items-center text-center w-full max-w-sm animate-fade-in">
          <div className="w-full aspect-video bg-secondary rounded-2xl flex flex-col items-center justify-center mb-6 border border-border">
            <Loader2 className="w-8 h-8 text-muted-foreground animate-spin mb-3" />
            <span className="text-xs text-muted-foreground font-medium">전면 광고 로딩 중...</span>
          </div>
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">잠시만 기다려주세요...</p>
        </div>
      )}

      {phase === "done" && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <span className="text-5xl mb-4">✅</span>
          <h3 className="text-lg font-bold text-foreground mb-2">준비 완료!</h3>
          <p className="text-sm text-muted-foreground mb-6">분석 결과를 확인해보세요</p>
          <button
            onClick={onClose}
            className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base animate-scale-press"
          >
            결과 보러 가기 🎉
          </button>
        </div>
      )}
    </div>
  );
}
