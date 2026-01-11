import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const options = ['React', 'Vue', 'Angular', 'Svelte']

export default function InputsDemo() {
  const [age, setAge] = useState('')
  const [value, setValue] = useState<string | null>(null)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Input Components
      </Typography>

      {/* Text Fields */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Text Fields
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <TextField label="Standard" variant="standard" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Required" required />
        <TextField label="Disabled" disabled defaultValue="Disabled" />
        <TextField label="Error" error helperText="Incorrect entry" />
        <TextField label="Password" type="password" />
        <TextField label="Multiline" multiline rows={3} />
      </Stack>

      {/* Select */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Select
      </Typography>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Age</InputLabel>
        <Select
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      {/* Autocomplete */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Autocomplete
      </Typography>
      <Autocomplete
        options={options}
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{ maxWidth: 300 }}
        renderInput={(params) => <TextField {...params} label="Framework" />}
      />

      {/* Checkboxes */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Checkboxes
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Checked"
        />
        <FormControlLabel control={<Checkbox />} label="Unchecked" />
        <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      </FormGroup>

      {/* Radio Buttons */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Radio Buttons
      </Typography>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup defaultValue="female">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      {/* Switches */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Switches
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Enabled" />
        <FormControlLabel control={<Switch />} label="Disabled" />
        <FormControlLabel control={<Switch disabled />} label="Disabled" />
      </FormGroup>

      {/* Sliders */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Sliders
      </Typography>
      <Box sx={{ maxWidth: 300 }}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={[20, 60]}
          valueLabelDisplay="auto"
          aria-label="Range"
        />
        <Slider defaultValue={30} step={10} marks min={0} max={100} />
      </Box>
    </Box>
  )
}
