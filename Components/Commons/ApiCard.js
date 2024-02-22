import React from 'react'

function ApiCard({ Featured_Apis }) {
    console.log('Featured_Apis', Featured_Apis)
    return (
        <>
            <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[0] border-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                    <img
                        className="w-10 relative rounded h-10 object-cover"
                        alt="logos"
                        src={Featured_Apis?.logoUrl}
                    />
                    <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                        <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                            {Featured_Apis?.title}
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                            <div className="relative leading-[18px]">By</div>
                            <div className="relative leading-[18px] font-medium">
                                {Featured_Apis?.subTitle}

                            </div>
                            <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                                <div className="relative leading-[140%]">99+</div>
                            </div>
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/icon--jamicons--outline--logos--circle.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-center">
                            <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                                {Featured_Apis?.description}
                                {/* Empower fitness applications with FitnessPalAPI, offering
                                features like workout tracking, nutrition information, and
                                health monitoring. */}
                            </div>
                        </div>
                    </div>
                    <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                        <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                            <img
                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/modem01.svg"
                            />
                            <div className="relative leading-[140%]">{Featured_Apis?.ms_val} ms</div>
                            <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                                <div className="relative leading-[140%]">99+</div>
                            </div>
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/icon--jamicons--outline--logos--circle.svg"
                            />
                        </div>
                        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                        <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                            <img
                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/clockrefresh.svg"
                            />
                            <div className="relative leading-[140%]">{Featured_Apis?.reloadPercent}%</div>
                            <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                                <div className="relative leading-[140%]">99+</div>
                            </div>
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/icon--jamicons--outline--logos--circle.svg"
                            />
                        </div>
                        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                        <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                            <img
                                className="w-4 relative h-4 overflow-hidden shrink-0"
                                alt=""
                                src="/piechart01.svg"
                            />
                            <div className="relative leading-[140%]">{Featured_Apis?.usePercent}%</div>
                            <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                                <div className="relative leading-[140%]">99+</div>
                            </div>
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/icon--jamicons--outline--logos--circle.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ApiCard