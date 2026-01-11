import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from '@mui/material'

export default function SurfacesDemo() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Surface Components
      </Typography>

      {/* Paper */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Paper
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Paper elevation={0} sx={{ p: 2, width: 150 }}>
          elevation=0
        </Paper>
        <Paper elevation={1} sx={{ p: 2, width: 150 }}>
          elevation=1
        </Paper>
        <Paper elevation={3} sx={{ p: 2, width: 150 }}>
          elevation=3
        </Paper>
        <Paper elevation={8} sx={{ p: 2, width: 150 }}>
          elevation=8
        </Paper>
      </Box>

      {/* Card */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Card
      </Typography>
      <Box sx={{ maxWidth: 345 }}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>

      {/* Accordion */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Accordion
      </Typography>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Container */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Container
      </Typography>
      <Container maxWidth="sm" sx={{ bgcolor: 'action.hover', p: 2 }}>
        <Typography>maxWidth="sm"</Typography>
      </Container>
    </Box>
  )
}
