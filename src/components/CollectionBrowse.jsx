import oilCleanser from "../assets/oil-cleanser.png";
import handCream from "../assets/hand-cream.png";
import tonerSkin from "../assets/toner-skin.png";
import faceMask from "../assets/face-mask.png";

const CollectionBrowse = () => {
  const collections = [
    {
      id: 1,
      name: "Oil Cleansers",
      items: 5,
      bg: "bg-green-100",
      image: oilCleanser,
    },
    {
      id: 2,
      name: "Hand Cream",
      items: 5,
      bg: "bg-gray-100",
      image: handCream,
    },
    {
      id: 3,
      name: "Toners Skin",
      items: 5,
      bg: "bg-blue-100",
      image: tonerSkin,
    },
    {
      id: 4,
      name: "Face Mask",
      items: 5,
      bg: "bg-purple-100",
      image: faceMask,
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto py-10 px-[5%] sm:px-10 lg:px-[15%]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        Browse by Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div
              className={`overflow-hidden flex items-center justify-center ${item.bg} w-[90%] h-[270px] rounded-[200px]`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-medium">{item.name}</p>
            <p className="text-sm text-orange-600">{item.items} Items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionBrowse;
