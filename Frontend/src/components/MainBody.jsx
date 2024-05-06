import { useEffect, useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

function MainBody() {
  let arr = [
    "/mainBody/img1.avif",
    "/mainBody/img2.avif",
    "/mainBody/img3.avif",
    "/mainBody/img4.avif",
  ];
  let topBrand = [
    "/topBrands/top1.avif",
    "/topBrands/top2.avif",
    "/topBrands/top3.avif",
    "/topBrands/top4.avif",
    "/topBrands/top5.avif",
    "/topBrands/top6.avif",
  ];
  let [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevSlide) => (prevSlide + 1) % arr.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  };
  
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };
  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, [arr.length]);
  const previousBtn = () => {
    setCurrentIndex((prevSlide) => (prevSlide - 1 + arr.length) % arr.length);
    stopTimer(); // Stop timer when manually changing slide
  };
  const nextBtn = () => {
    setCurrentIndex((prevSlide) => (prevSlide + 1) % arr.length);
    stopTimer(); // Stop timer when manually changing slide
  };
  return (
    <div>
      <div className="bg-slate-300 text-center my-4 py-6">
        <p>
          <MdLocationOn className="inline mr-2 text-2xl cursor-pointer" /> We're
          evolving. SkinStore is becoming Dermstore, continue your skin health
          journey with the premier skin care authority.
        </p>
      </div>

      <div className="w-[90%] mx-auto relative -z-8">
        <button onClick={previousBtn}>
          <GrPrevious className="absolute left-1 top-[50%] bg-slate-200 w-10 h-12" />
        </button>
        <img src={`${arr[currentIndex]}`} alt="img" />
        <button onClick={nextBtn}>
          <GrNext className="absolute right-1 top-[50%] bg-slate-200 w-10 h-12" />
        </button>
      </div>
      {/* <button onClick={previousBtn}>hello</button> */}

      <p className="text-center text-2xl my-10">Shop by Top Brands</p>
      <div className="grid grid-cols-6 justify-between mb-20">
        {topBrand.map(ele=>{
          return (<>
            <img src={`${ele}`} alt="top brand images" />
          </>)
        })}
      </div>
      <div className="w-[90%] mx-auto text-center">
        <Link to="#"><img src="/mainBody/dermstore.avif" alt="dermstore" /></Link>
        <p className="text-xl font-bold my-5">Almost Gone</p>
        <p>SkinStore is becoming Dermstore, and that means saying goodbye to some of our favorites.</p>
      </div>
    </div>
  );
}

export default MainBody;
