import { ElfsightWidget } from "react-elfsight-widget";
import S, { classes } from './styles';

const InstagramSection = (): JSX.Element => {
  const widgetId = '82fbd8eb-c5fd-486b-b567-79bae594ad56';

  return (
    <S.InstagramSection className={classes.root}>
      <ElfsightWidget widgetId={widgetId} />
    </S.InstagramSection>
  )
};

export default InstagramSection;
