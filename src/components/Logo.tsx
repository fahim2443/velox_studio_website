"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  theme?: "dark" | "light";
}

const basePath = process.env.NODE_ENV === "production" ? "/velox_studio_website" : "";

export default function Logo({
  className = "",
  size = "md",
  variant = "full",
  theme = "dark",
}: LogoProps) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 50 },
    lg: { width: 200, height: 60 },
  };

  const iconSizes = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 56, height: 56 },
  };

  const { width, height } = variant === "full" ? sizes[size] : iconSizes[size];

  const logoFile =
    variant === "full"
      ? theme === "dark"
        ? "/vs-dark-full.png"
        : "/vs-light-full.png"
      : theme === "dark"
      ? "/vs-dark.png"
      : "/vs-light.png";

  const logoSrc = `${basePath}${logoFile}`;

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={logoSrc}
        alt="Velox Studio"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
