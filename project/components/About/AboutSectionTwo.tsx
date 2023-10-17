import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
  <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
    <div className="mb-9">
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Reporting Drug Cases?
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        You can anonymously report drug usage and sale on our reporting section with or without evidence. 
      </p>
    </div>
    <div className="mb-9">
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Reporting Incentives
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        Our platform incentivizes reporting through the awarding of cryptocurrencies or vouchers.
      </p>
    </div>
    <div className="mb-1">
      <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Seeking Recovery
      </h3>
      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
        If you are a drug addict seeking recovery, you can register on our platform and receive a unique ID.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
