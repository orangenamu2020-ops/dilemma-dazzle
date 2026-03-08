import { type Category } from "@/data/questions";

interface PersonalityResult {
  type: string;
  emoji: string;
  title: string;
  description: string;
  traits: string[];
  tip: string;
}

const personalityMap: Record<string, PersonalityResult[]> = {
  work: [
    {
      type: "balance",
      emoji: "⚖️",
      title: "워라밸 수호자",
      description: "일도 중요하지만 나의 삶이 더 중요한 당신! 효율적으로 일하고 퇴근 후엔 자기만의 시간을 즐기는 타입이에요.",
      traits: ["칼퇴 마스터", "효율 추구형", "자기관리 철저"],
      tip: "💡 가끔은 동료들과 소통하는 시간도 만들어보세요!",
    },
    {
      type: "ambition",
      emoji: "🔥",
      title: "야망 불꽃형",
      description: "높은 목표를 향해 달려가는 당신! 힘들어도 성장하는 자신을 보며 보람을 느끼는 열정파예요.",
      traits: ["도전 정신", "목표 지향형", "끈기의 아이콘"],
      tip: "💡 번아웃 주의! 가끔은 쉬어가는 것도 전략이에요.",
    },
    {
      type: "social",
      emoji: "🤗",
      title: "사내 인싸형",
      description: "사람들과의 관계를 중시하는 당신! 팀워크와 분위기 메이킹에 탁월한 능력을 가지고 있어요.",
      traits: ["소통왕", "분위기 메이커", "팀플레이어"],
      tip: "💡 혼자만의 집중 시간도 중요해요!",
    },
  ],
  love: [
    {
      type: "romantic",
      emoji: "💗",
      title: "로맨틱 이상주의자",
      description: "사랑에 진심인 당신! 연인과의 시간을 소중히 여기고, 작은 것에도 감동받는 순수한 마음의 소유자예요.",
      traits: ["감성 풍부", "표현력 만점", "디테일 장인"],
      tip: "💡 현실적인 부분도 함께 챙기면 더 완벽해요!",
    },
    {
      type: "independent",
      emoji: "😎",
      title: "쿨한 독립형",
      description: "서로의 시간을 존중하는 성숙한 연애 스타일! 적당한 거리감이 오히려 사랑을 키운다고 믿는 타입이에요.",
      traits: ["자기 주관 뚜렷", "독립적", "여유로운 마인드"],
      tip: "💡 가끔은 속마음을 표현해보는 건 어때요?",
    },
    {
      type: "devoted",
      emoji: "🥰",
      title: "올인 헌신형",
      description: "사랑하는 사람에게 전부를 쏟는 당신! 상대방의 행복이 곧 나의 행복인 따뜻한 사람이에요.",
      traits: ["헌신적", "따뜻한 마음", "공감 능력 최고"],
      tip: "💡 자신도 소중히 여기는 걸 잊지 마세요!",
    },
  ],
  friends: [
    {
      type: "loyal",
      emoji: "🛡️",
      title: "의리의 사나이/여인",
      description: "한 번 친구면 영원한 친구! 깊고 진한 우정을 추구하는 당신은 누구에게나 든든한 존재예요.",
      traits: ["의리파", "비밀 금고", "든든한 존재"],
      tip: "💡 새로운 인연에도 마음을 열어보세요!",
    },
    {
      type: "social_butterfly",
      emoji: "🦋",
      title: "소셜 나비형",
      description: "다양한 사람들과 두루두루 잘 지내는 당신! 어디서든 분위기를 밝히는 에너지 뱅크예요.",
      traits: ["사교적", "에너지 넘침", "긍정 바이러스"],
      tip: "💡 깊은 관계 한두 개도 소중히 가꿔보세요!",
    },
    {
      type: "honest",
      emoji: "💎",
      title: "솔직 담백형",
      description: "거짓 없는 솔직함이 매력인 당신! 진심을 담은 조언으로 친구들에게 신뢰받는 존재예요.",
      traits: ["솔직함", "신뢰감", "조언 장인"],
      tip: "💡 때로는 부드러운 표현도 무기가 돼요!",
    },
  ],
  food: [
    {
      type: "adventurer",
      emoji: "🌍",
      title: "미식 모험가",
      description: "새로운 맛을 탐험하는 것을 즐기는 당신! 음식으로 세상을 경험하는 진정한 미식가예요.",
      traits: ["호기심 왕", "도전 정신", "맛집 탐험가"],
      tip: "💡 가끔은 익숙한 맛에서도 행복을 찾아보세요!",
    },
    {
      type: "comfort",
      emoji: "🍚",
      title: "소울 푸드 집착형",
      description: "좋아하는 음식에 진심인 당신! 편안한 맛에서 행복을 찾는 소확행의 달인이에요.",
      traits: ["일관성 있는", "행복 추구형", "소확행 달인"],
      tip: "💡 가끔 새로운 맛에 도전해보면 세계가 넓어져요!",
    },
    {
      type: "social_eater",
      emoji: "🍻",
      title: "함께 먹어야 맛있는 형",
      description: "혼밥보다는 같이! 음식은 함께 나눌 때 더 맛있다고 생각하는 정 많은 사람이에요.",
      traits: ["정 많은", "나눔의 미학", "분위기 중시"],
      tip: "💡 혼자만의 맛있는 시간도 즐겨보세요!",
    },
  ],
  life: [
    {
      type: "dreamer",
      emoji: "✨",
      title: "꿈꾸는 몽상가",
      description: "큰 꿈을 꾸고 상상하는 것을 즐기는 당신! 남들이 보지 못하는 가능성을 발견하는 비전가예요.",
      traits: ["상상력 풍부", "낙관적", "비전가"],
      tip: "💡 작은 실천부터 시작하면 꿈이 현실이 돼요!",
    },
    {
      type: "realist",
      emoji: "📊",
      title: "현실주의 전략가",
      description: "현실을 직시하고 최선의 선택을 하는 당신! 계획적이고 실용적인 삶의 고수예요.",
      traits: ["계획적", "실용적", "안정 추구형"],
      tip: "💡 가끔은 즉흥적인 모험도 인생의 양념이에요!",
    },
    {
      type: "free_spirit",
      emoji: "🌊",
      title: "자유로운 영혼",
      description: "틀에 박히지 않는 자유로운 삶을 추구하는 당신! 경험과 추억을 가장 소중히 여기는 타입이에요.",
      traits: ["자유로운", "경험 중시", "유연한 사고"],
      tip: "💡 때로는 루틴도 마음의 안정을 줘요!",
    },
  ],
  random: [
    {
      type: "wild_card",
      emoji: "🃏",
      title: "예측불가 와일드카드",
      description: "정해진 패턴 없이 자유롭게 사는 당신! 매 순간 새로운 선택을 즐기는 진정한 자유인이에요.",
      traits: ["예측불가", "즉흥적", "재미 추구형"],
      tip: "💡 가끔은 일관성도 매력이에요!",
    },
    {
      type: "balanced",
      emoji: "🧘",
      title: "균형 잡힌 현자",
      description: "어떤 상황에서도 균형을 찾는 당신! 극단보다 중용을 선택하는 지혜로운 사람이에요.",
      traits: ["균형감각", "지혜로운", "안정적"],
      tip: "💡 가끔은 과감한 선택도 해보세요!",
    },
    {
      type: "creative",
      emoji: "🎨",
      title: "크리에이티브 괴짜",
      description: "남들과 다른 시각으로 세상을 바라보는 당신! 독특한 사고방식이 매력 포인트예요.",
      traits: ["독창적", "개성 넘침", "틀 파괴자"],
      tip: "💡 주변 사람들의 의견도 들어보면 시너지가 나요!",
    },
  ],
};

export function getPersonalityResult(categoryId: string, choices: ("A" | "B")[]): PersonalityResult {
  const results = personalityMap[categoryId] || personalityMap.random;
  const aCount = choices.filter((c) => c === "A").length;
  const total = choices.length;
  const ratio = aCount / total;

  if (ratio > 0.6) return results[0];
  if (ratio < 0.4) return results[1];
  return results[2];
}
