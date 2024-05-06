import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItem = () => {
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone)
            return;
        const controller = new AbortController();
        const signal = controller.signal;
        dispatch(fetchStatusAction.markfetchingStarted());
        fetch('http://localhost:8080/items', { signal })
            .then(res => res.json())
            .then((data) => {
                dispatch(fetchStatusAction.togglefetchDone())
                dispatch(fetchStatusAction.markfetchingFinished())
                dispatch(itemSliceAction.addInitialItems(data.items[0]))
            });

        return () => {
            controller.abort(); // if we change page in between network call we abord that call
            console.log("Cleaning Log Effect");
        }
    }, [fetchStatus]);

    return <>
        {/* <div>
            fetchDone : {fetchStatus.fetchDone}
            currently Fetching : {fetchStatus.currentlyFetching}
        </div> */}
    </>
}


export default FetchItem;