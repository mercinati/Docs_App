import React from "react"
import { motion } from "framer-motion"
import { Plus, Search, Bell, User } from "lucide-react"

/**
 * @param {{ onNewClick: () => void }} props
 */

export default function Navigation({ onNewClick }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#2A2A2A] border-b border-gray-700 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">karan_Docs</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 bg-[#1E1E1E] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:border-transparent"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* New Button */}
          <motion.button
            onClick={onNewClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00C853] hover:bg-[#00A843] text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-4 h-4" />
            <span>New</span>
          </motion.button>

          {/* Notification Button */}
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[#1E1E1E]">
            <Bell className="w-5 h-5" />
          </button>

          {/* Profile Button */}
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[#1E1E1E]">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
