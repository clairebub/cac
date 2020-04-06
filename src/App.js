import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [

];

const mainFeaturedPost = {
  title: '',
  description:
    "",
  image: '/images/transverse_2.png',
  imgText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Post title 1',
    date: 'April 5th',
    description:
      'Say something about this photo.',
    image: '/images/transverse_1.jpeg',
    imageText: 'Image Text',
  },
  {
    title: 'Post title 2',
    date: 'April 5th',
    description:
      'Say something about this photo.',
    image: '/images/transverse_3.png',
    imageText: 'Image Text',
  },
];

const posts = [];

const sidebar = {
  title: 'About',
  description:
    'Founded during the Covid-19 Pandemic crisis, CAC Hand-in-Hand(Chinese\
      American Community Hand-In-Hand) is a non-profit public interest community\
      organization which is dedicated to safe guard our frontline health care\
      professionals. The CAC’s mission is to call upon every Chinese American and\
      the general public residing in USA to get united, and support our front line\
      health care professionals to survive this unprecedented crisis.',
  archives: [
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="CAC 华人社团" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Latest" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="" />
    </React.Fragment>
  );
}
