import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("[ErrorBoundary]", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="text-center px-6">
            <span className="text-6xl mb-4 block">🙈</span>
            <h2 className="text-xl font-bold text-foreground mb-2">앗, 문제가 발생했어요</h2>
            <p className="text-sm text-muted-foreground mb-6">다시 시도해주세요</p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = "/";
              }}
              className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm"
            >
              처음으로 돌아가기
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
