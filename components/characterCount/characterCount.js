export default function CharacterCount() {
    return (
        <>
            <div class="ds_question" data-module="ds-character-count">
                <label class="ds_label" for="first-name">
                    First name
                </label>
                <input maxlength="20" class="ds_input  ds_input--fixed-10" type="text" id="first-name" />
            </div>
        </>
    )
}