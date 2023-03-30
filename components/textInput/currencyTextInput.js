export default function CurrencyTextInput() {
    return (
        <>
            <div>
                <label class="ds_label" for="price">
                    Price per month
                </label>
                <div class="ds_currency-wrapper" data-symbol="$">
                    <input class="ds_input  ds_input--fixed-4" type="text" id="price" />
                </div>
            </div>
        </>
    )
}