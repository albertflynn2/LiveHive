import {
  Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem,
  List, ListItem, ListItemAvatar, ListItemText, Typography,
} from "@mui/material";
import React from "react";


const Rightbar = () => {
  return (
    <Box
      bgcolor="secondary"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <AvatarGroup max={5}>
          <Avatar alt="Billy Conrad" src="Friend1.jpg" />
          <Avatar alt="Mary Beszant" src="Friend4.jpg" />
          <Avatar alt="Trevor Francis" src="Friend2.jpg" />
          <Avatar alt="Chloe Ahearn" src="Friend5.jpg" />
          <Avatar alt="Mark Johnson" src="Friend3.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontweight={100}>
          Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="Coffee.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="Trees.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="MotorBike.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Ryan Stobborn" src="Convo1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Fancy a Jog Later?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ryan Stobborn
                  </Typography>
                  {" — Need to work on the fitness…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Mary Coughan" src="Convo2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Get Together?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Sinead, John, Timmy
                  </Typography>
                  {" — Working over the weekend, Sorry!…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Claire O'Dwyer" src="Convo3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Hello"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Any good movies on Net…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;


