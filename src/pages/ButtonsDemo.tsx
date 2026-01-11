import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import SaveIcon from '@mui/icons-material/Save'
import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export default function ButtonsDemo() {
  const [formats, setFormats] = useState(() => ['bold'])

  const handleFormat = (
    _: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats)
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Buttons
      </Typography>

      {/* Basic Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Basic Buttons
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>

      {/* Button Colors */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Colors
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>

      {/* Button Sizes */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Sizes
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* Buttons with Icons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        With Icons
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button variant="contained" startIcon={<SaveIcon />}>
          Save
        </Button>
        <Button variant="contained" endIcon={<DeleteIcon />}>
          Delete
        </Button>
        <IconButton color="primary" aria-label="add">
          <AddIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>

      {/* Floating Action Button */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Floating Action Buttons
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <SaveIcon />
        </Fab>
        <Fab variant="extended" color="primary">
          <AddIcon sx={{ mr: 1 }} />
          Extended
        </Fab>
      </Stack>

      {/* Button Group */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Button Group
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" aria-label="Outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>

      {/* Toggle Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Toggle Buttons
      </Typography>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      {/* Disabled Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Disabled State
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
      </Stack>
    </Box>
  )
}
