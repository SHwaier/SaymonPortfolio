function Topbar() {
  return (
    <nav className="w-full bg-slate-950 p-5 text-gray-50">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <h1 className="text-lg text-left text-heading2-bold ">Saymon Hwaier</h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4"></div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <ul className="flex justify-end">
                <li className="p-3 active">Home</li>
                <li className="p-3 ">Projects</li>
                <li className="p-3 ">About</li>
            </ul>
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
