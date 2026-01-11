import { Box, Stack, Typography } from '@mui/material'
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useState } from 'react'

export default function DatePickersDemo() {
  const [date, setDate] = useState<Date | null>(new Date())
  const [time, setTime] = useState<Date | null>(new Date())
  const [dateTime, setDateTime] = useState<Date | null>(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Typography variant="h4" gutterBottom>
          Date & Time Pickers (MUI X)
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          MUI X Date Pickers - 日期和时间选择器组件
        </Typography>

        <Stack spacing={3} sx={{ maxWidth: 400, mt: 3 }}>
          {/* Date Picker */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Date Picker
            </Typography>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </Box>

          {/* Time Picker */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Time Picker
            </Typography>
            <TimePicker
              label="Select Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
            />
          </Box>

          {/* DateTime Picker */}
          <Box>
            <Typography variant="h6" gutterBottom>
              DateTime Picker
            </Typography>
            <DateTimePicker
              label="Select Date & Time"
              value={dateTime}
              onChange={(newValue) => setDateTime(newValue)}
            />
          </Box>

          {/* Disabled */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Disabled State
            </Typography>
            <DatePicker label="Disabled" disabled value={date} />
          </Box>

          {/* Read Only */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Read Only
            </Typography>
            <DatePicker label="Read Only" readOnly value={date} />
          </Box>
        </Stack>
      </Box>
    </LocalizationProvider>
  )
}
