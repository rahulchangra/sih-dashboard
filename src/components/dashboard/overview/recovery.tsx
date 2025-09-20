import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// ✅ Replaced ListBulletsIcon with HeartbeatIcon
import { HeartbeatIcon } from '@phosphor-icons/react/dist/ssr/Heartbeat';

export interface RecoveryProps {
  sx?: SxProps;
  value: number;
}

export const Recovery = React.forwardRef<HTMLDivElement, RecoveryProps>(({ value, sx }, ref): React.JSX.Element => {
  return (
    <Card ref={ref} sx={sx}>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
            spacing={3}
          >
            <Stack spacing={1}>
              <Typography color="text.secondary" gutterBottom variant="overline">
                Recovery Score
              </Typography>
              <Typography variant="h4">{value}%</Typography>
            </Stack>
            <Avatar
              sx={{
                backgroundColor: 'var(--mui-palette-error-main)',
                height: '56px',
                width: '56px'
              }}
            >
              {/* ✅ Now shows heartbeat icon */}
              <HeartbeatIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
          <div>
            <LinearProgress value={value} variant="determinate" />
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
});

Recovery.displayName = 'Recovery';
