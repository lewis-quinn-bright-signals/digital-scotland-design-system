import Link from "next/link"

export default function InsertText() {
    return (
        <>
            <div class="ds_inset-text">
                <div class="ds_inset-text__text">
                    You may be able to 
                        <a>
                            <Link href={"#"}>
                                apply for free school meals
                            </Link> 
                        </a>
                    at the same time as you apply for the clothing grant.
                </div>
            </div>
        </>
    )
}