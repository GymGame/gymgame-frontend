import React from 'react';
import { Container } from '@mui/material';
import Title from '../../../components/Title';
import GetBigPaper from './GetBigPaper';
const HowDoIGetBigSection = () => {
  return (
    <Container
      sx={{
        //
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Title variant="h2" textPartOne="How do I" textPartTwo="get big?" />
      <GetBigPaper
        image="get-big1"
        altText="GetBigImage1"
        title="BUY $GAINS"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet"
      />
      <GetBigPaper
        image="get-big2"
        altText="GetBigImage2"
        title="GROW YOUR GYM JUNKIE"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet"
      />
      <GetBigPaper
        image="get-big3"
        altText="GetBigImage3"
        title="TRAIN AND EARN"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet"
      />
    </Container>
  );
};

export default HowDoIGetBigSection;
