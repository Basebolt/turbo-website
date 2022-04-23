import {
  ChatBubbleOutlined,
  ClosedCaptionOutlined,
  CompressOutlined,
  CopyAllOutlined,
  DarkModeOutlined,
  DoNotDisturbOutlined,
  FullscreenOutlined,
  GroupOutlined,
  HomeOutlined,
  InboxOutlined,
  LoginOutlined,
  LogoutOutlined,
  ManageAccountsOutlined,
  MicOffOutlined,
  PaletteOutlined,
  PersonAddOutlined,
  PersonRemoveOutlined,
  PictureInPictureAlt,
  PresentToAllOutlined,
  PushPinOutlined,
  RadioButtonChecked,
  SentimentSatisfied,
  StarOutlineOutlined,
  TimerOutlined,
  VideocamOffOutlined,
  VisibilityOffOutlined,
  VolumeOffOutlined,
  WarningAmberOutlined,
  WifiOffOutlined,
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

export const PRIVACY_POLICY = [
  {
    title: "Information you provide the extension when you log in",
    desc: "Our extension may access some of your personal data to function, this includes but is not limited to your email address and your public profile picture",
  },
  {
    title: "Chats/Attendance storage",
    desc: `Your meeting chats/attendance are stored locally on your browser, so that you can download them whenever required
    or upload them to Google Drive™`,
  },
  {
    title: "Drive uploads",
    desc: `‍The user voluntarily gives us permission to store text/xlxs files containing your meeting chats/attendance in the root directory of your Google Drive™ account.
    ‍`,
  },
  {
    title: "Chrome Permissions",
    desc: "Notifications: Allows us to send meeting chats as system notifications",
  },
  {
    title: "Google Analytics",
    desc: `We have implemented Google Analytics™ within our extension. This sends usage data (button clicks, etc.) to us anonymously so that we can know how users generally use the extension. This allows us to decide what feature improvements to prioritize on and how to improve the user experience. If you would not like to send such anonymous tracking data, you may turn off the 'Usage Reports' switch.`,
  },
];

export const PRODUCT = [
  {
    title: "what is turbo?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    title: "why use turbo?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    title: "turbo premium",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis egetLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
];

export const FEATURES = {
  free: {
    hotkeys: [
      {
        name: "Push to talk",
        desc: "Hold down hotkey to speak",
        icon: <CompressOutlined />,
        newRelease: true,
      },
      {
        name: "Quick Leave",
        desc: "Click hotkey to leave meeting",
        icon: <LogoutOutlined />,
        newRelease: true,
      },
    ],
    tools: [
      {
        name: "Chat logs",
        desc: "Collect meeting chats for download",
        icon: <InboxOutlined />,
        newRelease: true,
      },
      {
        name: "Attendance",
        desc: "Collect attendance for download",
        icon: <GroupOutlined />,
        newRelease: true,
      },
      {
        name: "Student points",
        desc: "Award students points easily",
        icon: <StarOutlineOutlined />,
        newRelease: true,
      },
      {
        name: "Meeting Timer",
        desc: "Display meeting timer",
        icon: <TimerOutlined />,
        newRelease: true,
      },
      {
        name: "Quick Emoji Reactions",
        desc: "Add emoji selector to chatbox",
        icon: <SentimentSatisfied />,
        newRelease: true,
      },
    ],
    presets: [
      {
        name: "Auto Join",
        desc: "Join meetings on page load",
        icon: <LoginOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Present",
        desc: "Directly enter presenting mode",
        icon: <PresentToAllOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Fullscreen",
        desc: "Enable fullscreen on joining",
        icon: <FullscreenOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Captions",
        desc: "Enable captions in meetings",
        icon: <ClosedCaptionOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Mute Mic",
        desc: "Mute mic before joining",
        icon: <MicOffOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Video Off",
        desc: "Turn off video before joining",
        icon: <VideocamOffOutlined />,
        newRelease: true,
      },

      {
        name: "Auto Admit",
        desc: "Automatically accept newRelease entrants",
        icon: <PersonAddOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Deny",
        desc: "Deny newRelease entrants automatically",
        icon: <PersonRemoveOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Copy URL",
        desc: "Copy newRelease meeting URL automatically",
        icon: <CopyAllOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Pin Chatbox",
        desc: "Enable dark theme for google meet",
        icon: <PushPinOutlined />,
        newRelease: true,
      },
      {
        name: "Auto Hide Popup",
        desc: "Hide all popups automatically",
        icon: <VisibilityOffOutlined />,
        newRelease: true,
      },
      {
        name: "Set Default Account",
        desc: "Default account for all meetings",
        icon: <ManageAccountsOutlined />,
        newRelease: true,
      },
    ],
    accessibility: [
      {
        name: "Leave Confirmation",
        desc: "Prompt with leave confirmation popup",
        icon: <WarningAmberOutlined />,
        newRelease: true,
      },
      {
        name: "Return to Homescreen",
        desc: "Go back to homescreen on ending calls",
        icon: <HomeOutlined />,
        newRelease: true,
      },
      {
        name: "Do Not Disturb (DND)",
        desc: "Hide newRelease chatbox/join notifications",
        icon: <DoNotDisturbOutlined />,
        newRelease: true,
      },
    ],
    notifications: [
      {
        name: "Messages",
        desc: "Enable chatbox notifications",
        icon: <ChatBubbleOutlined />,
        newRelease: false,
      },
      {
        name: "Connection Alerts",
        desc: "Notify me when connection is lost",
        icon: <WifiOffOutlined />,
      },
    ],
    appearance: [
      {
        name: "Dark mode",
        desc: "Enable dark theme for google meet",
        icon: <DarkModeOutlined />,
      },
    ],
  },
  premium: {
    tools: [
      {
        name: "Mute All",
        desc: "Keep all participants in the meeting muted, for an uninterupted meeting experience",
        icon: <VolumeOffOutlined />,
        color: "#F59E0B",
        newRelease: true,
      },
    ],
    appearance: [
      {
        name: "Picture in Picture",
        desc: "Watch your meeting videos above other apps for seamless multitasking.",
        icon: <PictureInPictureAlt />,
        color: "#2cbbce",
        newRelease: true,
      },
      {
        name: "Custom Themes",
        desc: "Personalize how Google Meet looks with fun custom themes. Make it yours xD",
        icon: <PaletteOutlined />,
        color: "#C78ADC",
        newRelease: true,
      },
    ],
    presets: [
      {
        name: "Auto Record",
        desc: "Automatically Record meetings as soon as they have begun",
        icon: <RadioButtonChecked />,
        color: "#f61067",
        newRelease: true,
      },
    ],
  },
};

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
    desc: `Tired of the one-way conversation with your audience? We provide a newRelease way to interact &
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
  "privacy-policy",
];

export const FOOTER_LINKS = {
  product: [
    { item: "What is Turbo?", path: "/product/" },
    { item: "Why use Turbo?", path: "/product/" },
    { item: "Turbo Premium", path: "/product/" },
    { item: "Roadmap", path: "/product/" },
  ],
  resources: [
    { item: "Tutorials", url: "https://youtube.com/" },
    { item: "Github", url: "https://github.com/" },
    { item: "Privacy Policy", path: "/" },
  ],
  help: [
    { item: "Github Issues", url: "https://github.com/" },
    { item: "Google Form", url: "https://forms.gle/wx8bTNh2W4p2Hevs9" },
    { item: "FAQ", path: "/product/" },
  ],
  community: [
    { item: "Discord", url: "https://discord.com/" },
    { item: "Github", url: "https://github.com/" },
    { item: "Instagram", url: "https://instagram.com/" },
  ],
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
