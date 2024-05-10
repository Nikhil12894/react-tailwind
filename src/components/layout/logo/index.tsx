import { useSidebar } from "../../../context";

export const Logo = () => {
  const { isOpened, toggleOpened } = useSidebar();
  return (
    <div className="-mx-6 px-6 py-4">
      {isOpened && (
        <div
          className="float-right cursor-pointer text-2xl dark:text-white"
          onClick={toggleOpened}
        >
          &times;
        </div>
      )}
      <a href="#" title="home">
        <img src="images/logo.svg" className="w-32" alt="tailus logo" />
      </a>
    </div>
  );
};
