export const Navbar=()=>{
    return (
        <div className="flex justify-between  fixed  bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800 text-white px-10 top-0 left-0 right-0 z-50 h-16 items-center text-lg font-mono tracking-wide font-medium ">
          <div className="text-3xl font-playfair font-bold text-center">
            Gemstone Boutique
          </div>
          <div className="flex gap-20 text-xl  ">
            <a href="#Home" className="hover:text-orange-900">Home</a>
            <a href="#About" className="hover:text-orange-900">About</a>
            <a href="#gallery" className="hover:text-orange-900">Gallery</a>
            <a href="#contact" className="hover:text-orange-900">Contact us</a>
        </div>
      </div>
    )
}