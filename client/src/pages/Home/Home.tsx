import React from 'react';
import Image from '../../components/Image/Image';
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper';
import Layout from '../../Layout/Layout';
import image from '../../assets/10_most_famous_photos_of_all_time.jpg';
type Props = {};

const Home = (props: Props) => {
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <div className="container mx-auto pt-4">
        <ImageWrapper>
          <Image url={image} description="old photo" />
        </ImageWrapper>
      </div>
    </Layout>
  );
};

export default Home;
