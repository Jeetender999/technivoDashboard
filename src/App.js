import React from 'react';
import { Bell, Calendar, ChevronDown, Menu, Search, Settings, User, Plus, ChevronRight, Phone, Mail, Activity, Clock, ChevronLeft, MoreHorizontal, Heart, MessageCircle, Send, Bookmark, Layers, Pin } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Navigation */}
      <header className="bg-[#2c3e50] text-white p-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="md:hidden" />
          <Layers className="hidden md:block" />
          <span className="text-xl font-semibold">Test</span>
        </div>
        <div className="flex items-center space-x-4">
          <Search size={30} className=" text-black bg-white hidden md:block" />
          <Settings />
          <Bell />
          <Calendar />
          <div className="w-8 h-8 bg-blue-500 rounded-full">
            <img src='https://cdn-icons-png.flaticon.com/512/219/219986.png' />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-16  border-x-2 border-gray-200 text-white">
          <div className="p-2">
            <div className="w-10 h-10 bg-[#e74c3c] rounded-sm mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-white"></div>
            </div>
            <div className="space-y-4">
            <div className=" w-10 h-10 bg-[#34495e] rounded-sm flex items-center justify-center">
                <Pin size={20} className='' />
              </div>
              <div className="w-10 h-10 text-black rounded-sm flex items-center justify-center">
                <User size={20} />
              </div>
              <div className="w-10 h-10 text-black rounded-sm flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div className="w-10 h-10 text-black rounded-sm flex items-center justify-center">
                <Activity size={20} />
              </div>
              <div className="w-10 h-10 text-black rounded-sm flex items-center justify-center">
                <Clock size={20} />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Dashboard</span>
              <ChevronRight size={16} />
              <span>Lead</span>
              <ChevronRight size={16} />
              <span className='font-bold text-black'>LE-010071</span>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              {/* Lead Details */}
              <div className="flex-1 bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">LE-010071</h1>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-gray-200">
                        <User size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-200">
                        <Plus size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-200">
                        <ChevronLeft size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-gray-200">
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">New</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">Contacted</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">Nurturing</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">Qualified</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs">Unqualified</span>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-[#2c3e50] text-white rounded-md text-sm">Mark as Converted</button>
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full mr-2">
                    <img src='https://cdn-icons-png.flaticon.com/512/219/219986.png' />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Mamta Naik</h2>
                      <p className="text-sm text-gray-500">Anirudh Naidu</p>
                    </div>
                  </div>

                  <div className="flex mb-4 text-xs">
                    <span className="text-green-500 mr-4 cursor-pointer">Create Account</span>
                    <span className="text-yellow-500 cursor-pointer">Create Contact</span>
                  </div>

                  <div className="grid md:grid-cols-5 gap-4 mb-4">
                    <div className="col-span-2">
                      <h3 className="text-sm font-semibold mb-2">Basic Details</h3>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-sm font-semibold mb-2">Account Details</h3>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Lead Details</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-5 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Account</label>
                      <select className="w-full p-2 border rounded">
                        <option>Select Option</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                      <select className="w-full p-2 border rounded">
                        <option>Select Option</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Other Contacts</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-blue-400 text-sm font-medium ">Pranab Biyani</p>
                        <p className="text-xs text-gray-500">Associate VP</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700">Sales Head</p>
                      </div>
                      <div>
                        <p className="text-blue-400 text-sm font-medium">Nayan Johal</p>
                        <p className="text-xs text-gray-500">Associate VP</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700">Sales Head</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity and Upcoming & Overdue */}
              <div className="flex-1 space-y-4">
                <div className="bg-white rounded-lg shadow">
                  <div className="border-b px-4 py-2">
                    <div className="flex space-x-4">
                      <button className="text-blue-500 border-b-2 border-blue-500 pb-2">Activity</button>
                      <button className="text-gray-500">Actionables</button>
                      <button className="text-gray-500 relative">
                        Tasks
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                      </button>
                      <button className="text-gray-500">Note & File</button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded">
                        <Phone size={16} className='text-zinc-400' />
                        <span>Log a Call</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded">
                        <Mail size={16} className='text-amber-600' />
                        <span>Email</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded">
                        <Calendar size={16} className='text-zinc-400' />
                        <span>Event</span>
                      </button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Input Text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Add People</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Input Text" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                        <input type="date" className="w-full p-2 border rounded" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                        <input type="time" className="w-full p-2 border rounded" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea className="w-full p-2 border rounded" rows={3} placeholder="Input Text"></textarea>
                    </div>
                    <div className="mt-4">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                    </div>
                  </div>
                </div>

                {/* Upcoming & Overdue Section */}
                <div className="bg-white rounded-lg shadow">
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Upcoming & Overdue</h2>
                      <button className="text-blue-500 text-sm">View All</button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { icon: Phone, title: 'Arrange a Call' },
                        { icon: Mail, title: 'Follow Up Email' },
                        { icon: Phone, title: 'Arrange a Call' }
                      ].map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <item.icon className="mr-2 text-green-600" size={16} />
                            <span className="text-sm font-medium truncate font-extrabold">{item.title}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <p className="font-medium font-extrabold">Start</p>
                              <p className="text-gray-500">27/08/2024</p>
                              <p className="text-gray-500">12:00pm</p>
                            </div>
                            <div>
                              <p className="font-medium font-extrabold">End</p>
                              <p className="text-gray-500">27/08/2024</p>
                              <p className="text-gray-500">01:00pm</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage History */}
              <div className="w-full lg:w-64 bg-white rounded-lg shadow">
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-4">Stage History</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold">28/08</p>
                        <p className="text-sm text-gray-600">Team | 09:00am</p>
                        <p className="text-sm font-black">Created Jiya Gopal</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-500 mr-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold">28/08</p>
                        <p className="text-sm text-gray-600">Team | 10:00am</p>
                        <p className="text-sm font-black">Assigned to Anirudh Naidu</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 mr-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold">28/08</p>
                        <p  className="text-sm text-gray-600">Event | 12:00pm</p>
                        <p className="text-sm font-black">Arrange a Call</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-purple-500 mr-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold">28/08</p>
                        <p className="text-sm text-gray-600">Lead Update | 04:00pm</p>
                        <p className="text-sm font-black">Marked as Contacted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;