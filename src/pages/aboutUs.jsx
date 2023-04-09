import ButtonAboutUs from "../components/buttons/buttonAboutUs";
import SectionBanner from "./aboutus_section/section_banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useLayoutEffect, useState } from "react";

const AboutUs = () => {
    const init = Array(5).fill({
        name: "Dortha",
        job_type: "Specialist",
        detail: "Recusandae magnam ut cupiditate.",
    });
    const [cheefInfo, setCheefInfo] = useState(init);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <div className="text-white">
            <SectionBanner />
            <div className="lg:h-[467px]">
                <h1 className="lg:pt-[100px] text-center lg:text-4xl lg:font-medium">
                    Our Story
                </h1>
                <p className="lg:max-w-[920px] lg:mx-auto text-center lg:mt-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolores ad dolorum assumenda atque! Cum, laborum ipsum quo
                    cumque similique inventore modi quasi expedita omnis quis
                    eveniet adipisci maxime nulla? Voluptates? Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Dolores ad dolorum
                    assumenda atque! Cum, laborum ipsum quo cumque similique
                    inventore modi quasi expedita omnis quis eveniet adipisci
                    maxime nulla? Voluptates?
                </p>
                <div className="lg:mt-[76px] lg:w-full flex justify-center">
                    <ButtonAboutUs>Read More</ButtonAboutUs>
                </div>
            </div>
            <div className="lg:mb-[90px] lg:h-[418px] lg:max-w-[1100px] mx-auto flex lg:gap-[42px]">
                <div className="lg:h-full lg:w-[418px] flex flex-wrap justify-between items-center">
                    {Array(4)
                        .fill(null)
                        .map((el, index) => {
                            return (
                                <div
                                    key={`each-image-why-choose-us-${index}`}
                                    className="lg:w-[200px] lg:h-[200px] border-2 overflow-hidden"
                                >
                                    <img
                                        className="h-full w-full object-cover aspect-square"
                                        src="http://placeimg.com/640/480"
                                        alt={`each-choose-us-image-${index}`}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div>
                    <h1 className="m-0 p-0 lg:font-medium lg:text-4xl">
                        Why Choose Us
                    </h1>
                    <p className="lg:w-[650px] lg:mt-[22px] lg:mb-[90px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto porro impedit iusto blanditiis, vel maiores
                        illum sequi atque nam veritatis labore quibusdam ipsam
                        velit quis. Perspiciatis incidunt consectetur ratione
                        cupiditate. Quis magnam, earum quaerat repellendus, quas
                        sequi rerum assumenda vel tempore, vitae necessitatibus
                        explicabo magni nisi! Eius quis iste amet fuga ratione
                        ut nostrum esse, praesentium, quaerat qui eaque modi.
                        Quas dignissimos minus nam dolore modi, quasi voluptatum
                        saepe accusantium in, iure iste, aliquam distinctio ex.
                        Sit optio earum doloribus eaque natus in quo maxime
                        commodi? Assumenda libero provident molestiae?
                    </p>
                    <ButtonAboutUs>ORDER NOW</ButtonAboutUs>
                </div>
            </div>
            <div className="lg:max-w-[1100px] lg:mx-auto  lg:h-[538px]">
                <h1 className="text-4xl ">Our Cheefs & Staff</h1>
                <Swiper
                    initialSlide={(cheefInfo.length + 1) / 2 - 1}
                    effect={"coverflow"}
                    grabCursor={'true'}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 2.5,
                    }}
                    modules={[EffectCoverflow]}
                    className="h-[370px]  mt-[47px] "
                >
                    {cheefInfo.length > 0
                        ? cheefInfo.map((el, index) => {
                              return (
                                  <SwiperSlide
                                      className=" w-[300px] mx-4"
                                      key={`cheef-hero-section-${index}`}
                                  >
                                      <div className="w-full h-full bg-red-500 flex flex-col items-center text-center justify-evenly p-4">
                                          <div className="h-[100px] overflow-hidden w-[100px] rounded-full bg-white">
                                              <img
                                                  className="w-full h-full aspect-square "
                                                  src="http://placeimg.com/640/480"
                                                  alt={`image-cheef-${index}`}
                                              />
                                          </div>
                                          <div>
                                              {el.name + " " + (index + 1)}
                                          </div>
                                          <div>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit. Quo
                                              voluptatem natus autem.
                                              Repudiandae minima, delectus quod
                                              similique est
                                          </div>
                                      </div>
                                  </SwiperSlide>
                              );
                          })
                        : null}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutUs;
