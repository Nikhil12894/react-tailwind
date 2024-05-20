import { useState, useEffect } from "react";
import {
  CronQuartzUIService,
  QuartzType,
  Type,
  getSegmentsList,
  getTypeSegments,
  getQuartzTypes,
} from "@sbzen/cron-core";

import { getLocalization, genSessionId, genClassName } from "./../helpers";
import { CronHostProps } from "./../cron-props.type";
import {
  QuartzCronSecond,
  QuartzCronMinute,
  QuartzCronHour,
  QuartzCronMonth,
  QuartzCronYear,
  QuartzCronDay,
} from "./tabs";

export type ReQuartzCronProps = CronHostProps<QuartzType>;
export const ReQuartzCron = ({
  localization: propLocalization,
  hideTabs: propHideTabs,
  value = "",
  activeTab,
  tabs = getQuartzTypes(),
  renderYearsFrom,
  renderYearsTo,
  cssClassPrefix,
  disabled,
  onTabChange,
  onChange,
}: ReQuartzCronProps) => {
  const [tab, setTab] = useState(activeTab || tabs[0]);
  const [service] = useState(new CronQuartzUIService(renderYearsFrom));
  const [renderCount, setRenderCount] = useState(0);
  const [session] = useState(genSessionId());
  const localization = getLocalization(propLocalization);
  const hasTabs = !propHideTabs && !!tabs.length;
  const tabProps = {
    cssClassPrefix,
    localization,
    session,
    service,
  };
  const yearTabProps = {
    ...tabProps,
    renderYearsFrom,
    renderYearsTo,
  };

  useEffect(() => {
    const shouldUpdate = !!activeTab && activeTab !== tab;
    shouldUpdate && setTab(activeTab);
  }, [activeTab]);
  useEffect(() => () => service.destroy(), [service]);
  useEffect(() => listenChangas());
  useEffect(() => service.fillFromExpression(value), [value]);
  useEffect(() => service.setDisabled(disabled), [disabled]);

  const listenChangas = () => {
    const segments = getSegmentsList();
    return service.listen(segments, (_, segment) => {
      const shouldApply = getTypeSegments(tab).includes(segment);
      if (shouldApply) {
        applyChanges();
      }
    });
  };

  const genContent = () => {
    if (tab === Type.SECONDS) {
      return <QuartzCronSecond {...tabProps} />;
    } else if (tab === Type.MINUTES) {
      return <QuartzCronMinute {...tabProps} />;
    } else if (tab === Type.HOURS) {
      return <QuartzCronHour {...tabProps} />;
    } else if (tab === Type.MONTH) {
      return <QuartzCronMonth {...tabProps} />;
    } else if (tab === Type.YEAR) {
      return <QuartzCronYear {...yearTabProps} />;
    } else {
      return <QuartzCronDay {...tabProps} />;
    }
  };

  const genTabs = (activeTab: QuartzType) => {
    const className = genClassName(
      cssClassPrefix,
      ["flex flex-wrap -mb-px font-medium text-center mb-4 border-b "],
      ["c-tabs"]
    );
    return (
      <ul className={className} role="tablist" aria-label="Cron Generator Tabs">
        {tabs.map((t) => genTab(t, activeTab))}
      </ul>
    );
  };

  const genTab = (tab: QuartzType, activeTab: QuartzType) => {
    const { tabs: tabsLocalization } = localization;
    const isActive = activeTab === tab;
    const className = genClassName(
      cssClassPrefix,
      [
        "inline-block p-4 border-b-2 rounded-t-lg",
        isActive
          ? "text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          : "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
      ],
      [tab, "c-tab"]
    );
    const tabKey = tab.toLowerCase() as keyof typeof tabsLocalization;

    return (
      <li
        key={tab}
        className={genClassName(cssClassPrefix, ["me-2"], ["c-tab-item"])}
      >
        <button
          role="tab"
          type="button"
          className={className}
          aria-selected={isActive}
          tabIndex={isActive ? 0 : -1}
          onClick={() => changeTab(tab)}
        >
          {tabsLocalization[tabKey]}
        </button>
      </li>
    );
  };

  const changeTab = (tab: QuartzType) => {
    setTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const applyChanges = () => {
    const str = service.toString();
    if (str !== value && onChange) {
      onChange(str);
    }
    setRenderCount(renderCount + 1);
  };

  return (
    <div className="c-tabs-container text-xs">
      {hasTabs && genTabs(tab)}

      <div
        className="c-tab-content"
        style={{ outline: "none" }}
        role="tabpanel"
        tabIndex={0}
        tab-name={tab}
      >
        {genContent()}
      </div>
    </div>
  );
};

export default ReQuartzCron;
