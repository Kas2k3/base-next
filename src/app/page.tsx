import ContentEvent from "@/components/content/content.event";
import ContentIntroduce from "@/components/content/content.introduce";
import ContentNews from "@/components/content/content.news";
import ContentService from "@/components/content/content.service";
import ContentSlider from "@/components/content/content.slider";
import { Container } from "@mui/material";

export default async function HomePage() {
  return (
    <Container disableGutters maxWidth={false}>
      <ContentSlider />
      <Container>
        <ContentIntroduce />
      </Container>
      <ContentEvent />
      <ContentService />
      <ContentNews />
    </Container>
  );
}
