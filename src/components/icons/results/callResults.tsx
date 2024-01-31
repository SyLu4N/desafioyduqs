interface CallResultsProps {
  className?: string;
}

export function CallResults({ className = '' }: CallResultsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="54"
      viewBox="0 0 44 54"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_3563_6513)">
        <path
          d="M38.5104 53.6667H5.48953C4.19714 53.6667 3.14578 52.6154 3.14578 51.323V23.6929C3.14578 23.2614 3.49557 22.9116 3.92703 22.9116C4.35849 22.9116 4.70828 23.2614 4.70828 23.6929V51.323C4.70828 51.7538 5.0587 52.1042 5.48953 52.1042H38.5104C38.9412 52.1042 39.2916 51.7538 39.2916 51.323V40.724C39.2916 40.2925 39.6414 39.9427 40.0729 39.9427C40.5043 39.9427 40.8541 40.2925 40.8541 40.724V51.323C40.8541 52.6154 39.8028 53.6667 38.5104 53.6667ZM24.8409 39.269C24.3888 39.269 23.9457 39.0921 23.6119 38.7583L19.2289 34.3753H14.1034C12.9237 34.3753 11.891 33.6227 11.5334 32.5029C11.3098 31.8027 11.1304 31.0399 11.0002 30.2357C10.9312 29.8097 11.2207 29.4086 11.6466 29.3396C12.0719 29.271 12.4737 29.56 12.5427 29.9861C12.6605 30.7141 12.8217 31.401 13.0218 32.0276C13.1717 32.4973 13.6064 32.8129 14.1034 32.8129H18.7713V21.1873H14.1034C13.6064 21.1873 13.1718 21.5029 13.0218 21.9725C12.6982 22.9859 12.3124 24.6807 12.3124 27C12.3124 27.4315 11.9627 27.7813 11.5312 27.7813C11.0997 27.7813 10.7499 27.4315 10.7499 27C10.7499 24.4795 11.176 22.6164 11.5334 21.4971C11.891 20.3772 12.9237 19.6247 14.1034 19.6247H19.2289L23.6119 15.2417C24.1114 14.7421 24.8561 14.594 25.5088 14.8643C26.1615 15.1347 26.5833 15.7659 26.5833 16.4724V37.5275C26.5833 38.234 26.1615 38.8653 25.5088 39.1357C25.2921 39.2254 25.0655 39.269 24.8409 39.269ZM20.3337 33.2705L24.7167 37.6535C24.7725 37.7093 24.8378 37.7222 24.9108 37.6921C24.9837 37.6619 25.0207 37.6066 25.0207 37.5276V16.4725C25.0207 16.3936 24.9837 16.3383 24.9108 16.3081C24.8379 16.2779 24.7725 16.2908 24.7167 16.3467L20.3337 20.7297V33.2705ZM29.9166 3.91608V10.4896C29.9166 10.9205 30.267 11.2709 30.6979 11.2709H37.2714C36.2557 10.2551 34.9248 8.92431 33.594 7.59348C32.2632 6.26254 30.9323 4.93181 29.9166 3.91608ZM32.2604 34.7466C31.8289 34.7466 31.4791 34.3968 31.4791 33.9654V20.0347C31.4791 19.6033 31.8289 19.2535 32.2604 19.2535C32.6918 19.2535 33.0416 19.6033 33.0416 20.0347V33.9653C33.0416 34.3968 32.6918 34.7466 32.2604 34.7466ZM28.3541 2.67712C28.3541 2.24567 28.0043 1.89587 27.5729 1.89587H5.48953C5.0587 1.89587 4.70828 2.24629 4.70828 2.67712V20.5679C4.70828 20.9993 4.35849 21.3491 3.92703 21.3491C3.49557 21.3491 3.14578 20.9993 3.14578 20.5679V2.67712C3.14578 1.38473 4.19714 0.333374 5.48953 0.333374H27.5729C28.1988 0.333374 28.7873 0.577124 29.23 1.01973C29.23 1.01973 29.23 1.01973 29.2302 1.01983C29.3036 1.09327 32.0012 3.79087 34.6989 6.48858C37.3949 9.18462 40.091 11.8807 40.1675 11.9573C40.2441 12.034 40.1677 11.9573 40.1677 11.9574H40.1678C40.6104 12.4001 40.854 12.9886 40.854 13.6145V37.5989C40.854 38.0304 40.5042 38.3801 40.0728 38.3801C39.6413 38.3801 39.2915 38.0304 39.2915 37.5989V13.6146C39.2915 13.1832 38.9417 12.8334 38.5103 12.8334H30.6978C29.4054 12.8334 28.354 11.782 28.354 10.4896V2.67712H28.3541ZM35.3854 31.5894C34.9539 31.5894 34.6041 31.2396 34.6041 30.8082V23.192C34.6041 22.7606 34.9539 22.4108 35.3854 22.4108C35.8168 22.4108 36.1666 22.7606 36.1666 23.192V30.8082C36.1666 31.2396 35.8168 31.5894 35.3854 31.5894ZM29.1354 30.8921C28.7039 30.8921 28.3541 30.5423 28.3541 30.1109V23.8892C28.3541 23.4578 28.7039 23.108 29.1354 23.108C29.5668 23.108 29.9166 23.4578 29.9166 23.8892V30.1109C29.9166 30.5423 29.5668 30.8921 29.1354 30.8921Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_3563_6513">
          <rect
            width="42.6667"
            height="53.3333"
            fill="white"
            transform="translate(0.666626 0.333374)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
