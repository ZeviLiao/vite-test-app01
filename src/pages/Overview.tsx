import { Box, Card, CardContent, Typography } from '@mui/material'

const features = [
  { title: 'Buttons', count: 8, color: '#1976d2' },
  { title: 'Inputs', count: 12, color: '#2e7d32' },
  { title: 'Navigation', count: 6, color: '#ed6c02' },
  { title: 'Surfaces', count: 5, color: '#9c27b0' },
  { title: 'Feedback', count: 7, color: '#d32f2f' },
  { title: 'Data Display', count: 10, color: '#0288d1' },
  { title: 'Data Grid', count: 1, color: '#0097a7' },
  { title: 'Date Pickers', count: 4, color: '#689f38' },
]

export default function Overview() {
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        MUI Components 展示
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Material-UI v7 完整组件库演示
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 3,
          mt: 2,
        }}
      >
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardContent>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: 2,
                  bgcolor: feature.color,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
                {feature.count}
              </Box>
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.count} 个组件
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}
