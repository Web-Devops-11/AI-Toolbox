 import TrendingSection from "../components/trendingSection";
 const trending = [
    {
      name: "ChatGPT",
      category: "Writing Tools",
      image: "/images/chatgpt.png",
      description: "AI conversational assistant for writing.",
    },
    {
      name: "MidJourney",
      category: "Image Generation",
      image: "/images/midjourney.jpg",
      description: "Creates stunning AI art from prompts.",
    },
  ];
export default function Trending() {
  return (<>
    {/* <div>
      <h1 className="text-3xl font-bold mb-4">Trending</h1>
      <p>Welcome to the Trending page. Here you can find the most popular and trending AI tools and topics.</p>
    </div> */}
    <TrendingSection items={trending} />
    </>
  );
}