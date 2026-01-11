import DeleteIcon from '@mui/icons-material/Delete'
import ImageIcon from '@mui/icons-material/Image'
import MailIcon from '@mui/icons-material/Mail'
import WorkIcon from '@mui/icons-material/Work'
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'

const rows = [
  { id: 1, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
]

export default function DataDisplayDemo() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Data Display Components
      </Typography>

      {/* Avatar */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Avatar
      </Typography>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>N</Avatar>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp">R</Avatar>
          <Avatar alt="Travis Howard">T</Avatar>
          <Avatar alt="Cindy Baker">C</Avatar>
          <Avatar alt="Agnes Walker">A</Avatar>
          <Avatar alt="Trevor Henderson">T</Avatar>
        </AvatarGroup>
      </Stack>

      {/* Badge */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Badge
      </Typography>
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="secondary">
          <MailIcon />
        </Badge>
        <Badge color="success" variant="dot">
          <MailIcon />
        </Badge>
      </Stack>

      {/* Chip */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Chip
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Success" color="success" />
        <Chip label="Clickable" clickable />
        <Chip label="Deletable" onDelete={() => {}} />
        <Chip label="With Icon" icon={<ImageIcon />} />
        <Chip
          label="Delete Icon"
          deleteIcon={<DeleteIcon />}
          onDelete={() => {}}
        />
      </Stack>

      {/* List */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        List
      </Typography>
      <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2024" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2024" />
        </ListItem>
      </List>

      {/* Table */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Table
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Tooltip */}
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Tooltip
      </Typography>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete">
          <DeleteIcon />
        </Tooltip>
        <Tooltip title="Add" placement="top">
          <Typography>Hover me (top)</Typography>
        </Tooltip>
        <Tooltip title="Add" placement="right">
          <Typography>Hover me (right)</Typography>
        </Tooltip>
      </Stack>
    </Box>
  )
}
