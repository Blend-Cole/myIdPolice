import { YoutubeEmbed } from "./YoutubeEmbed";
import { SlideShow } from "./SlideShow.client";
import { Section } from "./elements/Section";

export function HomepageBanner({ content }) {
  const {
    heading,
    price,
    subPrice,
    bannerMessage,
    subBannerMessage,
    slideshowImages,
    videoUrl,
  } = content;

  return (
    <Section className="text-center max-w-screen-md mx-auto">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-2 grid-rows-2">
        <SlideShow classes="lg:row-span-2" imageList={slideshowImages} />
        <YoutubeEmbed embedId={videoUrl} />
        <div className="lg:col-start-2">
          <div className="text-lg">{heading}</div>
          <p className="text-xxl">{price}</p>
          <div className="text-lg">{subPrice}</div>
          <div className="bg-yellow-300 text-xl p-4">{bannerMessage}</div>
          <div className="text-sm">{subBannerMessage}</div>
          <button className="bg-red hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full">
            ORDER
          </button>
        </div>
      </div>
    </Section>
  );
}
