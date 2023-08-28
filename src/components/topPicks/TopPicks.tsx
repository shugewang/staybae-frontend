import Skeleton from "../skeleton/Skeleton";
import PropertyType from "src/interfaces/Property";
import MediumCard from "../cards/MediumCard";
import { useFetchTopPicks } from "src/hooks/useFetchTopPicks";

const TopPicks = () => {
  const { isLoading, data } = useFetchTopPicks();

  if (isLoading) return <Skeleton />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4">
      {!isLoading &&
        data?.data.map((topPickProperty: PropertyType, tpId: number) => (
          <MediumCard key={`top-pick-${tpId}`} property={topPickProperty} />
        ))}
    </div>
  );
};

export default TopPicks;
