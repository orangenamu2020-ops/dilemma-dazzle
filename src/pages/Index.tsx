import { useState } from "react";
import { CategorySelector } from "@/components/CategorySelector";
import { BalanceGame } from "@/components/BalanceGame";
import { AdBreak } from "@/components/AdBreak";
import { PersonalityResultScreen } from "@/components/PersonalityResult";
import { getQuestionsByCategory, type Category } from "@/data/questions";
import { getPersonalityResult } from "@/data/personality";

type Screen = "category" | "game" | "ad-mid" | "ad-result" | "result";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [screen, setScreen] = useState<Screen>("category");
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setChoices([]);
    setScreen("game");
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setScreen("category");
  };

  const handleFinish = (allChoices: ("A" | "B")[]) => {
    setChoices(allChoices);
    setScreen("ad-result"); // Show ad before result
  };

  const handleMidAd = () => setScreen("ad-mid");

  if (screen === "ad-mid") {
    return <AdBreak onClose={() => setScreen("game")} />;
  }

  if (screen === "ad-result") {
    return <AdBreak onClose={() => setScreen("result")} />;
  }

  if (screen === "result" && selectedCategory) {
    const result = getPersonalityResult(selectedCategory.id, choices);
    return (
      <PersonalityResultScreen
        {...result}
        categoryName={selectedCategory.name}
        onBack={handleBack}
        onRetry={handleBack}
      />
    );
  }

  if (screen === "category" || !selectedCategory) {
    return <CategorySelector onSelect={handleSelectCategory} />;
  }

  const questions = getQuestionsByCategory(selectedCategory.id);

  return (
    <BalanceGame
      questions={questions}
      categoryEmoji={selectedCategory.emoji}
      categoryName={selectedCategory.name}
      onBack={handleBack}
      onShowAd={handleMidAd}
      onFinish={handleFinish}
    />
  );
};

export default Index;
