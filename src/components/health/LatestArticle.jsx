import { Box, Grid, Paper, Typography, Container } from '@mui/material';

export default function LatestArticle() {
  // Using public image paths directly
  const articleImages = [
    '/images/image3.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];

  return (
    // Remove Container to allow full width
    <Box sx={{ width: '100%', backgroundColor: 'grey.100', borderRadius: 2, p: 3, mb: 4 }}>
      <Typography variant="h5" mb={2} fontWeight="bold">Latest Articles</Typography>
      <Grid container spacing={2}>
        {articleImages.map((img, i) => (
          <Grid size={{xs:12 ,sm:4 }}key={i}>
            <Paper elevation={3}>
              <img src={img} alt={`article-${i}`} style={{ width: '100%', borderRadius: 4 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
