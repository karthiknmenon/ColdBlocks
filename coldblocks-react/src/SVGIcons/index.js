import React from 'react';

const DeleteSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.90912 4H3.18185H13.3637" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.09093 4.00004V2.66671C5.09093 2.31309 5.22502 1.97395 5.4637 1.7239C5.70239 1.47385 6.02611 1.33337 6.36366 1.33337H8.90913C9.24669 1.33337 9.57041 1.47385 9.80909 1.7239C10.0478 1.97395 10.1819 2.31309 10.1819 2.66671V4.00004M12.091 4.00004V13.3334C12.091 13.687 11.9569 14.0261 11.7182 14.2762C11.4795 14.5262 11.1558 14.6667 10.8182 14.6667H4.45456C4.11701 14.6667 3.79328 14.5262 3.5546 14.2762C3.31592 14.0261 3.18182 13.687 3.18182 13.3334V4.00004H12.091Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.36368 7.33337V11.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.90915 7.33337V11.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const EditSVG = ({ size = 16, color, extraClass }) => {
  return ( 
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    
      <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  );
};

const SearchSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
        <path d="M21 21L16.65 16.65" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

const CloseSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
      <path d="M5 5L19 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 5L5 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
};

const RightSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.66552 13.3716C5.46027 13.1869 5.44363 12.8708 5.62836 12.6655L9.82732 8L5.62836 3.33448C5.44363 3.12922 5.46027 2.81308 5.66552 2.62835C5.87078 2.44362 6.18692 2.46026 6.37165 2.66551L10.8717 7.66551C11.0428 7.85567 11.0428 8.14433 10.8717 8.33448L6.37165 13.3345C6.18692 13.5397 5.87078 13.5564 5.66552 13.3716Z" stroke={color} strokeWidth="1"/>
    </svg>
  );
};

const LeftSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3345 13.3716C10.5397 13.1869 10.5564 12.8708 10.3716 12.6655L6.17268 8L10.3716 3.33448C10.5564 3.12922 10.5397 2.81308 10.3345 2.62835C10.1292 2.44362 9.81308 2.46026 9.62835 2.66551L5.12835 7.66551C4.95721 7.85567 4.95721 8.14433 5.12835 8.33448L9.62835 13.3345C9.81308 13.5397 10.1292 13.5564 10.3345 13.3716Z" fill={color}/>
    </svg>
  );
};

const NextSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L12 12L1 23" stroke={color} strokeWidth="2"/>
    </svg>
  );
};

const PrevSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L2 12L13 23" stroke={color} strokeWidth="2"/>
    </svg>
  );
};

const CheckSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.7863 9.61782C17.1275 9.18355 17.0521 8.5549 16.6178 8.21368C16.1835 7.87247 15.5549 7.94791 15.2137 8.38218L10.3369 14.5889L8.62469 13.2191C8.19343 12.8741 7.56414 12.944 7.21913 13.3753C6.87412 13.8066 6.94404 14.4359 7.3753 14.7809L9.8753 16.7809C10.0836 16.9475 10.3498 17.024 10.6148 16.9934C10.8798 16.9628 11.1215 16.8276 11.2863 16.6178L16.7863 9.61782Z" fill="#7ABF5C"/>
    </svg>
  );
};

const ErrorSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2666 4.50622C11.0359 3.17013 12.9639 3.17012 13.7331 4.50622L21.5035 18.0021C22.2711 19.3354 21.3088 21 19.7702 21H4.22954C2.691 21 1.72862 19.3354 2.49629 18.0021L10.2666 4.50622ZM19.7702 19L11.9999 5.50415L4.22954 19L19.7702 19ZM11.9999 9C12.5522 9 12.9999 9.44772 12.9999 10V13C12.9999 13.5523 12.5522 14 11.9999 14C11.4476 14 10.9999 13.5523 10.9999 13V10C10.9999 9.44772 11.4476 9 11.9999 9ZM11.9999 17C12.5522 17 12.9999 16.5523 12.9999 16C12.9999 15.4477 12.5522 15 11.9999 15C11.4476 15 10.9999 15.4477 10.9999 16C10.9999 16.5523 11.4476 17 11.9999 17Z" fill="#FF3945"/>
    </svg>
  );
};

const InfoSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 16C12.5523 16 13 15.5523 13 15V12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V15C11 15.5523 11.4477 16 12 16Z" fill="#63686F"/>
      <path d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9Z" fill="#63686F"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z" fill="#63686F"/>
    </svg>
  );
};


const DownloadSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L11 12.5858V3C11 2.44772 11.4477 2 12 2ZM3 13.0769C3.55228 13.0769 4 13.5246 4 14.0769V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V14.0769C20 13.5246 20.4477 13.0769 21 13.0769C21.5523 13.0769 22 13.5246 22 14.0769V18C22 20.2091 20.2092 22 18 22H6C3.79086 22 2 20.2091 2 18V14.0769C2 13.5246 2.44772 13.0769 3 13.0769Z" fill={color}/>
      </g>
    </svg>
  );
};
const MoreSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
      <path d="M8.00002 9.82218C9.0064 9.82218 9.82224 9.00634 9.82224 7.99996C9.82224 6.99357 9.0064 6.17773 8.00002 6.17773C6.99363 6.17773 6.1778 6.99357 6.1778 7.99996C6.1778 9.00634 6.99363 9.82218 8.00002 9.82218Z" fill={color}/>
      <path d="M8.00002 4.48893C9.0064 4.48893 9.82224 3.67309 9.82224 2.6667C9.82224 1.66032 9.0064 0.844482 8.00002 0.844482C6.99363 0.844482 6.1778 1.66032 6.1778 2.6667C6.1778 3.67309 6.99363 4.48893 8.00002 4.48893Z" fill={color}/>
      <path d="M8.00002 15.1557C9.0064 15.1557 9.82224 14.3398 9.82224 13.3335C9.82224 12.3271 9.0064 11.5112 8.00002 11.5112C6.99363 11.5112 6.1778 12.3271 6.1778 13.3335C6.1778 14.3398 6.99363 15.1557 8.00002 15.1557Z" fill={color}/>
      </g>
    </svg>
    
  );
};


const DoneSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.7863 9.61782C17.1275 9.18355 17.0521 8.5549 16.6178 8.21368C16.1835 7.87247 15.5549 7.94791 15.2137 8.38218L10.3369 14.5889L8.62469 13.2191C8.19343 12.8741 7.56414 12.944 7.21913 13.3753C6.87412 13.8066 6.94404 14.4359 7.3753 14.7809L9.8753 16.7809C10.0836 16.9475 10.3498 17.024 10.6148 16.9934C10.8798 16.9628 11.1215 16.8276 11.2863 16.6178L16.7863 9.61782Z" fill="#8DCD71"/>
    </svg>
  );
};

const PauseSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 1.25H2.5C2.22386 1.25 2 1.47386 2 1.75V10.25C2 10.5261 2.22386 10.75 2.5 10.75H4.5C4.77614 10.75 5 10.5261 5 10.25V1.75C5 1.47386 4.77614 1.25 4.5 1.25Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 1.25H7.5C7.22386 1.25 7 1.47386 7 1.75V10.25C7 10.5261 7.22386 10.75 7.5 10.75H9.5C9.77614 10.75 10 10.5261 10 10.25V1.75C10 1.47386 9.77614 1.25 9.5 1.25Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const LoadingSVG = ({ size = 16, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
      <path d="M15.3335 2.66666V6.66666H11.3335" stroke={'#E59356'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M0.666504 13.3333V9.33334H4.6665" stroke={'#E59356'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.33984 6.00001C2.67795 5.04453 3.25259 4.19028 4.01015 3.51696C4.7677 2.84363 5.68348 2.37319 6.67203 2.14952C7.66058 1.92584 8.68967 1.95624 9.6633 2.23786C10.6369 2.51948 11.5233 3.04315 12.2398 3.76001L15.3332 6.66668M0.666504 9.33334L3.75984 12.24C4.47634 12.9569 5.36275 13.4805 6.33638 13.7622C7.31 14.0438 8.3391 14.0742 9.32765 13.8505C10.3162 13.6268 11.232 13.1564 11.9895 12.4831C12.7471 11.8097 13.3217 10.9555 13.6598 10" stroke={'#E59356'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width={size} height={size} fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};

const CheckboxSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.13635" y="1.41379" width="15" height="15" rx="2.5" fill="#F2F2F2" stroke={color}/>
    </svg>
  );
};

const BackSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z" fill="black"/>
      </g>
    </svg>
  );
};

const ListSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fillRule="evenodd" clipRule="evenodd" d="M3 3H2V4H3V3ZM5.5 3C5.22386 3 5 3.22386 5 3.5C5 3.77614 5.22386 4 5.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H5.5ZM2 8H3V9H2V8ZM5.5 8C5.22386 8 5 8.22386 5 8.5C5 8.77614 5.22386 9 5.5 9H13.5C13.7761 9 14 8.77614 14 8.5C14 8.22386 13.7761 8 13.5 8H5.5ZM2 13H3V14H2V13ZM5.5 13C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14H13.5C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13H5.5Z" fill="black"/>
      </g>
    </svg>
  );
};
const MenuSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg  width={size} height={size} className={[extraClass]} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1" x2="10" y2="1" stroke={color} strokeWidth="2"/>
      <line y1="5" x2="10" y2="5" stroke={color} strokeWidth="2"/>
      <line y1="9" x2="10" y2="9" stroke={color} strokeWidth="2"/>
    </svg>

    
  );
};

const CopySVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width={size} height={size} className={[extraClass]} viewBox="0 0 59.167 59.167">
      <g>
        <path d="M46.663,59.167H2.497c-1.291,0-2.337-1.046-2.337-2.337V12.665c0-1.291,1.046-2.337,2.337-2.337h44.166 c1.291,0,2.337,1.047,2.337,2.337V56.83C49,58.12,47.954,59.167,46.663,59.167z M4.834,54.492h39.491v-39.49H4.834V54.492z"/>
        <path d="M56.67,48.84h-4.745c-1.291,0-2.337-1.047-2.337-2.337c0-1.291,1.046-2.337,2.337-2.337h2.408V4.675H14.841v2.6 c0,1.291-1.046,2.337-2.337,2.337s-2.337-1.047-2.337-2.337V2.337c0-1.29,1.046-2.337,2.337-2.337H56.67 c1.291,0,2.337,1.047,2.337,2.337v44.166C59.007,47.793,57.961,48.84,56.67,48.84z"/>
      </g>
    </svg>
  );
};

const FilterSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> 
  );
};

const ArrowrightSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.8333 5.5C10.8333 5.22386 10.6094 5 10.3333 5H0.999918C0.723776 5 0.499918 5.22386 0.499918 5.5C0.499918 5.77614 0.723776 6 0.999918 6H10.3333C10.6094 6 10.8333 5.77614 10.8333 5.5Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.29506 0.665523C5.11033 0.870779 5.12697 1.18692 5.33223 1.37165L9.93383 5.51306L5.3192 9.97384C5.12065 10.1658 5.11529 10.4823 5.30721 10.6808C5.49914 10.8794 5.81567 10.8848 6.01422 10.6928L11.0143 5.8595C11.1139 5.76314 11.1691 5.62972 11.1667 5.4911C11.1642 5.35247 11.1043 5.2211 11.0012 5.12836L6.00119 0.628356C5.79593 0.443627 5.47979 0.460268 5.29506 0.665523Z" fill={color}/>
    </svg>
  );
};

const DownSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.44254 5.49828C2.71963 5.1904 3.19385 5.16544 3.50173 5.44254L8.00001 9.49098L12.4983 5.44254C12.8062 5.16544 13.2804 5.1904 13.5575 5.49828C13.8346 5.80617 13.8096 6.28038 13.5017 6.55748L8.50173 11.0575C8.2165 11.3142 7.78351 11.3142 7.49828 11.0575L2.49828 6.55748C2.1904 6.28038 2.16544 5.80617 2.44254 5.49828Z" fill={color}/>
    </svg>
  );
};

const PlusSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <line x1="10" y1="1" x2="10" y2="19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <line x1="19" y1="10.5" x2="1" y2="10.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </g>
    </svg>
  );
};


const PluscircleSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99999 15.3334C12.0501 15.3334 15.3333 12.0502 15.3333 8.00008C15.3333 3.94999 12.0501 0.666748 7.99999 0.666748C3.9499 0.666748 0.666656 3.94999 0.666656 8.00008C0.666656 12.0502 3.9499 15.3334 7.99999 15.3334Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3.66675V12.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6667 8L3.99999 8" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};


const WindowsettingsSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.0415 25.6307C24.0997 25.6307 24.9575 24.7729 24.9575 23.7147C24.9575 22.6565 24.0997 21.7987 23.0415 21.7987C21.9833 21.7987 21.1255 22.6565 21.1255 23.7147C21.1255 24.7729 21.9833 25.6307 23.0415 25.6307Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6666 16.3L25.232 18.156C25.3246 18.4642 25.531 18.7257 25.8093 18.8874C26.0876 19.0491 26.417 19.0989 26.7306 19.0267L28.6133 18.5907C28.9698 18.5097 29.3429 18.5452 29.6778 18.692C30.0127 18.8387 30.2917 19.089 30.4739 19.406C30.656 19.723 30.7317 20.0901 30.6899 20.4533C30.648 20.8165 30.4908 21.1567 30.2413 21.424L28.9333 22.844C28.7142 23.081 28.5925 23.3919 28.5925 23.7147C28.5925 24.0374 28.7142 24.3483 28.9333 24.5853L30.2506 26.004C30.4997 26.2715 30.6566 26.6117 30.6983 26.9748C30.7399 27.338 30.6642 27.7049 30.4822 28.0218C30.3002 28.3388 30.0214 28.5891 29.6867 28.7361C29.3521 28.8831 28.9792 28.919 28.6226 28.8387L26.74 28.4027C26.4263 28.3305 26.0969 28.3803 25.8186 28.542C25.5403 28.7037 25.3339 28.9651 25.2413 29.2733L24.6666 31.1333C24.5614 31.4833 24.3462 31.79 24.053 32.0081C23.7597 32.2261 23.404 32.3438 23.0386 32.3438C22.6732 32.3438 22.3175 32.2261 22.0243 32.0081C21.731 31.79 21.5158 31.4833 21.4106 31.1333L20.8453 29.2773C20.7526 28.9688 20.546 28.7072 20.2674 28.5455C19.9888 28.3837 19.6591 28.3341 19.3453 28.4067L17.464 28.8427C17.1074 28.923 16.7345 28.8871 16.3998 28.7401C16.0652 28.5931 15.7864 28.3428 15.6044 28.0258C15.4223 27.7089 15.3466 27.342 15.3883 26.9788C15.43 26.6157 15.5868 26.2755 15.836 26.008L17.1533 24.5893C17.3718 24.352 17.4931 24.0413 17.4931 23.7187C17.4931 23.3961 17.3718 23.0853 17.1533 22.848L15.836 21.428C15.5842 21.1609 15.4252 20.8199 15.3823 20.4553C15.3394 20.0908 15.415 19.7222 15.5979 19.404C15.7808 19.0857 16.0613 18.8348 16.3978 18.6884C16.7344 18.5419 17.1091 18.5077 17.4666 18.5907L19.348 19.0267C19.6618 19.0992 19.9915 19.0496 20.2701 18.8879C20.5487 18.7262 20.7553 18.4645 20.848 18.156L21.4133 16.3C21.5192 15.9511 21.7345 15.6455 22.0274 15.4283C22.3203 15.2112 22.6753 15.0939 23.04 15.0939C23.4046 15.0939 23.7596 15.2112 24.0525 15.4283C24.3454 15.6455 24.5607 15.9511 24.6666 16.3V16.3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.37207 7.00531H28.0387" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0387 23H4.03874C3.33149 23 2.65322 22.7191 2.15312 22.219C1.65302 21.7189 1.37207 21.0406 1.37207 20.3334V4.33335C1.37207 3.62611 1.65302 2.94783 2.15312 2.44774C2.65322 1.94764 3.33149 1.66669 4.03874 1.66669H25.3721C26.0793 1.66669 26.7576 1.94764 27.2577 2.44774C27.7578 2.94783 28.0387 3.62611 28.0387 4.33335V15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};
const AlarmbellcheckSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7998 11.2986C12.6124 10.9659 11.364 10.9128 10.1526 11.1437C8.94116 11.3746 7.79975 11.8831 6.81792 12.6293C5.83609 13.3754 5.04056 14.339 4.49377 15.4444C3.94699 16.5497 3.66382 17.7668 3.6665 19V26.3333C3.6665 26.8638 3.45579 27.3725 3.08072 27.7475C2.70564 28.1226 2.19694 28.3333 1.6665 28.3333H21.6665C21.1361 28.3333 20.6274 28.1226 20.2523 27.7475C19.8772 27.3725 19.6665 26.8638 19.6665 26.3333V19.248" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5532 31C13.4155 31.3902 13.1602 31.7281 12.8224 31.9671C12.4846 32.2061 12.081 32.3344 11.6672 32.3344C11.2535 32.3344 10.8499 32.2061 10.5121 31.9671C10.1743 31.7281 9.91895 31.3902 9.78125 31" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6665 8.33466V11.0013" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7998 11.2986C12.6124 10.9659 11.364 10.9128 10.1526 11.1437C8.94116 11.3746 7.79975 11.8831 6.81792 12.6293C5.83609 13.3754 5.04056 14.339 4.49377 15.4444C3.94699 16.5497 3.66382 17.7668 3.6665 19V26.3333C3.6665 26.8638 3.45579 27.3725 3.08072 27.7475C2.70564 28.1226 2.19694 28.3333 1.6665 28.3333H21.6665C21.1361 28.3333 20.6274 28.1226 20.2523 27.7475C19.8772 27.3725 19.6665 26.8638 19.6665 26.3333V19.248" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5532 31C13.4155 31.3902 13.1602 31.7281 12.8224 31.9671C12.4846 32.2061 12.081 32.3344 11.6672 32.3344C11.2535 32.3344 10.8499 32.2061 10.5121 31.9671C10.1743 31.7281 9.91895 31.3902 9.78125 31" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6665 8.33466V11.0013" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.3335 17.6693C28.7518 17.6693 32.3335 14.0876 32.3335 9.66931C32.3335 5.25103 28.7518 1.66931 24.3335 1.66931C19.9152 1.66931 16.3335 5.25103 16.3335 9.66931C16.3335 14.0876 19.9152 17.6693 24.3335 17.6693Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.8989 7.34399L24.0256 12.508C23.9394 12.6224 23.8297 12.7171 23.7039 12.7856C23.5781 12.8541 23.439 12.8948 23.2962 12.9051C23.1533 12.9153 23.0098 12.8948 22.8755 12.8449C22.7412 12.7951 22.6192 12.717 22.5176 12.616L20.5176 10.616" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>  
  );
};
const EmailsyncSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9999 25.6667H16.3333V30.3333" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31.556 27.3107C31.0089 28.9148 29.9299 30.2836 28.4978 31.1901C27.0657 32.0966 25.3668 32.4862 23.6829 32.2942C21.9989 32.1023 20.4313 31.3403 19.2399 30.1348C18.0486 28.9293 17.3053 27.3527 17.1333 25.6667" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.6667 23H32.3334V18.3333" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.1106 21.356C17.6576 19.7519 18.7367 18.383 20.1688 17.4766C21.6008 16.5701 23.2998 16.1805 24.9837 16.3725C26.6676 16.5644 28.2353 17.3263 29.4266 18.5318C30.6179 19.7373 31.3613 21.3139 31.5333 23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6667 20.3333H3.66675C3.13632 20.3333 2.62761 20.1226 2.25253 19.7475C1.87746 19.3725 1.66675 18.8638 1.66675 18.3333V3.66666C1.66675 3.13622 1.87746 2.62752 2.25253 2.25244C2.62761 1.87737 3.13632 1.66666 3.66675 1.66666H27.6667C28.1972 1.66666 28.7059 1.87737 29.081 2.25244C29.456 2.62752 29.6667 3.13622 29.6667 3.66666V13.6667" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.0895 2.26132L15.6668 13L2.24414 2.26132" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
const EmailcheckSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.2412 32.4027C28.6595 32.4027 32.2412 28.8209 32.2412 24.4027C32.2412 19.9844 28.6595 16.4027 24.2412 16.4027C19.8229 16.4027 16.2412 19.9844 16.2412 24.4027C16.2412 28.8209 19.8229 32.4027 24.2412 32.4027Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.8066 22.0773L23.9333 27.2413C23.8474 27.3562 23.7378 27.4512 23.612 27.5199C23.4861 27.5887 23.347 27.6296 23.204 27.6398C23.0609 27.65 22.9174 27.6294 22.783 27.5793C22.6487 27.5292 22.5267 27.4507 22.4253 27.3493L20.4253 25.3493" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7012 20.3773H3.70117C3.17074 20.3773 2.66203 20.1666 2.28696 19.7915C1.91189 19.4165 1.70117 18.9078 1.70117 18.3773V3.71066C1.70117 3.18023 1.91189 2.67152 2.28696 2.29645C2.66203 1.92138 3.17074 1.71066 3.70117 1.71066H27.7012C28.2316 1.71066 28.7403 1.92138 29.1154 2.29645C29.4905 2.67152 29.7012 3.18023 29.7012 3.71066V13.7107" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.124 2.30533L15.7013 13.044L2.27734 2.30533" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  );
};

const UpSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0.583313V11.4166" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5834 5.16665L6.00008 0.583313L1.41675 5.16665" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const ColumnSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} style={{ marginTop: 2 }} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M0 7.11108H16" stroke={color} strokeWidth="1.5"/>
        <rect x="0.75" y="0.75" width="14.5" height="12.7222" rx="1.25" stroke={color} strokeWidth="1.5"/>
        <path d="M5.33331 0.888916L5.33331 13.3334" stroke={color} strokeWidth="1.5"/>
      </g>
    </svg>

  );
};

const TickSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1.53711L6 9.89508L1 6.37593" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
const DownfillSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.50001 5C3.30255 5 3.12359 5.11621 3.04326 5.29658C2.96293 5.47696 2.99627 5.68771 3.12836 5.83448L7.62836 10.8345C7.72318 10.9398 7.85827 11 8.00001 11C8.14175 11 8.27683 10.9398 8.37166 10.8345L12.8717 5.83448C13.0037 5.68771 13.0371 5.47696 12.9568 5.29658C12.8764 5.11621 12.6975 5 12.5 5H3.50001Z" fill={color}/>
    </svg>
  );
};

const UploadSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg
      width={size}
      height={size}
      className={[extraClass]}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 16L24 6L14 16"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 6V30"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const HyperlinkSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg
      width={size} height={size} className={[extraClass]} 
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33325 3.33333H2.66659C2.31296 3.33333 1.97382 3.4738 1.72378 3.72385C1.47373 3.9739 1.33325 4.31304 1.33325 4.66666V13.3333C1.33325 13.687 1.47373 14.0261 1.72378 14.2761C1.97382 14.5262 2.31296 14.6667 2.66659 14.6667H11.9999C12.3535 14.6667 12.6927 14.5262 12.9427 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V9.33333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 2.66667V5.66667M13.3334 2.66667L6.66675 9.33334M13.3334 2.66667H9.84135"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


const ThrottlingSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
      <path d="M10.6252 33.2917L11.3335 24.7917H14.8752V19.8333C14.8752 17.9547 14.1289 16.153 12.8005 14.8247C11.4721 13.4963 9.67045 12.75 7.79183 12.75C5.91321 12.75 4.11154 13.4963 2.78316 14.8247C1.45477 16.153 0.708496 17.9547 0.708496 19.8333V24.7917H4.25016L4.9585 33.2917H10.6252Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.79183 10.625C10.5302 10.625 12.7502 8.40509 12.7502 5.66668C12.7502 2.92827 10.5302 0.708344 7.79183 0.708344C5.05342 0.708344 2.8335 2.92827 2.8335 5.66668C2.8335 8.40509 5.05342 10.625 7.79183 10.625Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.7052 14.6908C23.6717 13.7123 22.3676 13.0674 20.9626 12.84C19.5575 12.6126 18.1166 12.8133 16.8271 13.4158" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.8335 10.625C22.1807 10.625 24.0835 8.72221 24.0835 6.375C24.0835 4.02779 22.1807 2.125 19.8335 2.125C17.4863 2.125 15.5835 4.02779 15.5835 6.375C15.5835 8.72221 17.4863 10.625 19.8335 10.625Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.2083 33.2917C30.1204 33.2917 33.2917 30.1204 33.2917 26.2083C33.2917 22.2963 30.1204 19.125 26.2083 19.125C22.2963 19.125 19.125 22.2963 19.125 26.2083C19.125 30.1204 22.2963 33.2917 26.2083 33.2917Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.375 26.9167L24.9093 28.4509C24.982 28.5236 25.0697 28.5795 25.1662 28.6148C25.2627 28.6502 25.3658 28.6641 25.4682 28.6556C25.5707 28.6471 25.6701 28.6164 25.7595 28.5657C25.8489 28.5149 25.9261 28.4453 25.9859 28.3617L29.0417 24.0833" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0">
      <rect width="34" height="34" fill="white"/>
      </clipPath>
      </defs>
    </svg> 
  );
};
const EmailSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.49993 5.13382C4.64703 5.04871 4.81783 5 5 5H19C19.1822 5 19.353 5.04871 19.5001 5.13382C19.4658 5.15363 19.4324 5.17568 19.4 5.2L12 10.75L4.6 5.2C4.56758 5.17568 4.53416 5.15363 4.49993 5.13382ZM4 7.25V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V7.25L12.6 12.8C12.2444 13.0667 11.7556 13.0667 11.4 12.8L4 7.25ZM5 3C3.34315 3 2 4.34315 2 6V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V6C22 4.34315 20.6569 3 19 3H5Z" fill={color}/>
  </svg>

  );
};
 
const SurveysparrowSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width="150" height="40" viewBox="0 0 176 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 22.0659L1.20973 19.9389C2.0013 20.7241 3.56283 21.4883 4.88365 21.4883C6.09184 21.4883 6.6643 21.0032 6.6643 20.3088C6.6643 18.4819 0.373411 19.9843 0.373411 15.5924C0.373411 13.7184 1.91334 12.0765 4.72781 12.0765C6.50845 12.0765 7.93883 12.7239 8.99426 13.6032L7.87248 15.6832C7.23522 14.9904 6.02549 14.3901 4.72781 14.3901C3.71713 14.3901 3.05672 14.8525 3.05672 15.4755C3.05672 17.1174 9.36767 15.7303 9.36767 20.239C9.36767 22.2979 7.69812 23.8003 4.74941 23.8003C2.90242 23.8003 1.12177 23.1529 0 22.0659Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.3663 23.5227V22.1128C17.6395 22.9451 16.365 23.8001 14.6275 23.8001C12.296 23.8001 11.1974 22.4584 11.1974 20.2859V12.3538H13.9903V19.1291C13.9903 20.6785 14.7587 21.188 15.9468 21.188C17.0254 21.188 17.8833 20.5633 18.3663 19.916V12.3538H21.1607V23.5227H18.3663Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.7067 23.5226V12.3538H26.4995V13.8578C27.2695 12.886 28.5641 12.0764 29.8849 12.0764V14.9432C29.6874 14.8978 29.4451 14.8751 29.1165 14.8751C28.1907 14.8751 26.9609 15.4299 26.4995 16.147V23.5226H23.7067Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M34.8423 23.5227L30.5759 12.3538H33.5678L36.3375 20.1237L39.1304 12.3538H42.1207L37.8558 23.5227H34.8423Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M47.7379 14.482C46.0004 14.482 45.2536 15.754 45.1425 16.8637H50.3764C50.2885 15.7994 49.5849 14.482 47.7379 14.482ZM42.2401 17.928C42.2401 14.6896 44.5269 12.0775 47.7379 12.0775C50.9258 12.0775 53.0597 14.5744 53.0597 18.2038V18.8982H45.1641C45.3632 20.2627 46.4186 21.3952 48.2208 21.3952C49.1235 21.3952 50.3533 21.0025 51.0368 20.3081L52.2898 22.2518C51.2344 23.2691 49.5633 23.7996 47.9122 23.7996C44.6827 23.7996 42.2401 21.512 42.2401 17.928Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M54.7176 25.2567C54.9583 25.3719 55.3317 25.4416 55.5971 25.4416C56.3239 25.4416 56.8068 25.234 57.0707 24.632L57.4657 23.6618L53.1561 12.3535H56.1464L58.9192 20.1233L61.7105 12.3535H64.7025L59.7093 25.3492C58.9192 27.4535 57.512 28.0083 55.6851 28.0554C55.378 28.0554 54.6513 27.9856 54.3226 27.8688L54.7176 25.2567Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M96.8192 22.5894L98.0273 20.4624C98.8204 21.2477 100.382 22.0119 101.701 22.0119C102.909 22.0119 103.482 21.5267 103.482 20.8323C103.482 19.0055 97.1926 20.5079 97.1926 16.1159C97.1926 14.242 98.731 12.6001 101.545 12.6001C103.328 12.6001 104.758 13.2474 105.812 14.1268L104.692 16.2068C104.053 15.514 102.843 14.9137 101.545 14.9137C100.535 14.9137 99.8743 15.3761 99.8743 15.9991C99.8743 17.641 106.185 16.2538 106.185 20.7626C106.185 22.8214 104.516 24.3238 101.569 24.3238C99.7216 24.3238 97.9409 23.6765 96.8192 22.5894Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M115.947 18.4509C115.947 16.5316 114.849 15.2125 113.244 15.2125C112.341 15.2125 111.33 15.7463 110.846 16.4861V20.4157C111.309 21.1328 112.341 21.7104 113.244 21.7104C114.849 21.7104 115.947 20.393 115.947 18.4509ZM110.846 22.6125V28.3007H108.055V12.8778H110.846V14.2894C111.661 13.2023 112.826 12.6004 114.123 12.6004C116.85 12.6004 118.828 14.7274 118.828 18.4509C118.828 22.1728 116.85 24.3241 114.123 24.3241C112.87 24.3241 111.725 23.7693 110.846 22.6125Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M127.095 21.3639V19.9767C126.634 19.3293 125.754 18.9821 124.853 18.9821C123.753 18.9821 122.852 19.6068 122.852 20.6711C122.852 21.7338 123.753 22.3357 124.853 22.3357C125.754 22.3357 126.634 22.0112 127.095 21.3639ZM127.095 24.0457V22.8662C126.368 23.7926 125.115 24.3232 123.73 24.3232C122.038 24.3232 120.057 23.121 120.057 20.624C120.057 17.9876 122.038 17.0173 123.73 17.0173C125.16 17.0173 126.391 17.5025 127.095 18.3818V16.9703C127.095 15.8378 126.171 15.098 124.763 15.098C123.643 15.098 122.586 15.5604 121.707 16.4154L120.608 14.3582C121.906 13.1332 123.577 12.6011 125.248 12.6011C127.689 12.6011 129.909 13.6183 129.909 16.8324V24.0457H127.095Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M132.429 24.0464V12.8775H135.222V14.3815C135.992 13.4097 137.286 12.6001 138.607 12.6001V15.4669C138.41 15.4215 138.168 15.3988 137.839 15.3988C136.913 15.3988 135.683 15.9537 135.222 16.6708V24.0464H132.429Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M140.045 24.0464V12.8775H142.838V14.3815C143.608 13.4097 144.902 12.6001 146.223 12.6001V15.4669C146.026 15.4215 145.783 15.3988 145.455 15.3988C144.529 15.3988 143.299 15.9537 142.838 16.6708V24.0464H140.045Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M155.382 18.4509C155.382 16.7165 154.414 15.2125 152.653 15.2125C150.916 15.2125 149.949 16.7165 149.949 18.4509C149.949 20.208 150.916 21.7104 152.653 21.7104C154.414 21.7104 155.382 20.208 155.382 18.4509ZM147.046 18.4509C147.046 15.2823 149.159 12.6004 152.653 12.6004C156.173 12.6004 158.284 15.2823 158.284 18.4509C158.284 21.6179 156.173 24.3241 152.653 24.3241C149.159 24.3241 147.046 21.6179 147.046 18.4509Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M169.38 24.0464L167.138 16.4387L164.895 24.0464H161.903L158.672 12.8775H161.574L163.554 20.3926L165.884 12.8775H168.37L170.699 20.3926L172.679 12.8775H175.603L172.371 24.0464H169.38Z" fill="#372459"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M75.9029 0.277161C74.3288 0.473787 71.8769 1.19571 69.7726 3.65426L66.7282 7.25525L74.4174 9.88029L65.2926 30.4156L67.5935 30.1788C68.0476 30.1328 78.7576 28.9158 81.586 19.05L78.7811 19.0471C77.7082 22.0195 75.5817 24.3173 72.4224 25.8716C71.4727 26.3381 70.552 26.6725 69.7643 26.9093L78.0626 8.23408L71.3536 5.94632L71.7565 5.46983C74.1447 2.67974 77.088 2.94813 77.2029 2.95817C84.8076 3.45189 88.1025 9.41671 88.0236 15.1131C87.9032 23.8551 80.4826 33.5157 64.4758 34.0711L63.6617 34.0998L59.8919 42.5993H62.802L65.3853 36.778C82.5565 35.8522 90.5336 24.9976 90.6693 15.1519C90.7828 7.03997 85.5496 0.996211 77.8951 0.277161H75.9029Z" fill="#E59356"/>
  </svg>

  );
};
 
 
const DesktopSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
    <path d="M9.13794 23.5C9.96663 22.3251 10.4395 20.9365 10.4999 19.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.862 23.5C14.0333 22.3251 13.5605 20.9365 13.5 19.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 23.501H16.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.5 16.501H23.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.5 0.501007H1.5C0.947715 0.501007 0.5 0.948722 0.5 1.50101V18.501C0.5 19.0533 0.947715 19.501 1.5 19.501H22.5C23.0523 19.501 23.5 19.0533 23.5 18.501V1.50101C23.5 0.948722 23.0523 0.501007 22.5 0.501007Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width={size} height={size} fill="white"/>
    </clipPath>
    </defs>
    </svg>
  );
};
 
 
const MobileSVG = ({ size = 16, color, extraClass }) => {
  return (
  <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
    <path d="M18.5 19.5H5.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21.25C12.0663 21.25 12.1299 21.2763 12.1768 21.3232C12.2237 21.3701 12.25 21.4337 12.25 21.5C12.25 21.5663 12.2237 21.6299 12.1768 21.6768C12.1299 21.7237 12.0663 21.75 12 21.75C11.9337 21.75 11.8701 21.7237 11.8232 21.6768C11.7763 21.6299 11.75 21.5663 11.75 21.5C11.75 21.4337 11.7763 21.3701 11.8232 21.3232C11.8701 21.2763 11.9337 21.25 12 21.25Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 0.5H7.5C6.39543 0.5 5.5 1.39543 5.5 2.5V21.5C5.5 22.6046 6.39543 23.5 7.5 23.5H16.5C17.6046 23.5 18.5 22.6046 18.5 21.5V2.5C18.5 1.39543 17.6046 0.5 16.5 0.5Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width={size} height={size} fill="white"/>
    </clipPath>
    </defs>
  </svg> 
  );
};
 
 
const HomeSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <mask id="path-2-inside-1" fill={color}>
    <path d="M9 21V10H15V21"/>
    </mask>
    <path d="M7 21C7 22.1046 7.89543 23 9 23C10.1046 23 11 22.1046 11 21H7ZM9 10V8C7.89543 8 7 8.89543 7 10H9ZM15 10H17C17 8.89543 16.1046 8 15 8V10ZM13 21C13 22.1046 13.8954 23 15 23C16.1046 23 17 22.1046 17 21H13ZM11 21V10H7V21H11ZM9 12H15V8H9V12ZM13 10V21H17V10H13Z" fill={color} mask="url(#path-2-inside-1)"/>
