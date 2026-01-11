import {
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export default function FeedbackDemo() {
  const [openDialog, setOpenDialog] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openBackdrop, setOpenBackdrop] = useState(false)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Feedback Components
      </Typography>

      {/* Alerts */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Alerts
      </Typography>
      <Stack spacing={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert
        </Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="warning">This is a warning alert</Alert>
        <Alert severity="error">This is an error alert</Alert>
      </Stack>

      {/* Dialog */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Dialog
      </Typography>
      <Button variant="outlined" onClick={() => setOpenDialog(true)}>
        Open Dialog
      </Button>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenDialog(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Snackbar
      </Typography>
      <Button variant="outlined" onClick={() => setOpenSnackbar(true)}>
        Open Snackbar
      </Button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="This is a snackbar message"
      />

      {/* Progress */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Progress
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <LinearProgress />
        <LinearProgress color="secondary" />
      </Stack>

      {/* Backdrop */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Backdrop
      </Typography>
      <Button variant="outlined" onClick={() => setOpenBackdrop(true)}>
        Show Backdrop
      </Button>
      <Backdrop
        open={openBackdrop}
        onClick={() => setOpenBackdrop(false)}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Skeleton */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Skeleton
      </Typography>
      <Stack spacing={1} sx={{ maxWidth: 300 }}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </Box>
  )
}
