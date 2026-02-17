export interface Statistic {
  iconType: "clock" | "check" | "code" | "users";
  value: number;
  suffix?: string;
  label: string;
}

export const statistics: Statistic[] = [
  {
    iconType: "clock",
    value: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    iconType: "check",
    value: 15,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    iconType: "code",
    value: 12,
    suffix: "+",
    label: "Technologies Mastered",
  },
  {
    iconType: "users",
    value: 5,
    suffix: "+",
    label: "Companies Worked With",
  },
];
