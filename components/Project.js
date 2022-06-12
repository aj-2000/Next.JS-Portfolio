export default function Project(props) {
  const { category, title, image, link } = props.project;
  return (
    <>
      <div className="">
        <div className="rounded bg-white overflow-hidden shadow-lg">
          <div className="relative">
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="hover:hidden transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-dark opacity-25"></div>
            <div className="absolute bottom-0 left-0 bg-pink px-4 py-2 text-white text-sm hover:bg-white hover:text-pink transition duration-500 ease-in-out">
              {category}
            </div>
            <div className="text-sm absolute top-0 right-0 bg-pink px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-pink transition duration-500 ease-in-out">
              <span className="font-bold">27</span>
              <small>March</small>
            </div>
          </div>
          <div className="px-6 py-4">
            <a
              href={link}
              className="text-dark font-semibold text-lg inline-block hover:text-pink transition duration-500 ease-in-out"
            >
              {title}
            </a>
            <p className="text-gray-dark text-sm">The city that never sleeps</p>
          </div>
        </div>
      </div>
    </>
  );
}
