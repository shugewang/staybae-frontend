import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import InfoCard from 'src/components/cards/InfoCard';
import Map from 'src/components/map/Map';
import { useSearchResults } from 'src/hooks/useSearchResults';
import PropertyType from 'src/interfaces/Property';

const Search = () => {
  const location = useLocation();

  const {
    location: searchLocation,
    startDate,
    endDate,
    region,
    numberOfGuests,
  } = location.state;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const fromDate = format(new Date(startDate), 'yyyy/MM/dd');
  const toDate = format(new Date(endDate), 'yyyy/MM/dd');

  const { data } = useSearchResults(fromDate, toDate, searchLocation, region);
  const searchResults: PropertyType[] = data?.data;

  return (
    <>
      <div className="flex pt-10">
        <section className="flex-grow px-6">
          <p className="text-xs">
            {searchResults?.length || 0} Stays - {range} for {numberOfGuests}{' '}
            guest(s)
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {searchLocation ?? region}
          </h1>
          <div className="relative w-full h-96">
            <Map
              searchLocation={searchLocation}
              region={region}
              searchResults={searchResults}
            />
          </div>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {!searchResults || searchResults?.length === 0 ? (
              <span className="text-md">
                There are no results matching your query
              </span>
            ) : (
              searchResults.map((searchResult, sId) => (
                <InfoCard property={searchResult} key={sId} />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;
