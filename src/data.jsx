// Navigation Data
import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
export const data = [
  { id: 1, url: "./", name: "Home" },
  { id: 2, url: "./Offers", name: "Offers" },
  { id: 3, url: "./Genres", name: "Genres" },
  { id: 4, url: "./About", name: "About" },
];

// Games Data
const Games = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    image_url:
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    genre: "Action-Adventure",
    description:
      "An open-world action-adventure game where you explore the vast kingdom of Hyrule, solve puzzles, defeat enemies, and discover secrets to save Princess Zelda.",
    price: 59.99,
    videoId: "zw47_q9wbBE",
  },
  {
    id: 2,
    name: "Super Mario Odyssey",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
    genre: "Platformer",
    description:
      "Join Mario on a globe-trotting adventure across diverse worlds as he tries to rescue Princess Peach from Bowser, using new abilities like capturing enemies with his hat, Cappy.",
    price: 49.99,
    videoId: "5kcdRBHM7kM",
  },
  {
    id: 3,
    name: "The Witcher 3: Wild Hunt",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    genre: "Action RPG",
    description:
      "Play as Geralt of Rivia, a monster hunter navigating a war-torn world filled with treacherous politics, dangerous beasts, and ancient magic in this expansive role-playing game.",
    price: 39.99,
    videoId: "tDfa1Qp2tx4",
  },
  {
    id: 4,
    name: "Red Dead Redemption 2",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    genre: "Action-Adventure",
    description:
      "Experience the final days of the American Wild West through the eyes of outlaw Arthur Morgan as he struggles with loyalty, morality, and survival in a beautiful, immersive world.",
    price: 59.99,
    videoId: "eaW0tYpxyp0",
  },
  {
    id: 5,
    name: "Cyberpunk 2077",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    genre: "Action RPG",
    description:
      "In a dystopian future where technology and body modifications reign, you play as V, a mercenary in the sprawling metropolis of Night City, pursuing a one-of-a-kind implant that grants immortality.",
    price: 49.99,
    videoId: "qIcTM8WXFjk",
  },
  {
    id: 6,
    name: "God of War",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    genre: "Action-Adventure",
    description:
      "Follow Kratos and his son Atreus on an epic journey through the Norse realms as they battle gods and monsters while seeking answers and redemption.",
    price: 49.99,
    videoId: "K0u_kAWLJOA",
  },
  {
    id: 7,
    name: "Halo Infinite",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Halo_Infinite.png",
    genre: "First-Person Shooter",
    description:
      "Join Master Chief in a new adventure in the expansive world of Zeta Halo, where you battle the Banished and uncover mysteries of the Halo ring.",
    price: 59.99,
    videoId: "HZtc5-syeAk",
  },
  {
    id: 8,
    name: "Assassin's Creed Valhalla",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/a/ac/Assassin%27s_Creed_Valhalla_cover.jpg",
    genre: "Action RPG",
    description:
      "Lead your Viking clan as Eivor in an epic quest to conquer England, exploring a vast open world filled with quests, battles, and alliances.",
    price: 59.99,
    videoId: "ssrNcwxALS4",
  },
  {
    id: 9,
    name: "Horizon Zero Dawn",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/2/2d/Horizon_Zero_Dawn.jpg",
    genre: "Action RPG",
    description:
      "Explore a post-apocalyptic world dominated by mechanical creatures as Aloy, a hunter on a journey to uncover her past and save the future.",
    price: 39.99,
    videoId: "wzx96gYA8ek",
  },
  {
    id: 10,
    name: "The Last of Us Part II",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/f/fd/The_Last_of_Us_Part_II.jpg",
    genre: "Action-Adventure",
    description:
      "Experience the gripping, emotional journey of Ellie as she navigates a world ravaged by a pandemic, seeking vengeance and searching for meaning.",
    price: 59.99,
    videoId: "vhII1qlcZ4E",
  },
  // New games
  {
    id: 11,
    name: "Death Stranding",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/4/42/Death_Stranding_cover.jpg",
    genre: "Action",
    description:
      "Experience a unique adventure as Sam Porter Bridges, a delivery man tasked with uniting a fractured society in a post-apocalyptic world.",
    price: 59.99,
    videoId: "tCI396HyhbQ",
  },
  {
    id: 12,
    name: "The Elder Scrolls V: Skyrim",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/8/82/The_Elder_Scrolls_V_Skyrim_cover_art.jpg",
    genre: "Action RPG",
    description:
      "Embark on an epic quest in a vast open world as the Dragonborn, battling dragons and exploring the land of Tamriel.",
    price: 39.99,
    videoId: "4rOoJ6EgrhY",
  },
  {
    id: 13,
    name: "Overwatch",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Overwatch_cover_art.jpg",
    genre: "First-Person Shooter",
    description:
      "Join the battle with a diverse cast of heroes in this team-based shooter from Blizzard Entertainment.",
    price: 29.99,
    videoId: "FqnKB22pOC0",
  },
  {
    id: 14,
    name: "Celeste",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Celeste_cover.jpg",
    genre: "Platformer",
    description:
      "Help Madeline climb the treacherous Celeste Mountain in this challenging and emotionally impactful platformer.",
    price: 19.99,
    videoId: "ZxG9wRO2jI4",
  },
  {
    id: 15,
    name: "Stardew Valley",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/4/43/Stardew_Valley.jpg",
    genre: "Simulation",
    description:
      "Build and manage your farm in this charming and relaxing farming simulator with RPG elements.",
    price: 14.99,
    videoId: "ot7uXNQskhs",
  },
  {
    id: 16,
    name: "Dark Souls III",
    image_url:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Dark_Souls_III_cover_art.jpg",
    genre: "Action RPG",
    description:
      "Experience the dark and challenging world of Dark Souls III, battling formidable enemies and uncovering a deep and intricate lore.",
    price: 39.99,
    videoId: "_zDZYrIUgKE",
  },
];

export default Games;

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
];
