import { ArrowLeft, Share2 } from "lucide-react";

interface PersonalityResultProps {
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  tip: string;
  deepAnalysis: string;
  categoryName: string;
  onBack: () => void;
  onRetry: () => void;
}

export function PersonalityResultScreen({
  emoji, title, description, traits, tip, deepAnalysis, categoryName, onBack, onRetry,
}: PersonalityResultProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `나의 ${categoryName} 유형: ${title}`,
        text: `${emoji} ${title}\n${description}\n\n밸런스 게임으로 나의 유형을 알아보세요!`,
      }).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <button onClick={onBack} className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-sm font-semibold text-foreground">나의 분석 결과</span>
        <button onClick={handleShare} className="p-2 -mr-2 rounded-xl hover:bg-secondary transition-colors">
          <Share2 className="w-5 h-5 text-foreground" />
        </button>
      </div>

      <div className="flex-1 px-6 pb-4 overflow-y-auto">
        {/* Emoji & Title */}
        <div className="flex flex-col items-center pt-6">
          <div className="animate-bounce-in">
            <span className="text-7xl">{emoji}</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground mt-5 animate-slide-up" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
            {title}
          </h2>
          <p className="text-muted-foreground text-sm text-center mt-3 leading-relaxed max-w-xs animate-slide-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
            {description}
          </p>
        </div>

        {/* Traits */}
        <div className="flex gap-2 mt-5 flex-wrap justify-center animate-slide-up" style={{ animationDelay: "0.45s", animationFillMode: "both" }}>
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              #{trait}
            </span>
          ))}
        </div>

        {/* Deep Analysis Card */}
        <div className="mt-7 animate-slide-up" style={{ animationDelay: "0.55s", animationFillMode: "both" }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm">🔍</span>
            <h3 className="text-sm font-bold text-foreground">깊이 있는 분석</h3>
          </div>
          <div className="bg-card rounded-2xl p-5 border border-border">
            <p className="text-sm text-foreground leading-[1.8]">{deepAnalysis}</p>
          </div>
        </div>

        {/* Tip Card */}
        <div className="mt-4 bg-primary/5 rounded-2xl p-5 border border-primary/10 animate-slide-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
          <p className="text-sm text-foreground leading-relaxed">{tip}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 pb-8 pt-4 space-y-3 animate-slide-up" style={{ animationDelay: "0.85s", animationFillMode: "both" }}>
        <button
          onClick={onRetry}
          className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base animate-scale-press"
        >
          다른 주제 해보기 🎯
        </button>
        <button
          onClick={handleShare}
          className="w-full py-3.5 rounded-2xl bg-secondary text-secondary-foreground font-semibold text-sm animate-scale-press"
        >
          친구에게 공유하기 📤
        </button>
      </div>
    </div>
  );
}
