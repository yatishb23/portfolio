"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeetCodeProfile = () => {
  const [userSlug] = useState("yatish_23");
  const [userdata, setUserdata] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [problem, setProblem] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [ranking,setRanking]=useState<any>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response, rankResponse] = await Promise.all([
          fetch(`/api/leetcode/getProblem?username=${userSlug}`),
          fetch(`/api/leetcode/getRanking?username=${userSlug}`)
        ]);
      
        if (!response.ok || !rankResponse.ok) {
          throw new Error("Failed to fetch data");
        }
      
        const [data, rankData] = await Promise.all([
          response.json(),
          rankResponse.json()
        ]);
      
        setRanking(Math.ceil(rankData.rating))
        
        setUserdata(data);
      
        const sum = data.numAcceptedQuestions.reduce((acc: number, curr: any) => acc + curr.count, 0);
        setProblem(sum);
        setAccuracy(data.totalQuestionBeatsPercentage || 0);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
      
    };

    fetchData();
  }, [userSlug]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="p-4 bg-gradient-to-br  from-[#0F0F0F] to-[#1A1A1A] rounded-xl border border-[#2A2A2A] shadow-2xl max-w-xs w-full"
      >
        <div className="flex items-center justify-between mb-4">
          <motion.h2
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DCDC] to-[#00B4B4] font-bold text-sm"
          >
            LEETCODE
          </motion.h2>
          
          <motion.img
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
            className="w-6 h-6  opacity-90"
          />
        </div>
  
        <div className="flex items-center justify-between mb-5 gap-4">
    
          <motion.div 
            className="relative w-28 h-28"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="fill-none stroke-[#2A2A2A]"
                strokeWidth="8"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="fill-none stroke-[#00DCDC]"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2.8 * problem} 1000`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                className="text-xl font-bold text-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {problem}
              </motion.span>
              <span className="text-[10px] text-[#707070] mt-[-2px]">/3404</span>
            </div>
          </motion.div>
  
          {/* Ranking */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-end"
          >
            <div className="text-xs text-[#707070] mb-1">Rating</div>
            <div className="text-2xl font-bold text-[#FFB800]">{ranking}</div>
          </motion.div>
        </div>
  
        <div className="space-y-3">
          {['Easy', 'Medium', 'Hard'].map((difficulty, idx) => (
            <motion.div
              key={difficulty}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="group relative"
            >
              <div className="flex justify-between text-xs mb-1">
                <span className={`
                  ${difficulty === 'Easy' ? 'text-[#00DCDC]' : ''}
                  ${difficulty === 'Medium' ? 'text-[#FFB800]' : ''}
                  ${difficulty === 'Hard' ? 'text-[#FF3B5C]' : ''}
                  font-medium
                `}>
                  {difficulty}
                </span>
                <span className="text-[#707070]">
                  {loading ? '--' : userdata?.numAcceptedQuestions[idx]?.count}
                </span>
              </div>
              <div className="h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                <motion.div
                  className={`
                    h-full rounded-full 
                    ${difficulty === 'Easy' ? 'bg-[#00DCDC]' : ''}
                    ${difficulty === 'Medium' ? 'bg-[#FFB800]' : ''}
                    ${difficulty === 'Hard' ? 'bg-[#FF3B5C]' : ''}
                  `}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: userdata ? `${(userdata.numAcceptedQuestions[idx].count / (idx === 0 ? 800 : idx === 1 ? 500 : 300)) * 100}%` : '0%'
                  }}
                  transition={{ duration: 0.8, type: 'spring' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
};

export default LeetCodeProfile;