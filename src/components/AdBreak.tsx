import { useState, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";

interface AdBreakProps {
  onClose: () => void;
}

export function AdBreak({ onClose }: AdBreakProps) {
  const [phase, setPhase] = useState<"intro" | "watching" | "done">("intro");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase !== "watching") return;
    const duration = 5000; // 5초 광고
    const interval = 50;
    const step = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setPhase("done");
          return 100;
        }
        return prev + step;
      });
    }, interval);
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
            짧은 영상 광고를 시청하면<br />나에 대한 깊이 있는 분석 결과를 확인할 수 있어요
          </p>
          <button
            onClick={() => setPhase("watching")}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base animate-scale-press transition-all hover:opacity-90"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            광고 보고 결과 확인하기
          </button>
          <p className="text-xs text-muted-foreground mt-4">약 5초 소요</p>
        </div>
      )}

      {phase === "watching" && (
        <div className="flex flex-col items-center text-center w-full max-w-sm animate-fade-in">
          {/* 영상 광고 영역 (앱인토스 SDK에서 대체될 부분) */}
          <div className="w-full aspect-video bg-secondary rounded-2xl flex flex-col items-center justify-center mb-6 border border-border">
            <Loader2 className="w-8 h-8 text-muted-foreground animate-spin mb-3" />
            <span className="text-xs text-muted-foreground font-medium">광고 재생 중...</span>
            <span className="text-[10px] text-muted-foreground mt-1">앱인토스 리워드 광고 영역</span>
          </div>
          {/* 프로그레스 바 */}
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {Math.ceil((100 - progress) / 20)}초 남음
          </p>
        </div>
      )}

      {phase === "done" && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          <span className="text-5xl mb-4">✅</span>
          <h3 className="text-lg font-bold text-foreground mb-2">광고 시청 완료!</h3>
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
