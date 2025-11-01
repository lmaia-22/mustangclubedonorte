'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

interface WebVitalsProps {
  gaMeasurementId?: string;
}

export function WebVitals({ gaMeasurementId }: WebVitalsProps) {
  useEffect(() => {
    if (!gaMeasurementId) return;

    const sendToAnalytics = ({ name, delta, value, id }: Metric) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', name, {
          event_category: 'Web Vitals',
          value: Math.round(name === 'CLS' ? delta * 1000 : delta),
          event_label: id,
          non_interaction: true,
          // Custom dimensions for better analysis
          metric_value: value,
          metric_delta: delta,
        });
      }

      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${name}:`, {
          value,
          delta,
          id,
          rating: getRating(name, value),
        });
      }
    };

    // Register all Web Vitals
    // Note: onFID is deprecated in v5, replaced by onINP
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    onINP(sendToAnalytics); // Replaces onFID in v5
  }, [gaMeasurementId]);

  return null;
}

// Helper function to get performance rating
function getRating(metricName: string, value: number): string {
  const thresholds: Record<string, { good: number; needsImprovement: number }> = {
    CLS: { good: 0.1, needsImprovement: 0.25 },
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    TTFB: { good: 800, needsImprovement: 1800 },
    INP: { good: 200, needsImprovement: 500 }, // Replaces FID in v5
  };

  const threshold = thresholds[metricName];
  if (!threshold) return 'unknown';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

