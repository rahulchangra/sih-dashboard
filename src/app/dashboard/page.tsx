import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Grid';



import { config } from '@/config';
import { Medication } from '@/components/dashboard/overview/medication';

import { Progress } from '@/components/dashboard/overview/progress';
import { Recovery } from '@/components/dashboard/overview/recovery';
import { TotalPatients } from '@/components/dashboard/overview/total-patients';
import { FollowUp } from '@/components/dashboard/overview/follow-up';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <Medication diff={12} trend="up" sx={{ height: '100%' }} value="75%" />
      </Grid>
      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <TotalPatients diff={16} trend="down" sx={{ height: '100%' }} value="10 hrs" />
      </Grid>
      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <Recovery sx={{ height: '100%' }} value={75.5} />
      </Grid>
      <Grid
        size={{
          lg: 3,
          sm: 6,
          xs: 12,
        }}
      >
        <FollowUp sx={{ height: '100%' }} value="3/5" />
      </Grid>
      <Grid
        size={{
          lg: 8,
          xs: 12,
        }}
      >
        <Progress
          chartSeries={[
            { name: 'This day', data: [2, 4, 6, 3, 7, 5, 8, 4, 9, 6, 10, 7] },
            { name: 'Last month', data: [1, 3, 5, 2, 6, 4, 7, 3, 8, 5, 9, 6] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid
        size={{
          lg: 4,
          md: 6,
          xs: 12,
        }}
      >
        <Traffic chartSeries={[5, 3, 2]} labels={['Maze', 'Memory', 'Line-Drawing']} sx={{ height: '100%' }} />
      </Grid>


    </Grid>
  );
}
