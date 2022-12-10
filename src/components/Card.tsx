import avatar from "../assets/images/avatar.png";
import { IContact } from "../pages/FriendsList";

interface ICardProps {
  contact: IContact;
}

export function Card({ contact }: ICardProps) {
  return (
    <>
      <div className="my-1 px-1 py-5 w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={avatar}
            alt="user"
          />
          <h5 className="mb-1 text-xl font-medium text-orange-600">
            {contact.name}
          </h5>
          <span className="text-sm text-gray-500">
            {contact.email}
          </span>
          <span className="text-sm text-gray-500">
            {contact.website}
          </span>
          <span className="text-sm text-gray-500">
            {contact.company}
          </span>
          <span className="text-sm text-gray-500">
            {contact.phone}
          </span>
        </div>
      </div>
    </>
  );
}
