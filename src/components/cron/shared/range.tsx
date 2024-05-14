import { Mode } from "@sbzen/cron-core";

import { genClassName } from "./../helpers";
import { SharedProps } from "./props.type";

type Props = {
  disabledControls?: boolean;
  primaryOptions: {
    label: string;
    value: string;
  }[];
  primaryValue: string;
  onPrimaryValueChange: (value: string) => void;
  secondaryOptions: {
    label: string;
    value: string;
  }[];
  secondaryValue: string;
  onSecondaryValueChange: (value: string) => void;
  label1: string;
  label2: string;
} & SharedProps;

export const SimpleRange = ({
  cssClassPrefix = "",
  checked = false,
  disabled = false,
  disabledControls = false,
  label1,
  label2,
  onSelect,
  primaryOptions,
  primaryValue,
  onPrimaryValueChange,
  secondaryOptions,
  secondaryValue,
  onSecondaryValueChange,
  segmentId,
}: Props) => (
  <div
    className={genClassName(
      cssClassPrefix,
      ["form-group flex flex-wrap items-center"],
      ["c-range", "c-segment"]
    )}
  >
    <div
      className={genClassName(
        cssClassPrefix,
        ["form-check"],
        ["c-range-check"]
      )}
    >
      <input
        className={genClassName(
          cssClassPrefix,
          ["form-radio h-4 w-4 text-indigo-600"],
          ["c-range-option"]
        )}
        type="radio"
        id={segmentId}
        value={Mode.RANGE}
        checked={checked}
        disabled={disabled}
        onChange={onSelect}
      />

      <label
        className={genClassName(
          cssClassPrefix,
          ["ml-2 "],
          ["c-range-option-label"]
        )}
        htmlFor={segmentId}
      >
        {label1}
      </label>
    </div>

    <select
      className={genClassName(
        cssClassPrefix,
        [
          "flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 mx-1",
        ],
        ["c-range-from"]
      )}
      disabled={disabledControls}
      value={primaryValue}
      onChange={(e) => onPrimaryValueChange(e.target.value)}
    >
      {primaryOptions.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>

    <label className="ml-2 " htmlFor={segmentId}>
      {label2}
    </label>

    <select
      className={genClassName(
        cssClassPrefix,
        [
          "flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ml-1",
        ],
        ["c-range-to"]
      )}
      disabled={disabledControls}
      value={secondaryValue}
      onChange={(e) => onSecondaryValueChange(e.target.value)}
    >
      {secondaryOptions.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  </div>
);
