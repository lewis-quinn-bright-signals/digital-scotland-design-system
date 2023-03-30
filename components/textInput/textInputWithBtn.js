import Link from "next/link"

export default function TextInputWithBtn() {
    return (
        <>
            <div>
                <label class="ds_label" for="search">
                    Search
                </label>

                <div class="ds_input__wrapper  ds_input__wrapper--has-icon">
                    <input class="ds_input  ds_input--fixed-20" type="text" id="search" />
                        <a class="ds_button">
                            <Link href="#">
                                <span class="visually-hidden">
                                    Search
                                </span>
                                <svg class="ds_icon" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#search"></use></svg>
                            </Link>
                        </a>
                </div>
            </div>
        </>
    )
}