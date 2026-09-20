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
  price?: string;
  weight?: string;
  bgLightClass?: string;
  description?: string;
  rating?: number;
  reviewsCount?: number;
  flavorNotes?: string[];
  caffeineLevel?: string;
  steepTime?: string;
  steepTemp?: string;
  servingSize?: string;
  ingredients?: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  blendOfInterest: string;
  message: string;
}
