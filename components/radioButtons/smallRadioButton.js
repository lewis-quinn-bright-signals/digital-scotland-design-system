export default function SmallRadioButton() {
    return (
        <>
            <form>
            <fieldset>
                <legend>
                    Is a letting agency managing the property?
                </legend>

                <div class="ds_field-group">
                    <div class="ds_radio  ds_radio--small">
                        <input class="ds_radio__input" id="letting-agent-yes" name="letting-agent" type="radio" value="yes" />
                        <label class="ds_radio__label" for="letting-agent-yes">
                            Yes
                        </label>
                    </div>

                    <div class="ds_radio  ds_radio--small">
                        <input class="ds_radio__input" id="letting-agent-no" name="letting-agent" type="radio" value="no" />
                        <label class="ds_radio__label" for="letting-agent-no">
                            No
                        </label>
                    </div>
                </div>
            </fieldset>
        </form>
        </>
    )
}