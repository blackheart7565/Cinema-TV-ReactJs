//~~
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MediaDetailsTop from "../Details/MediaDetailsTop/MediaDetailsTop";
import TabBar from "../UI/TabBar/TabBar";

// ==========>|<==========//

export const MLink = motion(Link);

export const MDiv = motion.div;

export const MTabBar = motion(TabBar);

export const MMediaDetailsTop = motion(MediaDetailsTop);