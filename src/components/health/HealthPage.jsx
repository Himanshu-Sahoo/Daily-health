import { Box, Grid, Paper, Typography, Container } from '@mui/material';

export default function HealthPage() {
  // Using public image paths directly
  const articleImages = [
    '/images/image3.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];

  return (
    <Container>
      {/* Latest Articles */}
      <Typography variant="h5" mt={4} mb={2}>Latest Articles</Typography>
      <Grid container spacing={2}>
        {articleImages.map((img, i) => (
          <Grid size={{xs:12,sm:4}}  key={i}>
            <Paper elevation={3}>
              <img src={img} alt={`article-${i}`} style={{ width: '100%', borderRadius: 4 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Why Choose */}
      <Typography variant="h6" mt={6}>Why Choose Daily Health?</Typography>
      <Typography color="text.secondary" mb={2}>
        Discover a smarter way to improve your health with our innovative tools and insights.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{xs:12,sm:4}}>
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold">📊 Personalized Insights</Typography>
            <Typography color="text.secondary">Tailored recommendations for your goals.</Typography>
          </Paper>
        </Grid>
        <Grid size={{xs:12,sm:4}}>
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold">🎯 Gamified Challenges</Typography>
            <Typography color="text.secondary">Interactive ways to stay healthy.</Typography>
          </Paper>
        </Grid>
        <Grid size={{xs:12,sm:4}}>
          <Paper sx={{ p: 2 }}>
            <Typography fontWeight="bold">🤝 Community Support</Typography>
            <Typography color="text.secondary">Connect with others and stay motivated.</Typography>
          </Paper>
        </Grid>
      </Grid>

   
    </Container>
  );
}
