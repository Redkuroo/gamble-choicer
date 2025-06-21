import LuckyCharm from '@/components/LuckyCharm';
import Link from "next/link";

export default function MyAccount() {
  return (
    <>
      <LuckyCharm />
      <div className="min-h-screen bg-[#18180f] flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-light text-white mb-2">My <span className="italic font-semibold">Account</span></h1>
        <p className="text-gray-300 mb-10 text-lg">Manage your profile and preferences</p>
        
        <div className="w-full max-w-4xl">
          {/* Profile Section */}
          <div className="bg-[#23232a] border border-gray-700 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#1a1a1f] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#1a1a1f] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-[#1a1a1f] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full bg-[#1a1a1f] border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-[#23232a] border border-gray-700 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Email Notifications</h3>
                  <p className="text-gray-400 text-sm">Receive updates about your account</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">SMS Notifications</h3>
                  <p className="text-gray-400 text-sm">Receive text message updates</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm">Add an extra layer of security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
              Save Changes
            </button>
            <Link href="/" className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 