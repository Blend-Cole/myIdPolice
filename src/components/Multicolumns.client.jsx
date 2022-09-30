import { Image } from "@shopify/hydrogen";
import { Section } from "./elements/Section";

const Multicolumn = ({ content }) => {
  const blocks = content.blocks.map((block, index) => {
    return (
      <div key={index} className="grid gap-4">
        <Image
          style={{ margin: "auto", width: '100%' }}
          src={block.url}
          alt="1"
          height={block.height}
          width={block.width}
        />
        {block.text && <div className="text-base">{block.text}</div>}
      </div>
    );
  });

  //TODO: Why doesn't this work? className={`text-center grid grid-cols-${content.blocks.length}`}

  return (
    <Section className={content.css} heading={content.title}>
      <div className="text-center max-w-screen-md mx-auto">
        <div className={`text-center grid gap-4 md:grid-cols-${content.blocks.length}`}>
          {blocks}
        </div>
      </div>
    </Section>
  );
};

export default Multicolumn;
