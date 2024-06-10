import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getAvatarColor } from "./helpers/helper";
import useMediaQuery from "@mui/material/useMediaQuery";

const BookCard = ({ book }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={isSmallScreen ? "w-full" : "w-1/4"}>
      <Card className="w-full">
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: getAvatarColor(theme, book.readingLevel) }}
              aria-label="recipe"
            >
              {book.readingLevel}
            </Avatar>
          }
          title={`${book.title.slice(0, 30)}..`}
          subheader={book.author}
        />
        <CardMedia
          component="img"
          height="20%"
          image={`${book.coverPhotoURL}`}
          alt={book.coverPhotoURL}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            Reading level - {book.readingLevel}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookCard;
