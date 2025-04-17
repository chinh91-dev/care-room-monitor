
import React from 'react';
import { Link } from 'react-router-dom';
import { rooms, getLatestRoomData, getEmployeesInRoom } from '../data/mockData';

const RoomsList: React.FC = () => {
  return (
    <div className="min-h-screen bg-care-green text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-care-darkGreen rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Childcare Room Monitors</h1>
          <p className="text-center mb-6 text-care-lightText">
            Select a room to view and update its information.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {rooms.map((room) => {
              const roomData = getLatestRoomData(room.id);
              const staff = getEmployeesInRoom(room.id);
              
              return (
                <Link 
                  key={room.id} 
                  to={`/rooms/${room.id}`}
                  className="bg-care-lightGreen hover:bg-care-brightGreen transition-colors p-4 rounded-lg"
                >
                  <h2 className="text-xl font-bold mb-2">{room.name} Room</h2>
                  <div className="flex gap-2 mb-2">
                    <div className="bg-care-darkGreen px-2 py-1 rounded text-sm">
                      Staff: {staff.length}
                    </div>
                    <div className="bg-care-darkGreen px-2 py-1 rounded text-sm">
                      Children: {roomData ? roomData.childrenOver3 + roomData.childrenUnder3 : 0}
                    </div>
                  </div>
                  <div className="text-sm text-care-paleGreen">
                    Last updated: {roomData?.timestamp || 'Never'}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="bg-care-darkGreen rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">About the Room Monitor</h2>
          <p className="mb-4 text-care-lightText">
            This application helps track children and staff in childcare rooms while ensuring 
            proper educator-to-child ratios are maintained.
          </p>
          <div className="bg-care-lightGreen p-4 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Educator-to-Child Ratios</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Children under 3 years: 1 educator for every 4 children (1:4)</li>
              <li>Children 3 years and older: 1 educator for every 15 children (1:15)</li>
            </ul>
          </div>
          <p className="text-sm text-care-paleGreen">
            Note: Room monitors can only be accessed from devices physically located in the 
            corresponding room.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomsList;
