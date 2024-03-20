'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Page() {


    // States
    const [language, SetLanguage] = useState('C++');


    return (
        <div className=" mx-4 my-4">
            <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                        <Label>Preferred code language</Label>
                        <div className="space-y-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Java</SelectItem>
                                    <SelectItem value="dark">Python</SelectItem>
                                    <SelectItem value="system">C</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="stdin">Standard input (stdin)</Label>
                    <Textarea className="min-h-[100px]" id="stdin" placeholder="Enter the standard input for your code" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="source-code">Source code</Label>
                    <Textarea className="min-h-[200px]" id="source-code" placeholder="Enter your code" />
                </div>
            </div>
            <Button className="mx-auto flex md:static">Submit code</Button>
        </div>
    );
}

