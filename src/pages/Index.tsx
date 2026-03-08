import { useState, useEffect, useCallback } from "react";
import { CategorySelector } from "@/components/CategorySelector";
import { BalanceGame } from "@/components/BalanceGame";
import { AdBreak } from "@/components/AdBreak";
import { PersonalityResultScreen } from "@/components/PersonalityResult";
import { getQuestionsByCategory, type Category } from "@/data/questions";
import { getPersonalityResult } from "@/data/personality";

type Screen = "category" | "game" | "ad-result" | "result";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [screen, setScreen] = useState<Screen>("category");
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  // 토스 인앱 뒤로가기 제스처 대응 (브라우저 히스토리 관리)
  const navigate = useCallback((newScreen: Screen) => {
    setScreen(newScreen);
    if (newScreen !== "category") {
      window.history.pushState({ screen: newScreen }, "");
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      // 뒤로가기 시 카테고리 선택 화면으로
      setSelectedCategory(null);
      setScreen("category");
      setChoices([]);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleSelectCategory = (cat: Category) => {
    setSelectedCategory(cat);
    setChoices([]);
    navigate("game");
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setScreen("category");
    setChoices([]);
    // 히스토리 뒤로가기
    if (window.history.state?.screen) {
      window.history.back();
    }
  };

  const handleFinish = (allChoices: ("A" | "B")[]) => {
    setChoices(allChoices);
    navigate("ad-result");
  };

  if (screen === "ad-result") {
    return <AdBreak onClose={() => navigate("result")} />;
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
      onFinish={handleFinish}
    />
  );
};

export default Index;
