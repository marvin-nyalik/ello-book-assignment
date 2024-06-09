import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MoreVert } from "@mui/icons-material";
import { getAvatarColor } from "./helpers/helper";
import useMediaQuery from "@mui/material/useMediaQuery";

const BookCard = ({ book }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={isSmallScreen ? 'w-full': 'w-1/3'}> 
    <Card
      className="w-full md:w-1/3"
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: getAvatarColor(theme, book.readingLevel) }}
            aria-label="recipe"
          >
            {book.readingLevel}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={book.title}
        subheader={book.author}
      />
      <CardMedia
        component="img"
        height="20%"
        image={`${book.coverPhotoURL}`}
        alt={book.author}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Reading level - {book.readingLevel}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default BookCard;
