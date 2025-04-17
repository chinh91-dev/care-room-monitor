
import React from 'react';
import { RoomData } from '../types';

interface RoomInfoCardProps {
  roomData: RoomData | undefined;
}

const RoomInfoCard: React.FC<RoomInfoCardProps> = ({ roomData }) => {
  if (!roomData) {
    return (
      <div className="bg-care-darkGreen rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4 pb-2 border-b border-care-accentGreen">Current Information</h2>
        <p className="text-care-lightText">No data available</p>
      </div>
    );
  }

  return (
    <div className="bg-care-darkGreen rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b border-care-accentGreen">Current Information</h2>
      
      <div className="flex justify-around text-center">
        <div className="bg-care-lightGreen rounded-lg p-4 w-5/12">
          <div className="text-care-lightText text-sm">Children Over 3</div>
          <div className="text-4xl font-bold my-2">{roomData.childrenOver3}</div>
        </div>
        
        <div className="bg-care-lightGreen rounded-lg p-4 w-5/12">
          <div className="text-care-lightText text-sm">Children Under 3</div>
          <div className="text-4xl font-bold my-2">{roomData.childrenUnder3}</div>
        </div>
      </div>
      
      <div className="text-right text-care-paleGreen text-sm italic mt-4">
        Last Updated: {roomData.timestamp}
      </div>
    </div>
  );
};

export default RoomInfoCard;
