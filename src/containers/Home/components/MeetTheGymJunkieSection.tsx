import React from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import CarouselBackgroundSvg from '../../../assets/svgs/carouselBg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import Image from '../../../components/Image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Title from '../../../components/Title';

const MeetTheGymJunkieSection = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '12rem',
      }}
      maxWidth="md"
    >
      <Box sx={{ marginBottom: '4rem' }}>
        <Title variant="h2" textPartOne="Meet the" textPartTwo="Gym Junkies" />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Box>
      <Paper
        sx={{
          background: `url(${CarouselBackgroundSvg}) no-repeat center/cover`,
          height: '34rem',
          width: '55rem',
        }}
      >
        <Swiper //
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          style={{
            padding: '2.3rem',
            height: '100%',
            display: 'flex',
          }}
        >
          <SwiperSlide
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              styles={{
                width: '70%',
                height: 'auto',
              }}
              imageName="hero-icon"
              altText="Hero Icon Image"
            />
            <Box>
              <Typography variant="h3">#1000</Typography>
              <Typography variant="body1">Skin: Light</Typography>
              <Typography variant="body1">Hat: Blah</Typography>
              <Typography variant="body1">Eyes: Blah</Typography>
              <Typography variant="body1">Shirt: Blah</Typography>
              <br />
              <Typography variant="body1">Strength: 94</Typography>
              <Typography variant="body1">Endurance: 40</Typography>
              <Typography variant="body1">Agility: 88</Typography>
              <Typography variant="body1">Weight: 110kg / 242 lbs</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              styles={{
                width: '70%',
                height: 'auto',
              }}
              imageName="hero-icon"
              altText="Hero Icon Image"
            />
            <Box>
              <Typography variant="h3">#2000</Typography>
              <Typography variant="body1">Skin: Light</Typography>
              <Typography variant="body1">Hat: Blah</Typography>
              <Typography variant="body1">Eyes: Blah</Typography>
              <Typography variant="body1">Shirt: Blah</Typography>
              <br />
              <Typography variant="body1">Strength: 94</Typography>
              <Typography variant="body1">Endurance: 40</Typography>
              <Typography variant="body1">Agility: 88</Typography>
              <Typography variant="body1">Weight: 110kg / 242 lbs</Typography>
            </Box>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              styles={{
                width: '70%',
                height: 'auto',
              }}
              imageName="hero-icon"
              altText="Hero Icon Image"
            />
            <Box>
              <Typography variant="h3">#3000</Typography>
              <Typography variant="body1">Skin: Light</Typography>
              <Typography variant="body1">Hat: Blah</Typography>
              <Typography variant="body1">Eyes: Blah</Typography>
              <Typography variant="body1">Shirt: Blah</Typography>
              <br />
              <Typography variant="body1">Strength: 94</Typography>
              <Typography variant="body1">Endurance: 40</Typography>
              <Typography variant="body1">Agility: 88</Typography>
              <Typography variant="body1">Weight: 110kg / 242 lbs</Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Paper>
      <Button sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
        Mint Gym Junkie <ArrowForwardIcon sx={{ marginLeft: '.5rem' }} />
      </Button>
    </Container>
  );
};

export default MeetTheGymJunkieSection;
