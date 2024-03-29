export default function DatePicker() {
    return (
        <>
            <div data-module="ds-datepicker" class="ds_datepicker">
                <label class="ds_label" for="start-date">
                    Start date
                </label>

                <p class="ds_hint-text">
                    Use dd/mm/yyyy format. For example, 31/01/2023.
                </p>

                <div class="ds_input__wrapper">
                    <input id="start-date" data-maxdate="19/09/2020" data-mindate="09/08/2020" type="text" class="ds_input  ds_input--fixed-10" />
                </div>
            </div>
        </>
    )
}