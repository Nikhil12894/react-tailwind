import { Mode } from "@sbzen/cron-core";

import { genClassName } from "./../helpers";
import { SharedProps } from "./props.type";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  disabledControls?: boolean;
  onValueChange: (value: string) => void;
  isValueSelected: (value: string) => boolean;
  options: {
    label: string;
    value: string;
  }[];
  label: string;
  gridSize?: string[];
} & SharedProps;

export const SimpleAnd = ({
  cssClassPrefix = "",
  checked = false,
  disabled = false,
  disabledControls = false,
  label,
  options,
  onSelect,
  onValueChange,
  isValueSelected,
  gridSize = ["w-1/6", "md:w-1/12", "mr-4"],
  segmentId,
}: Props) => (
  <div
    className={genClassName(
      cssClassPrefix,
      ["form-group"],
      ["c-and", "c-segment"]
    )}
  >
    <div
      className={genClassName(
        cssClassPrefix,
        ["flex items-center"],
        ["c-and-check"]
      )}
    >
      <input
        className={genClassName(
          cssClassPrefix,
          ["form-radio h-4 w-4 text-indigo-600"],
          ["c-and-option"]
        )}
        type="radio"
        id={segmentId}
        value={Mode.AND}
        checked={checked}
        disabled={disabled}
        onChange={onSelect}
      />

      <label
        className={genClassName(
          cssClassPrefix,
          ["ml-2"],
          ["c-and-option-label"]
        )}
        htmlFor={segmentId}
      >
        {label}
      </label>
    </div>

    <div
      className={genClassName(
        cssClassPrefix,
        ["flex flex-wrap pl-3 pt-1"],
        ["c-and-list"]
      )}
    >
      {options.map((item) => {
        return (
          <div
            className={genClassName(cssClassPrefix, gridSize, ["c-and-item"])}
            item-value={item.value}
            key={item.value}
          >
            <div
              className={genClassName(
                cssClassPrefix,
                ["flex items-center"],
                ["c-and-item-check"]
              )}
            >
              {/* <input
                className={genClassName(
                  cssClassPrefix,
                  ["form-checkbox h-4 w-4 text-indigo-600"],
                  ["c-and-item-field"]
                )}
                type="checkbox"
                id={`${segmentId}_${item.value}`}
                value={item.value}
                disabled={disabledControls}
                checked={isValueSelected(item.value)}
                onChange={() => onValueChange(item.value)}
              /> */}
              <Checkbox
                id={`${segmentId}_${item.value}`}
                value={item.value}
                disabled={disabledControls}
                checked={isValueSelected(item.value)}
                onChange={() => onValueChange(item.value)}
                onCheckedChange={() => onValueChange(item.value)}
              />
              <label
                className={genClassName(
                  cssClassPrefix,
                  ["ml-2"],
                  ["c-and-item-label"]
                )}
                htmlFor={`${segmentId}_${item.value}`}
              >
                {item.label}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
