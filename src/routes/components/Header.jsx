export const Header = () => {
  return (

    <>
      <div className="w-full flex justify-between px-5">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">FocusOn</p>
          <img className="w-8" src="/src/assets/focuson.svg" alt="FocusOn" />
        </div>

        <div className="grid place-items-center">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>

      </div>
    </>

  )
}
