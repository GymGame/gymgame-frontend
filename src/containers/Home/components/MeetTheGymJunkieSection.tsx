import React from 'react';
import { Box, IconButton, Button, Container, Paper, Typography } from '@mui/material';
import CarouselBackgroundSvg from '../../../assets/svgs/carouselBg.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Title from '../../../components/Title';
import JunkieSliderContent from './JunkieSliderContent';

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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          sx={{
            height: '3.5rem',
            width: '3.5rem',
            mr: '1rem',
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
          className="swiper-button-prev"
        >
          <ArrowBackIosNewIcon sx={{ color: (theme) => theme.palette.text.primary }} fontSize="small" />
        </IconButton>
        <Paper
          sx={{
            background: `url(${CarouselBackgroundSvg}) no-repeat center/cover`,
            height: '34rem',
            width: '55rem',
          }}
        >
          <Swiper //
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            style={{
              padding: '2.3rem 1.3rem 2.3rem 2.3rem',
              height: '100%',
              display: 'flex',
            }}
          >
            <SwiperSlide
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'start',
                cursor: 'grab',
              }}
            >
              <JunkieSliderContent //
                title="#1000"
                skin="Light"
                hat="Blah"
                eyes="Blah"
                shirt="Blah"
                strength="94"
                endurance="40"
                agility="88"
                weight="110kg / 242 lbs"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'start',
                cursor: 'grab',
              }}
            >
              <JunkieSliderContent //
                title="#2000"
                skin="Light"
                hat="Blah"
                eyes="Blah"
                shirt="Blah"
                strength="94"
                endurance="40"
                agility="88"
                weight="110kg / 242 lbs"
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'start',
                cursor: 'grab',
              }}
            >
              <JunkieSliderContent //
                title="#3000"
                skin="Light"
                hat="Blah"
                eyes="Blah"
                shirt="Blah"
                strength="94"
                endurance="40"
                agility="88"
                weight="110kg / 242 lbs"
              />
            </SwiperSlide>
          </Swiper>
        </Paper>
        <IconButton
          sx={{
            height: '3.5rem',
            width: '3.5rem',
            ml: '1rem',
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
          className="swiper-button-next"
        >
          <ArrowForwardIosIcon sx={{ color: (theme) => theme.palette.text.primary }} fontSize="small" />
        </IconButton>
      </Box>
      <Button sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
        Mint Gym Junkie <ArrowForwardIcon sx={{ marginLeft: '.5rem' }} />
      </Button>
    </Container>
  );
};

export default MeetTheGymJunkieSection;
