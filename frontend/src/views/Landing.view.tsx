import React from 'react';

import { 
  Container,
  Grid,
  Box,
  Typography,
  useTheme,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ParallaxBanner } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';

import LandingJumboBackground from '../assets/landingJumbo.jpg';

import back1 from '../assets/ubuntuLogo.png';
import back2 from '../assets/githubLogo.png';
import back3 from '../assets/awsLogo.png';
import back4 from '../assets/herokuLogo.svg';
import back5 from '../assets/nodeLogo.png';
import back6 from '../assets/dockerLogo.webp';
import back7 from '../assets/expressLogo.png';
import back8 from '../assets/mysqlLogo.png';
import back9 from '../assets/postgresLogo.png';
import back10 from '../assets/elasticsearchLogo.svg';

import front1 from '../assets/jsLogo.png';
import front2 from '../assets/tsLogo.png';
import front3 from '../assets/reactLogo.png';
import front4 from '../assets/webpackLogo.png';
import front5 from '../assets/materialuiLogo.svg';
import front6 from '../assets/bootstrapLogo.svg';
import front7 from '../assets/gmapsLogo.png';
import front8 from '../assets/html5Logo.svg';
import front9 from '../assets/cssLogo.png';
import front10 from '../assets/sassLogo.png';
import front11 from '../assets/eslintLogo.svg';

import figmaLogo from '../assets/figmaLogo.svg';

import designBackground from '../assets/designBackground.jpg';

import hobbiesBackground from '../assets/hobbiesBackground.jpg';

