
import { eventDetails } from '@/types';

import Link from 'next/link';
import EditIcon from './icons/editIcon';

const EventsMap = ({allEvents}:{allEvents:eventDetails[]}) => {


    return (
        <div>
        {
            allEvents.map(({ eventDate, eventTime, eventTitle, id }) => {
                return <div key={id} className="grid grid-flow-col justify-between border-2 p-4 hover:scale-90 cursor-pointer">
                    <p className="flex flex-col">
                        <span>{eventDate}</span>
                        <span>{eventTime}</span>
                    </p>
                    <p className="text-center font-extrabold text-2xl">{eventTitle}</p>
                    <Link href={`/Events/${id}`}><EditIcon /></Link>
                </div>
            })
        }
        </div>
    );
};

export default EventsMap