</svg>
  );
};
const ContactsSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg> 
  );
};
const SettingsSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};
const DollarSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1V23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> 
  );
};
const MusicSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg  width={size} height={size} className={[extraClass]}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18V5L21 3V16" stroke={color}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke={color}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z" stroke={color}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};
const SupportSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.92993 4.93L9.16993 9.17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8301 14.83L19.0701 19.07" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8301 9.17L19.0701 4.93" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.8301 9.17L18.3601 5.64" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.92993 19.07L9.16993 14.83" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}; 
const LogoutSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17L21 12L16 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  );
};

const UserSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>  
  );
};

const ProfileSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <circle opacity="0.8" cx="16" cy="16" r="16" fill={color}/>
      </mask>
      <g mask="url(#mask0)">
        <path opacity="0.8" d="M24 30V28C24 26.9391 23.5786 25.9217 22.8284 25.1716C22.0783 24.4214 21.0609 24 20 24H12C10.9391 24 9.92172 24.4214 9.17157 25.1716C8.42143 25.9217 8 26.9391 8 28V30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path opacity="0.8" d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle opacity="0.3" cx="16" cy="16" r="16" fill={color}/>
      </g>
    </svg>

  );
};

const ChatSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.02717 13.8098H8.07065L4.24456 17.6359V13.8098H2.33152C2.07784 13.8098 1.83454 13.709 1.65516 13.5296C1.47578 13.3502 1.375 13.1069 1.375 12.8533V2.33152C1.375 2.07784 1.47578 1.83454 1.65516 1.65516C1.83454 1.47578 2.07784 1.375 2.33152 1.375H18.5924C18.8461 1.375 19.0894 1.47578 19.2688 1.65516C19.4481 1.83454 19.5489 2.07784 19.5489 2.33152V8.07065" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9402 18.5924C10.9402 18.8461 11.041 19.0894 11.2203 19.2688C11.3997 19.4481 11.643 19.5489 11.8967 19.5489H17.1576L21.4619 23.375V19.5489H22.4184C22.6721 19.5489 22.9154 19.4481 23.0948 19.2688C23.2742 19.0894 23.375 18.8461 23.375 18.5924V10.9402C23.375 10.6865 23.2742 10.4432 23.0948 10.2639C22.9154 10.0845 22.6721 9.9837 22.4184 9.9837H11.8967C11.643 9.9837 11.3997 10.0845 11.2203 10.2639C11.041 10.4432 10.9402 10.6865 10.9402 10.9402V18.5924Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const OfflineSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.179 14.1216C22.9836 13.7497 23.661 13.1491 24.1267 12.3949C24.5925 11.6406 24.8259 10.7659 24.798 9.87991C24.7882 9.21654 24.6447 8.56196 24.3762 7.9553C24.1076 7.34864 23.7195 6.80235 23.2351 6.34909C22.7506 5.89582 22.1797 5.54489 21.5566 5.31727C20.9334 5.08964 20.2707 4.99 19.6082 5.02429C19.0231 3.84676 18.1193 2.85705 16.9996 2.16775C15.8799 1.47844 14.5892 1.11721 13.2744 1.12514C11.5132 1.10151 9.80935 1.75039 8.51004 2.93953C7.21073 4.12867 6.4138 5.76854 6.28169 7.52491C5.74274 7.40641 5.1842 7.40896 4.64635 7.53237C4.1085 7.65578 3.60472 7.89697 3.17134 8.23857C2.73795 8.58017 2.38574 9.01367 2.14011 9.50781C1.89447 10.002 1.76152 10.5444 1.75084 11.0962C1.70866 11.8868 1.9489 12.6666 2.42865 13.2964C2.9084 13.9263 3.59642 14.365 4.36983 14.5344" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.2751 23.1247C16.7465 23.1247 19.5607 20.3106 19.5607 16.8391C19.5607 13.3677 16.7465 10.5536 13.2751 10.5536C9.80365 10.5536 6.9895 13.3677 6.9895 16.8391C6.9895 20.3106 9.80365 23.1247 13.2751 23.1247Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4969 14.6171L11.053 19.061" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.4969 19.061L11.053 14.6171" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

