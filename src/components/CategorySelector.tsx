import { categories, type Category } from "@/data/questions";

interface CategorySelectorProps {
  onSelect: (category: Category) => void;
}

export function CategorySelector({ onSelect }: CategorySelectorProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-lg mx-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground">밸런스 게임 ⚖️</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          선택으로 알아보는 나의 진짜 성격
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-3 py-1.5">
          <span className="text-xs">🔍</span>
          <span className="text-xs font-medium">게임 끝에 당신의 심리 분석 결과가 기다려요</span>
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 flex-1">
        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat)}
              className="animate-scale-press animate-slide-up bg-card rounded-2xl p-5 text-left shadow-sm border border-border hover:shadow-md transition-shadow"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <span className="text-3xl">{cat.emoji}</span>
              <h3 className="font-semibold text-foreground mt-3 text-base">{cat.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{cat.description}</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[10px] text-muted-foreground">10문제</span>
                <span className="text-[10px] text-muted-foreground">·</span>
                <span className="text-[10px] text-muted-foreground">약 3분</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          친구와 함께 하면 더 재미있어요! 🎉
        </p>
      </div>
    </div>
  );
}
