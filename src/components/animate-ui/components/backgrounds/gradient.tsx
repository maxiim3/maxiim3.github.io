'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

import { cn } from '@/lib/utils';

type GradientBackgroundProps = HTMLMotionProps<'div'> & {
  gradientColors?: string;
};

function GradientBackground({
  className,
  gradientColors,
  transition = { duration: 15, ease: 'easeInOut', repeat: Infinity },
  style,
  ...props
}: GradientBackgroundProps) {
  return (
    <motion.div
      data-slot="gradient-background"
      className={cn(
        'size-full bg-[length:400%_400%]',
        !gradientColors && 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
        className,
      )}
      style={gradientColors ? { backgroundImage: gradientColors, ...style } : style}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={transition}
      {...props}
    />
  );
}

export { GradientBackground, type GradientBackgroundProps };
