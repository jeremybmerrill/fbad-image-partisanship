import React from 'react';
import Classifier from './Classifier'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import breeds from './classes'
import {getBreed} from './utils'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        marginTop: 20,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    table: {
        width: '100%',
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function App() {
    const classes = useStyles();
    return <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Image Partisanship Classifier
                </Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.content}>
            <Classifier />
        </Container>
        <Container className={classes.content}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>How do I use this?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    Tab on the image icon to take a photo and drag and drop an image file on the image icon to classify the image's partisanship. Note that (a) this is kind of silly even for Facebook ad images and (b) if you submit an image that isn't from a Facebook ad, the prediction will be meaningless.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>What is this good for?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    TK
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>What happens to my data?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography variant="body2">
                    No image that you take with or add to this application will be uploaded or stored on my or anyone's servers by this application / website. In fact, your images never leave your device, because all the calculations are done in you browser! 
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                <Typography className={classes.heading}>credits</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Container>
                        <Typography variant="body2">
                            I borrowed this app and much of the code from [David Pfahler](https://github.com/davidpfahler). The Image partisanship bit is all me though. If you want to learn more about the app code, check out the <Link to="https://github.com/davidpfahler/react-ml-app">GitHub repository</Link>.
                        </Typography>
                    </Container>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <footer className={classes.footer}>
            </footer>
        </Container>
  </div>;
}

export default App;
