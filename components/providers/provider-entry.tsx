"use client";

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import {getProvider} from "@/components/providers/provider-select";
import {Button} from "@/components/ui/button";
import {Pencil} from "lucide-react";
import {useEffect, useRef, useState} from "react";

function ProviderText({ text } : { text: string }) {
    const [isReadonly, setReadonly] = useState(true);
    const inpRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(!isReadonly)
            inpRef.current?.focus();
    }, [isReadonly]);

    return (
        <div className="flex flex-1 flex-row items-center gap-2">
            <Input ref={inpRef}
                   readOnly={isReadonly}
                   defaultValue={text}
                   autoComplete="off"
                   data-protonpass-ignore="true"
                   data-1p-ignore
                   data-lpignore="true"
                   data-bwignore
                   className="dark:bg-transparent read-only:caret-transparent read-only:cursor-default read-only:focus-visible:ring-0 read-only:focus-visible:border-transparent border-0 px-0 text-foreground md:text-base"/>

            <Button onClick={() => setReadonly((r) => !r)} className="rounded-lg"><Pencil/></Button>
        </div>
    );
}

export default function ProviderEntry(data: {
    name: string; provider: string; endpoint?: string; model?: string[]
}) {
    const provider = getProvider(data.provider);

    return (
        <div className="flex flex-col gap-2 bg-accent rounded-lg p-4 w-full">
            <div className="flex flex-row gap-2">
                {provider && <Image src={provider.icon} alt={provider.alt} width={provider.width} height={provider.height} className={provider.iconClass}/> }
                <ProviderText text={data.name}/>
            </div>

            { data.endpoint &&
                <div className="flex flex-row gap-2">
                    <Label className="md:text-base">Endpoint: </Label>
                    <ProviderText text={data.endpoint}/>
                </div>
            }
        </div>
    );
}