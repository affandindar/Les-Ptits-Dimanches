import React from 'react'

const Founder = () => {
  return (
    <section className="bg-gradient-to-r from-purple-400 to-blue-300 py-12 rounded-2xl">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white">Kurucumuz</h2>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="/sedaKuce.jpg"
          alt="Kurucumuz Seda"
          className="rounded-full shadow-lg w-48 h-48 object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left">
        <p className="text-lg text-white leading-relaxed mb-4">
          Sizi Les P'tits Dimanches’in kurucusu Seda ile tanıştırmak istiyoruz.
        </p>
        <p className="text-lg text-white leading-relaxed mb-4">
          Her zaman çocuklarla bir arada olmanın mutluluğu ile yolculuğuma küçük yaşlarda öğretmen olmanın hayali ile başladım. Bu yolculukta eğitimimi çocuk gelişimi ve eğitimi programları bölümü ile başlayıp Okul Öncesi Eğitim Öğretmenliği ile lisansa tamamladım. 8 yıl özel kurumlarda okul öncesi öğretmeni olarak görev aldıktan sonra Yıldız Teknik Üniversitesi Eğitim Yönetimi alanında Yüksek lisansımı tamamladım.
        </p>
        <p className="text-lg text-white leading-relaxed">
          Ve şimdi çocukların gelişim alanlarını destekleyen, eğlenerek öğrenmelerini hedefleyen sosyal ve duygusal çalışmalarımızla öğreteceklerimiz ve öğreneceklerimizle sizlerle bir araya gelmek için sabırsızlanıyoruz...
        </p>
      </div>
    </div>
  </div>
</section>



  )
}

export default Founder