import { IconsProps } from "../../types/IconsProps"

export const RussianFlag = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg"
         // viewBox="0 0 55.32 38.52"
         width={w} height={h} className={className} fill={fill} onClick={onClick}>
         <path d="M0.305664 19.7329L1.35685 13.2558C5.49432 15.4813 8.72064 15.5121 15.559 14.1121C22.3165 12.8281 25.5829 12.7927 29.5654 15.1455L29.6943 21.3692C25.1072 19.0147 21.7783 19.0902 15.1225 20.5494C8.14086 22.1014 4.78533 22.0969 0.305664 19.7329Z" fill="#D52B1E" />
         <path d="M1.34996 13.2465L2.35481 6.85113C6.4071 9.04357 9.45191 9.1748 15.9756 7.8561C22.0446 6.60402 25.1486 6.4267 29.4215 8.79682L29.5354 15.1771C25.5041 12.9359 22.4373 12.7456 15.5391 14.2934C8.48368 15.5777 5.13142 15.6231 1.34996 13.2465Z" fill="#0038A5" />
         <path d="M2.35826 6.89969L3.33113 0.374268C6.8668 2.54378 9.78287 2.74563 16.4315 1.53237C22.5175 0.405359 25.759 0.414757 29.5642 2.76792L29.4578 8.89915C25.73 6.81004 22.7874 6.58868 15.9994 7.90616C8.79961 9.34579 5.93689 9.00405 2.35826 6.89969Z" fill="#FEFEFE" />
      </svg>
   )
}

