import LocationTablesDataTable from "./location-tables-data-table";
import { useGetTablesQuery } from "../../../features/locations/tables/tables-api-slice"
import Loader from "../../common/loader"
import Error from "@/components/common/error";

const LocationTables = (props) => {
    const {
        data: tables,
        error,
        isError,
        isLoading,
        isSuccess } = useGetTablesQuery(props.id)    

    let content;
    if (isLoading) {
        content = (
            <Loader />
        )
    } else if (isSuccess) { 
        content = (
            <LocationTablesDataTable data={tables.data} locationId={props.id} />
        )
    } else if (isError) {
        content = <Error />;
    }

    return content
}

export default LocationTables