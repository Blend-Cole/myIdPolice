import { Section } from "./elements/Section";

export function DescriptionBanner({ content }) {

  const blocks = content.blocks.map((block, index) => {
    return (
      <div key={index} className="grid gap-4">
        {block.title && <h3 className="text-lg m-8">{block.title}</h3>}
        {block.text && <div className="text-base mb-4">{block.text}</div>}
      </div>
    );
  });

  return (
    <Section className={content.css} heading={content.title} style={{backgroundImage: "url('https://mojonow.blob.core.windows.net/cmr/t7478/src/626e57da64c342e6a5dc6300b56bc3dc_1.jpg'"}}>
      <div className="text-center max-w-screen-md mx-auto">
        <div
          className="text-center grid gap4 bg-opacity-60 bg-black p-10"
        >
          {blocks}
        </div>
      </div>
    </Section>
  );
}
