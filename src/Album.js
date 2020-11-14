import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import GamesIcon from '@material-ui/icons/Games';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <GamesIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            derek.games
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              derek.games
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A landing page of gaming profiles on various sites for <Link href="https://twitter.com/Skylark95">@Skylark95</Link>.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <ProfileCard id="steam" title="Steam" />
            <ProfileCard id="gog" title="GOG.com" />
            <ProfileCard id="isthereanydeal" title="IsThereAnyDeal" />
            <ProfileCard id="boardgamearena" title="Board Game Arena" />
            <ProfileCard id="roll20" title="Roll20" />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
