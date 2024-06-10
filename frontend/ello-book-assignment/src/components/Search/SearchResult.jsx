import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlaylistAddCircleIcon from "@mui/icons-material/PlaylistAddCircle";
import DoneIcon from "@mui/icons-material/Done";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../redux/readingList/readingListSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material/styles";

export default function SearchResult({ book }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const readingList = useSelector((state) => state.readingList.bookList);
  const dispatch = useDispatch();

  const handleAddBookToList = () => {
    dispatch(addBook(book));
    toast.success(`${book.title} added to reading list.`);
  };

  const isBookInReadingList = readingList.find(
    (item) => item.title === book.title
  );

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem
        alignItems="flex-start"
        sx={isSmallScreen ? { justifyContent: "space-between" } : {}}
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
          <Tooltip
            title="Add to reading list"
            sx={{ backgroundColor: theme.palette.primary.steelBlue }}
          >
            <div
              onClick={isBookInReadingList ? undefined : handleAddBookToList}
            >
              {isBookInReadingList ? (
                <DoneIcon
                  style={{
                    color: theme.palette.secondary.turquioseDark2,
                    fontSize: "24",
                  }}
                />
              ) : (
                <PlaylistAddCircleIcon
                  style={{
                    color: theme.palette.primary.steelBlue,
                    fontSize: "24",
                  }}
                />
              )}
            </div>
          </Tooltip>
        </ListItemIcon>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
