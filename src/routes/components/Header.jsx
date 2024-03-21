export const Header = () => {
  return (

    <header className="py-4">
      <div className="w-full flex justify-between px-5">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">FocusOn</p>
          <img className="w-8" src="/src/assets/focuson.svg" alt="FocusOn" />
        </div>

        <div className="grid place-items-center">
          <img className="w-6" src="/src/assets/moon.svg" alt="dark" />
        </div>

      </div>
    </header>

  )
}
