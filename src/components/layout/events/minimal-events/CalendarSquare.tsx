export default function CalendarSquare({ fromDate, toDate } :
                                        { fromDate: Date, toDate: Date}) {

    const generateDateLabels = () => {
        let monthLabel: string = "";
        let dayLabel: string = "";

        // from date and to date are on the same day
        if (fromDate.getMonth() === toDate.getMonth() &&
            fromDate.getDate() === toDate.getDate()) {

            monthLabel = fromDate.toLocaleDateString("en-US", { month: 'short' });
            dayLabel = `${fromDate.getDate().toString()}`;
        }
        // from date and to date are on different days of the same month
        else if (fromDate.getMonth() === toDate.getMonth() &&
                 fromDate.getDate() != toDate.getDate()) {

            monthLabel = fromDate.toLocaleDateString("en-US", { month: 'short' });
            dayLabel = `${fromDate.getDate()}-${toDate.getDate()}`
        }
        // from date and to date are on different days of different months
        else {
            monthLabel = `${fromDate.toLocaleDateString("en-US", { month: 'short' })}/
                          ${toDate.toLocaleDateString("en-US", { month: 'short' })}`;
            dayLabel = `${fromDate.getDate()}-${toDate.getDate()}`
        }

        return (
            <>
                <p>${monthLabel}</p>
                <p>${dayLabel}</p>
            </>
        );

    }


    return (
        <div>
            {

            }
        </div>
    )
}