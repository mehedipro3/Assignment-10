import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = () => {
  return (
    <div className="w-full h-[400px] bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full bg-blue-500 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">Simplify Your Visa Process</h2>
            <p className="mt-4">Easy, fast, and reliable visa applications.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-green-500 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">Track Applications Effortlessly</h2>
            <p className="mt-4">Stay updated with real-time tracking.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-full bg-indigo-500 flex flex-col justify-center items-center text-white">
            <h2 className="text-3xl font-bold">Apply Online in Minutes</h2>
            <p className="mt-4">Streamlined processes for everyone.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
