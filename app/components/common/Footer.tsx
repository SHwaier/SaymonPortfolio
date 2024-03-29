import Socials from "../Socials";

export default function Footer() {
  return (
    <>
      <footer className="bg-violet-100 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://saymon.vercel.app" className="flex items-center">
                <img src="/assets/img/Saymon Hwaier Logo.webp" className="h-8 me-3" alt="Saymon Hwaier Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Saymon Hwaier</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/SHwaier/SaymonPortfolio" className="hover:underline">
                      Source Code
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="saymon.vercel.app" className="hover:underline">
                Saymon Hwaier
              </a>
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Socials />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
