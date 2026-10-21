import React, { Component, Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlowingOrb } from './GlowingOrb.tsx';
import { OrbFallback } from './OrbFallback.tsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.ts';

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('WebGL Rendering Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Check for WebGL capability
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function OrbScene() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!isWebGLAvailable()) {
      setWebGLSupported(false);
    }
  }, []);

  if (!isMounted) {
    return <OrbFallback />;
  }

  if (!webGLSupported) {
    return <OrbFallback />;
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '380px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <WebGLErrorBoundary fallback={<OrbFallback />}>
        <Suspense fallback={<OrbFallback />}>
          <Canvas
            camera={{ position: [0, 0, 7], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Ambient Lighting */}
            <ambientLight intensity={0.4} color="#8B5CF6" />
            
            {/* Directional Key & Rim Lighting */}
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#FFFFFF" />
            <directionalLight position={[-5, -3, -4]} intensity={1.5} color="#22D3EE" />

            {/* The 3D Orb */}
            <GlowingOrb reducedMotion={prefersReducedMotion} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
}
