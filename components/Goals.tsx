import Image from "next/image";
import React from "react";
import picture4 from "../public/picture4.jpg";
import amaclar from "../public/amaclar.jpg";

const Goals = () => {
  return (
    <>
    
    <div className="bg-lesptit-header  flex md:flex-row flex-col items-center rounded-2xl p-5">
      <Image src={amaclar} alt="image" className="rounded-xl" width={350}/>
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
  );
};

export default Goals;
