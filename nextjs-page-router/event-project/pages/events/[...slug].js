import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import {Fragment} from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return (
            <p className="center">Loading...</p>
        )
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {

        return <Fragment>
            <ErrorAlert>
                <p>올바르지 않은 검색 조건입니다.</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    if(!filteredEvents || filteredEvents.length === 0) {
        return <Fragment>
            <ErrorAlert>
                <p>No Event Found for the chosen filter</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </Fragment>

    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <div>
            <ResultsTitle DATE={date}/>
            <EventList items = {filteredEvents} />
        </div>
    )
}

export default FilteredEventPage;