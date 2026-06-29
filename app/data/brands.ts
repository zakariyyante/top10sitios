export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  badge?: "fast_withdrawal" | "best_casino" | "new_casino";
}

export const brands: Brand[] = [
  
  
  {
    id: "LolaJack",
    name: "LolaJack",
    logo: "/brands/lolajack.webp",
    rating: 9.9,
    bonus: "400% até 15000€ + 400RG",
    url: "https://llj.lynmonkel.com/?mid=376549_2180185&subid=LolaJack-SL2PT7&clickid=",
    isMobile: true,
    votes: 5921,
    badge: "best_casino",
  },
  
  {
    id: "SpinReelz",
    name: "SpinReelz",
    logo: "/brands/spinreelz.svg",
    rating: 9.9,
    bonus: "425% até 5500€ + 525RG",
    url: "https://spinreelz777.net/dnjreg7bl?subid=SpinReelz-SL2PT7&visit_id=",
    isMobile: true,
    votes: 5921,
    badge: "fast_withdrawal",
  },
  {
    id: "GinjaCasino",
    name: "GinjaCasino",
    logo: "/brands/lolajack.webp",
    rating: 9.9,
    bonus: "PACOTE DE BOAS-ATÉ €1000 + 555RG",
    url: "https://bestcpa.online/click?o=500&a=36&sub_id1=GinjaCasino-ANTEPT15&aff_click_id=",
    isMobile: true,
    votes: 5921,
    badge: "new_casino",
  },
  {
    id: "X3Bet",
    name: "X3Bet",
    logo: "/brands/x3bet.svg",
    rating: 9.9,
    bonus: "100% até 1000€ + 200RG",
    url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5425&utm_campaign=X3Bet-SL2PT7&afp=",
    isMobile: true,
    votes: 5921,
  },
  // {
  //   id: "CrownGreen",
  //   name: "CrownGreen",
  //   logo: "/brands/crown.svg",
  //   rating: 9.9,
  //   bonus: "ATÉ 6.000€ + 250 FS",
  //   url: "https://clickcrowngreen.com/aoxa5o0el?subid=CrownGreen-SL2PT7&visit_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "new_casino",
  // },
  // {
  //   id: "SpinFin",
  //   name: "SpinFin",
  //   logo: "/brands/SPINFIN.png",
  //   rating: 9.9,
  //   bonus: "1350% até €10 000 + 500 RG",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5422&utm_campaign=SpinFin-SL2PT7&afp=",
  //   isMobile: true,
  //   votes: 5921,
  // },
  {
    id: "bwin",
    name: "Bwin",
    logo: "/brands/bwin_dark.png",
    rating: 9.9,
    bonus: "100% ATÉ €200 DE BÓNUS CASINO",
    url: "https://www.bwin.pt/?utm_source=casinotoppt&utm_medium=referral&clickid=",
    isMobile: false,
    votes: 5921,
  },
];
