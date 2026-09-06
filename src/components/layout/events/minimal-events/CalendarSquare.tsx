export default function CalendarSquare({ fromDate, toDate } :
                                        { fromDate: Date, toDate: Date}) {

    const generateDateLabels = () => {

        let line1: string = "";
        let line2: string = "";

        // if from date and to date are on the same day then
        // line 1 will represent the month and line 2 will represent the day
        if (fromDate.getMonth() === toDate.getMonth() &&
            fromDate.getDate() === toDate.getDate()) {

            line1 = fromDate.toLocaleDateString("en-US", { month: 'short' });
            line2 = `${fromDate.getDate().toString()}`;
        }
        // if from date and to date are on different days of the same month then
        // line 1 will represent the month and line 2 will represent the days
        else if (fromDate.getMonth() === toDate.getMonth() &&
                 fromDate.getDate() != toDate.getDate()) {

            line1 = fromDate.toLocaleDateString("en-US", { month: 'short' });
            line2 = `${fromDate.getDate()}-${toDate.getDate()}`
        }
        // if from date and to date are on different days of different months then
        // line 1 will represent from date and line 2 will represent to date
        else {

            line1 = `${fromDate.toLocaleDateString("en-US", { month: 'short' })} ${fromDate.getDate()}`
            line2 = `${toDate.toLocaleDateString("en-US", { month: 'short' })} ${toDate.getDate()}`
        }

        return (
            <>
                <p>{line1}</p>
                <p>{line2}</p>
            </>
        );

    }

    return (
        <div className="flex flex-col 
                        text-(--background) 
                        bg-(--tertiary) 
                        items-center 
                        justify-center 
                        rounded-md
                        min-w-20 min-h-20
                        xs:w-22 xs:h-22
                        xs:mr-3">
            { generateDateLabels() }
        </div>
    )
}