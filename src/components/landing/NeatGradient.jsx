// src/components/GradientBackground.jsx
import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const GradientBackground = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      
        "colors": [
            {
                "color": "#E4E4E4",
                "enabled": true
            },
            {
                "color": "#FFFFFF",
                "enabled": true
            },
            {
                "color": "#10410C",
                "enabled": true
            },
            {
                "color": "#E4E4E4",
                "enabled": true
            },
            {
                "color": "#10410C",
                "enabled": true
            }
        ],
        "speed": 6,
        "horizontalPressure": 2,
        "verticalPressure": 5,
        "waveFrequencyX": 2,
        "waveFrequencyY": 4,
        "waveAmplitude": 2,
        "shadows": 5,
        "highlights": 6,
        "colorBrightness": 2,
        "colorSaturation": 5,
        "wireframe": false,
        "colorBlending": 4,
        "backgroundColor": "#0b3954",
        "backgroundAlpha": 1,
        "resolution": 1
    });

    return () => {
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      className="gradient-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        height: "100vh",
        width: "100vw",
      }}
      ref={canvasRef}
    />
  );
};

export default GradientBackground;
