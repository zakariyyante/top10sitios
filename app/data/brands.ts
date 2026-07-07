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
  // {
  //   id: "GinjaCasino",
  //   name: "GinjaCasino",
  //   logo: "/brands/GINJA.png",
  //   rating: 9.9,
  //   bonus: "Pacote de boas-até 1000€ + 555RG",
  //   url: "https://bestcpa.online/click?o=500&a=36&sub_id1=GinjaCasino-SL2PT7&aff_click_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "new_casino",
  // },
  
  
 
  // {
  //   id: "NeoSpin",
  //   name: "NeoSpin",
  //   logo: "/brands/neospin.svg",
  //   rating: 9.9,
  //   bonus: "300% até 7000€ + 300RG",
  //   url: "https://neospinlink.com/hi2yfh1ih?subid=NeoSpin-SL2PT7&visit_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "best_casino"
  // },
  // {
  //   id: "Sapphirebet",
  //   name: "Sapphirebet",
  //   logo: "/brands/sapphirebet.svg",
  //   rating: 9.9,
  //   bonus: "Pacote de boas-até 1500€ + 150RG",
  //   url: "https://track-sb.com/partners.php?id=ifn9dr45ghoxzfdxu7ff&web_id=Sapphirebet-SL2PT7&click_id=",
  //   isMobile: true,
  //   votes: 5921,
  // },
  // {
  //   id: "GoldenStar",
  //   name: "GoldenStar",
  //   logo: "/brands/goldenstar.svg",
  //   rating: 9.9,
  //   bonus: "Até 1000€ + 300RG",
  //   url: "https://goldenstarlink.com/unlrkk3kv?subid=GoldenStar-SL2PT7&visit_id=",
  //   isMobile: true,
  //   votes: 5921,
  // },
  
  
  // {
  //   id: "X3Bet",
  //   name: "X3Bet",
  //   logo: "/brands/x3bet.svg",
  //   rating: 9.9,
  //   bonus: "100% até 1000€ + 200RG",
  //   url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5425&utm_campaign=X3Bet-SL2PT7&afp=",
  //   isMobile: true,
  //   votes: 5921,
  // },
  // {
  //   id: "SpinReelz",
  //   name: "SpinReelz",
  //   logo: "/brands/spinreelz.svg",
  //   rating: 9.9,
  //   bonus: "425% até 5500€ + 525RG",
  //   url: "https://spinreelz777.net/dnjreg7bl?subid=SpinReelz-SL2PT7&visit_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "fast_withdrawal",
  // },
  {
    id: "CrownGreen",
    name: "CrownGreen",
    logo: "/brands/crown.svg",
    rating: 9.9,
    bonus: "Até 6000€ + 250RG",
    url: "https://clickcrowngreen.com/aoxa5o0el?subid=CrownGreen-SL2PT7&visit_id=",
    isMobile: true,
    votes: 5921,
    badge: "best_casino"
  },
  {
    id: "Atefia",
    name: "Atefia",
    logo: "/brands/atefia.webp",
    rating: 9.9,
    bonus: "100% até 1000€ + 200RG",
    url: "https://go.driveaffiliates.com/visit/?bta=35516&nci=5451&utm_campaign=Atefia-SL2PT7&afp=",
    isMobile: false,
    votes: 5921,
    badge: "new_casino"
  },
  {
    id: "SpinyRush",
    name: "SpinyRush",
    logo: "/brands/SPINY.svg",
    rating: 9.9,
    bonus: "425% até 5500€ + 525RG",
    url: "https://spinyrush777.net/dzp5c3o35?subid=SpinyRush-SL2PT7&visit_id=",
    isMobile: true,
    votes: 5921,
    badge: "fast_withdrawal",
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
