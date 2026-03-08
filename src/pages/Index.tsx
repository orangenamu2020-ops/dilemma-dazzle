import { useState } from "react";
import { CategorySelector } from "@/components/CategorySelector";
import { BalanceGame } from "@/components/BalanceGame";
import { AdBreak } from "@/components/AdBreak";
import { getQuestionsByCategory, type Category } from "@/data/questions";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showAd, setShowAd] = useState(false);

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  if (showAd) {
    return <AdBreak onClose={() => setShowAd(false)} />;
  }

  if (!selectedCategory) {
    return <CategorySelector onSelect={handleSelectCategory} />;
  }

  const questions = getQuestionsByCategory(selectedCategory.id);

  return (
    <BalanceGame
      questions={questions}
      categoryEmoji={selectedCategory.emoji}
      categoryName={selectedCategory.name}
      onBack={handleBack}
      onShowAd={() => setShowAd(true)}
    />
  );
};

export default Index;
