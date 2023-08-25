import { UseQueryOptions, useQuery } from "react-query";
import Axios from "src/api/Axios";

const fetchProperty = (props: UseQueryOptions) => {
    const propertyId = props.queryKey ? props.queryKey[1] : 0;
    
    return Axios.get(`/properties/${propertyId}`);
}

export const useFetchProperty = (id: string, onSuccess: any) => {
    return useQuery([`property-detail`, id], fetchProperty, {
        onSuccess
    });
}
