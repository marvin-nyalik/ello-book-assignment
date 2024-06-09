import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SearchResult({ book }) {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem 
        alignItems="flex-start"
        sx={isSmallScreen ? { justifyContent: 'space-between' } : {}}
      >
        {!isSmallScreen && (
          <ListItemAvatar>
            <Avatar alt="Book cover photo" src={book.coverPhotoURL} />
          </ListItemAvatar>
        )}
        <ListItemText
          primary={book.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {book.author}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemIcon>
          <PlaylistAddCircleIcon />
        </ListItemIcon>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
