'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeClasses = {
    sm: showText ? 'h-9 w-auto' : 'w-10 h-10',
    md: showText ? 'h-12 w-auto' : 'w-14 h-14',
    lg: showText ? 'h-20 w-auto' : 'w-24 h-24',
  };

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className={`relative flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-105 ${sizeClasses[size]}`}>
        {/* Glow halo behind logo */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#D4AF37_0%,transparent_70%)] opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500" />

        <Image
          src={showText ? '/images/logo_transparent.png' : '/images/logo_emblem.png'}
          alt="Howling Heaven Studio Logo"
          width={size === 'lg' ? 240 : size === 'md' ? 160 : 120}
          height={size === 'lg' ? 240 : size === 'md' ? 160 : 120}
          className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
          priority
        />
      </div>
    </div>
  );
};
