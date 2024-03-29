import Link from "next/link"

export default function NotificationBanner() {
    return (
        <>
            <div class="ds_notification  ds_reversed" data-module="ds-notification">
                <div class="ds_wrapper">
                    <div class="ds_notification__content  ds_notification__content--has-close">
                        <h2 class="visually-hidden">
                            Information
                        </h2>

                        <div class="ds_notification__text">
                            <p>
                                We need to tell you about
                                <a>
                                    <Link href={"#"}>
                                        something
                                    </Link>
                                </a>
                            </p>
                        </div>

                        <button class="ds_notification__close  js-close-notification" type="button">
                            <span class="visually-hidden">
                                Close this notification
                            </span>
                            <svg class="ds_icon  ds_icon--fill" aria-hidden="true" role="img"><use href="/assets/images/icons/icons.stack.svg#close"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}