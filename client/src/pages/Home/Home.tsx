import React, { useState } from 'react';
import Image from '../../components/Image/Image';
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper';
import Layout from '../../Layout/Layout';
import image from '../../assets/10_most_famous_photos_of_all_time.jpg';
import TimelineInput from '../../components/Input/TimelineInput/TimelineInput';
type Props = {};

const Home = (props: Props) => {
  const [inputTime, setInputTime] = useState<string>('1923');
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <div className="container mx-auto pt-4 ">
        <ImageWrapper>
          <Image url={image} description="old photo" />
        </ImageWrapper>
        <div className="flex justify-center p-2">
          <p className="py-1 px-2 bg-slate-600 rounded">1</p>
        </div>
        <div className="py-2">
          <TimelineInput value={inputTime} setValue={setInputTime} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
