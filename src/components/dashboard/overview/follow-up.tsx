import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CalendarCheckIcon } from '@phosphor-icons/react/dist/ssr/CalendarCheck';

export interface FollowUpProps {
  sx?: SxProps;
  value: string;
}

export const FollowUp = React.forwardRef<HTMLDivElement, FollowUpProps>(({ value, sx }, ref): React.JSX.Element => {
  return (
    <Card ref={ref} sx={sx}>
      <CardContent>
        <Stack
          direction="row"
          sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Follow-up
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'var(--mui-palette-primary-main)',
              height: '56px',
              width: '56px',
            }}
          >
            <CalendarCheckIcon fontSize="var(--icon-fontSize-lg)" />
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
});

FollowUp.displayName = 'FollowUp';
