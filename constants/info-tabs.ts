export type InfosTab = (typeof INFOS_TABS_KR)[number];

export const INFOS_TABS_KR = [
  "진료시간/절차",
  "입원/면회",
  "진료비용",
] as const;

export const INFOS_TABS_DIC: Record<string, InfosTab> = {
  time: "진료시간/절차",
  visit: "입원/면회",
  cost: "진료비용",
};
