
import { Employee, Room, RoomData, EnteredEmployee, StatusType } from '../types';
import { formatDate } from '../utils/roomUtils';

// Mock employees
export const employees: Employee[] = [
  { id: '1', name: 'Jane Smith' },
  { id: '2', name: 'John Doe' },
  { id: '3', name: 'Emily Johnson' },
  { id: '4', name: 'Michael Brown' },
  { id: '5', name: 'Sarah Williams' },
];

// Mock rooms
export const rooms: Room[] = [
  { id: '1', name: 'Toddler', macAddress: '00:11:22:33:44:55' },
  { id: '2', name: 'Preschool', macAddress: '66:77:88:99:AA:BB' },
  { id: '3', name: 'Infant', macAddress: 'CC:DD:EE:FF:00:11' },
];

// Mock room data
export const roomData: RoomData[] = [
  {
    id: '1',
    roomId: '1',
    roomName: 'Toddler',
    childrenOver3: 12,
    childrenUnder3: 8,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 30)), // 30 minutes ago
  },
  {
    id: '2',
    roomId: '2',
    roomName: 'Preschool',
    childrenOver3: 15,
    childrenUnder3: 0,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 15)), // 15 minutes ago
  },
  {
    id: '3',
    roomId: '3',
    roomName: 'Infant',
    childrenOver3: 0,
    childrenUnder3: 12,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 5)), // 5 minutes ago
  },
];

// Mock entered employees
export const enteredEmployees: EnteredEmployee[] = [
  {
    id: '1',
    employeeId: '1',
    employeeName: 'Jane Smith',
    roomId: '1',
    status: StatusType.ENTER,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 120)), // 2 hours ago
  },
  {
    id: '2',
    employeeId: '2',
    employeeName: 'John Doe',
    roomId: '1',
    status: StatusType.ENTER,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 90)), // 1.5 hours ago
  },
  {
    id: '3',
    employeeId: '3',
    employeeName: 'Emily Johnson',
    roomId: '2',
    status: StatusType.ENTER,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 60)), // 1 hour ago
  },
  {
    id: '4',
    employeeId: '4',
    employeeName: 'Michael Brown',
    roomId: '3',
    status: StatusType.ENTER,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 45)), // 45 minutes ago
  },
  {
    id: '5',
    employeeId: '5',
    employeeName: 'Sarah Williams',
    roomId: '3',
    status: StatusType.ENTER,
    timestamp: formatDate(new Date(Date.now() - 1000 * 60 * 30)), // 30 minutes ago
  },
];

// Helper function to get the latest room data
export const getLatestRoomData = (roomId: string): RoomData | undefined => {
  return roomData.find(data => data.roomId === roomId);
};

// Helper function to get employees in a room
export const getEmployeesInRoom = (roomId: string): EnteredEmployee[] => {
  return enteredEmployees.filter(
    emp => emp.roomId === roomId && emp.status === StatusType.ENTER
  );
};

// Helper function to get a room by ID
export const getRoomById = (roomId: string): Room | undefined => {
  return rooms.find(room => room.id === roomId);
};

// Helper function to get an employee by ID
export const getEmployeeById = (employeeId: string): Employee | undefined => {
  return employees.find(emp => emp.id === employeeId);
};
