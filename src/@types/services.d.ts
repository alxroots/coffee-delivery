import { MapPin } from "phosphor-react";
import { CoffeeTagType } from "./coffee.ts";
export type ServicePropTypes = {
  id: string;
  Icon: typeof MapPin;
  description: string;
  bgColor?: string;
  tags?: CoffeeTagType[];
};
