"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionStats from "./QuestionStat";
import PlatformsStats from "./PlatformStats";
import { Loader2 } from "lucide-react";
import { useTheme } from "./theme";

const Profiles = () => {
  const [userdata, setUserdata] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profileData`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUserdata(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      <div className={`h-full flex items-center justify-center ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`w-full p-6  ${
            theme === 'dark' ? 'border-white/20' : 'border-gray-300'
          }`}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <Loader2 className={`animate-spin h-12 w-12 ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`} />
              <p className={`mt-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Loading profile data...
              </p>
            </div>
          ) : userdata ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <QuestionStats platforms={userdata.platformProfiles} />
              <PlatformsStats platforms={userdata.platformProfiles} />
            </div>
          ) : (
            <div className={`text-center p-4 rounded-lg border ${
              theme === 'dark' 
                ? 'border-red-500/20 bg-red-500/10 text-red-500'
                : 'border-red-600/30 bg-red-100/50 text-red-600'
            }`}>
              Failed to load profile data
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Profiles;