"use client";

import { motion } from "framer-motion";

export default function StatusIcon({
  Icon,
  color,
}: {
  Icon: any;
  color: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -20, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 ${color}`}
    >
      <Icon className="h-10 w-10" />
    </motion.div>
  );
}
