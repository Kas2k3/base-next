import ContentEvent from "@/components/content/ContentEvent";
import ContentIntroduce from "@/components/content/ContentIntroduce";
import ContentNews from "@/components/content/ContentNews";
import ContentService from "@/components/content/ContentService";
import ContentSlider from "@/components/content/ContentSlider";
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
