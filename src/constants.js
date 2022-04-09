import {
  PaletteOutlined,
  PictureInPictureAlt,
  RadioButtonChecked,
  VolumeOffOutlined,
} from "@mui/icons-material";

import {
  VisibilityOutlined,
  AssignmentIndOutlined,
  AccessibilityOutlined,
} from "@mui/icons-material";

export const EMOJIES = [
  { icon: "/images/emojies/laughing.png", alt: "" },
  { icon: "/images/emojies/grinning.png", alt: "" },
  { icon: "/images/emojies/smiling-heart-eyes.png", alt: "" },
  { icon: "/images/emojies/astonished.png", alt: "" },
];

export const QUICK_STATS = [
  {
    stat: 2,
    postfix: "",
    plus: false,
    load: true,
    sep: false,
    desc: "College Devs",
  },
  {
    stat: 2019,
    postfix: "",
    plus: false,
    load: false,
    sep: false,
    desc: "First release",
  },
  {
    stat: 2,
    postfix: "K",
    plus: true,
    load: true,
    sep: true,
    desc: "Downloads",
  },
  {
    stat: 40,
    postfix: "",
    plus: true,
    load: true,
    sep: true,
    desc: "New Features",
  },
];

export const SOCIAL_LINKS = [
  {
    platform: "instagram",
    icon: "/images/socials/instagram-logo.svg",
    url: "instagram.com",
  },
  {
    platform: "github",
    icon: "/images/socials/github-logo.svg",
    url: "github.com",
  },
  {
    platform: "discord",
    icon: "/images/socials/discord-logo.svg",
    url: "discord.com",
  },
];

export const REVIEWS = [
  {
    name: "Rahul Kulkarni",
    designation: "Tech Enthusiast",
    rating: 5,
    avatar: "/images/avatars/ultimateRRK.png",
    comment: `Very helpful tool! I like the fact that you get notified about stuff like in-call messages, connectivity and so on! Would absolutely recommend it, 10/10`,
  },
  {
    name: "Gavin Mitchel",
    designation: "Prof. in Physics at Oxford",
    rating: 5,
    avatar: "/images/avatars/avatar.png",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget`,
  },
  {
    name: "Gavin Mitchel",
    designation: "Prof. in Physics at Oxford",
    rating: 5,
    avatar: "/images/avatars/avatar.png",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget`,
  },
  {
    name: "Gavin Mitchel",
    designation: "Prof. in Physics at Oxford",
    rating: 5,
    avatar: "/images/avatars/avatar.png",
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget`,
  },
];

export const ExtensionAvailability = {
  edge: {
    url: "",
    available: false,
  },
  firefox: {
    url: "",
    available: false,
  },
  chrome: {
    url: "https://chrome.google.com/webstore/detail/notifs-for-meet/iinecemgdedknjoenecmgjlghnkmbofc",
    available: true,
  },
};

export const PRODUCT_FEATURES = [
  {
    title: `Interact with your audience, better`,
    desc: `Tired of the one-way conversation with your audience? We provide a new way to interact &
    make your meetings fun and intutive`,
    illus: "/images/illus/illus1",
    illusMobile: "/images/illusMobile/illus1",
    color: "#7383D1",
  },
  {
    title: `Automative presets to the rescue!`,
    desc: `Relieve yourself from the hassle of repietitive configurations of your google meet preferences with our one-time-configuration features`,
    illus: "/images/illus/illus2",
    illusMobile: "/images/illusMobile/illus2",
    color: "#29B571",
  },
  {
    title: `Built with teachers & students in mind`,
    desc: `Manage your online classes with ease, with useful tools and features that provide a more seamless and uninterupted experience.`,
    illus: "/images/illus//illus3",
    illusMobile: "/images/illusMobile/illus3",
    color: "#E98258",
  },
];

export const SPONSORS = [
  {
    name: "google",
    wordmark: "/images/sponsors/google-wordmark.svg",
  },
  {
    name: "techcrunch",
    wordmark: "/images/sponsors/techcrunch-wordmark.svg",
  },
  {
    name: "hubspot",
    wordmark: "/images/sponsors/hubspot-wordmark.svg",
  },
  {
    name: "techradar",
    wordmark: "/images/sponsors/techradar-wordmark.svg",
  },
];

export const NAVBAR_LINKS = [
  "what's-new",
  {
    tutorials: [
      {
        icon: <VisibilityOutlined />,
        color: "#f61067",
        title: "Overview",
        desc: "Quick run-through of Turbo's Features",
      },
      {
        icon: <AssignmentIndOutlined />,
        color: "#22AC6A",
        title: "Teacher's Tutorial",
        desc: "Set up Turbo for your next class!",
      },
      {
        icon: <AccessibilityOutlined />,
        color: "#6E86FF",
        title: "Student's Tutorial",
        desc: "See how handy a tool it can be :)",
      },
    ],
  },
  "about",
  "roadmap",
];

export const PREMIUM_FEATURES = [
  {
    title: "Mute All",
    desc: "Keep all participants in the meeting muted, for an uninterupted meeting experience",
    icon: <VolumeOffOutlined />,
    color: "#F59E0B",
  },

  {
    title: "Picture in Picture",
    desc: "Watch your meeting videos above other apps for seamless multitasking.",
    icon: <PictureInPictureAlt />,
    color: "#2cbbce",
  },
  {
    title: "Custom Themes",
    desc: "Personalize how Google Meet looks with fun custom themes. Make it yours xD",
    icon: <PaletteOutlined />,
    color: "#C78ADC",
  },
  {
    title: "Auto Record",
    desc: "Automatically Record meetings as soon as they have begun",
    icon: <RadioButtonChecked />,
    color: "#f61067",
  },
];

export const FOOTER_LINKS = {
  product: ["What is Turbo?", "Why use Turbo?", "Turbo Premium", "Roadmap"],
  resources: ["Tutorials", "Github", "Privacy Policy"],
  help: ["Github Issues", "Google Form", "FAQ"],
  community: ["Discord", "Github", "Instagram"],
};

export const FAQ_ITEMS = [
  {
    title: "What is turbo?",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget`,
  },
  {
    title: "Why use turbo?",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget`,
  },
  {
    title: "What are premium features?",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget`,
  },
  {
    title: "Can Turbo imrpove my meeting experience?",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget`,
  },
  {
    title: "Does turbo store my data?",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget`,
  },
];
