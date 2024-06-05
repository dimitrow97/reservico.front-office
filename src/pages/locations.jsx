import LocationsDataTable from "../components/locations/locations-data-table"
import Loader from "../components/common/loader"
import { useGetLocationsQuery } from "../features/locations/locations-api-slice"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Error from "@/components/common/error"

const Locations = () => {
    const {
        data: locations,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetLocationsQuery()

    let content;
    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        content = (
            <Card className="w-full h-full">
                <CardHeader>
                    <CardTitle>Locations</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <LocationsDataTable data={locations.data} />
                </CardContent>
            </Card>
        )
    } else if (isError) {
        content = <Error />;
    }

    return content
}

export default Locations