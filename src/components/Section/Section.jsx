import { SectionBox } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <h1>{title}</h1>
      {children}
    </SectionBox>
  );
};
export default Section;
