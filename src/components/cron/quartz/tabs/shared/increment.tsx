import { Mode } from "@sbzen/cron-core";

import { CronBaseProps } from "./../../../cron-base-props.type";
import { genClassName } from "../../../helpers";

type Props = {
  checked?: boolean;
  disabled?: boolean;
  disabledControls?: boolean;
  onSelect: () => void;
  primaryOptions: {
    label: string | number;
    value: string;
  }[];
  primaryValue: string;
  onPrimaryValueChange: (value: string) => void;
  secondaryOptions: {
    label: string | number;
    value: string;
  }[];
  secondaryValue: string;
  onSecondaryValueChange: (value: string) => void;
  label1: string;
  label2: string;
  segmentId: string;
} & CronBaseProps;

export const SimpleIncrement = ({
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
      ["flex flex-wrap items-center"],
      ["c-increment", "c-segment"]
    )}
  >
    <div
      className={genClassName(
        cssClassPrefix,
        ["flex items-center mr-4"],
        ["c-increment-check"]
      )}
    >
      <input
        className={genClassName(
          cssClassPrefix,
          ["form-radio h-4 w-4 text-indigo-600"],
          ["c-increment-option"]
        )}
        type="radio"
        id={segmentId}
        value={Mode.INCREMENT}
        checked={checked}
        disabled={disabled}
        onChange={onSelect}
      />

      <label
        className={genClassName(
          cssClassPrefix,
          ["ml-2 "],
          ["c-increment-option-label"]
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
          "flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 mr-2",
        ],
        ["c-increment-every"]
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

    <label className=" mr-2" htmlFor={segmentId}>
      {label2}
    </label>

    <select
      className={genClassName(
        cssClassPrefix,
        [
          "flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        ],
        ["c-increment-from"]
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
