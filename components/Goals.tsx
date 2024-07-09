import Image from "next/image";
import React from "react";
import goalsImg from "../public/goalsImg.jpg";
import students from "../public/IMG_0200.jpg";
import students2 from "../public/IMG_4877.jpg";
import students3 from "../public/IMG_4507.jpg";
import picture1 from "../public/picture1.jpg";
import picture4 from "../public/picture4.jpg";

const Goals = () => {
  return (
    <>
    
    <div className="bg-lesptit-header flex md:flex-row flex-col items-center rounded-2xl p-5">
      <Image src={picture4} alt="image" className="rounded-xl" width={350}/>
      <div className="p-4 text-pretty flex flex-col gap-8 text-white">
      <h1 className="text-center font-bold text-3xl text-white pt-5 md:pt-0">AMAÇLAR</h1>
      <p className="text-lg md:px-10">
      Les P’tits Dimanches’in kurulma amacı 11-48 ay arası erken çocukluk
             dönemini kapsayan dönemde çocukların gelişimlerini oyun ve coşku
             içinde desteklemek, akranları ile sosyalleşmesini sağlamak, oyun
             temelli bir öğrenme sunmak, çocukların kendi kendilerine yapma
             motivasyonunu desteklemektir. En önemli amacımız ise çocuklara en
            iyi öğrenme ortamlarını mutluluk ve sevgi ile yaratmaktır.
      </p>
      </div>
    </div>
    </>




    // <div className="w-full bg-lesptit-primary md:flex justify-center items-center">
    //   <div className="w-full md:w-1/2 flex flex-col">
    //       <h1 className="text-center text-4xl md:text-3xl text-sky-500 pt-8">AMAÇLAR</h1>
    //       <div className="flex justify-center p-8 leading-9 text-xl tracking-wide ">
    //         Les P’tits Dimanches’in kurulma amacı 11-48 ay arası erken çocukluk
    //         dönemini kapsayan dönemde çocukların gelişimlerini oyun ve coşku
    //         içinde desteklemek, akranları ile sosyalleşmesini sağlamak, oyun
    //         temelli bir öğrenme sunmak, çocukların kendi kendilerine yapma
    //         motivasyonunu desteklemektir. En önemli amacımız ise çocuklara en
    //         iyi öğrenme ortamlarını mutluluk ve sevgi ile yaratmaktır.
    //       </div>
    //   </div>
    //   <div className="w-full md:w-1/2 md:p-14 md:justify-center flex justify-center">
    //     <Image height={500} src={students} alt="image" />
    //   </div>
    // </div>
  );
};

export default Goals;
