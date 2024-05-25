import { useSidebar } from "../../../context";

export const Logo = () => {
  const { isOpened, toggleOpened } = useSidebar();
  return (
    <div className="-mx-6 px-6 py-4">
      {isOpened && (
        <div
          className="float-right cursor-pointer text-2xl"
          onClick={toggleOpened}
        >
          &times;
        </div>
      )}
      <a title="home">
        {/* <img src={logoImgUrl} className="w-32" alt={logoName} /> */}
        <img src="images/logo.svg" className="w-32" alt="tailus logo" />
      </a>
    </div>
  );
};
