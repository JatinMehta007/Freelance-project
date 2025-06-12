import { useState } from "react";
const images = import.meta.glob('../assets/*.{jpg,png,jpeg,webp}', { eager: true });

export const Gallery = () => {
  const stones = [
    { name: "Black Onyx", color: "Black", type: "Protection", sizeRange: "5-10mm", cuts: "Cabochon, Marquise", usage: "Provides protection and grounding.", image: "blackonyx.jpg" },
    { name: "Amethyst", color: "Purple", type: "Spiritual", sizeRange: "5-10mm", cuts: "Round, Oval", usage: "Calms the mind and enhances intuition.", image: "amethyst.jpg" },
    { name: "Citrine", color: "Yellow", type: "Prosperity", sizeRange: "6-12mm", cuts: "Square, Emerald", usage: "Brings prosperity and happiness.", image: "citrine.jpg" },
    { name: "Gold Sheen", color: "Gold", type: "Love", sizeRange: "4-9mm", cuts: "Heart, Pear", usage: "Promotes love and healing.", image: "goldsheen.webp" },
    { name: "Tiger's Eye", color: "Yellow", type: "Confidence", sizeRange: "6-10mm", cuts: "Cabochon, Oval", usage: "Boosts confidence and courage.", image: "tigers.jpg" },
    { name: "Malachite", color: "Green", type: "Calmness", sizeRange: "5-12mm", cuts: "Emerald, Cushion", usage: "Enhances clarity and calmness.", image: "malachite.jpg" },
    { name: "Peridot", color: "Green", type: "Health", sizeRange: "5-8mm", cuts: "Round, Marquise", usage: "Promotes good health and positivity.", image: "peridot1.jpg" },
    { name: "Rhodonite", color: "Pink", type: "Energy", sizeRange: "6-9mm", cuts: "Oval, Cushion", usage: "Improves passion and energy.", image: "rhodonite.jpg" },
    { name: "Swiss Blue Topaz", color: "Blue", type: "Success", sizeRange: "6-11mm", cuts: "Emerald, Round", usage: "Enhances wisdom and success.", image: "swissbt.jpg" },
    { name: "White Crystal", color: "White", type: "Balance", sizeRange: "5-9mm", cuts: "Cabochon, Oval", usage: "Balances emotions and intuition.", image: "crystal.webp" },
    { name: "Lapis Lazuli", color: "Blue", type: "Communication", sizeRange: "5-12mm", cuts: "Square, Oval", usage: "Improves focus and communication.", image: "lapis.jpg" },
    { name: "Pink Oyster", color: "Pink", type: "Vitality", sizeRange: "4-9mm", cuts: "Round, Cushion", usage: "Brings rejuvenation and vitality.", image: "oyster.jpeg" },
  ];

  const [selectedColor, setSelectedColor] = useState("All");

  const filteredStones = selectedColor === "All"
    ? stones
    : stones.filter(stone => stone.color === selectedColor);

  return (
    <div className="w-full px-4 py-10 max-w-7xl mx-auto text-center" id="gallery">
      <h2 className="text-3xl md:text-7xl font-black mb-2 uppercase tracking-wide">Gallery</h2>
      <p className="text-base md:text-lg mb-6 text-gray-700">Explore our exclusive collection of semi-precious stones.</p>

      {/* Filter Dropdown */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
        <label htmlFor="stone-filter" className="font-semibold text-gray-800 text-lg">View by Color :</label>
        <select
          id="stone-filter"
          onChange={(e) => setSelectedColor(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 text-base cursor-pointer bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="All">All</option>
          <option value="Black">Black</option>
          <option value="Purple">Purple</option>
          <option value="Yellow">Yellow</option>
          <option value="Gold">Gold</option>
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Pink">Pink</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredStones.map((stone, index) => (
          <div className="w-full max-w-xs h-[350px]" key={index}>
            <div className="w-full h-full [perspective:1000px] group">
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-md bg-gray-100 flex flex-col justify-between">
                  <img
                    src={images[`../assets/${stone.image}`]?.default}
                    alt={stone.name}
                    className="w-full h-4/5 object-cover"
                  />
                  <p className="text-center font-bold text-gray-800 py-2 text-sm">{stone.name}</p>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full [transform:rotateY(180deg)] backface-hidden rounded-lg overflow-hidden shadow-md bg-white p-4 flex flex-col justify-center items-center text-sm text-gray-700 gap-1 text-center">
                  <h3 className="font-bold text-base">{stone.name}</h3>
                  <p><strong>Size:</strong> {stone.sizeRange}</p>
                  <p><strong>Color:</strong> {stone.color}</p>
                  <p><strong>Cut:</strong> {stone.cuts}</p>
                  <p><strong>Use:</strong> {stone.usage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};