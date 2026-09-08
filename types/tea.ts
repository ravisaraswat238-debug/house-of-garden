import { IconType } from "react-icons";

export interface TeaBlend {
  id: string;
  name: string;
  badgeText: string;
  headerColor: string;
  imageSrc: string;
  imageAlt: string;
  benefitsTitleColor: string;
  benefits: string[];
  footerIcon: IconType;
  footerLabel: string;
  tag: string;
  tagColor: string;
  bgLightClass?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  blendOfInterest: string;
  message: string;
}
