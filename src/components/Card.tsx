import avatar from "../assets/images/avatar.png";

export function Card() {
  return (
    <>
      <div className="my-1 px-1 py-5 w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={avatar}
            alt="user"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-600">
              Add friend
            </button>
            <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
