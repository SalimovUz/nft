import Hero from "../components/home/Hero";
import Trending from "../components/home/TrendingCollection";
import TopCreator from "../components/home/TopCreators"
import Category from "../components/home/BrowseCategory"

export default function Home() {
  return (
    <div className="px-12 xl:px-32 md:px-20">
      <div className="flex flex-col gap-36">
        <Hero />
        <Trending />
        <TopCreator />
        <Category />
      </div>
    </div>
  );
}
