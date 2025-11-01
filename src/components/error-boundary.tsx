'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='flex min-h-screen flex-col items-center justify-center p-4'>
            <div className='max-w-md text-center space-y-4'>
              <h1 className='text-3xl font-bold text-destructive'>
                Algo correu mal
              </h1>
              <p className='text-muted-foreground'>
                Desculpe, ocorreu um erro. Por favor, recarregue a página ou volte mais tarde.
              </p>
              <button
                onClick={() => window.location.reload()}
                className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors'
              >
                Recarregar Página
              </button>
              {this.state.error && process.env.NODE_ENV === 'development' && (
                <details className='mt-4 text-left'>
                  <summary className='cursor-pointer text-sm text-muted-foreground'>
                    Detalhes do erro (apenas em desenvolvimento)
                  </summary>
                  <pre className='mt-2 text-xs overflow-auto bg-muted p-2 rounded'>
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

