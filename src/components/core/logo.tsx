'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';

import { NoSsr } from '@/components/core/no-ssr';

const HEIGHT = 60;
const WIDTH = 60;

type Color = 'dark' | 'light';

export interface LogoProps {
  color?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
}

export function Logo({
  color = 'dark',
  emblem,
  height = 10,
  width = 30,
}: LogoProps): React.JSX.Element {
  let url: string;

  if (emblem) {
    url =
      color === 'light'
        ? '/assets/untitled design.png'
        : '/assets/untitled design.png';
  } else {
    url =
      color === 'light'
        ? '/assets/untitled design.png'
        : '/assets/untitled design.png';
  }

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {/* Logo Image */}
      <Box
        alt="logo"
        component="img"
        src={url}
        sx={{
          height: height,
          width: 'auto',
          maxWidth: width,
          objectFit: 'contain',
        }}
      />

      {/* Logo Text */}
      <Typography
        component="span" // ✅ makes sure it's plain text, not link-like
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: color === 'light' ? '#000000' : '#FFFFFF',
          textDecoration: 'none', // ✅ remove underline
          transition: 'transform 0.2s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.1)', // zoom on hover
            textDecoration: 'none',  // ✅ no underline on hover too
          },
        }}
      >
        Mindura
      </Typography>
    </Box>
  );
}

export interface DynamicLogoProps {
  colorDark?: Color;
  colorLight?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
}

export function DynamicLogo({
  colorDark = 'light',
  colorLight = 'dark',
  height = HEIGHT,
  width = WIDTH,
  ...props
}: DynamicLogoProps): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return (
    <NoSsr fallback={<Box sx={{ height: `${height}px`, width: `${width}px` }} />}>
      <Logo color={color} height={height} width={width} {...props} />
    </NoSsr>
  );
}
