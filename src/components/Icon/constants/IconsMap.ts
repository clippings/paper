const iconsMap: { [key: string]: string[] } = {
  ARROW: [
    'M7.53033 1.46967L13.0607 7L7.53033 12.5303L6.46967 11.4697L10.1893 7.75L0.999999 7.75L0.999999 6.25L10.1893 6.25L6.46967 2.53033L7.53033 1.46967Z',
  ],
  ARROW_DOWN: [
    'M12.5303 7.53033L7 13.0607L1.46967 7.53033L2.53033 6.46967L6.25 10.1893L6.25 1L7.75 1L7.75 10.1893L11.4697 6.46967L12.5303 7.53033Z',
  ],
  ARROW_LEFT: [
    'M6.46967 12.5303L0.939339 7L6.46967 1.46967L7.53033 2.53033L3.81066 6.25L13 6.25L13 7.75L3.81066 7.75L7.53033 11.4697L6.46967 12.5303Z',
  ],
  ARROW_UP: [
    'M1.46967 6.46967L7 0.93934L12.5303 6.46967L11.4697 7.53033L7.75 3.81066V13H6.25V3.81066L2.53033 7.53033L1.46967 6.46967Z',
  ],
  BELL: [
    'M2 11L3 7.75L3.24145 4.49044C3.38723 2.52236 5.02653 1 7 1C8.97347 1 10.6128 2.52236 10.7586 4.49044L11 7.75L12 11H2ZM10.0111 7.93632L10.646 10H3.35396L3.98894 7.93632L4.23872 4.56431C4.34582 3.11843 5.55016 2 7 2C8.44984 2 9.65418 3.11843 9.76128 4.56431L10.0111 7.93632Z',
    'M5.5 12C5.5 12.6904 6.05964 13.25 6.75 13.25H7.25C7.94036 13.25 8.5 12.6904 8.5 12H5.5Z',
  ],
  BOARD: ['M6 2H2V6H6V2Z', 'M6 8H2V12H6V8Z', 'M8 2H12V6H8V2Z', 'M12 8H8V12H12V8Z'],
  CALENDAR: ['M4 2H5V3H9V2H10V3H13V13H1V3H4V2ZM9 4V5H10V4H12V6H2V4H4V5H5V4H9ZM2 7V12H12V7H2Z'],
  CHEVRON: [
    'M11.0607 7L5.53032 12.5303L4.46966 11.4697L8.93933 7L4.46966 2.53033L5.53032 1.46967L11.0607 7Z',
  ],
  CHEVRON_DOUBLE: [
    'M2.53033 12.5303L8.06066 7L2.53033 1.46967L1.46967 2.53033L5.93934 7L1.46967 11.4697L2.53033 12.5303Z',
    'M7.53033 12.5303L13.0607 7L7.53033 1.46967L6.46967 2.53033L10.9393 7L6.46967 11.4697L7.53033 12.5303Z',
  ],
  CHEVRON_DOWN: [
    'M7 11.3L1.46968 5.76967L2.53033 4.70901L7 9.17868L11.4697 4.70901L12.5303 5.76967L7 11.3Z',
  ],
  CHEVRON_LEFT: [
    'M2.93933 7L8.46966 1.46968L9.53032 2.53033L5.06065 7L9.53032 11.4697L8.46966 12.5303L2.93933 7Z',
  ],
  CHEVRON_UP: [
    'M7 3.93935L12.5303 9.46968L11.4697 10.5303L7 6.06067L2.53033 10.5303L1.46967 9.46968L7 3.93935Z',
  ],
  CLOSE: [
    'M7 8.06066L10.9697 12.0303L12.0303 10.9697L8.06066 7L12.0303 3.03033L10.9697 1.96967L7 5.93934L3.03033 1.96967L1.96967 3.03033L5.93934 7L1.96967 10.9697L3.03033 12.0303L7 8.06066Z',
  ],
  DOWNLOAD: [
    'M7 10.9965L11.3536 6.64299L10.6464 5.93589L7.5 9.08233L7.5 1.5H6.5L6.5 9.08233L3.35355 5.93589L2.64645 6.64299L7 10.9965Z',
    'M12 12H2V13H12V12Z',
  ],
  DUPLICATE: ['M5 2H12V9H11V10H12H13V1H4V2V3H5V2ZM1 13H10V4H1V13ZM2 5H9V12H2V5Z'],
  EDIT: [
    'M11.6148 1.08582L13.9142 3.20714L3.29937 13H1V10.8787L11.6148 1.08582ZM2.08393 11.2929V12H2.85039L10.7554 4.70713L9.98895 4.00002L2.08393 11.2929ZM10.7554 3.29292L11.5219 4.00002L12.3813 3.20714L11.6148 2.50003L10.7554 3.29292Z',
  ],
  EXPORT: [
    'M9.18934 3.75H3.5V2.25H11.75V10.5H10.25V4.81066L3.03033 12.0303L1.96967 10.9697L9.18934 3.75Z',
  ],
  FOLDER: [
    'M12 6H14L12 13H1V2.5H6L7 4H12V6ZM11 5H6.46482L5.46482 3.5H2V9.5L3 6H11V5ZM11.2457 12H2.32573L3.7543 7H12.6743L11.2457 12Z',
  ],
  HAPPY: [
    'M5 6.25C5.55228 6.25 6 5.80228 6 5.25C6 4.69772 5.55228 4.25 5 4.25C4.44772 4.25 4 4.69772 4 5.25C4 5.80228 4.44772 6.25 5 6.25Z',
    'M10 5.25C10 5.80228 9.55229 6.25 9 6.25C8.44772 6.25 8 5.80228 8 5.25C8 4.69772 8.44772 4.25 9 4.25C9.55229 4.25 10 4.69772 10 5.25Z',
    'M3.58398 8.77736C5.20905 11.215 8.79097 11.215 10.416 8.77736L9.58398 8.22266C8.35474 10.0665 5.64528 10.0665 4.41603 8.22266L3.58398 8.77736Z',
    'M7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5ZM1.5 7C1.5 3.96243 3.96243 1.5 7 1.5C10.0376 1.5 12.5 3.96243 12.5 7C12.5 10.0376 10.0376 12.5 7 12.5C3.96243 12.5 1.5 10.0376 1.5 7Z',
  ],
  HIDE: [
    'M1.06609 7.24843C1.06609 7.24843 1.06588 7.24807 1.5 7C1.93412 6.75193 1.93396 6.75165 1.93396 6.75165L1.93694 6.75674L1.95116 6.78056C1.96442 6.80249 1.9852 6.8362 2.01336 6.88001C2.06973 6.96769 2.15545 7.09546 2.26948 7.24995C2.49809 7.55968 2.83743 7.97266 3.27866 8.38447C4.16613 9.21277 5.42482 10 7 10C8.57518 10 9.83388 9.21277 10.7213 8.38447C11.1626 7.97266 11.5019 7.55968 11.7305 7.24995C11.8446 7.09546 11.9303 6.96769 11.9866 6.88001C12.0148 6.8362 12.0356 6.80249 12.0488 6.78056L12.0631 6.75674L12.0659 6.75188L12.5 7C12.9341 7.24807 12.9339 7.24843 12.9339 7.24843L12.933 7.24999L12.9312 7.25319L12.9253 7.26333L12.9045 7.29805C12.8868 7.32739 12.8612 7.36887 12.8278 7.42077C12.7611 7.52449 12.6633 7.67016 12.5351 7.8438C12.2793 8.19031 11.8999 8.65234 11.4037 9.11552C11.2843 9.22692 11.1576 9.33891 11.0237 9.44973L12.1662 11.0814L11.347 11.655L10.2141 10.037C9.84021 10.2718 9.42812 10.4825 8.97939 10.6466L9.29489 12.4359L8.31008 12.6095L8.01038 10.9098C7.68832 10.9679 7.35139 11 7 11C6.73873 11 6.48545 10.9823 6.24034 10.9493L5.9476 12.6095L4.96279 12.4359L5.26365 10.7296C4.82355 10.5897 4.41647 10.4039 4.04381 10.1914L3.01901 11.655L2.19986 11.0814L3.2113 9.63691C2.98855 9.46619 2.78341 9.29012 2.59634 9.11552C2.10007 8.65234 1.72066 8.19031 1.4649 7.8438C1.33674 7.67016 1.23887 7.52449 1.17219 7.42077C1.13883 7.36887 1.11322 7.32739 1.09547 7.29805L1.07475 7.26333L1.06883 7.25319L1.06698 7.24999L1.06609 7.24843Z',
  ],
  IMPORT: [
    'M4.53039 10.5303H10.2197V12.0303L1.96973 12.0303L1.96973 3.78033H3.46973L3.46973 9.46967L10.6894 2.25L11.7501 3.31067L4.53039 10.5303Z',
  ],
  INVITE: [
    'M4.5 7.5C5.60457 7.5 6.5 6.60457 6.5 5.5C6.5 4.39543 5.60457 3.5 4.5 3.5C3.39543 3.5 2.5 4.39543 2.5 5.5C2.5 6.60457 3.39543 7.5 4.5 7.5ZM7.5 5.5C7.5 6.48071 7.02942 7.3515 6.30175 7.89891C6.49074 7.9943 6.66541 8.10458 6.82646 8.22728C7.40463 8.66779 7.77839 9.24602 8.02058 9.79959C8.26266 10.3529 8.38124 10.8994 8.44008 11.3028C8.46968 11.5058 8.48463 11.6759 8.49219 11.7969C8.49598 11.8575 8.49793 11.906 8.49893 11.9405C8.49944 11.9577 8.4997 11.9715 8.49984 11.9815L8.49997 11.9936L8.5 11.9975L8.5 11.999L8.5 11.9995C8.5 11.9998 8.5 12 8 12C7.5 12 7.5 12.0002 7.5 12.0004L7.49994 11.9956L7.49936 11.9697C7.49865 11.9455 7.49719 11.9081 7.49414 11.8593C7.48803 11.7616 7.47563 11.6192 7.45055 11.4472C7.40001 11.1006 7.29984 10.6471 7.10442 10.2004C6.90911 9.75398 6.62662 9.33221 6.22042 9.02272C5.82079 8.71824 5.2726 8.5 4.5 8.5C3.7274 8.5 3.17921 8.71824 2.77958 9.02272C2.37338 9.33221 2.09089 9.75398 1.89558 10.2004C1.70016 10.6471 1.59999 11.1006 1.54945 11.4472C1.52437 11.6192 1.51197 11.7616 1.50586 11.8593C1.50281 11.9081 1.50135 11.9455 1.50064 11.9697L1.50006 11.9956L1.5 12.0004C1.5 12.0002 1.5 12 1 12C0.5 12 0.5 11.9998 0.5 11.9995V11.999L0.500004 11.9975L0.500025 11.9936L0.500156 11.9815C0.500297 11.9715 0.500564 11.9577 0.501067 11.9405C0.502072 11.906 0.504023 11.8575 0.507809 11.7969C0.515373 11.6759 0.530317 11.5058 0.559921 11.3028C0.618755 10.8994 0.737343 10.3529 0.979421 9.79959C1.22161 9.24602 1.59537 8.66779 2.17354 8.22728C2.33459 8.10458 2.50926 7.9943 2.69825 7.89891C1.97058 7.3515 1.5 6.48071 1.5 5.5C1.5 3.84315 2.84315 2.5 4.5 2.5C6.15685 2.5 7.5 3.84315 7.5 5.5ZM7.5 12.0004L7.5 12.0007L7.5 12.0006L7.5 12.0004ZM1.5 12.0004L1.5 12.0006L1.5 12.0007L1.5 12.0004ZM10.5 4.5H11.5V6.5H13.5V7.5H11.5V9.5H10.5V7.5H8.5V6.5L10.5 6.5V4.5Z',
  ],
  LINK: [
    'M4.5 3.5H6V4.5H4.5C3.11929 4.5 2 5.61929 2 7C2 8.38071 3.11929 9.5 4.5 9.5H6V10.5H4.5C2.567 10.5 1 8.933 1 7C1 5.067 2.567 3.5 4.5 3.5Z',
    'M9.5 9.5H8V10.5H9.5C11.433 10.5 13 8.933 13 7C13 5.067 11.433 3.5 9.5 3.5H8V4.5H9.5C10.8807 4.5 12 5.61929 12 7C12 8.38071 10.8807 9.5 9.5 9.5Z',
    'M4.5 7.5H9.5V6.5H4.5V7.5Z',
  ],
  LIST: ['M2 2H12V4H2V2ZM2 6H12V8H2V6ZM12 10H2V12H12V10Z'],
  MATERIALS: [
    'M6.1424 12.6401C6.64304 12.9646 7 13.5 7 13.5C7 13.5 7.35696 12.9646 7.85761 12.6401C8.19492 12.4215 8.59746 12.2987 9 12.5L11 13.5L13 10.5C13 10.5 11 9 11 7.5C11 5.5 13 4.78125 13 4.78125L12 1.78125C12 1.78125 10.5 2.28125 9.5 2.28125C8.5 2.28125 8.5 1 8.5 1H5.5C5.5 1 5.5 2.28125 4.5 2.28125C3.5 2.28125 2 1.78125 2 1.78125L1 4.78125C1 4.78125 3 5.5 3 7.5C3 9 1 10.5 1 10.5L3 13.5L5 12.5C5.40254 12.2987 5.80508 12.4215 6.1424 12.6401ZM3.41084 11.9529L4.46334 11.4267C5.53652 10.8901 6.49464 11.3983 7 11.7774C7.50535 11.3983 8.46348 10.8901 9.53666 11.4267L10.5892 11.9529L11.4239 10.7008C11.3199 10.5961 11.2118 10.482 11.1031 10.3597C10.5754 9.7661 9.8 8.72403 9.8 7.5C9.8 6.047 10.5424 5.06098 11.2179 4.48052C11.3295 4.38457 11.4407 4.29829 11.5484 4.22112L11.2222 3.24246C10.7231 3.35974 10.0769 3.48125 9.5 3.48125C8.96859 3.48125 8.50367 3.302 8.14249 2.9935C7.85262 2.7459 7.67216 2.45234 7.55874 2.2H6.44126C6.32784 2.45234 6.14739 2.7459 5.85751 2.9935C5.49634 3.302 5.03141 3.48125 4.5 3.48125C3.92307 3.48125 3.27692 3.35974 2.77784 3.24246L2.45162 4.22111C2.55931 4.29829 2.67046 4.38457 2.78212 4.48052C3.45756 5.06098 4.2 6.047 4.2 7.5C4.2 8.72403 3.42457 9.7661 2.89689 10.3597C2.78824 10.482 2.6801 10.5961 2.57612 10.7008L3.41084 11.9529Z',
  ],
  MENU: ['M1 1H13V3H1V1Z', 'M1 6H13V8H1V6Z', 'M13 11H1V13H13V11Z'],
  MESSAGE: [
    'M1 4C1 2.89543 1.89543 2 3 2H11C12.1046 2 13 2.89543 13 4V9C13 10.1046 12.1046 11 11 11H9V13L7 11H3C1.89543 11 1 10.1046 1 9V4ZM3 3.2H11C11.4418 3.2 11.8 3.55817 11.8 4V9C11.8 9.44183 11.4418 9.8 11 9.8H3C2.55817 9.8 2.2 9.44183 2.2 9V4C2.2 3.55817 2.55817 3.2 3 3.2Z',
  ],
  MORE: [
    'M4 7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6C3.55228 6 4 6.44772 4 7ZM8 7C8 7.55228 7.55228 8 7 8C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6C7.55228 6 8 6.44772 8 7ZM11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8Z',
  ],
  MOVE_TO: [
    'M2 1V4.5H3V2H11V12H3V9.5H2V13H12V1H2Z',
    'M10.0152 6.99998L6.66168 3.64642L5.95457 4.35353L8.10102 6.49998H1V7.49998H8.10102L5.95457 9.64642L6.66168 10.3535L10.0152 6.99998Z',
  ],
  PICKER: ['M7 1L5 5H9L7 1ZM7 13L9 9H5L7 13Z'],
  PLUS: ['M7.75 6.25L7.75 1H6.25L6.25 6.25H1V7.75H6.25L6.25 13H7.75L7.75 7.75H13V6.25H7.75Z'],
  RESTORE: [
    'M12.5 8.75001C12.5 6.95508 11.0449 5.5 9.25 5.5L3.20711 5.5L6.35355 8.64645L5.64645 9.35356L1.29289 5L5.64645 0.646454L6.35355 1.35356L3.20711 4.5L9.25 4.5C11.5972 4.5 13.5 6.4028 13.5 8.75001C13.5 11.0972 11.5972 13 9.25 13L3 13L3 12L9.25 12C11.0449 12 12.5 10.5449 12.5 8.75001Z',
  ],
  SEARCH: [
    'M9.16437 9.87147C8.30243 10.5768 7.20063 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6C11 7.20064 10.5768 8.30243 9.87147 9.16437L12.8366 12.1295L12.1295 12.8366L9.16437 9.87147ZM10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z',
  ],
  SHOW: [
    'M2.59635 4.88447C3.58388 3.96277 5.07519 3 7.00001 3C8.92483 3 10.4161 3.96277 11.4037 4.88447C11.8999 5.34766 12.2793 5.80969 12.5351 6.1562C12.6633 6.32983 12.7611 6.4755 12.8278 6.57923C12.8612 6.63112 12.8868 6.67261 12.9045 6.70195L12.9253 6.73667L12.9312 6.74681L12.933 6.75001L12.9337 6.75113L13.0759 7L12.9339 7.24843L12.933 7.24999L12.9312 7.25319L12.9253 7.26333L12.9045 7.29805C12.8868 7.32739 12.8612 7.36888 12.8278 7.42077C12.7611 7.5245 12.6633 7.67017 12.5351 7.8438C12.2793 8.19031 11.8999 8.65234 11.4037 9.11553C10.4161 10.0372 8.92483 11 7.00001 11C5.07519 11 3.58388 10.0372 2.59635 9.11553C2.10008 8.65234 1.72067 8.19031 1.46491 7.8438C1.33675 7.67017 1.23887 7.5245 1.17219 7.42077C1.13883 7.36888 1.11322 7.32739 1.09548 7.29805L1.07476 7.26333L1.06884 7.25319L1.06699 7.24999L1.06634 7.24887L0.924133 7L1.06609 6.75157L1.06699 6.75001L1.06884 6.74681L1.07476 6.73667L1.09548 6.70195C1.11322 6.67261 1.13883 6.63112 1.17219 6.57923C1.23887 6.4755 1.33675 6.32983 1.46491 6.1562C1.72067 5.80969 2.10008 5.34766 2.59635 4.88447ZM2.09259 7C2.14085 7.07134 2.19989 7.15567 2.26948 7.24995C2.4981 7.55969 2.83744 7.97266 3.27867 8.38447C4.16613 9.21277 5.42483 10 7.00001 10C8.57519 10 9.83388 9.21277 10.7213 8.38447C11.1626 7.97266 11.5019 7.55969 11.7305 7.24995C11.8001 7.15567 11.8592 7.07133 11.9074 7C11.8592 6.92866 11.8001 6.84433 11.7305 6.75005C11.5019 6.44031 11.1626 6.02734 10.7213 5.61553C9.83388 4.78723 8.57519 4 7.00001 4C5.42483 4 4.16613 4.78723 3.27867 5.61553C2.83744 6.02734 2.4981 6.44031 2.26948 6.75005C2.19989 6.84433 2.14085 6.92866 2.09259 7Z',
    'M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z',
  ],
  SIZE: [
    'M10.0515 3.09999H6.99999V1.89999H12.1V6.99999H10.9V3.94852L3.94852 10.9H6.99999V12.1H1.89999V6.99999H3.09999V10.0515L10.0515 3.09999Z',
  ],
  SORT: [
    'M10.5 12L10.5 3.20712L12.6464 5.35356L13.3535 4.64646L10 1.29291L6.64644 4.64646L7.35355 5.35357L9.5 3.20712L9.49999 12H10.5Z',
    'M3.50001 2.00001L3.50001 10.7929L1.35356 8.64646L0.646454 9.35357L4.00001 12.7071L7.35356 9.35357L6.64645 8.64646L4.50001 10.7929L4.50001 2.00001H3.50001Z',
  ],
  TEXT: [
    'M2 2H12V4.82609H10.6957V3.30435H7.65217V10.6957H9.17391V12H4.82609V10.6957H6.34783V3.30435H3.30435V4.82609H2V2Z',
  ],
  TICK: [
    'M13.5529 3.5068L5.70769 12.0652L1.48775 8.11925L2.51224 7.02361L5.62563 9.93484L12.4471 2.49321L13.5529 3.5068Z',
  ],
  TRASH: [
    'M6.5 5V11H5.5V5H6.5Z',
    'M8.5 11V5H7.5V11H8.5Z',
    'M9 1H5V3H2V4H2.6L3.5 13H10.5L11.4 4H12V3H9V1ZM8 2H6V3H8V2ZM3.60499 4L4.40499 12H9.59501L10.395 4H3.60499Z',
  ],
  UPLOAD: [
    'M6.5 1.5C4.98899 1.5 3.73814 2.61756 3.53036 4.07106L3.46792 4.50789L3.02672 4.50023L3 4.5C2.17157 4.5 1.5 5.17157 1.5 6C1.5 6.82843 2.17157 7.5 3 7.5H3.87867L2.88144 8.49724C1.55578 8.43534 0.5 7.34097 0.5 6C0.5 4.74889 1.41902 3.71243 2.61881 3.52888C3.05292 1.78889 4.62557 0.5 6.5 0.5C7.99907 0.5 9.30461 1.32455 9.98946 2.54335C10.1556 2.51483 10.3262 2.5 10.5 2.5C12.1569 2.5 13.5 3.84315 13.5 5.5C13.5 6.96277 12.4531 8.18103 11.0677 8.44636L10.1213 7.5H10.5C11.6046 7.5 12.5 6.60457 12.5 5.5C12.5 4.39543 11.6046 3.5 10.5 3.5C10.281 3.5 10.0712 3.53501 9.8753 3.59936L9.43988 3.74236L9.25959 3.32101C8.80105 2.24933 7.73746 1.5 6.5 1.5Z',
    'M7.49999 13.5V7.70711L9.64644 9.85355L10.3535 9.14644L6.99999 5.79289L3.64644 9.14644L4.35355 9.85355L6.49999 7.70711V13.5H7.49999Z',
  ],
  ZOOM_IN: [
    'M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10ZM6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z',
    'M8.5 9.20711L9.20711 8.5L12.8366 12.1295L12.1295 12.8366L8.5 9.20711Z',
    'M6.4 4H5.6V5.6H4V6.4H5.6V8H6.4V6.4H8V5.6H6.4V4Z',
  ],
  ZOOM_OUT: [
    'M8 6.4V5.6H4V6.4L8 6.4Z',
    'M6 11C7.20063 11 8.30243 10.5768 9.16437 9.87147L12.1295 12.8366L12.8366 12.1295L9.87147 9.16437C10.5768 8.30243 11 7.20064 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z',
  ],
  QUESTION_MARK: [
    'M3.83496 4.78125H5.25C5.31152 3.87891 5.91992 3.31152 6.86328 3.31152C7.7998 3.31152 8.4082 3.87891 8.4082 4.65137C8.4082 5.35547 8.11426 5.75195 7.28711 6.25098C6.35059 6.81152 5.93359 7.42676 5.96777 8.39062L5.97461 8.9375H7.38965V8.52051C7.38965 7.81641 7.64258 7.4541 8.52441 6.93457C9.42676 6.39453 9.95996 5.64941 9.95996 4.58984C9.95996 3.12695 8.74316 2.05371 6.93848 2.05371C4.95605 2.05371 3.89648 3.23633 3.83496 4.78125ZM6.69238 12.1025C7.20508 12.1025 7.59473 11.7197 7.59473 11.2207C7.59473 10.7217 7.20508 10.3389 6.69238 10.3389C6.19336 10.3389 5.79688 10.7217 5.79688 11.2207C5.79688 11.7197 6.19336 12.1025 6.69238 12.1025Z',
  ],
  EXCLAMATION_MARK: [
    'M6.23438 2.13574L6.34375 8.73242H7.64941L7.75879 2.13574H6.23438ZM6.99316 12.1025C7.50586 12.1025 7.89551 11.7197 7.89551 11.2207C7.89551 10.7217 7.50586 10.3389 6.99316 10.3389C6.49414 10.3389 6.09766 10.7217 6.09766 11.2207C6.09766 11.7197 6.49414 12.1025 6.99316 12.1025Z',
  ],
};

export default iconsMap;
