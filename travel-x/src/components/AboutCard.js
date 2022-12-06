import * as React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const AboutCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (i) => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="400"
        image={props.imgPath}
        alt="place holder"
      />
      <CardActions disableSpacing>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Worked on: {props.aboutInfo}</Typography>
          <Typography paragraph>
            Email: <a href={`mailto:` + props.email}>{props.email}</a>.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AboutCard;
