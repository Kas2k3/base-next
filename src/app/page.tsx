import ContentEvent from '@/components/content/ContentEvent';
import ContentIntroduce from '@/components/content/ContentIntroduce';
import ContentNews from '@/components/content/ContentNews';
import ContentService from '@/components/content/ContentService';
import ContentSlider from '@/components/content/ContentSlider';

export default function HomePage() {

  return (
    <div className="w-full pt-20">
      <ContentSlider />
      <div className="max-w-6xl mx-auto px-4 mt-8 space-y-12">
        <ContentIntroduce />
        <ContentEvent />
        <ContentService />
        <ContentNews />
      </div>
    </div>
  );
}
