"use client"
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import picture6 from "../public/picture6.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/20/solid";
import side from "../public/side.jpg";

const Hours = () => {
  const router = useRouter();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleButtonClick = () => {
    router.push('/saatler')
  }

  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <div className="bg-[#77DD77] flex md:flex-row flex-col items-center rounded-2xl p-5">
      <Image src={side} alt="image" className="rounded-xl" width={350}/>
      <div className="p-4 text-pretty flex flex-col gap-8 text-white">
        <h1 className="text-center font-bold text-3xl text-white pt-5 md:pt-0">
          SAATLER VE GRUPLAR
        </h1>
        <p className="text-lg md:px-10">
          Okul algısının ve ilk deneyimlerinin olduğu bu dönemde çocukların
          alanımıza severek gelmesi çok önemlidir. Farklı ay aralıklarındaki
          öğrencilerimizin İlgi ve dikkat süreleri de göz önünde bulundurularak
          program gün ve saatlerimiz düzenlenmektedir. Programlarımız haftanın
          Salı, Çarşamba, Perşembe günleri yıllık bir plan üzerinden aylara ve
          haftalara ayrılmış temalar ile ilerlemektedir.
        </p>
        <div className="text-center">
          <button className="rounded-2xl border p-3 uppercase hover:text-[#77DD77] hover:bg-white hover:scale-105" onClick={open}>
            Detaylari Inceleyin
          </button>
        </div>

        
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={close}>
            <Transition.Child  
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black/25"></div>
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child 
                 as={Fragment}
                 enter="ease-out duration-300"
                 enterFrom="opacity-0 scale-95"
                 enterTo="opacity-100 scale-100"
                 leave="ease-in duration-200"
                 leaveFrom="opacity-100 scale-100"
                 leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900"></Dialog.Title>
                    <div className="">
                    <div className="flex flex-col justify-center items-center">
        <div className="md:w-full max-w-md px-2 py-8 sm:px-0 mx-auto rounded-2xl bg-[#77DD77] bg-opacity-60 p-2 ">
        
        <XMarkIcon className="h-6 w-6 text-black-500 hover:cursor-pointer mx-2 mb-4" onClick={close} />
        
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-[#77DD77] bg-opacity-60 p-1 m-1">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-[#77DD77] focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-black shadow"
                      : "text-white hover:bg-[#77DD77] hover:text-white"
                  )
                }
              >
                12-23 AY DÖNEMLİK GRUPLAR
              </Tab>

              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-[#77DD77] focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-black shadow"
                      : "text-white hover:bg-[#77DD77] hover:text-white"
                  )
                }
              >
                24-36 AY DÖNEMLİK GRUPLAR
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2 p-3">
              <Tab.Panel>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Grup 1: Baby Group</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Salı – Perşembe
                        <br />
                        09.20-10.00
                        <br />
                        Başlangıç: 10 Eylül 2024
                        <br />
                        Bitiş: 26 Haziran 2025
                        <br />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Grup 2: Baby Group</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black">
                        Çarşamba
                        <br />
                        09.20-10.00
                        <br />
                        Başlangıç: 11 Eylül 2024
                        <br />
                        Bitiş: 26 Haziran 2025
                        <br />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Program</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Duyusal oyun, Psikomotor gelişimi destekleyen
                        etkinlikler, sanat etkinliği ve müzik etkinliğinden
                        oluşan programımız iki öğretmen eşliğinde yapılmaktadır.
                        Programa aylık kayıt yapılmaktadır.
                        <br />
                        Eğitim programımız erken çocukluk döneminde gelişim
                        basamakları ve oyun temelli öğrenme programlarının
                        birleşiminden oluşmaktadır. Bizler için en önemlisi
                        çocuklarımıza sağlıklı, güvenli ve mutlu bir ortamda
                        öğrenme yollarını sunmaktır.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>
                          Neden Dönemlik Oyun Gruplarına Katılmalıyım?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Erken çocukluk döneminde rutinler çok önemlidir.
                        <br /> <br />
                        Çocukların arkadaşlık kavramlarının gelişebilmesi için
                        aynı arkadaşları ile devam edebilmesi gelişimini ve
                        aidiyet duygusunu olumlu etkilemektedir.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Telafi</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Dönemlik programlarda 2 adet telafi hakkı bulunmaktadır.
                        Telafi kullanım hakkı her 4 hafta için maksimum 1
                        adettir. Hastalık dışında yapılan devamsızlıkların
                        telafisi yapılmamaktadır. Hastalık nedeniyle katılamayan
                        öğrencilerimizin 1 gün öncesinden bizlere
                        katılamayacağını bildirmesi gerekmektedir.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Detaylar</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Programa katılım ebeveynlidir. Oyunlara katılımda alanda
                        etkinliğe bir ebeveyn eşlik edebilmektedir.
                        <br />
                        Ödemeler aylık olarak yapılmakta olup, her öğrenciye
                        kontenjan ayrıldığından gelecek olan öğrencinin hakkını
                        almamak adına aylık kayıt yenileme durumunu 10 gün
                        önceden bildirilmesi gerekmektedir.
                        <br />
                        Ödemeler her ayın 1-5 arasında alınmaktadır.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Tab.Panel>
              <Tab.Panel>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Grup 3: Okul Öncesi İngilizce Grup</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-black-500">
                        Salı - Çarşamba – Perşembe
                        <br />
                        10.30-12.30
                        <br />
                        Başlangıç: 3 Eylül 2024
                        <br />
                        Bitiş: 26 Haziran 2025
                        <br />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Grup 4: Okul Öncesi İngilizce Grup</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Salı - Perşembe
                        <br />
                        15.00-16.30
                        <br />
                        Başlangıç: 3 Eylül 2024
                        <br />
                        Bitiş: 26 Haziran 2025
                        <br />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>



                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Program</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                      Okul öncesi eğitim programı ve müfredata uygun olarak yıllık bir plan 
üzerinden aylara ve haftalara ayrılmış temalardan oluşan programımızın 90 
dakikası İngilizce 30 dakikası Türkçe olarak 2 öğretmen eşliğinde işlenecektir.
 Eğitim programımız erken çocukluk döneminde gelişim basamakları ve oyun 
temelli öğrenme programlarının birleşiminden oluşmaktadır. Bizler için en 
önemlisi çocuklarımıza sağlıklı, güvenli ve mutlu bir ortamda öğrenme yollarını 
sunmaktır.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>
                          Neden Dönemlik Oyun Gruplarına Katılmalıyım?
                        </span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                        Erken çocukluk döneminde rutinler çok önemlidir.
                        <br /> <br />
                        Çocukların arkadaşlık kavramlarının gelişebilmesi için
                        aynı arkadaşları ile devam edebilmesi gelişimini ve
                        aidiyet duygusunu olumlu etkilemektedir.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              

                <Disclosure as="div" className="mt-2">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium hover:bg-green-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                        <span>Detaylar</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-[#77DD77]`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                      Programa katılım ebeveynsizdir. Öğrencimizin ihtiyaç duyduğu süre boyunca 
oryantasyonunu tamamlayana kadar bir ebeveyn eşlik edebilmektedir.<br/>
 Ödemeler aylık olarak yapılmakta olup, her öğrenciye kontenjan ayrıldığından 
gelecek olan öğrencinin hakkını almamak adına aylık kayıt yenileme durumunu 
10 gün önceden bildirilmesi gerekmektedir.<br/>
 Ödemeler her ayın 1-5 arasında alınmaktadır.

                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
                    </div>
                  </Dialog.Panel>
                 </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Hours;
