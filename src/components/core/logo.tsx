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
  textColor?: string; // Added textColor prop
}

export function Logo({
  color = 'dark',
  emblem,
  height = 10,
  width = 30,
  textColor = 'white', // Default to white if not provided
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
        component="span" 
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: textColor, // Use textColor prop here
          textDecoration: 'none',
          transition: 'transform 0.2s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'scale(1.1)', 
            textDecoration: 'none', 
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
  textColor?: string; // Added textColor prop
}

export function DynamicLogo({
  colorDark = 'light',
  colorLight = 'dark',
  height = HEIGHT,
  width = WIDTH,
  textColor, // Destructure textColor
  ...props
}: DynamicLogoProps): React.JSX.Element {
  const { colorScheme } = useColorScheme();
  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return (
    <NoSsr fallback={<Box sx={{ height: `${height}px`, width: `${width}px` }} />}>
      <Logo color={color} height={height} width={width} textColor={textColor} {...props} />
    </NoSsr>
  );
}
