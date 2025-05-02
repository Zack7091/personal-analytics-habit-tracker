import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const habits = [
  { name: '💧 Water', progress: 70 },
  { name: '🛏 Sleep', progress: 80 },
  { name: '📱 Screen Time', progress: 40 },
];

const habitData = [
  { name: 'Mon', Sleep: 75, Water: 60, ScreenTime: 50 },
  { name: 'Tue', Sleep: 80, Water: 70, ScreenTime: 45 },
  { name: 'Wed', Sleep: 90, Water: 65, ScreenTime: 60 },
  { name: 'Thu', Sleep: 85, Water: 80, ScreenTime: 55 },
  { name: 'Fri', Sleep: 88, Water: 75, ScreenTime: 70 },
  { name: 'Sat', Sleep: 95, Water: 80, ScreenTime: 65 },
  { name: 'Sun', Sleep: 100, Water: 85, ScreenTime: 80 },
];

export default function RiyazHabitTracker() {
  const [streak, setStreak] = useState(0);
  const [checkedIn, setCheckedIn] = useState(false);

  const increaseStreak = () => {
    if (!checkedIn) {
      setStreak(streak + 1);
      setCheckedIn(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-gray-800">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-lg fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">RiyazTrack</h1>
          <div className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-indigo-500 transition">Home</a>
            <a href="#habits" className="hover:text-indigo-500 transition">Habits</a>
            <a href="#analytics" className="hover:text-indigo-500 transition">Analytics</a>
            <a href="#streak" className="hover:text-indigo-500 transition">Streak</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-indigo-700 mb-4"
        >
          Master Your Habits
        </motion.h2>
        <p className="text-gray-600 text-lg">Track your progress, stay consistent, and grow stronger each day.</p>
      </section>

      {/* Habits Section */}
      <section id="habits" className="py-16 max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Daily Habits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {habits.map((habit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">{habit.name}</span>
                <span className="text-sm text-gray-500">{habit.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="h-3 rounded-full bg-indigo-500"
                  style={{ width: `${habit.progress}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-16 bg-indigo-50">
        <h3 className="text-3xl font-bold mb-10 text-center text-indigo-600">Weekly Progress</h3>
        <div className="max-w-5xl mx-auto px-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={habitData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sleep" stroke="#6366f1" strokeWidth={3} />
              <Line type="monotone" dataKey="Water" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="ScreenTime" stroke="#f97316" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Streak Section */}
      <section id="streak" className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-6 text-indigo-600">Current Streak</h3>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-green-500 text-white text-4xl font-bold p-8 rounded-xl shadow-lg"
        >
          {streak} Days
        </motion.div>
        <button
          onClick={increaseStreak}
          disabled={checkedIn}
          className={`mt-6 px-6 py-2 rounded-xl text-white text-lg transition-all ${
            checkedIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {checkedIn ? '✔ Checked In' : 'Check In for Today'}
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center text-sm text-gray-500 py-6 mt-12 shadow-inner">
        © {new Date().getFullYear()} Built with ❤️ by Riyaz. All rights reserved.
      </footer>
    </main>
  );
}
