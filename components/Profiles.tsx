"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionStats from "./QuestionStat";
import PlatformsStats from "./PlatformStats";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Mail, Linkedin, Twitter, Globe, FileText } from 'lucide-react'

const Profiles = () => {
  const [userSlug] = useState("yatish_23");
  const [userdata, setUserdata] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Platform-specific states
  const [leetcode, setLC] = useState(null);
  const [codechef, setCC] = useState(null);
  const [codeforces, setCf] = useState(null);
  const [gfg, setGfg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profileData`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUserdata(data)
        console.log(data);
        
        setLC(data.platformProfiles[0]);
        setCC(data.platformProfiles[2]);
        setCf(data.platformProfiles[4]);
        setGfg(data.platformProfiles[1]);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Removed unnecessary dependency: userSlug

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-[#0A0A0F] text-white p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Profile Header */}
          {/* <div className="mb-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-24 h-24 border-2 border-white/10">
                  <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nvTtyqA2aAZMlmllzpyk9rdA4UG9J0.png" />
                  <AvatarFallback>YB</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">Yatish Badgujar</h1>
                  <p className="text-cyan-400">@scrapper</p>
                </div>
              </div>
              <Button variant="secondary" className="gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Verify Profile
              </Button>
            </div>
            
            {/* Social Links */}
            {/* <div className="flex gap-4">
              <Button variant="ghost" size="icon"><Mail className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon"><Linkedin className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon"><Twitter className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon"><Globe className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon"><FileText className="w-4 h-4" /></Button>
            </div>

            {/* Verification Banner */}
            {/* <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Get verified and unlock your exclusive Codolio card with a stamp of authenticity!</span>
              </div>
              <Button variant="secondary">Verify Profile →</Button>
            </div>
          </div>  */}
          {/* *} */}

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            </div>
          ) : userdata ? (
            <div className="grid md:grid-cols-2 gap-6">
              <QuestionStats platforms={userdata.platformProfiles} />
              <PlatformsStats platforms={userdata.platformProfiles} />
            </div>
          ) : (
            <div className="text-red-500 text-center p-4 rounded-lg border border-red-500/20 bg-red-500/10">
              Failed to load profile data
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Profiles;