import hobby1 from '../assets/rustLogo.svg';
import hobby2 from '../assets/yewLogo.png';
import hobby3 from '../assets/microcontrollerHobby.png';
import hobby4 from '../assets/cybersecurityHobby.png';
import hobby5 from '../assets/aiHobby.png';
import hobby6 from '../assets/linuxHobby.png';
import hobby7 from '../assets/decentralizedHobby.webp';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Landing = ()=>{

  const theme = useTheme();
  const xsUpMediaQuery = useMediaQuery(theme.breakpoints.up('xs'));
  const smUpMediaQuery = useMediaQuery(theme.breakpoints.up('sm'));
  const mdUpMediaQuery = useMediaQuery(theme.breakpoints.up('md'));
  const lgUpMediaQuery = useMediaQuery(theme.breakpoints.up('lg'));
  const xlUpMediaQuery = useMediaQuery(theme.breakpoints.up('xl'));


  return (
    <div
      className="ih-land"
    >
      
      <ParallaxBanner
        layers={[
          { 
            image: LandingJumboBackground,
            // style: {minHeight: '80vh'}
            speed: -40,
            // rotateX: [90, 0],
            opacity: [3, -0.5],
          },
          {
            opacity: [3, -0.5],
            children: (
              <Container
                maxWidth="xl"
                className="ih-land-jumbo-ctn"
              >
                <Grid 
                  container 
                  spacing={2}
                  className="ih-land-jumbo-grid"
                >
                  <Grid
                    item
                    md={7}
                    sm={12}
                  >
                    <Tilt
                      tiltMaxAngleX={2.5}
                      tiltMaxAngleY={2.5}
                    >
                      <Box
                        padding="30px"
                      >
                        <Box
                          bgcolor="#fffb"
                          padding="10px 10px"
                          borderRadius="10px"
                        >
                          <Typography
                            variant="h2"
                          >
                            Isaac Hormel
                          </Typography>
                          <Typography
                            variant="h5"
                          >
                            Fullstack developer specializing in nodeJS and related MERN technologies
                          </Typography>
                        </Box>
                      </Box>
                    </Tilt>
                  </Grid>
                </Grid>
              </Container>
            ),
            
          }
        ]}
        className="ih-land-jumbo"
      >
      </ParallaxBanner>

      <ParallaxBanner
        layers={[
          {
            opacity: [0, lgUpMediaQuery? 2 : 3],
            children: (
              <Container
                maxWidth={false}
                className={`ih-land-tech-ctn`}
              >
                <Grid 
                  container 
                  spacing={2}
                  className="ih-land-tech-grid"
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <Typography
                      variant="h4"
                      textAlign="center"
                    >
                      Full-Stack technologies I use
                    </Typography>
                  </Grid>
                  
                  <Grid
                    item
                    md={6}
                    sm={12}
                  >
                    <Tilt
                      tiltMaxAngleX={2.5}
                      tiltMaxAngleY={2.5}
                    >
                      <Box
                        className="ih-land-tech-xstack backend"
                      >
                        <Typography variant="h5" textAlign="center">Backend</Typography>
                        <Box
                          display={'flex'}
                          justifyContent="space-around"
                          alignItems="center"
                          flexWrap="wrap"
                          gap="10px"
                        >
                          <img src={back1} alt="" className="ih-land-tech-logos" />
                          <img src={back2} alt="" className="ih-land-tech-logos" />
                          <img src={back3} alt="" className="ih-land-tech-logos" />
                          <img src={back4} alt="" className="ih-land-tech-logos" />
                          <img src={back5} alt="" className="ih-land-tech-logos" />
                          <img src={back6} alt="" className="ih-land-tech-logos" />
                          <img src={back7} alt="" className="ih-land-tech-logos" />
                          <img src={back8} alt="" className="ih-land-tech-logos" />
                          <img src={back9} alt="" className="ih-land-tech-logos" />
                          <img src={back10} alt="" className="ih-land-tech-logos" />
                        </Box>
                      </Box>
                    </Tilt>
                  </Grid>

                  <Grid
                    item
                    md={6}
                    sm={12}
                  >
                    <Tilt
                      tiltMaxAngleX={2.5}
                      tiltMaxAngleY={2.5}
                    >
                      <Box
                        className="ih-land-tech-xstack frontend"
                      >
                        <Typography variant="h5" textAlign="center">Frontend</Typography>
                        <Box
                          display={'flex'}
                          justifyContent="space-around"
                          alignItems="center"
                          flexWrap="wrap"
                          gap="10px"
                        >
                          <img src={front1} alt="" className="ih-land-tech-logos" />
                          <img src={front2} alt="" className="ih-land-tech-logos" />
                          <img src={front3} alt="" className="ih-land-tech-logos" />
                          <img src={front4} alt="" className="ih-land-tech-logos" />
                          <img src={front5} alt="" className="ih-land-tech-logos" />
                          <img src={front6} alt="" className="ih-land-tech-logos" />
                          <img src={front7} alt="" className="ih-land-tech-logos" />
                          <img src={front8} alt="" className="ih-land-tech-logos" />
                          <img src={front9} alt="" className="ih-land-tech-logos" />
                          <img src={front10} alt="" className="ih-land-tech-logos" />
                          <img src={front11} alt="" className="ih-land-tech-logos" />
                        </Box>
                      </Box>
                    </Tilt>
                  </Grid>
                </Grid>
              </Container>
            ),
          }
        ]}
        className={`ih-land-tech ${xlUpMediaQuery? 'xl' : lgUpMediaQuery? 'lg' : mdUpMediaQuery? 'md' : smUpMediaQuery? 'sm' : 'xs'}`}
      >
      </ParallaxBanner>
      
      <ParallaxBanner
        layers={[
          { 
            image: designBackground,
            // style: {minHeight: '80vh'}
            speed: -10,
            // rotateX: [90, 0],
          },
          {
            children: (
              <Container
                maxWidth={false}
                className="ih-land-design-ctn"
              >
                <Grid
                  container
                  className="ih-land-design-grid"
                >
                  <Grid
                    item
                    md={12}
                    lg={6}
                  >
                    <Tilt
                      tiltMaxAngleX={2.5}
                      tiltMaxAngleY={2.5}
                    >
                      <Box
                        bgcolor="#fffb"
                        borderRadius="10px"
                        padding="10px"
                        my="10px"
                      >
                        <Typography
                          variant="h3"
                        >
                          Designs with{' '}
                          <span style={{display: 'inline-block'}}><img src={figmaLogo} style={{height: '60px'}} />igma</span>
                        </Typography>
                        <Typography
                          variant="h5"
                        >
                          Recieve rich designs for websites and apps. Collaborate, design, or brainstorm your ideas with me on any device. Request demos, mockups and illustrations from me at your leisure.
                        </Typography>
                      </Box>
                    </Tilt>
                    <Button
                      href='https://www.figma.com/proto/KbFGiHcPordv6VIYcsOMVA/Iremia'
                      target="_blank"
                      variant="contained"
                      size="large"
                    >
                      See a mockup that got me hired
                    </Button>
                  </Grid>
                </Grid>
                
              </Container>
            )
          }
        ]}
        className={`ih-land-design ${xlUpMediaQuery? 'xl' : lgUpMediaQuery? 'lg' : mdUpMediaQuery? 'md' : smUpMediaQuery? 'sm' : 'xs'}`}
      >
      </ParallaxBanner>

      <ParallaxBanner
        layers={[
          { 
            image: hobbiesBackground,
            style: {minHeight: '80vh'},
            speed: -10,
            // rotateX: [90, 0],
          },
          {
            children: (
              <Container
                maxWidth={false}
                className="ih-land-hobbies-ctn"
              >
                <Tilt
                  tiltMaxAngleX={2.5}
                  tiltMaxAngleY={2.5}
                  className="ih-land-hobbies-ctn"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <Box
                      bgcolor="#fffb"
                      borderRadius="10px"
                      padding="10px"
                      my="10px"
                      minWidth="60%"
                    >
                      <Typography
                        variant="h3"
                        textAlign="center"
                      >
                        Hobbies & future professions
                      </Typography>
                      <Grid
                        container
                      >
                        <Grid
                          item
                          sm={12}
                          md={6}
                        >
                          <List
                            dense
                          >
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby1} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Rust"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="Rust web and IOT projects"
                                secondaryTypographyProps={{variant: "h6"}}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby2} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Yew"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="Yew for frontend applications in Rust"
                                secondaryTypographyProps={{variant: "h6"}}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby3} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Microcontrollers"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="Microcontrollers like the ESP32 or anything made by ATMEL"
                                secondaryTypographyProps={{variant: "h6"}}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby4} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Cyber Security"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="Who is notorious hackerman 4chan?"
                                secondaryTypographyProps={{
                                  variant: "h6", 
                                  component: 'a', 
                                  href: "https://www.youtube.com/watch?v=qz5i171h_no", 
                                  style: {textDecoration: 'none'},
                                  target: '_blank'
                                }}
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid
                          item
                          sm={12}
                          md={6}
                        >
                          <List
                            dense
                          >
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby5} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="AI & Neural Networks"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="Designing, training, and learning about Neural Networks"
                                secondaryTypographyProps={{variant: "h6"}}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby6} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Linux"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="I love Linux, especially Ubuntu ;)"
                                secondaryTypographyProps={{variant: "h6"}}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon
                                className="ih-land-hobbies-icon-ctn"
                              >
                                <img src={hobby7} className="ih-land-hobbies-icon" />
                              </ListItemIcon>
                              <ListItemText
                                primary="Web3"
                                primaryTypographyProps={{variant: "h4"}}
                                secondary="Wouldn't it be cool to write services that can manage themselves that aren't controlled by tech oligarchs?"
                                secondaryTypographyProps={{variant: "h6"}}
                              />
                            </ListItem>
                            
                          </List>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Tilt>
              </Container>
            )
          }
        ]}
        className={`ih-land-hobbies ${xlUpMediaQuery? 'xl' : lgUpMediaQuery? 'lg' : mdUpMediaQuery? 'md' : smUpMediaQuery? 'sm' : 'xs'}`}
      >
      </ParallaxBanner>

      <Box
        color="#fff"
        bgcolor="#000"
        className="ih-land-foot"
      >
        <Container
          maxWidth={false}
          className="ih-land-foot-ctn"
        >
          <Grid
            container
            className="ih-land-foot-ctn"
          >
            <Grid
              item
              md={6}
            >
              <Typography variant="h5" fontWeight="bold" textAlign="center" marginTop="10px">Find me here</Typography>
              <List
                dense
              >
                <ListItem>
                  <ListItemIcon
                    className="ih-land-foot-icon-ctn"
                  >
                    <GitHubIcon 
                      color='inherit'
                      fontSize='inherit'
                      className="ih-land-foot-icon"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Github"
                    primaryTypographyProps={{
                      variant: "h4",
                      component: 'a',
                      href: 'https://github.com/rewrite123',
                      target: '_blank',
                      style: {textDecoration: 'none', color: '#fff'} 
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon
                    className="ih-land-foot-icon-ctn"
                  >
                    <LinkedInIcon 
                      color='inherit'
                      fontSize='inherit'
                      className="ih-land-foot-icon"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="LinkedIn"
                    primaryTypographyProps={{
                      variant: "h4",
                      component: 'a',
                      href: 'https://www.linkedin.com/in/isaac-hormel/',
                      target: '_blank',
                      style: {textDecoration: 'none', color: '#fff'} 
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              md={6}
              className="ih-land-foot-credits"
            >
              <Typography variant="h3">© Isaac Hormel</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </div>
  );
}
export default Landing;