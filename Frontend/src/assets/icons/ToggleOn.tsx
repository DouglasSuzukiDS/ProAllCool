import { IconsProps } from "../../types/IconsProps"

export const ToggleOn = ({ w, h, className, fill, onClick }: IconsProps) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
         width={w} height={h} className={className} fill={fill} onClick={onClick} >
         <path d="M192 112c-79.5 0-144 64.5-144 144s64.5 144 144 144H384c79.5 0 144-64.5 144-144s-64.5-144-144-144H192zM0 256C0 150 86 64 192 64H384c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256zm384-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
      </svg>
   )
}