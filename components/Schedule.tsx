import React from "react";
import Image from "next/image";
import picture11 from "../public/picture11.jpg";


const Schedule = () => {
  return (
    <div className="bg-[#8BB8E8] flex md:flex-row flex-col-reverse items-center rounded-2xl p-5">
      <div className="p-4 text-pretty flex flex-col gap-8 text-white">
      <h1 className="text-center font-bold text-3xl text-white pt-5 md:pt-0">PROGRAMIMIZ</h1>
      <p className="md:px-10 text-lg">
      Eğitim programımızı uzmanımız ve kurucumuz Seda Küce tarafından
          planlanmaktadır. Çocuklarımızın mutlulukla ve sevgi ile alanımıza
          gelmesi çok önemlidir. Küçük yaş grupları ile olduğumuz için çok
          öğretmen ve az öğrenci anlayışımız ile çocukların bireysel
          ihtiyaçlarını da hızlıca desteklemek bizler için önemlidir. Bizim için
          öncelik her zaman çocuk ve eğitimdir. Çocukların gelişim basamakları
          ön plana alarak, farklı uyaranlar çocuklara sunularak bilişsel,
          sosyal- duygusal, fiziksel gelişim ve dil gelişimlerini destekleyen
          eklektik bir program uygulanmaktadır. Programımız İngilizce ve Türkçe
          ağırlıklı bir program olarak ilerlemektedir.
      </p>
      </div>
      <Image src={picture11} alt="image" className="rounded-xl" width={350}/>
      
    </div>
  );
};

export default Schedule;
