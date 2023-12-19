export const Header = () => {
  return (
    <header className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <a
        className="text-teal-600 flex items-center justify-center gap-2"
        href="/"
      >
        <img
          className="w-12 h-12 rounded-full"
          src="./profile-pic.png"
          alt="Shubh Photo"
        />
      </a>
    </header>
  );
};
