
import Categories from "./categories";
import SearchInput from "./search-input";

interface Props {
    data: any
}

// 2.39

export const SearchFilters = ({
    data
}: Props) => {
    return (
        <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
            <SearchInput />
            <Categories data={data} />
        </div>
    )
}

export default SearchFilters;