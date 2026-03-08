import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface AdBreakProps {
  onClose: () => void;
}

const adContents = [
  { emoji: "☕", title: "오늘도 수고한 당신에게", subtitle: "카페 할인 쿠폰 받기", tag: "광고" },
  { emoji: "🎁", title: "밸런스 게임 공유하면", subtitle: "포인트 100P 적립!", tag: "이벤트" },
  { emoji: "📱", title: "더 재미있는 미니게임", subtitle: "토스에서 새로운 게임 도전!", tag: "추천" },
  { emoji: "🍔", title: "점심 뭐 먹지?", subtitle: "배달 앱 3천원 할인 쿠폰", tag: "광고" },
];

export function AdBreak({ onClose }: AdBreakProps) {
  const [countdown, setCountdown] = useState(3);
  const [canClose, setCanClose] = useState(false);
  const ad = adContents[Math.floor(Math.random() * adContents.length)];

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanClose(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-foreground/50 z-50 flex items-end justify-center animate-fade-in">
      <div className="bg-card w-full max-w-md rounded-t-3xl p-6 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] font-medium text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
            {ad.tag}
          </span>
          <button
            onClick={canClose ? onClose : undefined}
            className={`p-1.5 rounded-full transition-all ${canClose ? "bg-secondary text-foreground hover:bg-muted" : "bg-secondary/50 text-muted-foreground"}`}
          >
            {canClose ? (
              <X className="w-4 h-4" />
            ) : (
              <span className="text-[10px] font-bold w-4 h-4 flex items-center justify-center">{countdown}</span>
            )}
          </button>
        </div>

        {/* Ad Content */}
        <div className="text-center py-6">
          <span className="text-5xl">{ad.emoji}</span>
          <h3 className="font-bold text-foreground text-lg mt-4">{ad.title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{ad.subtitle}</p>
        </div>

        {/* CTA */}
        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm mt-2 animate-scale-press"
        >
          자세히 보기
        </button>

        <button
          onClick={canClose ? onClose : undefined}
          className={`w-full py-3 text-sm mt-2 transition-colors ${canClose ? "text-muted-foreground" : "text-transparent"}`}
        >
          건너뛰기
        </button>
      </div>
    </div>
  );
}
