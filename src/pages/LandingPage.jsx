import { ColourfulText } from "../ui/colorful";
import { DraggableCardBody } from "../ui/dragable";

export const Landing=()=>{

const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-1 left-[0%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-90 left-[0%] rotate-[-20deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-5 right-[0%] rotate-[8deg]",
    },{
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-90 right-[0%] rotate-[30deg]",
    },
  ]

    return (
        <><div className="relative  font-black">
  {/* Overlayed Text */}
  <div className="absolute  text-center w-[100%] top-[20%] left-1/2 z-30 -translate-x-1/2 text-6xl md:text-8xl">
    <p>Welcome to</p>
    <ColourfulText text="Gemstone Boutique" />
    <p className="text-2xl mx-auto w-[50%] mt-5">Handcrafted gemstones tailored to perfection in all shapes, sizes, and astrological preferences.Whether you're looking for custom-cut gemstones or stones based on astrological needs, we bring your vision to life with unmatched craftsmanship.</p>
  <a href="" className="text-black text-xl border p-2 rounded-2xl hover:bg-zinc-300">
    Contact for custom order
  </a>
  </div>


  {/* Draggable Images */}
  <div className="relative flex min-h-screen w-full items-center justify-center overflow-clip z-10">
    {items.map((item) => (
      <DraggableCardBody key={item.title} className={item.className}>
        <img
          src={item.image}
          alt={item.title}
          className="pointer-events-none relative z-10 h-80 w-80 object-cover"
        />
        <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
          {item.title}
        </h3>
      </DraggableCardBody>
    ))}
  </div>
</div>
    
        
        </>
    )
}