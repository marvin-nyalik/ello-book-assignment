import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Tooltip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { removeBook } from "../../redux/readingList/readingListSlice";

const ReadingList = () => {
  const theme = useTheme();
  const readingList = useSelector((state) => state.readingList.bookList);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
    toast.warn(`${book.title} removed from reading list.`);
  };

  return (
    <Box className="w-full flex justify-center py-2">
      <List sx={{ width: "100%", maxWidth: 820, bgcolor: "background.paper" }}>
        {readingList.length > 0 ? (
          readingList.map((book) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Book Cover URL" src={book.coverPhotoURL} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${book.title}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {book.author}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ListItemIcon sx={{ cursor: "pointer" }}>
                  <Tooltip title="Remove book from list">
                    <PlaylistRemoveIcon
                      style={{
                        color: theme.palette.primary.steelBlue,
                        fontSize: "24",
                      }}
                      onClick={() => handleRemoveBook(book)}
                    />
                  </Tooltip>
                </ListItemIcon>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))
        ) : (
          <div className="w-full h-screen flex justify-center items-center text-semibold text-primary">
            Reading list is currently empty
          </div>
        )}
      </List>
    </Box>
  );
};

export default ReadingList;
