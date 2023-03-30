import Tag from "./tag"

export default function PageHeader() {
    return (
        <>
            <div class="ds_page-header ds_!_padding-top--6">
                <span class="ds_page-header__label  ds_content-label">
                    <Tag/>
                    Guide
                </span>
                <h1 class="ds_page-header__title">
                    Apply for or renew a disabled parking permit
                </h1>

                <dl class="ds_page-header__metadata  ds_metadata">
                    <div class="ds_metadata__item">
                        <dt class="ds_metadata__key">
                            Last updated
                        </dt>
                        <dd class="ds_metadata__value">
                            8 November 2016
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    )
}