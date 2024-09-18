import { useLayoutEffect } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import S, { classes } from './styles';

const InstagramSection = (): JSX.Element => {
  const widgetId = '82fbd8eb-c5fd-486b-b567-79bae594ad56';

  useLayoutEffect(() => {
    // No bueno 😅
    // TODO: Ask Mary for Elfsight credentials, OR make a subscription;

    // const { current: instagramSection } = instagramSectionRef;
    // if (!instagramSection) return;

    // const observer = new ResizeObserver(() => {
    //   const freeTierWidgetLink = instagramSection.querySelector('.eapps-instagram-feed>a') as HTMLAnchorElement;
    //   console.log({ freeTierWidgetLink });
    //   if (freeTierWidgetLink) {
    //     freeTierWidgetLink.style.display = 'none';
    //   }
    // });

    // observer.observe(instagramSection);

    // return () => observer.unobserve(instagramSection);
  }, []);

  return (
    <S.InstagramSection className={classes.root}>
      <ElfsightWidget widgetId={widgetId} />
    </S.InstagramSection>
  )
};

export default InstagramSection;
