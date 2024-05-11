import { Segment, Mode, Type, getList } from "@sbzen/cron-core";

import { SimpleEvery, SimpleAnd, SimpleRange } from "./../../../shared";
import { genId, getCssClassPrefix } from "./../../../helpers";
import { SimpleIncrement, CronQuartzTabProps } from "./../shared";

export const QuartzCronSecond = (props: CronQuartzTabProps) => {
  const { service, localization, session, cssClassPrefix } = props;
  const { every, increment, and, range } = localization.quartz.second;
  const classPrefix = getCssClassPrefix(cssClassPrefix);
  const api = service.getApi(Type.SECONDS);
  const secondCodes = getList(Segment.seconds, true);
  const secondsList = getList(Segment.seconds);

  const genEvery = () => (
    <SimpleEvery
      cssClassPrefix={classPrefix}
      segmentId={genId(Mode.EVERY, session)}
      checked={api.isEverySelected()}
      disabled={service.isDisabled()}
      onSelect={() => api.selectEvery()}
      label={every.label}
    />
  );

  const genIncrement = () => (
    <SimpleIncrement
      cssClassPrefix={classPrefix}
      segmentId={genId(Mode.INCREMENT, session)}
      checked={api.isIncrementSelected()}
      disabled={service.isDisabled()}
      disabledControls={api.isIncrementControlsDisabled()}
      onSelect={() => api.selectIncrement()}
      label1={increment.label1}
      label2={increment.label2}
      primaryOptions={secondCodes}
      primaryValue={api.getIncrementPrimaryValue()}
      onPrimaryValueChange={api.setIncrementPrimaryValue}
      secondaryOptions={secondsList}
      secondaryValue={api.getIncrementSecondaryValue()}
      onSecondaryValueChange={api.setIncrementSecondaryValue}
    />
  );

  const genAnd = () => (
    <SimpleAnd
      cssClassPrefix={classPrefix}
      segmentId={genId(Mode.AND, session)}
      checked={api.isAndSelected()}
      disabled={service.isDisabled()}
      disabledControls={api.isAndControlsDisabled()}
      onSelect={() => api.selectAnd()}
      label={and.label}
      onValueChange={api.selectAndValue}
      isValueSelected={(value) => api.isSelectedAndValue(value)}
      options={secondsList}
      gridSize={[
        " w-1/6",
        "sm:w-1/10",
        "md:w-1/10",
        "xl:w-1/12",
        "2xl:w-1/12",
        "mr-4",
      ]}
    />
  );

  const genRange = () => (
    <SimpleRange
      cssClassPrefix={classPrefix}
      segmentId={genId(Mode.RANGE, session)}
      checked={api.isRangeSelected()}
      disabled={service.isDisabled()}
      onSelect={() => api.selectRange()}
      disabledControls={api.isRangeControlsDisabled()}
      label1={range.label1}
      label2={range.label2}
      primaryOptions={secondsList}
      primaryValue={api.getRangePrimaryValue()}
      onPrimaryValueChange={api.setRangePrimaryValue}
      secondaryOptions={secondsList}
      secondaryValue={api.getRangeSecondaryValue()}
      onSecondaryValueChange={api.setRangeSecondaryValue}
    />
  );

  return (
    <div>
      {genEvery()}
      {genIncrement()}
      {genAnd()}
      {genRange()}
    </div>
  );
};
