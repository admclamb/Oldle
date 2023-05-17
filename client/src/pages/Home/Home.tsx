import React, { useEffect, useState } from "react";
import Image from "../../components/Image/Image";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import Layout from "../../Layout/Layout";
import TimelineInput from "../../components/Input/TimelineInput/TimelineInput";
import { DayApi } from "../../api/DayApi";
import dayjs from "dayjs";
import { Day } from "../../ts/types/Day";
import DayQuiz from "../../components/Day/DayQuiz/DayQuiz";
import DayResults from "../../components/Day/DayResults/DayResults";
type Props = {};

const Home = (props: Props) => {
  const [day, setDay] = useState<Day | null>(null);
  const todaysDate = dayjs(new Date()).format("YYYY-MM-DD");
  const [isOver, setIsOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<string[]>([]);
  console.log(todaysDate);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await DayApi.getInstance().readDay(todaysDate);
        setDay(response);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(day);
  return (
    <Layout mainClass="bg-slate-900 text-white">
      <div className="container mx-auto sm:pt-4 max-w-2xl flex flex-col gap-4">
        {isLoading ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : !isOver ? (
          <DayQuiz
            day={day}
            isOver={isOver}
            setIsOver={setIsOver}
            attempts={attempts}
            setAttempts={setAttempts}
          />
        ) : (
          <DayResults day={day} attempts={attempts} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
