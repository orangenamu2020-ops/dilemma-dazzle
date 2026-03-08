export interface Question {
  id: number;
  choiceA: string;
  choiceB: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: "a" | "b";
}

export const categories: Category[] = [
  { id: "work", name: "직장생활", emoji: "💼", description: "회사에서 겪는 고민들", color: "a" },
  { id: "love", name: "연애", emoji: "💕", description: "사랑에 관한 선택들", color: "b" },
  { id: "friends", name: "친구", emoji: "🤝", description: "우정 사이의 딜레마", color: "a" },
  { id: "food", name: "음식", emoji: "🍕", description: "먹는 것에 진심인 당신", color: "b" },
  { id: "life", name: "일상", emoji: "🌟", description: "인생의 크고 작은 선택", color: "a" },
  { id: "superpower", name: "초능력", emoji: "🦸", description: "판타지 능력 대결", color: "a" },
  { id: "money", name: "돈/경제", emoji: "💰", description: "현실적인 돈 고민들", color: "b" },
  { id: "random", name: "랜덤", emoji: "🎲", description: "예측 불가 질문들", color: "a" },
];

export const questions: Question[] = [
  // 직장생활 (10문제)
  { id: 1, choiceA: "연봉 5천만원 + 칼퇴", choiceB: "연봉 1억 + 매일 야근", category: "work" },
  { id: 2, choiceA: "좋아하는 일 + 낮은 연봉", choiceB: "싫어하는 일 + 높은 연봉", category: "work" },
  { id: 3, choiceA: "매일 재택근무", choiceB: "매일 출근 + 점심 무제한", category: "work" },
  { id: 4, choiceA: "능력 없는 착한 상사", choiceB: "능력 있는 나쁜 상사", category: "work" },
  { id: 5, choiceA: "월요일부터 금요일 4시간씩", choiceB: "월~수 8시간씩 + 목금 쉬기", category: "work" },
  { id: 6, choiceA: "회사 근처 원룸", choiceB: "1시간 거리 넓은 아파트", category: "work" },
  { id: 7, choiceA: "회식 매주 참석", choiceB: "회식 안 가고 평판 나빠지기", category: "work" },
  { id: 8, choiceA: "모든 회의에 참석", choiceB: "회의 없이 혼자 일하기", category: "work" },
  { id: 9, choiceA: "대기업 말단 사원", choiceB: "스타트업 초기 멤버", category: "work" },
  { id: 10, choiceA: "연봉 협상 직접 하기", choiceB: "회사가 알아서 올려주길 기다리기", category: "work" },

  // 연애 (10문제)
  { id: 11, choiceA: "첫사랑과 재회", choiceB: "이상형 새로운 사람 만남", category: "love" },
  { id: 12, choiceA: "매일 연락하는 연인", choiceB: "일주일에 한번 만나는 연인", category: "love" },
  { id: 13, choiceA: "얼굴만 이상형", choiceB: "성격만 이상형", category: "love" },
  { id: 14, choiceA: "내가 더 좋아하는 연애", choiceB: "상대가 더 좋아하는 연애", category: "love" },
  { id: 15, choiceA: "공개연애", choiceB: "비밀연애", category: "love" },
  { id: 16, choiceA: "연인의 과거 다 알기", choiceB: "아무것도 모르기", category: "love" },
  { id: 17, choiceA: "여행 좋아하는 연인", choiceB: "집순이/집돌이 연인", category: "love" },
  { id: 18, choiceA: "요리 잘하는 연인", choiceB: "청소 잘하는 연인", category: "love" },
  { id: 19, choiceA: "싸우면 바로 풀기", choiceB: "하루 냉각기 갖기", category: "love" },
  { id: 20, choiceA: "연인과 같은 직장", choiceB: "절대 같은 직장은 싫음", category: "love" },

  // 친구 (10문제)
  { id: 21, choiceA: "절친 1명", choiceB: "괜찮은 친구 10명", category: "friends" },
  { id: 22, choiceA: "비밀 다 말하는 친구", choiceB: "항상 편한 친구", category: "friends" },
  { id: 23, choiceA: "솔직한 친구", choiceB: "배려하는 친구", category: "friends" },
  { id: 24, choiceA: "친구의 험담 들었을 때 말하기", choiceB: "모른 척 하기", category: "friends" },
  { id: 25, choiceA: "항상 늦는 친구", choiceB: "항상 취소하는 친구", category: "friends" },
  { id: 26, choiceA: "같이 운동하는 친구", choiceB: "같이 술 마시는 친구", category: "friends" },
  { id: 27, choiceA: "돈 잘 빌려주는 친구", choiceB: "시간 잘 내주는 친구", category: "friends" },
  { id: 28, choiceA: "같은 취미 친구", choiceB: "다른 취미 친구", category: "friends" },
  { id: 29, choiceA: "매일 카톡하는 친구", choiceB: "1년에 한번 만나도 편한 친구", category: "friends" },
  { id: 30, choiceA: "내 성공을 진심으로 축하해주는 친구", choiceB: "내가 힘들 때 옆에 있어주는 친구", category: "friends" },

  // 음식 (10문제)
  { id: 31, choiceA: "평생 한식만 먹기", choiceB: "평생 양식만 먹기", category: "food" },
  { id: 32, choiceA: "매운 음식 못 먹기", choiceB: "단 음식 못 먹기", category: "food" },
  { id: 33, choiceA: "치킨 평생 못 먹기", choiceB: "피자 평생 못 먹기", category: "food" },
  { id: 34, choiceA: "밥 없이 반찬만", choiceB: "반찬 없이 밥만", category: "food" },
  { id: 35, choiceA: "커피 못 마시기", choiceB: "술 못 마시기", category: "food" },
  { id: 36, choiceA: "평생 배달 음식만", choiceB: "평생 직접 요리만", category: "food" },
  { id: 37, choiceA: "라면에 밥 말아먹기", choiceB: "라면에 치즈 넣기", category: "food" },
  { id: 38, choiceA: "아침 안 먹기", choiceB: "야식 안 먹기", category: "food" },
  { id: 39, choiceA: "맛집 줄서기 1시간", choiceB: "근처 아무 데나 바로 입장", category: "food" },
  { id: 40, choiceA: "떡볶이 평생 못 먹기", choiceB: "삼겹살 평생 못 먹기", category: "food" },

  // 일상 (10문제)
  { id: 41, choiceA: "여름만 사는 나라", choiceB: "겨울만 사는 나라", category: "life" },
  { id: 42, choiceA: "시간 멈추는 능력", choiceB: "과거로 돌아가는 능력", category: "life" },
  { id: 43, choiceA: "부자인데 바쁜 삶", choiceB: "평범하지만 여유로운 삶", category: "life" },
  { id: 44, choiceA: "도시에서 살기", choiceB: "시골에서 살기", category: "life" },
  { id: 45, choiceA: "1년 뒤 로또 당첨", choiceB: "지금 당장 1억", category: "life" },
  { id: 46, choiceA: "모든 언어 마스터", choiceB: "모든 악기 마스터", category: "life" },
  { id: 47, choiceA: "10년 전으로 돌아가기", choiceB: "10년 후를 미리 보기", category: "life" },
  { id: 48, choiceA: "투명인간 되기", choiceB: "하늘 날기", category: "life" },
  { id: 49, choiceA: "평생 혼자 살기 (외롭지 않음)", choiceB: "평생 누군가와 살기 (혼자 시간 없음)", category: "life" },
  { id: 50, choiceA: "세계여행 1년", choiceB: "원하는 곳에 집 한 채", category: "life" },

  // 초능력 (10문제)
  { id: 51, choiceA: "마음을 읽는 능력", choiceB: "미래를 보는 능력", category: "superpower" },
  { id: 52, choiceA: "시간을 멈추는 능력", choiceB: "순간이동 능력", category: "superpower" },
  { id: 53, choiceA: "모든 동물과 대화", choiceB: "모든 기계를 조종", category: "superpower" },
  { id: 54, choiceA: "기억을 지우는 능력", choiceB: "기억을 완벽히 저장하는 능력", category: "superpower" },
  { id: 55, choiceA: "불로불사 (늙지 않음)", choiceB: "환생 (죽어도 다시 태어남)", category: "superpower" },
  { id: 56, choiceA: "1일 1번 거짓말 탐지", choiceB: "1일 1번 누구든 설득 가능", category: "superpower" },
  { id: 57, choiceA: "꿈을 현실로 만드는 능력", choiceB: "현실에서 꿈처럼 자유로운 능력", category: "superpower" },
  { id: 58, choiceA: "100가지 재능 평범하게", choiceB: "1가지 재능 세계 최고로", category: "superpower" },
  { id: 59, choiceA: "날씨를 마음대로 조종", choiceB: "사람의 감정을 조종", category: "superpower" },
  { id: 60, choiceA: "과거의 나에게 편지 보내기", choiceB: "미래의 나에게서 편지 받기", category: "superpower" },

  // 돈/경제 (10문제)
  { id: 61, choiceA: "월 300만원 평생 보장", choiceB: "50% 확률로 100억 or 무일푼", category: "money" },
  { id: 62, choiceA: "20대에 10억", choiceB: "40대에 50억", category: "money" },
  { id: 63, choiceA: "부모님 집 사드리기", choiceB: "내 사업 투자하기", category: "money" },
  { id: 64, choiceA: "절약해서 30대 은퇴", choiceB: "쓰면서 60대까지 일하기", category: "money" },
  { id: 65, choiceA: "연봉 2배 but 주 6일 근무", choiceB: "현재 연봉 but 주 4일 근무", category: "money" },
  { id: 66, choiceA: "친구에게 1000만원 빌려주기", choiceB: "친구 부탁 거절하기", category: "money" },
  { id: 67, choiceA: "로또 1등 공개 당첨", choiceB: "아무도 모르게 당첨", category: "money" },
  { id: 68, choiceA: "평생 전세로 살기", choiceB: "빚 내서 내 집 마련", category: "money" },
  { id: 69, choiceA: "월급 두 배인데 흥미 없는 일", choiceB: "월급 반인데 꿈에 그리던 일", category: "money" },
  { id: 70, choiceA: "주식으로 1억 벌기", choiceB: "부동산으로 1억 벌기", category: "money" },
];

export function getQuestionsByCategory(categoryId: string): Question[] {
  if (categoryId === "random") {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
  }
  return questions.filter((q) => q.category === categoryId);
}
