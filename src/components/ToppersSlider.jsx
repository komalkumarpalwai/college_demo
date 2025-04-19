import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ToppersSlider = () => {
  const toppers = [
    {
      name: "Rahul Sharma",
      rank: "AIR 12",
      exam: "NEET 2023",
      image: "/toppers/neet1.jpg",
      quote: "Hidayah's faculty guided me to achieve my medical dreams"
    },
    {
      name: "Priya Reddy",
      rank: "97.8%",
      exam: "IPE 2023",
      image: "/toppers/board1.jpg",
      quote: "Best learning environment for intermediate studies"
    },
    {
      name: "Arjun Mehta",
      rank: "AIR 28",
      exam: "JEE Advanced 2023",
      image: "/toppers/jee1.jpg",
      quote: "Excellent coaching for engineering aspirants"
    },
    {
        name: "Rahul Sharma",
        rank: "AIR 12",
        exam: "NEET 2023",
        image: "/toppers/neet1.jpg",
        quote: "Hidayah's faculty guided me to achieve my medical dreams"
      },
      {
        name: "Priya Reddy",
        rank: "97.8%",
        exam: "IPE 2023",
        image: "/toppers/board1.jpg",
        quote: "Best learning environment for intermediate studies"
      },
      {
        name: "Arjun Mehta",
        rank: "AIR 28",
        exam: "JEE Advanced 2023",
        image: "/toppers/jee1.jpg",
        quote: "Excellent coaching for engineering aspirants"
      },
    // Add more toppers
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Our Star Performers
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]} // Removed Navigation here
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }} // Keep pagination for navigation dots
          className="pb-12"
        >
          {toppers.map((topper, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                whileHover={{ y: -10 }} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-60">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                    <h3 className="text-xl font-bold text-white">
                      {topper.name}
                    </h3>
                    <p className="text-yellow-400 font-semibold">
                      {topper.rank} • {topper.exam}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic">
                    "{topper.quote}"
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default ToppersSlider;
