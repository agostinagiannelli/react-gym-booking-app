import AppointmentDto from "../dtos/AppointmentDto";
import IAppointment from "../interfaces/IAppointment";

let appointments: IAppointment[] = [];
let id: number = 1;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    return appointments.find((appointment) => appointment.id === id);
};

export const scheduleAppointmentService = async (userData: AppointmentDto): Promise<IAppointment> => {
    const userId = 1
    const classId = 1
    const newAppointment: IAppointment = {
        id,
        date: userData.date,
        time: userData.time,
        status: 'active',
        userId: userId,
        classId: classId,
    };
    appointments.push(newAppointment);
    id++;
    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<boolean> => {
    const appointment = appointments.find((appointment) => appointment.id === id);
    if (appointment) {
        appointment.status = 'cancelled';
        return true;
    };
    return false;
};