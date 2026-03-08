import { useState } from "react";
import { type Question } from "@/data/questions";
import { ArrowLeft } from "lucide-react";

interface BalanceGameProps {
  questions: Question[];
  categoryEmoji: string;
  categoryName: string;
  onBack: () => void;
  onFinish: (choices: ("A" | "B")[]) => void;
}

export function BalanceGame({ questions, categoryEmoji, categoryName, onBack, onFinish }: BalanceGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<"A" | "B" | null>(null);
  const [animating, setAnimating] = useState(false);
  const [allChoices, setAllChoices] = useState<("A" | "B")[]>([]);

  const question = questions[currentIndex];
  const isLast = currentIndex >= questions.length - 1;

  const handleSelect = (choice: "A" | "B") => {
    if (selected || animating) return;
    setSelected(choice);
    setAllChoices((prev) => [...prev, choice]);
  };

  const handleNext = () => {
    if (isLast) {
      onFinish([...allChoices]);
      return;
    }
    setAnimating(true);
    setTimeout(() => {
      setSelected(null);
      setCurrentIndex((prev) => prev + 1);
      setAnimating(false);
    }, 300);
  };

  return (
    <div className={`min-h-screen bg-background flex flex-col transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}>
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center gap-3">
        <button onClick={onBack} className="p-2 -ml-2 rounded-xl hover:bg-secondary transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-lg">{categoryEmoji}</span>
          <span className="font-semibold text-foreground text-sm">{categoryName}</span>
        </div>
        <span className="ml-auto text-xs text-muted-foreground font-medium">
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="px-4 pb-4">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center px-5 gap-4">
        <p className="text-center text-muted-foreground text-sm font-medium mb-2">
          둘 중에 꼭 골라야 한다면? 🤔
        </p>

        {/* Choice A */}
        <button
          onClick={() => handleSelect("A")}
          disabled={!!selected}
          className={`relative rounded-2xl p-6 text-left transition-all duration-300 animate-scale-press overflow-hidden border-2 ${
            selected === "A"
              ? "border-choice-a bg-choice-a-light shadow-md"
              : selected === "B"
                ? "border-border bg-card opacity-60"
                : "border-border bg-card hover:border-choice-a/40 hover:shadow-sm"
          }`}
        >
          <div className="relative z-10">
            <span className="text-xs font-bold text-choice-a">A</span>
            <p className="font-semibold text-foreground mt-1 text-base leading-snug">{question.choiceA}</p>
          </div>
          {selected === "A" && (
            <div className="mt-2 relative z-10 animate-fade-in">
              <span className="text-xs font-medium text-choice-a">✓ 선택완료</span>
            </div>
          )}
        </button>

        {/* VS */}
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-muted-foreground">VS</span>
          </div>
        </div>

        {/* Choice B */}
        <button
          onClick={() => handleSelect("B")}
          disabled={!!selected}
          className={`relative rounded-2xl p-6 text-left transition-all duration-300 animate-scale-press overflow-hidden border-2 ${
            selected === "B"
              ? "border-choice-b bg-choice-b-light shadow-md"
              : selected === "A"
                ? "border-border bg-card opacity-60"
                : "border-border bg-card hover:border-choice-b/40 hover:shadow-sm"
          }`}
        >
          <div className="relative z-10">
            <span className="text-xs font-bold text-choice-b">B</span>
            <p className="font-semibold text-foreground mt-1 text-base leading-snug">{question.choiceB}</p>
          </div>
          {selected === "B" && (
            <div className="mt-2 relative z-10 animate-fade-in">
              <span className="text-xs font-medium text-choice-b">✓ 선택완료</span>
            </div>
          )}
        </button>
      </div>

      {/* Next button */}
      {selected && (
        <div className="px-5 pb-8 pt-4 animate-slide-up">
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base transition-all hover:opacity-90 animate-scale-press"
          >
            {isLast ? "결과 보기 🎉" : "다음 질문 →"}
          </button>
        </div>
      )}
    </div>
  );
}
