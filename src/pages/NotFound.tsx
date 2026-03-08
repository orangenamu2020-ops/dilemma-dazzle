const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <span className="text-6xl mb-4 block">😅</span>
        <h1 className="mb-3 text-2xl font-bold text-foreground">페이지를 찾을 수 없어요</h1>
        <p className="mb-6 text-sm text-muted-foreground">요청하신 페이지가 존재하지 않아요</p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default NotFound;
