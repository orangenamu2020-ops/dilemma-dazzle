import { categories, type Category } from "@/data/questions";

interface CategorySelectorProps {
  onSelect: (category: Category) => void;
}

export function CategorySelector({ onSelect }: CategorySelectorProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-foreground">밸런스 게임 ⚖️</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          둘 중 하나, 당신의 선택은?
        </p>
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
