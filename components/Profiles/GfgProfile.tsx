// "use client";

// import { useEffect, useState } from "react";


// const GfgProfile = () => {
//   const [userSlug, setUserSlug] = useState("yatishbf02m"); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [problem, setProblem] = useState<number>(0);

//   useEffect(() => {
//     const url = 'https://practiceapi.geeksforgeeks.org/api/v1/user/problems/submissions/';
    
//     const body = {
//       // Replace with the actual body parameters required by the API
//       key1: 'value1',
//       key2: 'value2',
//     };

//     axios.post(url, body)
//       .then(response => {
//         setResponseData(response.data);
//         console.log('Response:', response.data);
//       })
//       .catch(err => {
//         setError(err.message);
//         console.error('Error:', err);
//       });
//   }, []); 

//   if (loading) return <p className="text-gray-300">Loading...</p>;
//   if (error) return <p className="text-red-400">{error}</p>;

//   return (
//     <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg flex flex-col items-center w-80 border border-gray-700">
//       <img 
//         src="https://upload.wikimedia.org/wikipedia/commons/8/8c/GeeksforGeeks.svg" 
//         alt="GeeksforGeeks Logo" 
//         className="w-16 mb-4"
//       />
//       <h2 className="text-xl font-bold">GFG User Profile</h2>
      
//       <p className="mt-2 text-lg text-yellow-400">
//         <strong>Total Problems Solved: {problem}</strong>
//       </p>
//     </div>
//   );
// };

// export default GfgProfile;
