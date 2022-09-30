import { Section } from "./elements/Section";

export function Banner({ content }) {
  return (
    <Section className="bg-yellow-300 align-center py-4 text-center" heading={content.title} />
  );
}
