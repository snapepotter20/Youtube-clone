import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon/>
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
       image="/Images/avatar4.png"
       channel="Clever Programmer"
       verified
       subs="659K"
       noOfVideos={166}
       description="You can find awesome programming here on this channel.Also expect tips and trciks to boost your programming skills."

      />

      <hr/>

      <VideoRow
      views="112K views"
      subs='456K'
      description='Do you want a free online course'
      timestamp="6 days ago"
      channel="Ray"
      title="Video editing by AI"
      image="/Images/channelimage10.jpg"/>
      <VideoRow
      views="452K views"
      subs='2.3M'
      description='Do you want a free online course'
      timestamp="2 days ago"
      channel="Lakshay Chaudhary"
      title="Instagram influencers"
      image="/Images/channelimage9.jpg"/>
      <VideoRow
      views="864K views"
      subs='4.69M'
      description='Do you want a free online course'
      timestamp="1 days ago"
      channel="Thugesh"
      title="The Thugesh Show"
      image="/Images/channelimage8.jpg"/>
      <VideoRow
      views="162K views"
      subs='2.3M'
      description='Do you want a free online course'
      timestamp="6 hrs ago"
      channel="Abhi and Niyu"
      title="Indian economy on boom"
      image="/Images/channelimage7.jpg"/>
      <VideoRow
      views="1M views"
      subs='756K'
      description='Boss ke saath pangaa ho gaya yaar.Aab kya karu ?'
      timestamp="8 months ago"
      channel="Akshay Shrivatsav"
      title="Me and my Boss"
      image="/Images/channelimage1.jpg"/>
      <VideoRow
      views="224K views"
      subs='168K'
      description='Harsh truth of kota which is ruining students lives.'
      timestamp="4 days ago"
      channel="TooHarsh"
      title="Kota Reality"
      image="/Images/channelimage10.jpg"/>
      <VideoRow
      views="382K views"
      subs='561K'
      description='Aaj to maid ke saath pangaa ho gaya.Naya maid dhundna padega'
      timestamp="6 days ago"
      channel="Lakshay Chaudhary Vlogs"
      title="Pangaa with maid"
      image="/Images/channelimage9.jpg"/>
    </div>
  );
}

export default SearchPage
