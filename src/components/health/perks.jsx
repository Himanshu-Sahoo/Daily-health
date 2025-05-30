import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';

export default function Perk() {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h5" mt={6} fontWeight="bold">
          Why Choose Daily Health?
        </Typography>

        <Typography color="text.secondary" mb={4} mt={2}>
          Discover a smarter way to improve your health with our innovative tools and insights.
        </Typography>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography fontWeight="bold">📊 Personalized Insights</Typography>
              <Typography color="text.secondary">
                Tailored recommendations for your goals.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography fontWeight="bold">🎯 Gamified Challenges</Typography>
              <Typography color="text.secondary">
                Interactive ways to stay healthy.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography fontWeight="bold">🤝 Community Support</Typography>
              <Typography color="text.secondary">
                Connect with others and stay motivated.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
