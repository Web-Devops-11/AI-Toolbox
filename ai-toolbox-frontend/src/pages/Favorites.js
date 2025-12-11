import FavoritesSection from "../components/favouriteSection";
  const favorites = [
    {
      name: "Jasper AI",
      category: "Marketing",
      image: "/images/jasper.png",
      description: "Copywriting assistant for creators.",
    },
  ];
  
  export default function Favorites() {
    return (<>
      {/* <div>
        <h1 className="text-3xl font-bold mb-4">Favorites</h1>
        <p>Welcome to the Favorites page. Here you can find your favorite AI tools and resources.</p>
      </div> */}
      <FavoritesSection items = {favorites} />
      </>
    );
  }