const NpsSVG = ({ size = 16, color, extraClass }) => {
  return (
    <svg width={size} height={size} className={[extraClass]} viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.0034 10.134C19.2658 10.8778 19.3994 11.661 19.3983 12.4498" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.50342 12.4492C5.50339 11.3377 5.77003 10.2425 6.28095 9.25542C6.79187 8.26835 7.53216 7.41828 8.43965 6.77656C9.34715 6.13485 10.3954 5.72024 11.4963 5.56753C12.5972 5.41483 13.7187 5.52849 14.7666 5.89898" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.4505 14.1862C13.4097 14.1862 14.1873 13.4086 14.1873 12.4494C14.1873 11.4902 13.4097 10.7126 12.4505 10.7126C11.4912 10.7126 10.7136 11.4902 10.7136 12.4494C10.7136 13.4086 11.4912 14.1862 12.4505 14.1862Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6787 11.2207L18.8186 6.08084" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.4502 13.6074C23.4502 11.8705 23.0265 8.95252 22.2158 7.38879C21.4051 5.82505 20.2307 4.47886 18.7915 3.46345C17.3522 2.44804 15.6902 1.7931 13.9451 1.55372C12.2001 1.31434 10.4231 1.49752 8.76354 2.08785C7.10401 2.67819 5.61052 3.65841 4.40867 4.94607C3.20683 6.23373 2.33178 7.79118 1.85712 9.48742C1.48152 10.8297 1.36533 12.2278 1.51107 13.6073" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
 

export {
  DeleteSVG,
  EditSVG,
  CloseSVG,
  SearchSVG,
  RightSVG,
  LeftSVG,
  CheckSVG,
  ErrorSVG,
  InfoSVG,
  DownloadSVG,
  DoneSVG,
  LoadingSVG,
  CheckboxSVG,
  BackSVG,
  ListSVG,
  CopySVG,
  FilterSVG,
  DownSVG,
  PlusSVG,
  PluscircleSVG,
  UpSVG,
  HyperlinkSVG,
  UploadSVG,
  WindowsettingsSVG,
  AlarmbellcheckSVG,
  EmailsyncSVG,
  EmailcheckSVG,
  ThrottlingSVG,
  TickSVG,
  MoreSVG,
  MenuSVG,
  EmailSVG,
  SurveysparrowSVG,
  ArrowrightSVG,
  DesktopSVG,
  MobileSVG,
  HomeSVG,
  ContactsSVG,
  SettingsSVG,
  DollarSVG,
  MusicSVG,
  SupportSVG,
  LogoutSVG,
  UserSVG,
  PauseSVG,
  ProfileSVG,
  ColumnSVG,
  DownfillSVG,
  ChatSVG,
  NpsSVG,
  OfflineSVG,
  NextSVG,
  PrevSVG

};